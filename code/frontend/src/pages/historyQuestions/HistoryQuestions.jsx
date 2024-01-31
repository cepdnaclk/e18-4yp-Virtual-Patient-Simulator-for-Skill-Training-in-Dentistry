import React, { useState } from 'react';
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
    Card, CardContent
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddAnswerDialog, AddHistoryQuestionDialog } from '../../components/Components.jsx';
import './historyQuestions.scss';

const HistoryQuestions = () => {
    const initialSections = {
        'General Questions': [
            "Can you point to the tooth you have the problem?",
            "How many days have you had pain on the tooth?",
            "Does the pain radiate?"
        ],
        'Medical history': [
            "Have you been diagnosed with any medical conditions?",
            "Are you currently taking any medication?"
        ],
        'Smoking and drinking habits': [
            "Do you smoke or have you ever smoked?",
            "How often do you consume alcohol?"
        ],
        'Dietary history': [
            "Do you have any dietary restrictions?",
            "How would you describe your daily diet?"
        ],
        'Others': [
            "Do you have any allergies?",
            "Is there anything else we should know about your health?"
        ]
    };

    const [sections, setSections] = useState(initialSections);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [questionsData, setQuestionsData] = useState({});
    const [addQuestionDialogOpen, setAddQuestionDialogOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState('');

    const handleQuestionClick = (question) => {
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

    const handleSaveStatus = (question, answer, status) => {
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
    };

    return (
        <div className="history-questions">
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={12}>
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
                                                onClick={() => handleQuestionClick(question)}
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
                </Grid>
            </Grid>
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
                handleSaveStatus={handleSaveStatus}
            />
        </div>
    );
};

export default HistoryQuestions;