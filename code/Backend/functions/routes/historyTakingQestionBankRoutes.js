const express = require('express');
const router = express.Router();
const { db } = require("../config/db");
const { log } = require('firebase-functions/logger');

const COLLECTION_NAME = "historyTakingQuestionBank"
const ID_PREFIX = "HTQB_"


// INSERT A NEW QUESTION TO THE BANK
// POST
// ROUTE : /api/historyTakingQestionBank/insert
router.post('/insert', async (req, res) => {
  const qtext = req.body.questionText;
  const qtype = req.body.questionType;
  
  try {
    const qID = await generateNextId();

    const newQuestion = await db.collection(COLLECTION_NAME).doc(qID).create({ 
          questionId: qID,
          questionText: qtext,
          questionType: qtype
     });

    console.log(newQuestion)
    return res.status(200).send({ status: "Success", msg: "New Question Added"});

  } catch (error) {
    console.error('Error adding Question:', error);
    res.status(500).json({error:'Internal Server Error'});
  }
});

 
// GET ALL QUESTIONS
// GET
// ROUTE : /api/historyTakingQestionBank/getAll
router.get('/getAll', async (req, res) => {
    try {
      const query = await db.collection(COLLECTION_NAME).get();
  
      const questions = query.docs.map(doc => ({
        questionId: doc.questionId, ...doc.data()
      }));
      
      console.log(questions)
      return res.status(200).json({ status: "Success", message: "Questions Found", questions });

    } catch (error) {
      console.error('Error fetching Questions:', error);
      res.status(500).json({error:'Internal Server Error'});
    }
  });


// GET A SINGLE QUESTION USING ID
// GET
// ROUTE : /api/historyTakingQestionBank/get/:id
router.get('/get/:id', async (req, res) => {
    try {
      const qID = req.params.id;
  
      const documentRef = db.collection(COLLECTION_NAME).doc(qID);
  
      const documentSnapshot = await documentRef.get();
      const question = documentSnapshot.data();

      if(!question){
        return res.status(404).json({ status: "Failed", message: "Question is not in the bank" });
      }

      console.log(question)
      res.status(200).json({ status: "Success", message: "Question Found", question });

    } catch (error) {
      console.error('Error fetching Question:', error);
      res.status(500).json({error: 'Internal Server Error'});
    }
  });

// GET ALL QUESTIONS UNDER A SPECIFIC TYPE
// GET
// ROUTE : /api/historyTakingQestionBank/getAll
router.post('/getAll', async (req, res) => {
  try {
    const qtype = req.body.questionType;

    const query = await db.collection(COLLECTION_NAME).where('questionType', '==', qtype).get();

    if(query.empty){
      return res.status(404).json({ status: "Failed", message: "No questions found for the type " + qtype});
    }

    const questions = query.docs.map(doc => ({
      questionId: doc.questionId, ...doc.data()
    }));
    
    return res.status(200).json({ status: "Success", message: "Questions Found", questions });

  } catch (error) {
    console.error('Error fetching Questions:', error);
    res.status(500).json({error:'Internal Server Error'});
  }
}); 


// DELETE A SINGLE QUESTION USING ID
// DELETE
// ROUTE : /api/historyTakingQestionBank/remove/:id
router.delete('/remove/:id', async (req, res) => {
  try {
    const qID = req.params.id;

    const documentRef = db.collection(COLLECTION_NAME).doc(qID);
    await documentRef.delete();
    return res.status(200).send({ status: "Success", msg: "Question Removed" });

  } catch (error) {
    console.error('Error fetching Question:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});


async function generateNextId() {
  let size = (await db.collection(COLLECTION_NAME).get()).size
  return ID_PREFIX + (size + 1).toString()
}


module.exports = router;