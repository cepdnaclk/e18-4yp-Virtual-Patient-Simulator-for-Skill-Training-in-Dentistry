import React, { useState, useEffect } from 'react';
import './sensibilityRecordings.scss';
import { DisplayQuestions } from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import { useQuestions } from "../../contexts/QuestionsContext.jsx";

const SensibilityRecordings = () => {
    const { state, setQuestions } = useQuestions();
    const [questions, setLocalQuestions] = useState(state.sensibilityRecordings);

    useEffect(() => {
        setLocalQuestions(state.sensibilityRecordings);
        console.log("Questions in context:", state.sensibilityRecordings);
    }, [state.sensibilityRecordings]);

    const handleNext = () => {
        setQuestions('sensibilityRecordings', questions);
    };

    return (
        <div className="sensibility-recordings">
            <StepperComponent selectedStep={"Sensibility Recordings"} />
            <DisplayQuestions
                questions={questions}
                setQuestions={setLocalQuestions}
                navigatePath={'/hematologicalRecordings'}
                navigateBackPath={'/radiographs'}
                sectionType={"SensibilityRecordings"}
                onNext={handleNext}
                clearPath={'sensibilityRecordings'}
            />
        </div>
    );
};

export default SensibilityRecordings;
