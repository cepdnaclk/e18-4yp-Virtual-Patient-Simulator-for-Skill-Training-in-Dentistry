import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state for history questions
const initialState = {
    historyQuestions: JSON.parse(localStorage.getItem('historyQuestions')) || []
};

// Actions
const SET_HISTORY_QUESTIONS = 'SET_HISTORY_QUESTIONS';
const CLEAR_HISTORY_QUESTIONS = 'CLEAR_HISTORY_QUESTIONS';

// Reducer
const historyQuestionsReducer = (state, action) => {
    switch (action.type) {
        case SET_HISTORY_QUESTIONS:
            return {
                ...state,
                historyQuestions: action.payload
            };
        case CLEAR_HISTORY_QUESTIONS:
            return {
                ...state,
                historyQuestions: []
            };
        default:
            return state;
    }
};

// Context
const HistoryQuestionsContext = createContext(initialState);

// Provider
export const HistoryQuestionsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(historyQuestionsReducer, initialState);

    useEffect(() => {
        localStorage.setItem('historyQuestions', JSON.stringify(state.historyQuestions));
    }, [state.historyQuestions]);

    const setHistoryQuestions = (questions) => {
        dispatch({ type: SET_HISTORY_QUESTIONS, payload: questions });
    };

    const clearHistoryQuestions = () => {
        dispatch({ type: CLEAR_HISTORY_QUESTIONS });
    };

    return (
        <HistoryQuestionsContext.Provider value={{ state, setHistoryQuestions, clearHistoryQuestions }}>
            {children}
        </HistoryQuestionsContext.Provider>
    );
};

// Custom hook to use the history questions context
export const useHistoryQuestions = () => useContext(HistoryQuestionsContext);
