import React, { useState } from 'react';
import './sensibilityRecordings.scss';
import {DisplayQuestions} from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";

const SensibilityRecordings = () => {
    const [questions, setQuestions] = useState([]);

    return (
        <div className="sensibility-recordings">
            <StepperComponent selectedStep={"Sensibility Recordings"}></StepperComponent>
            <DisplayQuestions
                questions={questions}
                setQuestions={setQuestions}
                navigatePath={'/hematologicalRecordings'}
                section ={"Sensibility Recordings"}
            />
        </div>
    );
};

export default SensibilityRecordings;