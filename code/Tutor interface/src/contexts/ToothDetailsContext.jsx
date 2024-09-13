import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state for teeth details
const initialTeethDetails = [
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth18",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth17",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth16",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth15",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth14",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth13",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth12",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth11",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth21",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth22",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth23",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth24",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth25",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth26",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth27",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth28",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth48",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth47",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth46",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth45",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth44",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth43",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth42",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth41",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth31",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth32",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth33",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth34",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth35",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth36",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth37",
        cracked: "no",
    },
    {
        discolouration: "no",
        Veneer: "no",
        Crown: "no",
        partiallyErupted: "no",
        CompositeFilling: "no",
        isPresent: "yes",
        cavity: "no",
        amalgamFilling: "no",
        toothId: "Tooth38",
        cracked: "no",
    },
];

// Create the context
const ToothDetailsContext = createContext();

// Reducer to manage state changes
const toothDetailsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TEETH_DETAILS':
            return action.payload;
        case 'UPDATE_TOOTH_DETAIL':
            return state.map(tooth =>
                tooth.toothId === action.payload.toothId ? action.payload : tooth
            );
        case 'CLEAR_TEETH_DETAILS':
            return initialTeethDetails;
        default:
            return state;
    }
};

// Provider component
export const ToothDetailsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(toothDetailsReducer, initialTeethDetails, (initial) => {
        const persisted = localStorage.getItem('teethDetails');
        return persisted ? JSON.parse(persisted) : initial;
    });

    useEffect(() => {
        localStorage.setItem('teethDetails', JSON.stringify(state));
    }, [state]);

    const setTeethDetails = (details) => {
        dispatch({ type: 'SET_TEETH_DETAILS', payload: details });
    };

    const updateToothDetail = (detail) => {
        dispatch({ type: 'UPDATE_TOOTH_DETAIL', payload: detail });
    };

    const clearTeethDetails = () => {
        dispatch({ type: 'CLEAR_TEETH_DETAILS' });
    };

    return (
        <ToothDetailsContext.Provider value={{ state, setTeethDetails, updateToothDetail, clearTeethDetails }}>
            {children}
        </ToothDetailsContext.Provider>
    );
};

// Custom hook to use the ToothDetailsContext
export const useToothDetails = () => useContext(ToothDetailsContext);
