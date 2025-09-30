import React, {useEffect} from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
import { useCase } from '../../contexts/CaseContext.jsx';

const RenderCaseDetails = () => {
    const { caseDetails } = useCase();

    if (!caseDetails) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log("case details from context: ",caseDetails)
    }, [caseDetails]);

    return (
    <Card sx={{ mb: 2, maxWidth: 400, mx: 'auto' }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="170"
                image={caseDetails.imgUrl}
                alt={caseDetails.caseName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {caseDetails.caseName}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    {caseDetails.mainComplaintType}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {caseDetails.caseScenario}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    );
};

export default RenderCaseDetails;
