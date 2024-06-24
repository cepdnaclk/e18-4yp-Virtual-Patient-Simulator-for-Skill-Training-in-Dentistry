import React, { useState } from 'react';
import './diagnosis.scss';
import {DisplayQuestions} from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";

const Diagnosis = () => {

    const [questions, setQuestions] = useState([]);
    return (
        <div className="dagnosis">
            <StepperComponent selectedStep={"Diagnosis"}></StepperComponent>
            <DisplayQuestions
                questions={questions}
                setQuestions={setQuestions}
                navigatePath={'/createCase'}
                section ={"Diagnosis"}
            />
        </div>
    );
};

export default Diagnosis;