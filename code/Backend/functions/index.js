const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config({path:'./config/.env'})

const app = express();
app.use(cors({origin:true}));

// Load routes
const historyTakingQesRoutes = require('./routes/historyTakingQesRoutes');
app.use('/api/historyTakingQes', historyTakingQesRoutes);

const teacher = require('./routes/teacherRoutes');
app.use('/api/teacher', teacher);







exports.app = functions.https.onRequest(app);