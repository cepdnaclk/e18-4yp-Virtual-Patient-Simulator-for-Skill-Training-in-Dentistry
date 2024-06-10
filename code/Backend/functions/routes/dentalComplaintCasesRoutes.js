const express = require("express");
const router = express.Router();
const fileParser = require("express-multipart-file-parser");
const bodyParser = require("body-parser");
const { Readable } = require("stream");
const moment = require('moment');

const COLLECTION_NAME = "dentalComplaintCases"

const { db, bucket } = require("../config/db");

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

// Apply middleware only to the '/createCase' route
router.post(
  "/createCase",
  fileParser,
  bodyParser.urlencoded({ extended: true }),
  async (req, res) => {
    try {
      // Validate if required fields are provided
      if (
        !req.body.mainTypeName ||
        !req.body.complaintTypeName ||
        !req.body.caseScenario ||
        !req.files ||
        req.files.length === 0
      ) {
        return res
          .status(400)
          .json({ error: "Missing required fields or image." });
      }

      const file = req.files[0];
      console.log(file); // you can see the file fields here, lots of good info from the parser

      // convert the file buffer to a filestream
      const fileStream = Readable.from(file.buffer);

      // Construct a unique file path with the current date and time
      const currentDateTime = moment().format('YYYYMMDD_HHmmss');
      // upload to firebase storage
      const fileUpload = bucket.file(`Images/${currentDateTime}_${file.originalname}`);

      // create writestream with the contentType of the incoming file
      const writeStream = fileUpload.createWriteStream({
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
      const downloadURL = await fileUpload.getSignedUrl({
        action: "read",
        expires: "12-31-9999", // Set to a far future date
      });

      // Extract case data from the request body
      const { mainTypeName, complaintTypeName, caseScenario } = req.body;

      const complaintTypeRef = db
        .collection(COLLECTION_NAME)
        .doc(mainTypeName)
        .collection(complaintTypeName);

      // Add a new document with generated caseId
      const caseId =
        "case_" + ((await complaintTypeRef.get()).size + 1).toString();

      await complaintTypeRef.doc(caseId).create({
        caseId: caseId,
        mainComplaintType: mainTypeName,
        caseName: complaintTypeName,
        caseScenario: caseScenario,
        thumbnailImageURL: downloadURL[0],
      });

      res.status(201).json({
        message: "Case created successfully.",
        caseId: caseId,
        mainComplaintType: mainTypeName,
        caseName: complaintTypeName,
        caseScenario: caseScenario,
        thumbnailImageURL: downloadURL[0],
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// UPDATE CASE DETAILS
// PUT
// ROUTE : /api/dentalComplaintCases/updateHistoryTakingQuestions
router.put('/updateHistoryTakingQuestions', async (req, res) => {
  const mainTypeName = req.body.mainTypeName;
  const complaintTypeName = req.body.complaintTypeName;
  const cID = req.body.caseID;
  const historyTakingQuestionsArray = req.body.historyTakingQuestions;
  
  try {
    const documentRef = db.collection(COLLECTION_NAME).doc(mainTypeName).collection(complaintTypeName).doc(cID);

    const documentSnapshot = await documentRef.get();
    const documentData = documentSnapshot.data();

    if(!documentData){
      return res.status(404).json({ status: "Failed", message: "Case details document is not in the database" });
    }

    const updatedDoc = await documentRef.update({historyTakingQuestions: historyTakingQuestionsArray})
    console.log(updatedDoc)
    return res.status(200).send({ status: "Success", message: "Document Updated Successfully"});

  } catch (error) {
    console.error('Error updating the document:', error);
    res.status(500).json({error:'Failed to update document'});
  }
});


module.exports = router;
