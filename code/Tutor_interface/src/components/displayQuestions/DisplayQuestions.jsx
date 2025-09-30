import React, { useState, useEffect } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Button,
    Box,
    CircularProgress,
    Snackbar, Alert, Grid
} from '@mui/material';
import './displayQuestions.scss';
import { AddExamQuestion, QuestionDisplay, AddInstruction } from "../Components.jsx";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
import { useQuestions } from "../../contexts/QuestionsContext.jsx";
import CheckCircleIcon from "@mui/icons-material/CheckCircle.js";

const DisplayQuestions = ({ questions, setQuestions, navigatePath, sectionType, onNext,navigateBackPath,clearPath }) => {
    const navigate = useNavigate();
    const [addExamQuestionOpen, setAddExamQuestionOpen] = useState(false);
    const [addInstructionOpen, setAddInstructionOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [severity, setSeverity] = useState('info');
    const [isLoading, setIsLoading] = useState(false);
    const { state, setQuestions: updateQuestionsContext,clearSectionQuestions } = useQuestions();

    useEffect(() => {
        setQuestions(state[sectionType] || []);
        console.log("The question in display questions",questions)
    }, [state, sectionType, setQuestions]);

    const handleAddExamQuestionToggle = () => {
        setAddExamQuestionOpen(!addExamQuestionOpen);
    };

    const handleAddInstructionToggle = () => {
        setAddInstructionOpen(!addInstructionOpen)
    };

    const handleAddNewQuestion = (newQuestion) => {
        const updatedQuestions = [...questions, newQuestion];
        setQuestions(updatedQuestions);
        updateQuestionsContext(sectionType, updatedQuestions);
    };

    const handleSubmitQuestions = () => {
        updateQuestionsContext(sectionType, questions);
        onNext();
        navigate(navigatePath);
        console.log("handleSubmitQuestions");
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <div className="display-questions">
            <Box position="relative" minHeight="100vh">
                {isLoading && (
                    <Box position="absolute" top="20%" left="50%" style={{ transform: 'translate(-50%, -50%)' }}>
                        <CircularProgress />
                    </Box>
                )}
                {!isLoading && (
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11} sx={{ boxShadow: 3, padding: 2, borderRadius: 1 }}>
                            {questions.map((question, index) => (
                                <Accordion key={index} className="question-accordion">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel${index}a-content`}
                                        id={`panel${index}a-header`}
                                    >
                                        <Typography>{`${index + 1}. ${question.text}`}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <QuestionDisplay question={question} />
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                            <Button variant="outlined" onClick={handleAddExamQuestionToggle} className="add-new-question-btn">
                                ADD NEW QUESTION
                            </Button>
                            <Typography variant="body1" textAlign='center' marginTop='40px'>------------ OR ------------</Typography>
                            <Button variant="outlined" onClick={handleAddInstructionToggle} className="add-new-question-btn">
                                ADD AN INSTRUCTION
                            </Button>
                            <Box display="flex" justifyContent="space-between" mt={2}>
                                <Box>
                                    <Button onClick={() => navigate(navigateBackPath)} variant="contained" color="primary" sx={{ marginRight: 1 }}>
                                        Back
                                    </Button>
                                    <Button onClick={() => clearSectionQuestions(clearPath)} variant="outlined" color="error">
                                        Clear All
                                    </Button>
                                </Box>
                                <Button onClick={handleSubmitQuestions} variant="contained" color="primary">
                                    {sectionType !== 'Diagnosis' ? 'Next' : 'Finish'}
                                </Button>
                                <Snackbar
                                    open={openSnackbar}
                                    autoHideDuration={6000}
                                    onClose={handleSnackbarClose}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center'
                                    }}  // Positions the Snackbar at the top center
                                >
                                    <Alert onClose={handleSnackbarClose} severity={severity} sx={{ width: '100%' }}>
                                        {snackbarMessage}
                                    </Alert>
                                </Snackbar>
                            </Box>
                        </Grid>
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={2}>
                            <Typography variant="h6" gutterBottom>If you don't have a question in this section, skip it.</Typography>
                            <Button  variant="contained" color="primary">
                                <a href="https://docs.google.com/document/d/1_ySUF1pEpn02zSNgCarxD4ZEnyougR06VH493kVkpx8/edit?usp=sharing" target="_blank">Sample Questions!</a>
                            </Button>
                        </Box>
                    </Grid>
                )}
            </Box>
            <AddExamQuestion
                open={addExamQuestionOpen}
                handleClose={handleAddExamQuestionToggle}
                onAddQuestion={handleAddNewQuestion}
                section={sectionType}
            />
            <AddInstruction
                open={addInstructionOpen}
                handleClose={handleAddInstructionToggle}
                onAddQuestion={handleAddNewQuestion}
                section={sectionType}
            />
        </div>
    );
};

export default DisplayQuestions;
