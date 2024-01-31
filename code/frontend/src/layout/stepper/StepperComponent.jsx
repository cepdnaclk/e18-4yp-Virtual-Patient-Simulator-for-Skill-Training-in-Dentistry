import React, { useState } from 'react';
import {Stepper, Step, StepLabel, Button, Typography, Box, Container} from '@mui/material';

import {
    BasicCaseDetails, CaseDescription, DentalChart, Diagnosis,
    HardTissueAssessment, HematologicalRecordings,
    HistoryQuestions,
    PeriodontalScreeningQuestions, Radiographs, RecordPlaqueScore, SensibilityRecordings,
    SoftTissueAssessment
} from "../../pages/Pages.jsx";
import './stepperComponent.scss';

const steps = [
    'Basic Details',
    'History Questions',
    'Periodontal Screening Questions',
    'Soft Tissue Assessment',
    'Hard Tissue Assessment',
    'Dental Chart',
    'Record Plaque Score',
    'Radiographs',
    'Sensibility Recordings',
    'Hematological Recordings',
    'Diagnosis',
    'Case Description'
];

const StepperComponent = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        // Assuming you can skip only optional steps and not the last step
        if (activeStep < steps.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };


    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <BasicCaseDetails/>;
            case 1:
                return <HistoryQuestions/>;
            case 2:
                return <PeriodontalScreeningQuestions/>;
            case 3:
                return <SoftTissueAssessment/>;
            case 4:
                return <HardTissueAssessment/>;
            case 5:
                return <DentalChart/>;
            case 6:
                return <RecordPlaqueScore/>
            case 7:
                return <Radiographs/>;
            case 8:
                return <SensibilityRecordings/>
            case 9:
                return <HematologicalRecordings/>;
            case 10:
                return <Diagnosis/>;
            case 11:
                return <CaseDescription/>;
            default:
                return 'Unknown step';
        }
    };

    return (
        <Container maxWidth="xl" className="stepper-container">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box className="content-card">
                {/* Replace this Typography with the getStepContent call */}
                {getStepContent(activeStep)}
            </Box>
            <Box className="step-actions">
                {/* Buttons to navigate through steps */}
                <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className="button-back"
                >
                    Back
                </Button>
                <Button
                    variant="outlined"
                    onClick={handleSkip}
                    className="button-skip"
                >
                    Skip
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className="button-next"
                >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Box>
        </Container>
    );
};

export default StepperComponent;
