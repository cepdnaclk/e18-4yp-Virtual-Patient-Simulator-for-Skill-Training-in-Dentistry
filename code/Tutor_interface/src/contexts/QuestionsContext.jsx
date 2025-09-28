import React, { createContext, useContext, useReducer, useEffect } from 'react';

const QuestionsContext = createContext();

const initialState = {
    extraOralExamination: [],
    periodontalScreeningQuestions: [],
    softTissueAssessment: [],
    hardTissueAssessment: [],
    dentalChart: [],
    recordPlaqueScore: [],
    investigations: [],
    radiographs: [],
    sensibilityRecordings: [],
    hematologicalRecordings: [],
    diagnosis: [],
};

const questionsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return { ...state, [action.section]: action.questions };
        case 'CLEAR_SECTION_QUESTIONS':
            return { ...state, [action.section]: [] };
        case 'CLEAR_ALL_QUESTIONS':
            return initialState;
        default:
            return state;
    }
};

export const QuestionsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(questionsReducer, initialState, (initial) => {
        const persisted = localStorage.getItem('questionsState');
        return persisted ? JSON.parse(persisted) : initial;
    });

    useEffect(() => {
        localStorage.setItem('questionsState', JSON.stringify(state));
    }, [state]);

    const setQuestions = (section, questions) => {
        dispatch({ type: 'SET_QUESTIONS', section, questions });
    };

    const clearSectionQuestions = (section) => {
        dispatch({ type: 'CLEAR_SECTION_QUESTIONS', section });
    };

    const clearAllQuestions = () => {
        dispatch({ type: 'CLEAR_ALL_QUESTIONS' });
    };

    return (
        <QuestionsContext.Provider value={{ state, setQuestions, clearSectionQuestions, clearAllQuestions }}>
            {children}
        </QuestionsContext.Provider>
    );
};

export const useQuestions = () => useContext(QuestionsContext);
