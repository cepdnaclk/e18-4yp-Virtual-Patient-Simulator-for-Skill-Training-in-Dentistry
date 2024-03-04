import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Checkbox,
    FormControlLabel,
    Box
} from '@mui/material';

import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import {ChatBot} from "../../../components/Components.jsx";
import './historyTaking.scss';

const HistoryTaking = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [qaList, setQaList] = useState([]);

    const [openDialog, setOpenDialog] = useState(true); // Dialog is open by default
    const [checked, setChecked] = useState(false); // Checkbox is unchecked by default


    const historyTakingQuestions = {
        habits: [
            {
                question: "Do you smoke or use any form of tobacco?",
                answer: "No", // This could be dynamic based on user input
            },
            {
                question: "Do you chew betel or areca nuts?",
                answer: "No", // This could be dynamic based on user input
            },
        ],
        dietaryHistory: [
            // Add questions and answers related to dietary history here
        ],
        historyOfThePresentingComplaint: [
            // Add questions and answers related to the presenting complaint here
        ],
        medicalHistory: [
            // Add questions and answers related to medical history here
        ],
        plaqueControl: [
            // Add questions and answers related to plaque control here
        ],
        previousDentalTreatments: [
            // Add questions and answers related to previous dental treatments here
        ],
        socialHistory: [
            // Add questions and answers related to social history here
        ],
    };

    const handleChangeCategory = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleChangeQuestion = (event) => {
        const selectedQuestionIndex = event.target.value;
        const selectedQA = historyTakingQuestions[selectedCategory][selectedQuestionIndex];
        if (selectedQA) {
            setQaList([...qaList, selectedQA]);
        }
    };

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleCloseDialog = () => {
        // Only allow closing the dialog if the checkbox is checked
        if (checked) {
            setOpenDialog(false);
        }
    };

    return (
    <div className="historyTaking">
        <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
            PaperProps={{
                style: { borderRadius: 12 } // Rounded corners for the dialog
            }}
        >
            <DialogContent style={{ padding: '24px' }}>
                <DialogContentText id="dialog-description" style={{ marginBottom: '16px', color: '#333', fontSize: '16px' }}>
                    <h2 style={{ marginTop: '0', marginBottom: '16px', fontSize: '20px', fontWeight: 'bold', color: '#1976d2' }}>
                        Instructions:
                    </h2>
                    <ul style={{ paddingLeft: '20px', marginTop: '0' }}>
                        <li>Select the sections according to the correct order of patient examination.</li>
                        <li>From each section, select only the relevant questions.</li>
                        <li>Wrong section order and irrelevant questions will carry negative marks.</li>
                    </ul>
                </DialogContentText>

                <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleCheckboxChange} name="readCheck" />}
                    label="I have read and understand the instructions"
                    style={{ marginLeft: '0' }} // Aligns the checkbox with the dialog content
                />
            </DialogContent>
            <DialogActions style={{ padding: '16px 24px' }}>
                <Button onClick={handleCloseDialog} disabled={!checked} variant="contained" style={{ backgroundColor: '#1976d2', color: '#FFFFFF' }}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
        <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} md={6}>
                <Box className={`header`}>
                    <strong>Case 001</strong>
                    <p>A 38-year-old patient presents with a painful tooth on the right side upper arch.</p>
                </Box>
                <Box className={`instructions`}>
                    <p>Instructions:</p>
                    <ul>
                        <li>Select the sections according to the correct order of patient examination.</li>
                        <li>From each section, select only the relevant questions.</li>
                        <li>Wrong section order and irrelevant questions will carry negative marks.</li>
                    </ul>
                </Box>
                <FormControl fullWidth className="formControl">
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={selectedCategory}
                        label="Category"
                        onChange={handleChangeCategory}
                    >
                        {Object.keys(historyTakingQuestions).map((category) => (
                            <MenuItem key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth className="formControl" disabled={!selectedCategory}>
                    <InputLabel>Question</InputLabel>
                    <Select
                        value=""
                        label="Question"
                        onChange={handleChangeQuestion}
                    >
                        {selectedCategory && historyTakingQuestions[selectedCategory].map((item, index) => (
                            <MenuItem key={index} value={index}>
                                {item.question}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
                <ChatBot qaList={qaList} />
            </Grid>
        </Grid>
    </div>
);
};

export default HistoryTaking;