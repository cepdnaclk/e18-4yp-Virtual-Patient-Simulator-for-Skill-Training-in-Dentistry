const express = require('express');
const router = express.Router();
const db = require('../config/db');
const admin = require('firebase-admin');


// TEACHER SIGNUP
// POST
// ROUTE : /api/teacher/signup
// Todo: Need to implement email verification part
router.post('/signup', async (req, res) => {
    const { email, password, userName } = req.body;

    try {

        const userExists = await admin.auth().getUserByEmail(email).then(() => true).catch(() => false);

        if (userExists) {
            return res.status(400).json({ error: 'Teacher account already exists' });
        }

        const userRecord = await admin.auth().createUser({
            email: email,
            password: password,
            displayName: userName
          });

       console.log(userRecord)
       return res.status(200).send({ 
        status: "Success", 
        msg: "New Teacher Account Created", 
        user:{
            userID : userRecord.uid,
            email : userRecord.email,
            userName: userRecord.displayName
        } 
    });

    } catch (error) {
      console.error('Error creating User', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


// TEACHER SIGNIN
// POST
// ROUTE : /api/teacher/signin

// router.post('/signin', async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       const userRecord = await admin.auth().getUserByEmail(email);
  
//       res.status(200).json(userRecord);
//     } catch (error) {
//       console.error('Error signing in:', error);
//       res.status(401).json({ error: 'Invalid credentials' });
//     }
//   });



module.exports = router;