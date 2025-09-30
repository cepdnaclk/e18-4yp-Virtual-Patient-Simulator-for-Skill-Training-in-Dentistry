const express = require('express');
const router = express.Router();
const { db } = require("../config/db");

const COLLECTION_NAME = "historyTakingQuestionsByStudent"
const ID_PREFIX = "HTQBS_"

// INSERT A NEW QUESTION DOCUMENT
// POST
// ROUTE : /api/historyTakingQestionsByStudent/insert
router.post('/insert', async (req, res) => {
    const cID = req.body.caseID;
    const ques = req.body.question;
    const ans = req.body.answer;
    const qtype = req.body.questionType;
    const flag = req.body.isCorrect;
    
    try {
      const ID = await generateNextId();
  
      const newQuestionDoc = await db.collection(COLLECTION_NAME).doc(ID).create({ 
            docID: ID,
            caseID: cID,
            question: ques,
            answer: ans,
            questionType: qtype,
            isCorrect: flag
       });
  
      console.log(newQuestionDoc)
      return res.status(200).send({ status: "Success", msg: "New Question Document Added"});
  
    } catch (error) {
      console.error('Error adding Question Document:', error);
      res.status(500).json({error:'Internal Server Error'});
    }
  });


// GET A SINGLE DOCUMENT USING ID
// GET
// ROUTE : /api/historyTakingQestionsByStudent/get/:id
router.get('/get/:id', async (req, res) => {
  try {
    const docID = req.params.id;

    const documentRef = db.collection(COLLECTION_NAME).doc(docID);

    const documentSnapshot = await documentRef.get();
    const questionDocument = documentSnapshot.data();

    if(!questionDocument){
      return res.status(404).json({ status: "Failed", message: "Question document is not in the database" });
    }

    console.log(questionDocument)
    res.status(200).json({ status: "Success", message: "Question Document Found", questionDocument });

  } catch (error) {
    console.error('Error fetching Question Document:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});




async function generateNextId() {
    let size = (await db.collection(COLLECTION_NAME).get()).size
    return ID_PREFIX + (size + 1).toString()
}

module.exports = router;