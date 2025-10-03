const express = require("express");
const router = express.Router();
const fileParser = require("express-multipart-file-parser");
const bodyParser = require("body-parser");
const { Readable } = require("stream");
const moment = require("moment");

const COLLECTION_NAME = "dentalComplaintCases";

const { db, bucket } = require("../config/db");

router.get("/getAllCases", async (req, res) => {
  try {
    const casesSnapshot = await db.collection("dentalComplaintCases").get();

    if (casesSnapshot.empty) {
      console.log("No matching documents.");
      return res.status(404).json({ error: "No documents found" });
    }

    let casesArray = [];

    // Iterate through each document in the main collection
    for (const caseDoc of casesSnapshot.docs) {
      const caseId = caseDoc.id;

      // Fetch subcollections for each document
      const subcollections = await db
        .collection("dentalComplaintCases")
        .doc(caseId)
        .listCollections();

      for (const subcollectionRef of subcollections) {
        const subcollectionQuerySnapshot = await subcollectionRef.get();

        subcollectionQuerySnapshot.forEach((doc) => {
          casesArray.push(doc.data());
        });
      }
    }

    res.status(200).json(casesArray);
  } catch (err) {
    console.error("Error getting documents", err);
    res.status(500).json({ error: "Error retrieving data" });
  }
});

