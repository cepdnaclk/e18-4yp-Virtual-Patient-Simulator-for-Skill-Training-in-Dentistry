import React, { useEffect, useState } from 'react';
import { FormControl, Grid, Typography, Paper } from '@mui/material';
import './questionDisplay.scss';

const QuestionDisplay = ({ question }) => {
    const [currentQuestion, setCurrentQuestion] = useState(null);

    useEffect(() => {
        setCurrentQuestion(question);
        console.log("#######question in the question display",question)
    }, [question]);

    if (!currentQuestion) {
        return null;
    }

    return (
        <FormControl component="fieldset" className="question-control">
            {currentQuestion.imageUrl && (
                <div className="question-image-container">
                    <img src={currentQuestion.imageUrl} alt="Question" className="question-image" />
                </div>
            )}
            {currentQuestion.options && (
            <Grid container spacing={2} className="answers-container">
                {currentQuestion.options.map((option, oIndex) => (
                    <Grid item key={oIndex} xs={12} sm={6} md={3} className="answer-item">
                        {(option.text || option.answerImg) && (
                        <Paper
                            elevation={0}
                            className={`answer-paper ${option.isCorrect ? 'correct-answer' : ''}`}
                        >
                            {option.imageUrl && (
                                <div className="answer-image-container">
                                    <img src={option.imageUrl} alt={`Answer ${oIndex + 1}`} className="answer-image" />
                                </div>
                            )}
                            {option.text && (
                                <Typography className="answer-text">{oIndex + 1}. {option.text}</Typography>
                            )}
                        </Paper>
                            )}
                    </Grid>
                ))}
            </Grid>
                )}
        </FormControl>
    );
};

export default QuestionDisplay;
