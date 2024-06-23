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
    Grid
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CancelIcon from '@mui/icons-material/Cancel';
import './addExamQuestion.scss';
import axios from "axios";

const AddExamQuestion = ({ open, handleClose, onAddQuestion }) => {
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

    // ... existing functions ...

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
            setQuestion({ ...question, image: URL.createObjectURL(file) });
        }
    };

    const handleAnswerImageChange = (index, event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const imagePreviewUrl = URL.createObjectURL(file);

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

        console.log(JSON.stringify(questionData, null, 2));



        const formData = new FormData();

        // Append general information
        formData.append('mainTypeName', 'Pain');
        formData.append('complaintTypeName', 'PainFulTooth');
        formData.append('caseId', 'case_1');
        formData.append('sectionName', 'periodontalScreeningQuestions');

        // Append question details as a JSON string
        formData.append('Question', JSON.stringify({
            questionType: "trueOrFalseType",
            question: question.text,
            correctAnswer: answers.some(answer => answer.isCorrect)  // Assuming single true/false
        }));

        // Append images directly if they exist; append a string 'null' if not
        formData.append('QuestionImage', question.image ? question.image : 'null');
        formData.append('A', answers.length > 0 && answers[0].image ? answers[0].image : 'null');
        formData.append('B', answers.length > 1 && answers[1].image ? answers[1].image : 'null');
        formData.append('C', answers.length > 2 && answers[2].image ? answers[2].image : 'null');
        formData.append('D', answers.length > 3 && answers[3].image ? answers[3].image : 'null');

        try {
            const response = await axios.post('http://127.0.0.1:5001/virtual-patient-simulator-2024/us-central1/app/api/examintionQuestions/createExaminationQuestion', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Question added:', response.data);
            onAddQuestion(questionData);
            handleClose();
        } catch (error) {
            console.error('Failed to add question:', error);
        }
    };


    const handleRemoveAnswerField = (index) => {
        setAnswers(answers.filter((_, i) => i !== index));
    };

    return (
        <Dialog open={open} onClose={() => handleClose(false)} maxWidth="lg" fullWidth className="add-exam-question-dialog">
            <DialogTitle>Add Exam Question</DialogTitle>
            <DialogContent>
                <Grid container alignItems="center" spacing={2} className={`question-container`}>
                    <Grid item xs >
                        <TextField

                            fullWidth
                            label="Enter Question"
                            variant="outlined"
                            value={question.text}
                            onChange={(e) => setQuestion({ ...question, text: e.target.value })}
                        />
                    </Grid>
                    <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                        {question.image && (
                            <img src={question.image} alt="Question Preview" style={{ width: '48px', height: '48px', marginRight: '10px' }} />
                        )}
                        <IconButton color="primary" component="label" style={{ marginLeft: '10px' }}>
                            <AddPhotoAlternateIcon />
                            <input type="file" hidden onChange={handleQuestionImageChange} accept="image/*" />
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <FormControl>
                            <InputLabel id="answer-type-select-label">Answer Type</InputLabel>
                            <Select
                                className="custom-select"
                                labelId="answer-type-select-label"
                                id="answer-type-select"
                                value={answerType}
                                label="Select the Question type"
                                onChange={(e) => setAnswerType(e.target.value)}
                            >
                                <MenuItem value="single">Single Choice</MenuItem>
                                <MenuItem value="multiple">Multiple Choice</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                {answers.map((answer, index) => (
                    <Grid container alignItems="center" spacing={2} key={index}>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                label={`Enter Answer ${index + 1}`}
                                variant="outlined"
                                value={answer.text}
                                onChange={(e) => handleAnswerTextChange(index, e.target.value)}
                            />
                        </Grid>
                        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                            {answer.image && (
                                <img src={answer.image} alt="Answer Preview" style={{ width: '48px', height: '48px', marginRight: '10px' }} />
                            )}
                            <IconButton color="primary" component="label">
                                <AddPhotoAlternateIcon />
                                <input type="file" hidden onChange={(e) => handleAnswerImageChange(index, e)} accept="image/*" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <Select
                                    labelId={`correct-answer-select-label-${index}`}
                                    id={`correct-answer-select-${index}`}
                                    value={answer.isCorrect ? 'correct' : 'incorrect'}
                                    onChange={(e) => handleAnswerCorrectnessChange(index, e.target.value)}
                                >
                                    <MenuItem value="correct">Correct Answer</MenuItem>
                                    <MenuItem value="incorrect">Incorrect Answer</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => handleRemoveAnswerField(index)}>
                                <CancelIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                ))}
                <Button onClick={handleAddAnswerField} variant="outlined" className={`add-answer-btn`}>
                    ADD A NEW ANSWER FIELD
                </Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose(false)} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClearForm} color="primary">
                    Clear
                </Button>
                <Button onClick={handleSaveQuestion} color="primary">
                    Add Question
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddExamQuestion;