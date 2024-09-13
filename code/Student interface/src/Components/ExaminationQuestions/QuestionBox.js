import React from 'react';

const QuestionBox = ({ children }) => {
    const questionBoxStyle = {
        border: "1px solid black",
        padding: "20px",
        fontSize: "16px",
        marginTop: "20px",
        width: "300px",
        height: "400px",
    };

    return (
        <div style={questionBoxStyle}>
            {children}
        </div>
    );
};

export default QuestionBox;
