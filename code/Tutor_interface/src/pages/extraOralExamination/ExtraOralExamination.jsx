import React, {useEffect, useState} from 'react';
import {useQuestions} from "../../contexts/QuestionsContext.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import {DisplayQuestions} from "../../components/Components.jsx";

const ExtraOralExamination = () => {

    const { state, setQuestions } = useQuestions();
    const [questions, setLocalQuestions] = useState(state.extraOralExamination);

    useEffect(() => {
        setLocalQuestions(state.extraOralExamination);
        console.log("Questions in context extra oral:", state.extraOralExamination);
    }, [state.extraOralExamination]);

    const handleNext = () => {
        setQuestions('extraOralExamination', questions);
    };

    return (
        <div className="extra-Oral-Examination">
            <StepperComponent selectedStep={"Extra Oral Examination"} />
            <DisplayQuestions
                questions={questions}
                setQuestions={setLocalQuestions}
                navigatePath={'/periodontalScreeningQuestions'}
                sectionType={'ExtraOralExamination'}
                navigateBackPath={'/historyQuestions'}
                onNext={handleNext}
                clearPath={'extraOralExamination'}
            />
        </div>
    );
};

export default ExtraOralExamination;