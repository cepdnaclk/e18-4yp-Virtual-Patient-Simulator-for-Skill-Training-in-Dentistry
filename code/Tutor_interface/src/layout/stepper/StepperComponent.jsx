import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Container } from '@mui/material';
import './stepperComponent.scss';

const steps = [
    'Basic Details',
    'History Taking',
    'Extra Oral Examination',
    'Periodontal Screening',
    'Soft Tissue Assessment',
    'Hard Tissue Assessment',
    'Dental Chart',
    'Other Charts',
    'Investigations',
    'Radiographs',
    'Sensibility Recordings',
    'Other Investigations',
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
