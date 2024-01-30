import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button} from '@mui/material';
import './displayQuestions.scss';
import {AddExamQuestion, QuestionDisplay} from "../Components.jsx";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DisplayQuestions = ({ questions, setQuestions }) => {
    const [addExamQuestionOpen, setAddExamQuestionOpen] = React.useState(false);

    const handleAddExamQuestionToggle = () => {
        setAddExamQuestionOpen(!addExamQuestionOpen);
    };

    const handleAddNewQuestion = (newQuestion) => {
        setQuestions([...questions, newQuestion]);
    };

    return (
        <div className="display-questions">
            {questions.map((question, index) => (
                <Accordion key={index} className="question-accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}a-content`}
                        id={`panel${index}a-header`}
                    >
                        <Typography>{`${index + 1}. ${question.text}`}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <QuestionDisplay question={question} />
                    </AccordionDetails>
                </Accordion>
            ))}
            <Button variant="outlined" onClick={handleAddExamQuestionToggle} className="add-new-question-btn">
                ADD NEW QUESTION
            </Button>
            <AddExamQuestion
                open={addExamQuestionOpen}
                handleClose={handleAddExamQuestionToggle}
                onAddQuestion={handleAddNewQuestion}
            />
        </div>
    );
};

export default DisplayQuestions;
