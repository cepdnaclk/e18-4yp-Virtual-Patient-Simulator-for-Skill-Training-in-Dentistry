import React, { useState, useEffect } from 'react';
import './recordPlaqueScore.scss';
import { DisplayQuestions } from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import { useQuestions } from "../../contexts/QuestionsContext.jsx";

const RecordPlaqueScore = () => {
    const { state, setQuestions } = useQuestions();
    const [questions, setLocalQuestions] = useState(state.recordPlaqueScore);

    useEffect(() => {
        setLocalQuestions(state.recordPlaqueScore);
        console.log("Questions in context:", state.recordPlaqueScore);
    }, [state.recordPlaqueScore]);

    const handleNext = () => {
        setQuestions('recordPlaqueScore', questions);
    };

    return (
        <div className="record-plaque-score">
            <StepperComponent selectedStep={"Other Charts"} />
            <DisplayQuestions
                questions={questions}
                setQuestions={setLocalQuestions}
                navigatePath={'/investigations'}
                navigateBackPath={'/dentalChart'}
                sectionType={'RecordPlaqueScore'}
                onNext={handleNext}
                clearPath={'recordPlaqueScore'}
            />
        </div>
    );
};

export default RecordPlaqueScore;
