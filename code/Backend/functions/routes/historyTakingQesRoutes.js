const express = require('express');
const router = express.Router();
const db = require('../config/db');

// CREATE QUESTION TYPE
// POST
// ROUTE : /api/historyTakingQues/createType
router.post('/createType', async (req, res) => {
    const { qtype } = req.body;
    try {
      const newType = await db.collection("historyTakingQues").doc(qtype).create({ 
            questions:[]
       });
       console.log(newType)
       return res.status(200).send({ status: "Success", msg: "New Type Created", type:qtype });

    } catch (error) {
      console.error('Error creating Type', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// ADD NEW QUESTION
// PUT
// ROUTE : /api/historyTakingQues/addQues
// Todo : Neet to implement the autoincrement id for each Question
router.put('/addQues', async (req, res) => {
    try {
      const { qtype, question } = req.body;
  
      const documentRef = db.collection("historyTakingQues").doc(qtype);
  
      const documentSnapshot = await documentRef.get();
      const currentArray = documentSnapshot.data().questions;
  
      const newElement = question;
      currentArray.push(newElement);
  
      await documentRef.update({
        questions: currentArray,
      });
      
      console.log(currentArray)
      return res.status(200).send({ status: "Success", msg: "New Question Added" });

    } catch (error) {
      console.error('Error adding Question:', error);
      res.status(500).json({error:'Internal Server Error'});
    }
  });
 
// GET ALL QUESTIONS
// GET
// ROUTE : /api/historyTakingQues/getAllQues
router.get('/getAllQues', async (req, res) => {
    try {
      const { qtype } = req.body;
  
      const documentRef = db.collection("historyTakingQues").doc(qtype);
  
      const documentSnapshot = await documentRef.get();
      const allQuestions = documentSnapshot.data().questions;
      
      console.log(allQuestions)
      return res.status(200).json(allQuestions);

    } catch (error) {
      console.error('Error fetching Questions:', error);
      res.status(500).json({error:'Internal Server Error'});
    }
  });


// GET A SINGLE QUESTION USING ID
// GET
// ROUTE : /api/historyTakingQues/getQues/:id
router.get('/getQues/', async (req, res) => {
    try {
      const { qtype, id } = req.body;
  
      const documentRef = db.collection("historyTakingQues").doc(qtype);
  
      const documentSnapshot = await documentRef.get();
      const allQuestions = documentSnapshot.data().questions;
      
      const foundQuestion = allQuestions.find((element) => element.id === id); // Replace 'id' with your actual ID field

      if (!foundQuestion) {
        return res.status(404).json({ message: 'Element not found in the array' });
      }

    console.log(foundQuestion)
    res.status(200).json(foundQuestion);

    } catch (error) {
      console.error('Error fetching Questions:', error);
      res.status(500).json({error: 'Internal Server Error'});
    }
  });


// DELETE A SINGLE QUESTION USING ID
// DELETE
// ROUTE : /api/historyTakingQues/delQues/







module.exports = router;