router.post("/createDentalComplaintMainType", async (req, res) => {
  try {
    // Extract the mainType name from the request body
    const { mainTypeName } = req.body;

    // Validate if the mainType name is provided
    if (!mainTypeName) {
      return res.status(400).json({ error: "Missing mainType name." });
    }

    // Reference to the 'dentalComplaintCases' collection
    const collectionRef = db.collection(COLLECTION_NAME);

    // Add a new document with the provided mainType name (using mainTypeId as the document name)
    const newDocumentRef = await collectionRef.doc(mainTypeName).set({
      // Add any other fields as needed
    });

    res.status(201).json({
      message: "Dental complaint main type created successfully.",
      mainTypeId: mainTypeName,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getAllDentalComplaintMainTypes", async (req, res) => {
  try {
    // Reference to the 'dentalComplaintCases' collection
    const collectionRef = db.collection(COLLECTION_NAME);

    // Get all documents from the collection
    const snapshot = await collectionRef.get();

    // Create an array to store main type names
    const mainTypeNames = [];

    // Iterate through each document in the collection
    snapshot.forEach((doc) => {
      // Get the main type name (which is also the document ID)
      mainTypeNames.push(doc.id);
    });

    res.status(200).json({
      mainTypeNames: mainTypeNames,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/getAllComplaintTypes/:mainTypeName", async (req, res) => {
  try {
    // Extract the mainType name from the request parameters
    const { mainTypeName } = req.params;

    // Reference to the 'dentalComplaintCases' collection
    const mainTypeRef = db.collection(COLLECTION_NAME).doc(mainTypeName);

    // Use the Firestore Admin SDK to list all collections under the specified document
    const collections = await mainTypeRef.listCollections();

    // Extract the names of the subcollections
    const subcollectionNames = collections.map((collection) => collection.id);

    res.status(200).json({
      mainTypeName: mainTypeName,
      complaintTypeNames: subcollectionNames,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post(
  "/createCase",
  fileParser,
  bodyParser.urlencoded({ extended: true }),
  async (req, res) => {
    try {
      console.log("➡️ Incoming request to /createCase");
      console.log("Request body:", req.body);
      console.log("Request files:", req.files);

      // 1. Validate input
      if (
        !req.body.mainTypeName ||
        !req.body.complaintTypeName ||
        !req.body.caseScenario ||
        !req.files ||
        req.files.length === 0
      ) {
        console.warn("⚠️ Missing required fields or file");
        return res
          .status(400)
          .json({ error: "Missing required fields or image." });
      }

      const file = req.files[0];
      console.log("📂 File info:", {
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
      });

      // 2. Prepare upload
      const fileStream = Readable.from(file.buffer);
      const currentDateTime = moment().format("YYYYMMDD_HHmmss");
      const filePath = `Images/${currentDateTime}_${file.originalname}`;
      const fileUpload = bucket.file(filePath);

      console.log("📝 Uploading file to:", filePath);

      // 3. Upload file
      await new Promise((resolve, reject) => {
        fileStream
          .pipe(
            fileUpload.createWriteStream({
              metadata: { contentType: file.mimetype },
            })
          )
          .on("error", (error) => {
            console.error("❌ File upload error:", error);
            reject(error);
          })
          .on("finish", () => {
            console.log("✅ File upload complete");
            resolve();
          });
      });

      // 4. Generate signed URL
      console.log("🔗 Generating signed URL...");
      const [downloadURL] = await fileUpload.getSignedUrl({
        action: "read",
        expires: "12-31-9999",
      });
      console.log("✅ Signed URL:", downloadURL);

      // 5. Firestore reference
      const { mainTypeName, complaintTypeName, caseScenario } = req.body;
      console.log("🗂 Firestore path:", `${COLLECTION_NAME}/${mainTypeName}/${complaintTypeName}`);

      const complaintTypeRef = db
        .collection(COLLECTION_NAME)
        .doc(mainTypeName)
        .collection(complaintTypeName);

      // 6. Generate caseId
      const snapshot = await complaintTypeRef.get();
      const caseId = "case_" + (snapshot.size + 1).toString();
      console.log("🆔 Generated caseId:", caseId);

      // 7. Write document
      await complaintTypeRef.doc(caseId).create({
        caseId,
        mainComplaintType: mainTypeName,
        caseName: complaintTypeName,
        caseScenario,
        thumbnailImageURL: downloadURL,
      });
      console.log("✅ Firestore document created");

      // 8. Response
      res.status(201).json({
        message: "Case created successfully.",
        caseId,
        mainComplaintType: mainTypeName,
        caseName: complaintTypeName,
        caseScenario,
        thumbnailImageURL: downloadURL,
      });
    } catch (error) {
      console.error("🔥 Error in /createCase:", error.message, error.stack);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  }
);
 

// UPDATE CASE DETAILS
// PUT
// ROUTE : /api/dentalComplaintCases/updateHistoryTakingQuestions
router.put("/updateHistoryTakingQuestions", async (req, res) => {
  const mainTypeName = req.body.mainTypeName;
  const complaintTypeName = req.body.complaintTypeName;
  const cID = req.body.caseID;
  const historyTakingQuestionsArray = req.body.historyTakingQuestions;

  try {
    const documentRef = db
      .collection(COLLECTION_NAME)
      .doc(mainTypeName)
      .collection(complaintTypeName)
      .doc(cID);

    const documentSnapshot = await documentRef.get();
    const documentData = documentSnapshot.data();

    if (!documentData) {
      return res.status(404).json({
        status: "Failed",
        message: "Case details document is not in the database",
      });
    }

    const updatedDoc = await documentRef.update({
      historyTakingQuestions: historyTakingQuestionsArray,
    });
    console.log(updatedDoc);
    return res
      .status(200)
      .send({ status: "Success", message: "Document Updated Successfully" });
  } catch (error) {
    console.error("Error updating the document:", error);
    res.status(500).json({ error: "Failed to update document" });
  }
});

// GET
// GET HISTORY TAKING QUESTIONS FOR A PARTICULAR CASEID
// ROUTE : /api/dentalComplaintCases/getCaseDetails
router.post("/getCaseHistoryTakingQuestions", async (req, res) => {
  const mainComplaintType = req.body.mainComplaintType;
  const caseName = req.body.caseName;
  const caseId = req.body.caseId;

  try {
    const documentRef = db
      .collection(COLLECTION_NAME)
      .doc(mainComplaintType)
      .collection(caseName)
      .doc(caseId);

    const documentSnapshot = await documentRef.get();

    if (!documentSnapshot.exists) {
      return res.status(404).json({
        status: "Failed",
        message: "Case details document not found",
      });
    }

    const documentData = documentSnapshot.data();

    // Extract all questions from documentData
    const historyTakingQuestions = documentData.historyTakingQuestions || [];

    // Group questions by questionType
    const questionsByType = {};

    historyTakingQuestions.forEach((question) => {
      const questionType = question.questionType;

      if (!questionsByType[questionType]) {
        questionsByType[questionType] = [];
      }

      questionsByType[questionType].push({
        questionText: question.questionText,
        answer: question.answer,
        required: question.required,
      });
    });

    return res.status(200).json(questionsByType);
  } catch (error) {
    console.error("Error getting the document:", error);
    res.status(500).json({ error: "Failed to get document" });
  }
});
module.exports = router;
