import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

const QuestionsSection = ({ questions, sectionTitle }) => {
    if (!questions || questions.length === 0) return null;

    return (
        <Box mb={4}>
            <Typography variant="h6" gutterBottom>{sectionTitle}</Typography>
            <Grid container spacing={2}>
                {questions.map((question, index) => (
                    <Grid item xs={12} key={index}>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="body1" gutterBottom><strong>Question:</strong> {question.text}</Typography>
                            {question.imageUrl && (
                                <Box mb={2}>
                                    <img src={question.imageUrl} alt={`Question ${index + 1}`} style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }} />
                                </Box>
                            )}
                            {question.options && question.options.length > 0 && (
                                <Grid container spacing={1}>
                                    {question.options.map((option, oIndex) => (
                                        <Grid item key={oIndex} xs={12} sm={6} md={3} className="answer-item">
                                            {(option.imageUrl || option.text) && (
                                            <Paper elevation={1} sx={{ padding: 1, textAlign: 'center', backgroundColor: option.isCorrect ? '#e0f7fa' : '' }}>
                                                <Typography variant="body2">{oIndex + 1}. {option.text}</Typography>
                                                {option.imageUrl && (
                                                    <img src={option.imageUrl} alt={`Answer ${oIndex + 1}`} style={{ width: '100%', maxHeight: '100px', objectFit: 'contain' }} />
                                                )}
                                            </Paper>
                                                )}
                                        </Grid>
                                    ))}
                                </Grid>
                            )}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default QuestionsSection;
