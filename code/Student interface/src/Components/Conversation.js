import React from 'react';
import { Card, CardActionArea, CardContent, CardHeader, Typography } from '@mui/material';
import Typed from 'react-typed';

const Conversation = ({ selectedQ, endOfContentRef }) => {
    return (
        <Card sx={{ Width: 500 }}>
            <CardActionArea>
                <CardHeader title="Conversation" style={{ textAlign: "center" }} />
                <CardContent style={{ display: "flex", flexDirection: "column", height: "500px", overflowY: 'auto' }}>
                    <div style={{ marginBottom: "16px" }}>
                        <div style={{ textAlign: "left", display: "flex", justifyContent: "flex-start", marginBottom: "8px" }}>
                            <div style={{
                                backgroundColor: "#e1ffc7",
                                borderRadius: "12px 12px 12px 0",
                                padding: "8px 12px",
                                maxWidth: "80%",
                                wordBreak: "break-word",
                            }}>
                                <Typography variant="body2" color="text.secondary">
                                    <Typed strings={["Hello, Leah!"]} typeSpeed={40} />
                                </Typography>
                            </div>
                        </div>
                        <div style={{ textAlign: "right", display: "flex", justifyContent: "flex-end" }}>
                            <div style={{
                                backgroundColor: "#d9edfd",
                                borderRadius: "12px 12px 0 12px",
                                padding: "8px 12px",
                                maxWidth: "80%",
                                wordBreak: "break-word",
                            }}>
                                <Typography variant="body2" color="text.secondary">
                                    <Typed strings={["Hello, Doctor!"]} typeSpeed={40} startDelay={2000} />
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {selectedQ.map((question) => (
                        <div key={question.id} style={{ marginBottom: "16px" }}>
                            <div style={{ textAlign: "left", display: "flex", justifyContent: "flex-start", marginBottom: "8px" }}>
                                <div style={{
                                    backgroundColor: "#e1ffc7",
                                    borderRadius: "12px 12px 12px 0",
                                    padding: "8px 12px",
                                    maxWidth: "80%",
                                    wordBreak: "break-word",
                                }}>
                                    <Typography variant="body2" color="text.secondary">
                                        <Typed strings={[question.q]} typeSpeed={40} />
                                    </Typography>
                                </div>
                            </div>
                            <div style={{ textAlign: "right", display: "flex", justifyContent: "flex-end" }}>
                                <div style={{
                                    backgroundColor: "#d9edfd",
                                    borderRadius: "12px 12px 0 12px",
                                    padding: "8px 12px",
                                    maxWidth: "80%",
                                    wordBreak: "break-word",
                                }}>
                                    <Typography variant="body2" color="text.secondary">
                                        <Typed strings={[question.a]} typeSpeed={40} startDelay={2000} />
                                    </Typography>
                                </div>
                                <div ref={endOfContentRef}></div>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Conversation;
