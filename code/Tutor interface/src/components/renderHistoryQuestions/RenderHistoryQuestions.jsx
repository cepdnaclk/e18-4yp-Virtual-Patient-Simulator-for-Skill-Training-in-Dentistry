import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const RenderHistoryQuestions = ({ historyQuestions }) => {
    if (!historyQuestions || !Array.isArray(historyQuestions) || historyQuestions.length === 0) {
        return null;
    }

    const groupedQuestions = historyQuestions.reduce((acc, question) => {
        if (!acc[question.questionType]) {
            acc[question.questionType] = [];
        }
        acc[question.questionType].push(question);
        return acc;
    }, {});

    return (
        <div style={{textAlign:"left"}}>
            {Object.entries(groupedQuestions).map(([section, questions]) => (
                <div key={section}>
                    <Typography variant="h6" gutterBottom>
                        {section}
                    </Typography>
                    {questions.map((question, index) => (
                        <Paper key={index} style={{ padding: '10px', margin: '10px 0', textAlign: 'left' }}>
                            <Typography variant="body1">{question.questionText}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Answer: {question.answer}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Required: {question.required ? 'Yes' : 'No'}
                            </Typography>
                        </Paper>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default RenderHistoryQuestions;
