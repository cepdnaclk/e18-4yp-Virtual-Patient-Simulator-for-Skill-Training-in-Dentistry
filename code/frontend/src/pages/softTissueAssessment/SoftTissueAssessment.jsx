import React, { useState } from 'react';
import './softTissueAssessment.scss';
import {DisplayQuestions} from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";

const SoftTissueAssessment = () => {
    const [questions, setQuestions] = useState([]);

    return (
        <div className="soft-tissue-assessment">
            <StepperComponent selectedStep={"Soft Tissue Assessment"}></StepperComponent>
            <DisplayQuestions
                questions={questions}
                setQuestions={setQuestions}
                navigatePath={'/hardTissueAssessment'}
            />
        </div>
    );
};

export default SoftTissueAssessment;