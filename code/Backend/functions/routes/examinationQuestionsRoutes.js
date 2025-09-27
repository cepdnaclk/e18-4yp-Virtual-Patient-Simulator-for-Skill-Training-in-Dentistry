const express = require("express");
const router = express.Router();
const fileParser = require("express-multipart-file-parser");
const bodyParser = require("body-parser");
const { Readable } = require("stream");
const moment = require("moment");

const COLLECTION_NAME = "dentalComplaintCases";

const { admin, db, bucket } = require("../config/db");

// Middleware and route for creating an examination question
router.post(
  "/createExaminationQuestion",
  fileParser,
  bodyParser.urlencoded({ extended: true }),
  async (req, res) => {
    try {
      // Check if required fields are present
      const {
        mainTypeName,
        complaintTypeName,
        caseId,
        sectionName,
        questionType,
        question,
        answerChoices,
      } = req.body;

      if (!mainTypeName || !complaintTypeName || !caseId || !sectionName) {
        return res.status(400).json({ error: "Missing required fields." });
      }

      // Parse answer choices
      const answerChoicesInJson = JSON.parse(answerChoices);

      // Determine the type of question
      let caseQuestionType = null;
      if (questionType === "single") {
        caseQuestionType =
          req.files.length === 0
            ? "multipleChoiceType"
            : req.files.length === 1
            ? "multipleChoiceTypeWithQuestionImage"
            : "multipleChoiceTypeWithImages";
      } else if (questionType === "multiple") {
        caseQuestionType =
          req.files.length === 0
            ? "multipleAnswerType"
            : req.files.length === 1
            ? "multipleAnswerTypeWithQuestionImage"
            : "multipleAnswerTypeWithImages";
      }

      // Reference to Firestore collection
      const complaintTypeRef = db
        .collection(COLLECTION_NAME)
        .doc(mainTypeName)
        .collection(complaintTypeName)
        .doc(caseId)
        .collection(sectionName);

      let newQuestionRef = null;
      let choices = [];
      let questionImageUrl = null;
      let i = 0;

      // Function to upload files to Firebase Storage
      const uploadFile = async (file) => {
        const fileStream = Readable.from(file.buffer);
        const currentDateTime = moment().format("YYYYMMDD_HHmmss");
        const fileUpload = bucket.file(
          `Images/${currentDateTime}_${file.originalname}`
        );
        const writeStream = fileUpload.createWriteStream({
          metadata: { contentType: file.mimetype },
        });

        await new Promise((resolve, reject) => {
          fileStream
            .pipe(writeStream)
            .on("error", reject)
            .on("finish", resolve);
        });

        const downloadURL = await fileUpload.getSignedUrl({
          action: "read",
          expires: "12-31-9999",
        });
        return downloadURL[0];
      };

      // Process files and construct choices
      if (
        [
          "multipleChoiceTypeWithImages",
          "multipleAnswerTypeWithImages",
        ].includes(caseQuestionType)
      ) {
        for (const file of req.files) {
          const downloadURL = await uploadFile(file);

          if (file.fieldname === "QuestionImage") {
            questionImageUrl = downloadURL;
          } else {
            choices.push({
              text: answerChoicesInJson.answerChoices[i].text,
              choiceId: file.fieldname,
              imageUrl: downloadURL,
              isCorrect: answerChoicesInJson.answerChoices[i].isCorrect,
            });
            i++;
          }
        }

        if (!questionImageUrl) {
          caseQuestionType = caseQuestionType.replace(
            "WithImages",
            "WithAnswerImage"
          );
        } else {
          caseQuestionType = caseQuestionType.replace(
            "WithImages",
            "WithQuestionAndAnswerImage"
          );
        }
      } else if (
        [
          "multipleChoiceTypeWithQuestionImage",
          "multipleAnswerTypeWithQuestionImage",
        ].includes(caseQuestionType)
      ) {
        questionImageUrl = await uploadFile(req.files[0]);
      }

      // Add question to Firestore
      newQuestionRef = await complaintTypeRef.add({
        Question: {
          questionType: caseQuestionType,
          question: question,
          choices: choices.length ? choices : answerChoicesInJson,
          questionImageUrl: questionImageUrl || null,
        },
      });

      // Respond with success
      res.status(201).json({
        message: "Question uploaded successfully.",
        mainComplaintType: mainTypeName,
        caseName: complaintTypeName,
        caseId: caseId,
        questionId: newQuestionRef.id,
        questionType: questionType,
        questionImageUrl: questionImageUrl,
        choices: choices.length ? choices : answerChoicesInJson,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// get all questions
router.get("/getAllExaminationQuestionsBySectionName", async (req, res) => {
  try {
    console.log(req.query);
    const { mainTypeName, complaintTypeName, caseId, sectionName } = req.query;

    const complaintTypeRef = db
      .collection(COLLECTION_NAME)
      .doc(mainTypeName)
      .collection(complaintTypeName)
      .doc(caseId)
      .collection(sectionName);

    // Get questions sorted by document ID
    const questions = [];
    const snapshot = await complaintTypeRef
      .orderBy(admin.firestore.FieldPath.documentId())
      .get();
    snapshot.forEach((doc) => {
      questions.push({
        questionId: doc.id,
        question: doc.data().Question.question,
        questionType: doc.data().Question.questionType,
        questionImageUrl: doc.data().Question.questionImageUrl,
        choices: doc.data().Question.choices,
      });
    });

    res.status(200).json({
      message: "Questions retrieved successfully.",
      data: questions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all questions by section name
router.get("/getAllExaminationQuestions", async (req, res) => {
  try {
    console.log(req.query);
    const { mainTypeName, complaintTypeName, caseId } = req.query;

    const caseRef = db
      .collection(COLLECTION_NAME)
      .doc(mainTypeName)
      .collection(complaintTypeName)
      .doc(caseId);

    // Retrieve all sections within the case
    const sectionsSnapshot = await caseRef.listCollections();
    const questionsBySections = {};

    for (const section of sectionsSnapshot) {
      if (section.id === "toothDetails") {
        continue;
      }
      const sectionName = section.id;
      const questions = [];
      const questionsSnapshot = await section
        .orderBy(admin.firestore.FieldPath.documentId())
        .get();

      questionsSnapshot.forEach((doc) => {
        questions.push({
          questionId: doc.id,
          question: doc.data().Question.question,
          questionType: doc.data().Question.questionType,
          questionImageUrl: doc.data().Question.questionImageUrl,
          choices: doc.data().Question.choices,
        });
      });

      questionsBySections[sectionName] = questions;
    }

    res.status(200).json({
      message: "Questions retrieved successfully.",
      data: questionsBySections,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
