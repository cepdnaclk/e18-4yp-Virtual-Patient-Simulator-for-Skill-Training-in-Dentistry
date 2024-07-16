const { db, bucket } = require("../config/db");
const express = require("express");
const router = express.Router();

const COLLECTION_NAME = "dentalComplaintCases";

// Route to get tooth details from Firestore
router.get("/get", async (req, res) => {
  try {
    // Extract case data from the query parameters
    const { mainTypeName, complaintTypeName, caseId, sectionName } = req.query;

    // Reference to the document
    const complaintTypeRef = db
      .collection(COLLECTION_NAME)
      .doc(mainTypeName)
      .collection(complaintTypeName)
      .doc(caseId)
      .collection(sectionName)
      .doc("teeth");

    // Retrieve the document
    const doc = await complaintTypeRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "No such document!" });
    }

    // Send back the document data
    res.status(200).json({
      message: "Tooth details retrieved successfully.",
      data: doc.data(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to store tooth details in Firestore
router.post("/store", async (req, res) => {
  try {
    // Extract case data from the request body
    const { mainTypeName, complaintTypeName, caseId, sectionName, Teeth } =
      req.body;

    const complaintTypeRef = db
      .collection(COLLECTION_NAME)
      .doc(mainTypeName)
      .collection(complaintTypeName)
      .doc(caseId)
      .collection(sectionName);

    //store tooth array in collection
    await complaintTypeRef.doc("teeth").set({ Teeth: Teeth });

    // Send back the ID of the newly created document
    res.status(201).json({
      message: "Tooth details stored successfully.",
      docId: caseId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
