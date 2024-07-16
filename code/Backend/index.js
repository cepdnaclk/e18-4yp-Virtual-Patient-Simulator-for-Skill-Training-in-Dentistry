const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config({ path: "./config/.env" });

const app = express();
const port = process.env.PORT || 3000;

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

const teethDetailsRoutes = require("./routes/teethDetailsRoutes");
app.use("/api/teethDetails", teethDetailsRoutes);

const examintionQuestionsRoutes = require("./routes/examinationQuestionsRoutes");
app.use("/api/examintionQuestions", examintionQuestionsRoutes);

const caseTeethRoutes = require("./routes/caseTeethRoutes");
app.use("/api/caseTeeth", caseTeethRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
