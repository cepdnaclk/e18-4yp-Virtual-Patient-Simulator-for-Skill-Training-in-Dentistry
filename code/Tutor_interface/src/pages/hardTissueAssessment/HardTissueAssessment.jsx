import React, { useState, useEffect } from 'react';
import './hardTissueAssessment.scss';
import {DisplayQuestions} from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import { useQuestions } from "../../contexts/QuestionsContext.jsx";

const HardTissueAssessment = () => {
    const { state, setQuestions } = useQuestions();
    const [questions, setLocalQuestions] = useState(state.hardTissueAssessment);

    useEffect(() => {
        setLocalQuestions(state.hardTissueAssessment);
        console.log("Questions in context:", state.hardTissueAssessment);
    }, [state.hardTissueAssessment]);

    const handleNext = () => {
        setQuestions('hardTissueAssessment', questions);
    };

    return (
        <div className="hard-tissue-assessment">
            <StepperComponent selectedStep={"Hard Tissue Assessment"} />
            <DisplayQuestions
                questions={questions}
                setQuestions={setLocalQuestions}
                navigatePath={'/dentalChart'}
                navigateBackPath={'/softTissueAssessment'}
                sectionType={'HardTissueAssessment'}
                onNext={handleNext}
                clearPath={'hardTissueAssessment'}
            />
        </div>
    );
};

export default HardTissueAssessment;
