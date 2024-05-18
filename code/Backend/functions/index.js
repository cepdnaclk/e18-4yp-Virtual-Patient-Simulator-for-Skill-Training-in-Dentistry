const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config({ path: "./config/.env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

// Load routes
const historyTakingQestionBankRoutes = require("./routes/historyTakingQestionBankRoutes");
app.use("/api/historyTakingQestionBank", historyTakingQestionBankRoutes);

const historyTakingQestionsByStudentRoutes = require("./routes/historyTakingQestionsByStudentRoutes");
app.use(
  "/api/historyTakingQestionsByStudent",
  historyTakingQestionsByStudentRoutes
);

const teacher = require("./routes/teacherRoutes");
app.use("/api/teacher", teacher);

const dentalComplaintCasesRoutes = require("./routes/dentalComplaintCasesRoutes");
app.use("/api/dentalComplaintCases", dentalComplaintCasesRoutes);

const teethDetailsRoutes = require("./routes/teethDetails");
app.use("/api/teethDetails", teethDetailsRoutes);

exports.app = functions.https.onRequest(app);
