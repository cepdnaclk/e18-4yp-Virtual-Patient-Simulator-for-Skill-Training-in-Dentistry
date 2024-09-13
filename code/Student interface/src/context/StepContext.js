import React, { createContext, useState } from 'react';

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
    const [step, setStep] = useState(0);

    const incrementStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const decrementStep = () => {
        setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : 0));
    };

    return (
        <StepContext.Provider value={{ step, incrementStep, decrementStep }}>
            {children}
        </StepContext.Provider>
    );
};
