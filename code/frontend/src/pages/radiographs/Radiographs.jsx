import React, { useState } from 'react';
import './radiographs.scss';
import {DisplayQuestions} from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";

const Radiographs = () => {
    const [questions, setQuestions] = useState([]);

    return (
        <div className="radiographs">
            <StepperComponent selectedStep={"Radiographs"}></StepperComponent>
            <DisplayQuestions
                questions={questions}
                setQuestions={setQuestions}
                navigatePath={'/sensibilityRecordings'}
                section ={"Radiographs"}
            />
        </div>
    );
};

export default Radiographs;