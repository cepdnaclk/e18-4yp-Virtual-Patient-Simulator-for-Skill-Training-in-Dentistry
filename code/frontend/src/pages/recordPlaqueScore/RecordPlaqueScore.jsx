import React, { useState } from 'react';
import './recordPlaqueScore.scss';
import {DisplayQuestions} from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";

const RecordPlaqueScore = () => {
    const [questions, setQuestions] = useState([]);

    return (
        <div className="record-plaque-score">
            <StepperComponent selectedStep={"Record Plaque Score"}></StepperComponent>
            <DisplayQuestions
                questions={questions}
                setQuestions={setQuestions}
                navigatePath={'/radiographs'}
            />
        </div>
    );
};

export default RecordPlaqueScore;