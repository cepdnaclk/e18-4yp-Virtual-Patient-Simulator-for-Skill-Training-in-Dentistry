import React from 'react';
import {FormControl, FormLabel, Grid, Paper, Typography} from '@mui/material';
import './questionDisplay.scss';

const QuestionDisplay = ({ question, index }) => {
    return (
        <FormControl component="fieldset" className="question-control">
            {question.imageUrl && (
                <div className="question-image-container">
                    <img src={question.imageUrl} alt="Question" className="question-image" />
                </div>
            )}
            <Grid container spacing={2} className="answers-container">
                {question.options.map((option, oIndex) => (
                    <Grid item key={oIndex} xs={12} sm={6} md={3} className="answer-item">
                        <Paper
                            elevation={0}
                            className={`answer-paper ${option.isCorrect ? 'correct-answer' : ''}`}
                        >
                            {option.imageUrl && (
                                <div className="answer-image-container">
                                    <img src={option.imageUrl} alt={`Answer ${oIndex + 1}`} className="answer-image" />
                                </div>
                            )}
                            <Typography className="answer-text">{oIndex + 1}. {option.text}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </FormControl>
    );
};

export default QuestionDisplay;
