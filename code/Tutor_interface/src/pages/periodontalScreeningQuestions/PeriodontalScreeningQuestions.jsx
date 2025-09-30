import React, { useState, useEffect } from 'react';
import './periodontalScreeningQuestions.scss';
import { DisplayQuestions } from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import { useQuestions } from "../../contexts/QuestionsContext.jsx";

const PeriodontalScreeningQuestions = () => {
    const { state, setQuestions } = useQuestions();
    const [questions, setLocalQuestions] = useState(state.periodontalScreeningQuestions);

    useEffect(() => {
        setLocalQuestions(state.periodontalScreeningQuestions);
        console.log("question in the context periodontal",state.periodontalScreeningQuestions)
    }, [state.periodontalScreeningQuestions]);

    const handleNext = () => {
        setQuestions('periodontalScreeningQuestions', questions);
    };

    return (
        <div className="periodontal-screening-questions">
            <StepperComponent selectedStep={"Periodontal Screening"} />
            <DisplayQuestions
                questions={questions}
                setQuestions={setLocalQuestions}
                navigatePath={'/softTissueAssessment'}
                navigateBackPath={'/extraOralExamination'}
                sectionType={'PeriodontalScreeningQuestions'}
                onNext={handleNext}
                clearPath={'periodontalScreeningQuestions'}
            />
        </div>
    );
};

export default PeriodontalScreeningQuestions;
