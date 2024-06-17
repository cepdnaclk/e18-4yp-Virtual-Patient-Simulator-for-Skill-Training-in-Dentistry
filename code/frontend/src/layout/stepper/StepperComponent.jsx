import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Container } from '@mui/material';
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
    'Diagnosis'
];

const StepperComponent = ({ selectedStep }) => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        updateSelectedStep(selectedStep);
    }, [selectedStep]);

    const updateSelectedStep = (stepName) => {
        const stepIndex = steps.indexOf(stepName);
        if (stepIndex !== -1) {
            setActiveStep(stepIndex);
        } else {
            setActiveStep(0);  // Default to the first step if not found
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
        </Container>
    );
};

export default StepperComponent;
