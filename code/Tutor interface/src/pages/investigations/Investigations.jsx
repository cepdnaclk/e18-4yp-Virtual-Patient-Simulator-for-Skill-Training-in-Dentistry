import React, {useEffect, useState} from 'react';
import {useQuestions} from "../../contexts/QuestionsContext.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import {DisplayQuestions} from "../../components/Components.jsx";

const Investigations = () => {
    const { state, setQuestions } = useQuestions();
    const [questions, setLocalQuestions] = useState(state.investigations);

    useEffect(() => {
        setLocalQuestions(state.investigations);
        console.log("Questions in context extra oral:", state.investigations);
    }, [state.investigations]);

    const handleNext = () => {
        setQuestions('extraOralExamination', questions);
    };

    return (
        <div className="investigations">
            <StepperComponent selectedStep={"Investigations"} />
            <DisplayQuestions
                questions={questions}
                setQuestions={setLocalQuestions}
                navigatePath={'/radiographs'}
                navigateBackPath={'/recordPlaqueScore'}
                sectionType={'Investigations'}
                onNext={handleNext}
                clearPath={'investigations'}
            />
        </div>
    );
};

export default Investigations;