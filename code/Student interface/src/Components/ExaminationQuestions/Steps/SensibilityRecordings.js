import React, {useContext, useEffect, useState} from 'react';
import {CaseContext} from "../../../context/CaseContext";
import BASE_URL from "../../../config";
import axios from "axios";
import TitleBox from "../TitleBox";
import QuestionBox from "../QuestionBox";
import QuestionComponent from "../QuestionComponent";

const SensibilityRecordings = ({ onComplete }) => {
    const { selectedCaseDetails } = useContext(CaseContext);
    const boxStyle = {
        width: "30%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        marginRight: "300px",
    };

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const buttonStyle = {
        fontSize: "14px",
        width: "300px",
        padding: "10px 20px",
        backgroundColor: "dodgerblue",
    };

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const url = `${BASE_URL}examintionQuestions/getAllExaminationQuestionsBySectionName?mainTypeName=${selectedCaseDetails.mainComplaintType}&complaintTypeName=${selectedCaseDetails.caseName}&caseId=${selectedCaseDetails.caseId}&sectionName=SensibilityRecordings`;
                console.log("url", url);
                const response = await axios.get(url);
                console.log("response perdotelscreening", response);
                const data = response.data.data.map(item => ({
                    question: item.question,
                    questionImageUrl: item.questionImageUrl || null,
                    answers: item.choices?.answerChoices?.reduce((acc, choice) => {
                        acc[choice.text] = {
                            isChecked: false,
                            imageUrl: choice.imageUrl || null
                        };
                        return acc;
                    }, {}) || {}
                }));
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            if (onComplete) onComplete();
        }
    };

    const title = "Sensibility Recordings";
    const subTitle = "";

    return (
        <div style={boxStyle}>
            <TitleBox title={title} subTitle={subTitle} />
            <QuestionBox>
                {questions.length > 0 && (
                    <QuestionComponent question={questions[currentQuestionIndex]} />
                )}
            </QuestionBox>
            <button style={buttonStyle} onClick={handleSubmit}>
                SUBMIT
            </button>
        </div>
    );
};

export default SensibilityRecordings;