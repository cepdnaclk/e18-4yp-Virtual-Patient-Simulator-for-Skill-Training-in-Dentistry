import React, { useState } from 'react';
import './hardTissueAssessment.scss';
import {DisplayQuestions} from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";

const HardTissueAssessment = () => {
    const [questions, setQuestions] = useState([]);

    return (
        <div className="hard-tissue-assessment">
            <StepperComponent selectedStep={"Hard Tissue Assessment"}></StepperComponent>
            <DisplayQuestions
                questions={questions}
                setQuestions={setQuestions}
                navigatePath={'/dentalChart'}
            />
        </div>
    );
};

export default HardTissueAssessment;