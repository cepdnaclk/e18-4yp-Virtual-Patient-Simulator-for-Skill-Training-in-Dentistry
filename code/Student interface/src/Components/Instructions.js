import React from 'react';
import { Card, CardActionArea, CardContent, Typography, List, ListItem } from '@mui/material';

const Instructions = () => {
    return (
        <Card
            sx={{
                maxWidth: 500,
                maxHeight: 1000,
                elevation: 3,
                backgroundColor: "#645bea",
                marginLeft: "20px",
            }}
        >
            <CardActionArea>
                <CardContent
                    sx={{
                        maxHeight: 500,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Card
                        className="choose"
                        sx={{
                            maxWidth: 450,
                            maxHeight: 400,
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            Instructions:
                        </Typography>
                        <List>
                            <ListItem>
                                <Typography variant="body1">
                                    Select the sections according to the correct order of patient examination.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1">
                                    From each section, select only the relevant questions.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1">
                                    Wrong section order and irrelevant questions will carry negative marks.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1">
                                    Click next (Scroll down) after completing the conversation.
                                </Typography>
                            </ListItem>
                        </List>
                    </Card>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Instructions;
