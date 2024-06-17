const express = require("express");
const router = express.Router();
const fileParser = require("express-multipart-file-parser");
const bodyParser = require("body-parser");
const { Readable } = require("stream");
const moment = require("moment");

const COLLECTION_NAME = "dentalComplaintCases";

const { db, bucket } = require("../config/db");

// Apply middleware only to the '/createExaminationQuestion' route
router.post(
  "/createExaminationQuestion",
  fileParser,
  bodyParser.urlencoded({ extended: true }),
  async (req, res) => {
    try {
      // Validate if required fields are provided
      if (
        !req.body.mainTypeName ||
        !req.body.complaintTypeName ||
        !req.body.caseId ||
        !req.body.sectionName
      ) {
        return res.status(400).json({ error: "Missing required fields." });
      }

      // Extract case data from the request body
      const { mainTypeName, complaintTypeName, caseId, sectionName, Question } =
        req.body;

      const jsonQuestion = JSON.parse(Question);

      const complaintTypeRef = db
        .collection(COLLECTION_NAME)
        .doc(mainTypeName)
        .collection(complaintTypeName)
        .doc(caseId)
        .collection(sectionName);

      let newQuestionRef = null;
      let file = null;
      let fileStream = null;
      let currentDateTime = null;
      let fileUpload = null;
      let writeStream = null;
      let downloadURL = null;
      let choices = [];
      let questionImageUrl = null;

      switch (jsonQuestion.questionType) {
        case "trueOrFalseType":
          newQuestionRef = await complaintTypeRef.add({
            Question: {
              questionType: jsonQuestion.questionType,
              question: jsonQuestion.question,
              correctAnswer: jsonQuestion.correctAnswer,
              questionImageUrl: null,
              choices: null,
            },
          });

          res.status(201).json({
            message: "Question uploaded successfully.",
            mainComplaintType: mainTypeName,
            caseName: complaintTypeName,
            caseId: caseId,
            questionId: newQuestionRef.id,
          });
          break;
        case "trueOrFalseTypeWithImage":
          file = req.files[0];
          console.log(file); // you can see the file fields here, lots of good info from the parser

          // convert the file buffer to a filestream
          fileStream = Readable.from(file.buffer);

          // Construct a unique file path with the current date and time
          currentDateTime = moment().format("YYYYMMDD_HHmmss");
          // upload to firebase storage
          fileUpload = bucket.file(
            `Images/${currentDateTime}_${file.originalname}`
          );

          // create writestream with the contentType of the incoming file
          writeStream = fileUpload.createWriteStream({
            metadata: {
              contentType: file.mimetype,
            },
          });

          // pipe the filestream to be written to storage
          fileStream
            .pipe(writeStream)
            .on("error", (error) => {
              console.error("Error:", error);
            })
            .on("finish", () => {
              console.log("File upload complete");
            });

          // Get the download URL of the uploaded image with no expiration
          downloadURL = await fileUpload.getSignedUrl({
            action: "read",
            expires: "12-31-9999", // Set to a far future date
          });

          newQuestionRef = await complaintTypeRef.add({
            Question: {
              questionType: jsonQuestion.questionType,
              question: jsonQuestion.question,
              correctAnswer: jsonQuestion.correctAnswer,
              questionImageUrl: downloadURL,
              choices: null,
            },
          });

          res.status(201).json({
            message: "Question uploaded successfully.",
            mainComplaintType: mainTypeName,
            caseName: complaintTypeName,
            caseId: caseId,
            questionId: newQuestionRef.id,
            questionImageUrl: downloadURL,
          });
          break;
        case "multipleChoiceTypeWithQuestionAndAnswerImage":
          // Iterate over each file and process
          for (const file of req.files) {
            console.log(file); // you can see the file fields here, lots of good info from the parser

            // convert the file buffer to a filestream
            fileStream = Readable.from(file.buffer);

            // Construct a unique file path with the current date and time
            currentDateTime = moment().format("YYYYMMDD_HHmmss");
            // upload to firebase storage
            fileUpload = bucket.file(
              `Images/${currentDateTime}_${file.originalname}`
            );

            // create writestream with the contentType of the incoming file
            writeStream = fileUpload.createWriteStream({
              metadata: {
                contentType: file.mimetype,
              },
            });

            // pipe the filestream to be written to storage
            fileStream
              .pipe(writeStream)
              .on("error", (error) => {
                console.error("Error:", error);
              })
              .on("finish", () => {
                console.log("File upload complete");
              });

            // Get the download URL of the uploaded image with no expiration
            downloadURL = await fileUpload.getSignedUrl({
              action: "read",
              expires: "12-31-9999", // Set to a far future date
            });

            if (file.fieldname === "QuestionImage") {
              questionImageUrl = downloadURL;
              continue;
            }

            // Push the download URL along with the key name
            choices.push({
              [file.fieldname]: downloadURL[0],
            });
          }

          newQuestionRef = await complaintTypeRef.add({
            Question: {
              questionType: jsonQuestion.questionType,
              question: jsonQuestion.question,
              correctAnswer: jsonQuestion.correctAnswer,
              choices: choices,
              questionImageUrl: questionImageUrl,
            },
          });

          res.status(201).json({
            message: "Question uploaded successfully.",
            mainComplaintType: mainTypeName,
            caseName: complaintTypeName,
            caseId: caseId,
            questionId: newQuestionRef.id,
            questionImageUrl: questionImageUrl,
            choices: choices,
          });
          break;
        case "multipleChoiceTypeWithQuestionImage":
          file = req.files[0];
          console.log(file); // you can see the file fields here, lots of good info from the parser

          // convert the file buffer to a filestream
          fileStream = Readable.from(file.buffer);

          // Construct a unique file path with the current date and time
          currentDateTime = moment().format("YYYYMMDD_HHmmss");
          // upload to firebase storage
          fileUpload = bucket.file(
            `Images/${currentDateTime}_${file.originalname}`
          );

          // create writestream with the contentType of the incoming file
          writeStream = fileUpload.createWriteStream({
            metadata: {
              contentType: file.mimetype,
            },
          });

          // pipe the filestream to be written to storage
          fileStream
            .pipe(writeStream)
            .on("error", (error) => {
              console.error("Error:", error);
            })
            .on("finish", () => {
              console.log("File upload complete");
            });

          // Get the download URL of the uploaded image with no expiration
          downloadURL = await fileUpload.getSignedUrl({
            action: "read",
            expires: "12-31-9999", // Set to a far future date
          });

          newQuestionRef = await complaintTypeRef.add({
            Question: {
              questionType: jsonQuestion.questionType,
              question: jsonQuestion.question,
              correctAnswer: jsonQuestion.correctAnswer,
              choices: jsonQuestion.choices,
              questionImageUrl: downloadURL,
            },
          });

          res.status(201).json({
            message: "Question uploaded successfully.",
            mainComplaintType: mainTypeName,
            caseName: complaintTypeName,
            caseId: caseId,
            questionId: newQuestionRef.id,
            questionImageUrl: downloadURL,
          });
          break;
        case "multipleChoiceTypeWithAnswerImage":
          // Iterate over each file and process
          for (const file of req.files) {
            console.log(file); // you can see the file fields here, lots of good info from the parser

            // convert the file buffer to a filestream
            fileStream = Readable.from(file.buffer);

            // Construct a unique file path with the current date and time
            currentDateTime = moment().format("YYYYMMDD_HHmmss");
            // upload to firebase storage
            fileUpload = bucket.file(
              `Images/${currentDateTime}_${file.originalname}`
            );

            // create writestream with the contentType of the incoming file
            writeStream = fileUpload.createWriteStream({
              metadata: {
                contentType: file.mimetype,
              },
            });

            // pipe the filestream to be written to storage
            fileStream
              .pipe(writeStream)
              .on("error", (error) => {
                console.error("Error:", error);
              })
              .on("finish", () => {
                console.log("File upload complete");
              });

            // Get the download URL of the uploaded image with no expiration
            downloadURL = await fileUpload.getSignedUrl({
              action: "read",
              expires: "12-31-9999", // Set to a far future date
            });

            // Push the download URL along with the key name
            choices.push({
              [file.fieldname]: downloadURL[0],
            });
          }

          newQuestionRef = await complaintTypeRef.add({
            Question: {
              questionType: jsonQuestion.questionType,
              question: jsonQuestion.question,
              correctAnswer: jsonQuestion.correctAnswer,
              choices: choices,
              questionImageUrl: null,
            },
          });

          res.status(201).json({
            message: "Question uploaded successfully.",
            mainComplaintType: mainTypeName,
            caseName: complaintTypeName,
            caseId: caseId,
            questionId: newQuestionRef.id,
            questionImageUrl: null,
            choices: choices,
          });

          break;
        case "multipleChoiceType":
          newQuestionRef = await complaintTypeRef.add({
            Question: {
              questionType: jsonQuestion.questionType,
              question: jsonQuestion.question,
              correctAnswer: jsonQuestion.correctAnswer,
              choices: jsonQuestion.choices,
              questionImageUrl: null,
            },
          });

          res.status(201).json({
            message: "Question uploaded successfully.",
            mainComplaintType: mainTypeName,
            caseName: complaintTypeName,
            caseId: caseId,
            questionId: newQuestionRef.id,
          });
          break;
        case "multipleAnswerTypeWithQuestionAndAnswerImage":
          // Iterate over each file and process
          for (const file of req.files) {
            console.log(file); // you can see the file fields here, lots of good info from the parser

            // convert the file buffer to a filestream
            fileStream = Readable.from(file.buffer);

            // Construct a unique file path with the current date and time
            currentDateTime = moment().format("YYYYMMDD_HHmmss");
            // upload to firebase storage
            fileUpload = bucket.file(
              `Images/${currentDateTime}_${file.originalname}`
            );

            // create writestream with the contentType of the incoming file
            writeStream = fileUpload.createWriteStream({
              metadata: {
                contentType: file.mimetype,
              },
            });

            // pipe the filestream to be written to storage
            fileStream
              .pipe(writeStream)
              .on("error", (error) => {
                console.error("Error:", error);
              })
              .on("finish", () => {
                console.log("File upload complete");
              });

            // Get the download URL of the uploaded image with no expiration
            downloadURL = await fileUpload.getSignedUrl({
              action: "read",
              expires: "12-31-9999", // Set to a far future date
            });

            if (file.fieldname === "QuestionImage") {
              questionImageUrl = downloadURL;
              continue;
            }

            // Push the download URL along with the key name
            choices.push({
              [file.fieldname]: downloadURL[0],
            });
          }

          newQuestionRef = await complaintTypeRef.add({
            Question: {
              questionType: jsonQuestion.questionType,
              question: jsonQuestion.question,
              correctAnswer: jsonQuestion.correctAnswer,
              choices: choices,
              questionImageUrl: questionImageUrl,
            },
          });

          res.status(201).json({
            message: "Question uploaded successfully.",
            mainComplaintType: mainTypeName,
            caseName: complaintTypeName,
            caseId: caseId,
            questionId: newQuestionRef.id,
            questionImageUrl: questionImageUrl,
            choices: choices,
          });

          break;
        case "multipleAnswerTypeWithQuestionImage":
          file = req.files[0];
          console.log(file); // you can see the file fields here, lots of good info from the parser

          // convert the file buffer to a filestream
          fileStream = Readable.from(file.buffer);

          // Construct a unique file path with the current date and time
          currentDateTime = moment().format("YYYYMMDD_HHmmss");
          // upload to firebase storage
          fileUpload = bucket.file(
            `Images/${currentDateTime}_${file.originalname}`
          );

          // create writestream with the contentType of the incoming file
          writeStream = fileUpload.createWriteStream({
            metadata: {
              contentType: file.mimetype,
            },
          });

          // pipe the filestream to be written to storage
          fileStream
            .pipe(writeStream)
            .on("error", (error) => {
              console.error("Error:", error);
            })
            .on("finish", () => {
              console.log("File upload complete");
            });

          // Get the download URL of the uploaded image with no expiration
          downloadURL = await fileUpload.getSignedUrl({
            action: "read",
            expires: "12-31-9999", // Set to a far future date
          });

          newQuestionRef = await complaintTypeRef.add({
            Question: {
              questionType: jsonQuestion.questionType,
              question: jsonQuestion.question,
              correctAnswer: jsonQuestion.correctAnswer,
              choices: jsonQuestion.choices,
              questionImageUrl: downloadURL,
            },
          });

          res.status(201).json({
            message: "Question uploaded successfully.",
            mainComplaintType: mainTypeName,
            caseName: complaintTypeName,
            caseId: caseId,
            questionId: newQuestionRef.id,
            questionImageUrl: downloadURL,
          });
          break;
        case "multipleAnswerTypeWithAnswerImage":
          // Iterate over each file and process
          for (const file of req.files) {
            console.log(file); // you can see the file fields here, lots of good info from the parser

            // convert the file buffer to a filestream
            fileStream = Readable.from(file.buffer);

            // Construct a unique file path with the current date and time
            currentDateTime = moment().format("YYYYMMDD_HHmmss");
            // upload to firebase storage
            fileUpload = bucket.file(
              `Images/${currentDateTime}_${file.originalname}`
            );

            // create writestream with the contentType of the incoming file
            writeStream = fileUpload.createWriteStream({
              metadata: {
                contentType: file.mimetype,
              },
            });

            // pipe the filestream to be written to storage
            fileStream
              .pipe(writeStream)
              .on("error", (error) => {
                console.error("Error:", error);
              })
              .on("finish", () => {
                console.log("File upload complete");
              });

            // Get the download URL of the uploaded image with no expiration
            downloadURL = await fileUpload.getSignedUrl({
              action: "read",
              expires: "12-31-9999", // Set to a far future date
            });

            // Push the download URL along with the key name
            choices.push({
              [file.fieldname]: downloadURL[0],
            });
          }

          newQuestionRef = await complaintTypeRef.add({
            Question: {
              questionType: jsonQuestion.questionType,
              question: jsonQuestion.question,
              correctAnswer: jsonQuestion.correctAnswer,
              choices: choices,
              questionImageUrl: null,
            },
          });

          res.status(201).json({
            message: "Question uploaded successfully.",
            mainComplaintType: mainTypeName,
            caseName: complaintTypeName,
            caseId: caseId,
            questionId: newQuestionRef.id,
            questionImageUrl: null,
            choices: choices,
          });

          break;
        case "multipleAnswerType":
          newQuestionRef = await complaintTypeRef.add({
            Question: {
              questionType: jsonQuestion.questionType,
              question: jsonQuestion.question,
              correctAnswer: jsonQuestion.correctAnswer,
              choices: jsonQuestion.choices,
              questionImageUrl: null,
            },
          });

          res.status(201).json({
            message: "Question uploaded successfully.",
            mainComplaintType: mainTypeName,
            caseName: complaintTypeName,
            caseId: caseId,
            questionId: newQuestionRef.id,
          });
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
