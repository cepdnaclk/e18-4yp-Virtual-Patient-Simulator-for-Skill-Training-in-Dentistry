import React, { createContext, useState } from 'react';

// Create the context
export const CaseContext = createContext();

// Create a provider component
export const CaseProvider = ({ children }) => {
    const [selectedCaseDetails, setSelectedCaseDetails] = useState(null);

    return (
        <CaseContext.Provider value={{ selectedCaseDetails, setSelectedCaseDetails }}>
            {children}
        </CaseContext.Provider>
    );
};
