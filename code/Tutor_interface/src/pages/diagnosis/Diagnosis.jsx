import React, { useState, useEffect } from 'react';
import './diagnosis.scss';
import {DisplayQuestions} from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import { useQuestions } from "../../contexts/QuestionsContext.jsx";

const Diagnosis = () => {
    const { state, setQuestions } = useQuestions();
    const [questions, setLocalQuestions] = useState(state.diagnosis);

    useEffect(() => {
        setLocalQuestions(state.diagnosis);
        console.log("Questions in context:", state.diagnosis);
    }, [state.diagnosis]);

    const handleNext = () => {
        setQuestions('diagnosis', questions);
    };

    return (
        <div className="diagnosis">
            <StepperComponent selectedStep={"Diagnosis"} />
            <DisplayQuestions
                questions={questions}
                setQuestions={setLocalQuestions}
                navigatePath={'/questionsPreview'}
                sectionType={"Diagnosis"}
                onNext={handleNext}
                navigateBackPath={'/hematologicalRecordings'}
                clearPath={'diagnosis'}
            />
        </div>
    );
};

export default Diagnosis;
