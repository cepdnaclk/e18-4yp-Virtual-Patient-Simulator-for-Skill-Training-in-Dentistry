import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import './showCases.scss';

// Example cases data
const cases = [
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        code: 'Case 001',
        mainType: 'A painful tooth!',
        scenario: 'A 38-year-old man presents to the dental office due to a painful tooth on the right side upper arch.',
    },
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        code: 'Case 001',
        mainType: 'A painful tooth!',
        scenario: 'A 38-year-old man presents to the dental office due to a painful tooth on the right side upper arch.',
    },
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        code: 'Case 001',
        mainType: 'A painful tooth!',
        scenario: 'A 38-year-old man presents to the dental office due to a painful tooth on the right side upper arch.',
    },
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        code: 'Case 001',
        mainType: 'A painful tooth!',
        scenario: 'A 38-year-old man presents to the dental office due to a painful tooth on the right side upper arch.',
    },
    // Add more cases as needed
];

const ShowCases = () => {
    return (
        <div className="showCasesContainer">
            <Grid container md={10} spacing={4}>
                {cases.map((caseItem) => (
                    <Grid item xs={12} sm={6} md={4} key={caseItem.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={caseItem.image}
                                alt={caseItem.code}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {caseItem.code} - {caseItem.mainType}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {caseItem.scenario}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ShowCases;

