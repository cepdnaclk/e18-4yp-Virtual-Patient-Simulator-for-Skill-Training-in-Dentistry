import React, { useState, useEffect } from 'react';
import './radiographs.scss';
import { DisplayQuestions } from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import { useQuestions } from "../../contexts/QuestionsContext.jsx";

const Radiographs = () => {
    const { state, setQuestions } = useQuestions();
    const [questions, setLocalQuestions] = useState(state.radiographs);

    useEffect(() => {
        setLocalQuestions(state.radiographs);
        console.log("Questions in context:", state.radiographs);
    }, [state.radiographs]);

    const handleNext = () => {
        setQuestions('radiographs', questions);
    };

    return (
        <div className="radiographs">
            <StepperComponent selectedStep={"Radiographs"} />
            <DisplayQuestions
                questions={questions}
                setQuestions={setLocalQuestions}
                navigatePath={'/sensibilityRecordings'}
                navigateBackPath={'/investigations'}
                sectionType={"Radiographs"}
                onNext={handleNext}
                clearPath={'radiographs'}
            />
        </div>
    );
};

export default Radiographs;
