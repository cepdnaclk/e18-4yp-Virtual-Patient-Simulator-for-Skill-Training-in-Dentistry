import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogActions, DialogTitle, TextField, FormControl, FormLabel, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const AddAnswerDialog = ({ open, handleClose, question, answer: initialAnswer, status: initialStatus, selectedSection, handleSaveStatus }) => {
    const [answer, setAnswer] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        // Whenever the dialog is opened, set the current answer and status
        if (open) {
            setAnswer(initialAnswer || '');
            setStatus(initialStatus || '');
        }
    }, [open, initialAnswer, initialStatus]);

    const handleClear = () => {
        // Clear the answer and status
        setAnswer('');
        setStatus('');
        handleSaveStatus(question, '', '');
    };

    const handleSave = () => {
        // Pass the answer and status back to the parent component
        handleSaveStatus(question, answer, status, selectedSection);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Edit Answer to a Question</DialogTitle>
            <DialogContent>
                <FormControl component="fieldset" fullWidth>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="question"
                        label="Question"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={question}
                        disabled
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

export default AddAnswerDialog;
