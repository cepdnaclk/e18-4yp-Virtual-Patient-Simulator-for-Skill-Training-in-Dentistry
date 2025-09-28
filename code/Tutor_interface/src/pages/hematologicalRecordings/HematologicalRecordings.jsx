import React, { useState, useEffect } from 'react';
import './hematologicalRecordings.scss';
import { DisplayQuestions } from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import { useQuestions } from "../../contexts/QuestionsContext.jsx";

const HematologicalRecordings = () => {
    const { state, setQuestions } = useQuestions();
    const [questions, setLocalQuestions] = useState(state.hematologicalRecordings);

    useEffect(() => {
        setLocalQuestions(state.hematologicalRecordings);
        console.log("Questions in context:", state.hematologicalRecordings);
    }, [state.hematologicalRecordings]);

    const handleNext = () => {
        setQuestions('hematologicalRecordings', questions);
    };

    return (
        <div className="hematological-recordings">
            <StepperComponent selectedStep={"Other Investigations"} />
            <DisplayQuestions
                questions={questions}
                setQuestions={setLocalQuestions}
                navigatePath={'/diagnosis'}
                navigateBackPath={'/sensibilityRecordings'}
                sectionType={"HematologicalRecordings"}
                onNext={handleNext}
                clearPath={'hematologicalRecordings'}
            />
        </div>
    );
};

export default HematologicalRecordings;
