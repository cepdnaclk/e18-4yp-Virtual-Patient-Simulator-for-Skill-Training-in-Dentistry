import React, {useEffect, useState} from 'react';
import {
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    List,
    ListItem,
    Container,
    Grid,
    Card, CardContent, Snackbar, Alert, Box, CircularProgress
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddAnswerDialog, AddHistoryQuestionDialog } from '../../components/Components.jsx';
import './historyQuestions.scss';
import axios from "axios";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import {useNavigate} from "react-router-dom";
import config from "../../config.js";

const HistoryQuestions = () => {
    const initialSections = {
        'General Questions': [],
        'Medical History': [],
        'Smoking and drinking habits': [],
        'Dietary history': [],
        'Others': []
    };

    const [sections, setSections] = useState(initialSections);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [questionsData, setQuestionsData] = useState({});
    const [addQuestionDialogOpen, setAddQuestionDialogOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState('');
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [severity, setSeverity] = useState('info');


    useEffect(() => {
        axios.get(`${config.apiBaseUrl}historyTakingQestionBank/getAll`)
            .then(response => {
                const fetchedQuestions = response.data.questions;
                const updatedSections = { ...initialSections };

                fetchedQuestions.forEach(question => {
                    updatedSections[question.questionType] = [
                        ...(updatedSections[question.questionType] || []),
                        question.questionText
                    ];
                });

                setSections(updatedSections);
            })
            .catch(error => {
                console.error('Failed to fetch questions:', error);
            });
    }, []);

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const handleSubmitQuestions = async () => {
        const historyTakingQuestions = [];
        Object.entries(sections).forEach(([questionType, questions]) => {
            questions.forEach(question => {
                const details = questionsData[question];
                if (details) { // Ensure only questions with details are submitted
                    historyTakingQuestions.push({
                        questionType: questionType,
                        questionText: question,
                        answer: details.answer,
                        required: details.status === 'required'
                    });
                }
            });
        });

        const dataToSend = {
            caseID: "case_1",
            mainTypeName: "Pain",
            complaintTypeName: "Toothache",
            historyTakingQuestions
        };

        await sendToAPI(dataToSend);
    };

    const sendToAPI = async (data) => {
        setIsLoading(true);
        try {
            const response = await axios.put(`${config.apiBaseUrl}dentalComplaintCases/updateHistoryTakingQuestions`, data);
            console.log('Questions submitted successfully:', response.data);
            navigate('/periodontalScreeningQuestions');
        } catch (error) {
            setIsLoading(false);
            console.error('Failed to submit questions:', error);
        }finally {
            setIsLoading(false);
        }
    };


    const handleQuestionClick = (question,sectionTitle) => {
        setSelectedSection(sectionTitle);
        setCurrentQuestion(question);
        setDialogOpen(true);
    };
    const handleOpenAddQuestionDialog = (section) => {
        setSelectedSection(section);
        setAddQuestionDialogOpen(true);
    };

    const handleCloseAddQuestionDialog = () => {
        setAddQuestionDialogOpen(false);
    };

    const handleAddQuestion = (newQuestion, answer, status) => {
        const updatedQuestions = [...sections[selectedSection], newQuestion];
        const updatedSections = { ...sections, [selectedSection]: updatedQuestions };
        setSections(updatedSections);
        // Add the answer and status to questionsData
        setQuestionsData(prevData => ({
            ...prevData,
            [newQuestion]: { answer, status }
        }));
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleSaveStatus = (question, answer, status, selectedSection) => {
        if (answer === '' && status === '') {
            setQuestionsData(prevData => {
                const newData = { ...prevData };
                delete newData[question]; // Remove question from the state if cleared
                return newData;
            });
        } else {
            setQuestionsData(prevData => ({
                ...prevData,
                [question]: { answer, status }
            }));
        }
        handleSaveQuestionDetails(question, answer, status==="required"?true:false,selectedSection);
    };

    // Save or update question details
    const handleSaveQuestionDetails = (question, answer, required, selectedSection) => {
        const existingIndex = selectedQuestions.findIndex(q => q.questionText === question);
        const newQuestion = {
            questionType: selectedSection,
            questionText: question,
            answer: answer,
            required: required
        };
        const updatedSelectedQuestions = [...selectedQuestions];
        if (existingIndex > -1) {
            updatedSelectedQuestions[existingIndex] = newQuestion;
        } else {
            updatedSelectedQuestions.push(newQuestion);
        }
        setSelectedQuestions(updatedSelectedQuestions);
        console.log(selectedQuestions);
    };

    return (
        <div className="history-questions">
            <StepperComponent selectedStep={"History Questions"}></StepperComponent>
            <Box position="relative" minHeight="100vh">
                {isLoading && (
                    <Box position="absolute" top="20%" left="50%" style={{ transform: 'translate(-50%, -50%)' }}>
                        <CircularProgress />
                    </Box>
                )}
                {!isLoading && (
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={11} sx={{ boxShadow: 3, padding: 2, borderRadius: 1}}>
                    {Object.entries(sections).map(([sectionTitle, questions], sectionIndex) => (
                        <div key={sectionIndex} className="section">
                        <Accordion key={sectionIndex} className="accordion-section">
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} className="accordion-summary">
                                <Typography>{sectionTitle}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="accordion-details">
                                <List>
                                    {questions.map((question, index) => {
                                        const data = questionsData[question] || {};
                                        const statusClass = data.answer
                                            ? (data.status === 'required' ? 'required' : 'not-required')
                                            : '';
                                        return (
                                            <ListItem
                                                key={index}
                                                className={`question-item ${statusClass}`}
                                                onClick={() => handleQuestionClick(question,sectionTitle)}
                                            >
                                                <Typography>{`${index + 1}. ${question}`}</Typography>
                                            </ListItem>
                                        );
                                    })}
                                    <Button variant="outlined" className="add-question" onClick={() => handleOpenAddQuestionDialog(sectionTitle)}>
                                        ADD NEW QUESTION
                                    </Button>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        </div>
                    ))}
                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button onClick={() => handleSubmitQuestions()} variant="contained" color="primary">
                            Next
                        </Button>
                        <Snackbar
                            open={openSnackbar}
                            autoHideDuration={6000}
                            onClose={handleSnackbarClose}
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}  // Positions the Snackbar at the top center
                        >
                            <Alert onClose={handleSnackbarClose} severity={severity} sx={{ width: '100%' }}>
                                {snackbarMessage}
                            </Alert>
                        </Snackbar>
                    </Box>
                </Grid>
            </Grid>
                )}
            </Box>
            <AddHistoryQuestionDialog
                open={addQuestionDialogOpen}
                handleClose={handleCloseAddQuestionDialog}
                handleAddQuestion={handleAddQuestion}
                selectedSection={selectedSection}
            />
            <AddAnswerDialog
                open={dialogOpen}
                handleClose={handleCloseDialog}
                question={currentQuestion}
                answer={questionsData[currentQuestion]?.answer || ''}
                status={questionsData[currentQuestion]?.status || ''}
                selectedSection={selectedSection}
                handleSaveStatus={handleSaveStatus}
            />
        </div>
    );
};

export default HistoryQuestions;