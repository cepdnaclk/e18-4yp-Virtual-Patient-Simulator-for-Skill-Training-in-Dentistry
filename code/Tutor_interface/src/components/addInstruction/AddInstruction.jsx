import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle,
    TextField,
    Button,
    Select,
    MenuItem,
    IconButton,
    FormControl,
    InputLabel,
    Grid,
    Box,
    CircularProgress
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CancelIcon from '@mui/icons-material/Cancel';
import './addExamQuestion.scss';
import axios from "axios";
import { useCase } from "../../contexts/CaseContext.jsx";
import config from "../../config.js";

const AddInstruction = ({ open, handleClose, onAddQuestion, section }) => {
    const { caseDetails } = useCase();
    const initialQuestionState = { text: '', image: null };
    const initialAnswerState = [
        { text: '', image: null, isCorrect: false },
        { text: '', image: null, isCorrect: false },
        { text: '', image: null, isCorrect: false },
        { text: '', image: null, isCorrect: false },
    ];

    const [question, setQuestion] = useState(initialQuestionState);
    const [answers, setAnswers] = useState(initialAnswerState);
    const [answerType, setAnswerType] = useState('single');
    const [questionImage, setQuestionImage] = useState(null);
    const [answerImages, setAnswerImages] = useState([null, null, null, null, null, null, null, null, null]);
    const [isLoading, setIsLoading] = useState(false);

    const handleClearForm = () => {
        setQuestion(initialQuestionState);
        setAnswers(initialAnswerState);
        setAnswerType('single'); // Reset to default answer type if needed
    };

    const handleAddAnswerField = () => {
        setAnswers([...answers, { text: '', image: null, isCorrect: false }]);
    };

    const handleAnswerTextChange = (index, newText) => {
        const updatedAnswers = answers.map((answer, i) => {
            if (i === index) {
                return { ...answer, text: newText };
            }
            return answer;
        });
        setAnswers(updatedAnswers);
    };

    const handleAnswerCorrectnessChange = (index, newCorrectness) => {
        const updatedAnswers = answers.map((answer, i) => {
            if (i === index) {
                return { ...answer, isCorrect: newCorrectness === 'correct' };
            }
            return answer;
        });
        setAnswers(updatedAnswers);
    };

    const handleQuestionImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setQuestionImage(file);
            setQuestion({ ...question, image: URL.createObjectURL(file) });
        }
    };

    const handleAnswerImageChange = (index, event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const imagePreviewUrl = URL.createObjectURL(file);

            const newImages = answerImages.map((img, i) => {
                if (i === index) {
                    return file;
                }
                return img;
            });
            setAnswerImages(newImages);

            const newAnswers = answers.map((answer, i) => {
                if (i === index) {
                    return { ...answer, image: imagePreviewUrl };
                }
                return answer;
            });

            setAnswers(newAnswers);
        }
    };

    const handleSaveQuestion = async () => {
        setIsLoading(true);
        const questionData = {
            type: answerType,
            text: question.text,
            imageUrl: question.image || "",
            options: answers.map(answer => ({
                text: answer.text,
                imageUrl: answer.image || "",
                isCorrect: answer.isCorrect
            }))
        };

        const formData = new FormData();

        // Append images directly if they exist; append a string 'null' if not
        formData.append('QuestionImage', questionImage ? questionImage : null);
        answerImages.forEach((image, index) => {
            if (image != null && index < 9) {
                formData.append(String.fromCharCode(65 + index), image); // 'A', 'B', 'C', etc.
            }
        });

        // Append general information
        formData.append('mainTypeName', caseDetails.mainComplaintType);
        formData.append('complaintTypeName', caseDetails.caseName);
        formData.append('caseId', caseDetails.caseId);
        formData.append('sectionName', section);
        formData.append('questionType', answerType);

        // Append question details as a JSON string
        const answerData = {
            answerChoices: answers.map(answer => ({
                text: answer.text,
                isCorrect: answer.isCorrect
            }))
        };
        formData.append('answerChoices', JSON.stringify(answerData));
        formData.append('question', question.text);
        console.log("local question: ", questionData)
        onAddQuestion(questionData);

        try {
            const response = await axios.post(`${config.apiBaseUrl}examintionQuestions/createExaminationQuestion`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Question added:', response.data);
            onAddQuestion(questionData);
        } catch (error) {
            console.error('Failed to add question:', error);
        } finally {
            setIsLoading(false);
            handleClose();
            setAnswerImages([null, null, null, null, null, null, null, null, null]);
        }
    };

    const handleRemoveAnswerField = (index) => {
        setAnswers(answers.filter((_, i) => i !== index));
    };

    return (
        <Dialog open={open} onClose={() => handleClose(false)} maxWidth="lg" fullWidth className="add-exam-question-dialog">
            <DialogTitle>Add Instruction</DialogTitle>
            {isLoading && (
                <DialogContent>
                    <Grid container alignItems="center" spacing={2} className={`question-container`} height="350px">
                        <Box position="absolute" top="50%" left="50%" style={{ transform: 'translate(-50%, -50%)' }}>
                            <CircularProgress />
                        </Box>
                    </Grid>
                </DialogContent>
            )}
            {!isLoading && (
                <DialogContent>
                    <div>
                        <Grid container alignItems="center" spacing={2} className={`question-container`}>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    label="Enter The Instruction"
                                    variant="outlined"
                                    value={question.text}
                                    onChange={(e) => setQuestion({ ...question, text: e.target.value })}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </DialogContent>
            )}
            <DialogActions>
                <Button onClick={() => handleClose(false)} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClearForm} color="primary">
                    Clear
                </Button>
                <Button onClick={handleSaveQuestion} color="primary">
                    Add Instruction
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddInstruction;