const { db, bucket } = require("../config/db");
const express = require("express");
const router = express.Router();

// Assuming db.collection("teeth") represents your collection in Firestore
router.get("/get", async (req, res) => {
  const caseId = req.query.caseId;
  try {
    // Fetch the document from Firestore
    const doc = await db.collection("caseToothDetails").doc(caseId).get();

    // If the document doesn't exist, send back a 404 response
    if (!doc.exists) {
      return res.status(404).json({ error: "Document not found" });
    }

    // Send back the document data
    res.status(200).json(doc.data());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to store tooth details in Firestore
router.post("/store", async (req, res) => {
  try {
    const teethData = req.body;
    // const caseId = req.body.caseId;
    const caseId = "case1Hiiiii";

    // Store the extracted JSON data in Firestore with the document ID as caseId
    await db.collection("caseToothDetails").doc(caseId).set(teethData);

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
