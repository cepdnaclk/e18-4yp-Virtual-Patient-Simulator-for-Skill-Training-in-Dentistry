import React, { useState } from 'react';
import './hematologicalRecordings.scss';
import {DisplayQuestions} from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";

const HematologicalRecordings = () => {
    const [questions, setQuestions] = useState([]);

    return (
        <div className="hematological-recordings">
            <StepperComponent selectedStep={"Hematological Recordings"}></StepperComponent>
            <DisplayQuestions
                questions={questions}
                setQuestions={setQuestions}
                navigatePath={'/diagnosis'}
                section ={"Hematological Recordings"}
            />
        </div>
    );
};

export default HematologicalRecordings;