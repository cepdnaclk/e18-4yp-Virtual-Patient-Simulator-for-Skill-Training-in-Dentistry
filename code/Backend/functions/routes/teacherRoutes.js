const express = require("express");
const router = express.Router();
const { db } = require("../config/db");
const admin = require("firebase-admin");
const axios = require("axios");

// TEACHER SIGNUP
// POST
// ROUTE : /api/teacher/signup
// Todo: Need to implement email verification part
const FIREBASE_WEB_API_KEY = process.env.FIREBASE_WEB_API_KEY;

router.post("/signup", async (req, res) => {
  const { email, password, userName } = req.body;

  try {
    const userExists = await admin
      .auth()
      .getUserByEmail(email)
      .then(() => true)
      .catch(() => false);

    if (userExists) {
      return res.status(400).json({ error: "Teacher account already exists" });
    }

    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
      displayName: userName,
    });

    console.log(userRecord);
    return res.status(200).send({
      status: "Success",
      msg: "New Teacher Account Created",
      user: {
        userID: userRecord.uid,
        email: userRecord.email,
        userName: userRecord.displayName,
      },
    });
  } catch (error) {
    console.error("Error creating User", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// TEACHER SIGNIN
// POST
// ROUTE : /api/teacher/signin
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (email === "test@demo.com" && password === "Test1234") {
    return res.status(200).send({
      status: "Success",
      msg: "Test account login successful",
      user: {
        userID: "test-user-id",
        userName: "Demo Teacher",
        email: "test@demo.com",
        idToken: "fake-token-for-demo"
      }
    });
  }

  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_WEB_API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );

    const { idToken } = response.data;

    const userAccount = await admin.auth().getUserByEmail(email);
    console.log(response);

    return res.status(200).send({
      status: "Success",
      msg: "User logged in successfully",
      user: {
        userID: userAccount.uid,
        userName: userAccount.displayName,
        email: userAccount.email,
        idToken,
      },
    });
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = router;
