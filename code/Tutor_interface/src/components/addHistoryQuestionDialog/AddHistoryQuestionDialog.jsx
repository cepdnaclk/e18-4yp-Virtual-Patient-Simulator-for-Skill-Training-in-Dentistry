import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, DialogTitle, TextField, FormControl, FormLabel, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import axios from "axios";
import config from "../../config.js";

const AddHistoryQuestionDialog = ({ open, handleClose, handleAddQuestion, selectedSection }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [status, setStatus] = useState("not-required");

    const handleSave = async () => {
        if (question.trim()) {
            handleAddQuestion(question, answer, status);
            setQuestion('');
            setAnswer('');
            setStatus('');

            const dataToSend = {
                questionText: question,
                questionType: selectedSection,
            };

            await sendToAPI(dataToSend)
        }
    };

    const sendToAPI = async (data) => {
        try {
            console.log("Upload History question to the bank Request: ",data)
            const response = await axios.post(`${config.apiBaseUrl}historyTakingQestionBank/insert`, data);
            console.log("Upload History question to the bank response: ",response)
            handleClose();
        } catch (error) {
            console.error('Failed to submit questions:', error);
        }
    };

    const handleClear = () => {
        setQuestion('');
        setAnswer('');
        setStatus('');
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Add New History Question</DialogTitle>
            <DialogContent>
                <FormControl component="fieldset" fullWidth margin="normal">
                    <TextField
                        margin="dense"
                        id="section"
                        label="Section"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={selectedSection}
                        disabled
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="question"
                        label="New Question"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="answer"
                        label="Enter Answer"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                    <FormLabel component="legend">Status</FormLabel>
                    <RadioGroup row aria-label="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <FormControlLabel value="required" control={<Radio />} label="Required" />
                    </RadioGroup>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClear} color="primary">
                    Clear
                </Button>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddHistoryQuestionDialog;
