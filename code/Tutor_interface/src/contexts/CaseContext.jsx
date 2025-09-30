import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context object
const CaseContext = createContext(null);

// This provider is responsible for managing case data and providing it to any child components
export const CaseProvider = ({ children }) => {
    const [caseDetails, setCaseDetails] = useState(() => {
        // Try to get data from localStorage when initializing
        const savedCaseDetails = localStorage.getItem('caseDetails');
        return savedCaseDetails ? JSON.parse(savedCaseDetails) : null;
    });

    useEffect(() => {
        // Automatically save caseDetails to localStorage when they change
        if (caseDetails) {
            localStorage.setItem('caseDetails', JSON.stringify(caseDetails));
        } else {
            localStorage.removeItem('caseDetails');
        }
    }, [caseDetails]);

    const updateCaseDetails = (newDetails) => {
        setCaseDetails(newDetails);
    };

    const clearCaseDetails = () => {
        setCaseDetails(null);
    };

    return (
        <CaseContext.Provider value={{ caseDetails, updateCaseDetails, clearCaseDetails }}>
            {children}
        </CaseContext.Provider>
    );
};

// Custom hook to use the case context
export const useCase = () => useContext(CaseContext);
