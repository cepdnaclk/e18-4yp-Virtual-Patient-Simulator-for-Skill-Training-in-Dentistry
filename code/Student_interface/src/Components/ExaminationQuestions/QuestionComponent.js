import React from "react";
import CheckboxQuestion from "./questionType/CheckboxQuestion";

const QuestionComponent = ({ question }) => {
    console.log("question from question component", question);
    return (
        <div>
            <CheckboxQuestion question={question} />
        </div>
    );
};

export default QuestionComponent;
