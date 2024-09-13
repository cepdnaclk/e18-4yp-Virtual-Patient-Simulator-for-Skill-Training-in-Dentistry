import React, { useContext } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CaseContext } from '../../../context/CaseContext'
import axios from "axios";
import BASE_URL from "../../../config";

const CaseCard = ({ caseSelectedInUI }) => {
    const { setSelectedCaseDetails } = useContext(CaseContext);
    const navigate = useNavigate();

    const handleClick = async () => {
        setSelectedCaseDetails(caseSelectedInUI);
        console.log("Selected case", caseSelectedInUI)
        navigate("/historyTaking");
        const dataToSend = {
            caseId: caseSelectedInUI.caseId,
            mainTypeName: caseSelectedInUI.mainComplaintType,
            complaintTypeName: caseSelectedInUI.caseName,
        };

        await sendToAPI(dataToSend);

    };

    const sendToAPI = async (data) => {
        try {
            console.log("Case id update request", data)
            const response = await axios.put(`${BASE_URL}caseTeeth/store`, data);
            console.log('Case id update successfully:', response.data);
        } catch (error) {
            console.error('Failed to update the case id:', error);
        }
    };

    return (
        <Card>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={caseSelectedInUI.thumbnailImageURL}
                    alt={caseSelectedInUI.caseName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {caseSelectedInUI.caseName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {caseSelectedInUI.caseScenario}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {caseSelectedInUI.mainComplaintType}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CaseCard;
