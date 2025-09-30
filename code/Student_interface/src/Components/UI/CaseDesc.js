import React, { useContext, useEffect, useState, useRef } from "react";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import img2 from "../../Images/bkk.jpg";
import Navbar from "../Navbar";
import { CaseDataContext } from '../../CaseDataContext';
import BASE_URL from '../../config'; // Adjust the path as necessary

import Instructions from "../Instructions";
import Dropdowns from "../Dropdowns";
import SectionTitle from "../SectionTitle";
import Conversation from "../Conversation";
import NavigationButtons from '../NavigationButtons';
import imagedoc from "../../Images/doc.gif";
import imagepet from "../../Images/pat.gif";
import {CaseContext} from "../../context/CaseContext";


const CaseDesc = () => {
    const { setCaseData } = useContext(CaseDataContext);
    const [selectedQId, setSelectedQId] = useState([]);
    const { userInfomation } = useSelector((state) => state.user);
    const { sectionOrder } = useSelector((state) => state.historyQ);
    const { selectedQdata } = useSelector((state) => state.historyQ);
    const { selectedCaseDetails } = useContext(CaseContext);
    const { isSubmitDiagnosis } = useSelector((state) => state.diagnosisQ);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [qId, setIdOfQ] = useState("");
    const [value, setValue] = useState("");
    const [Section, setSection] = useState("");
    const [ans, setAns] = useState("");
    const [selectedSection, setSelectedSection] = useState(null);
    const [questions, setQuestions] = useState({
        'General Questions': [],
        'Medical History': [],
        'Smoking and drinking habits': [],
        'Dietary history': [],
        'Others': []
    });
    const [questionsForDropdown, setQuestionsForDropdown] = useState([]);
    const [selectedQ, setSelectedQ] = useState([]);
    const [selectedQIds, setSelectedQIds] = useState([]);
    const endOfContentRef = useRef(null);

    const fetchQuestions = async (caseDetails) => {
        try {
            console.log("case details history taking",caseDetails)
            const response = await axios.post(`${BASE_URL}dentalComplaintCases/getCaseHistoryTakingQuestions`, {
                caseId: caseDetails.caseId,
                mainComplaintType: caseDetails.mainComplaintType,
                caseName: caseDetails.caseName,
            });
            console.log("history taking fetched data",response)
            return response.data;
        } catch (error) {
            console.error('Error fetching questions:', error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchQuestions(selectedCaseDetails);
                setQuestions(data);
            } catch (error) {
                console.error('Failed to fetch questions:', error);
            }
        };

        fetchData();
    }, [selectedCaseDetails]);

    const handleSection = (eventKey) => {
        setSelectedSection(eventKey);
        const filteredQuestions = (questions[eventKey] || []).map((item, index) => ({
            id: index,
            q: item.questionText,
            a: item.answer,
            required: item.required
        }));
        setQuestionsForDropdown(filteredQuestions);
    };

    const handleSelect = (eventKey) => {
        const selectedQuestion = questionsForDropdown.find((q) => q.id === parseInt(eventKey));
        setSelectedQ((prevSelectedQ) => [...prevSelectedQ, selectedQuestion]);
        setSelectedQIds((prevSelectedQIds) => [...prevSelectedQIds, selectedQuestion.id]);
    };

    const handleClick = () => {
        let totalMarks = 0;
        selectedQIds.forEach((id) => {
            for (const category in questions) {
                const question = (questions[category] || []).find((q, index) => index === id);
                if (question && question.required !== undefined) {
                    totalMarks += question.required ? 10 : -5;
                }
            }
        });

        const sel = selectedQ.map((item) => item.q);
        const correctAnswersArray = [];
        for (const category in questions) {
            const correctAnswers = (questions[category] || []).filter(
                (question) => question.required
            );
            correctAnswersArray.push(...correctAnswers);
        }

        console.log("Total Marks:", totalMarks);
        console.log("selected ans", sel);
        console.log("correct ans", correctAnswersArray);
        window.scrollTo({ top: 0, behavior: "smooth" });

        setTimeout(() => {
            navigate("/page4");
        }, 500);

        setCaseData(previousData => ({ ...previousData, totalMarks }));
    };

    const handleClick1 = () => {
        navigate("/caseSelect");
    };

    useEffect(() => {
        endOfContentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [selectedQ]);

    return (
        <div
            className="app"
            style={{
                backgroundImage: `url(${img2})`,
                minHeight: "100vh",
                fontSize: "50px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                overflowX: "hidden"
            }}
        >
            <div className="navText">
                <Navbar />
            </div>
            <div></div>
            <div className="phtopic1">Patient History Taking</div>
            <div className="phtopic2">{selectedCaseDetails.caseName}: {selectedCaseDetails.caseScenario}</div>
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <hr style={{ borderTop: '3px solid #bbb' }} />
            </div>
            <Grid container spacing={0}>
                <Grid item xs={4}>
                    <Instructions />
                    <Dropdowns
                        handleSection={handleSection}
                        handleSelect={handleSelect}
                        questionsForDropdown={questionsForDropdown}
                        selectedCaseDetails={selectedCaseDetails}
                    />
                    <SectionTitle Section={Section} />
                </Grid>
                <Grid item xs={8}>
                    <Grid container>
                        <Grid item xs={0.5}>
                            <img
                                className="docimage"
                                src={imagedoc}
                                style={{ width: "200px", height: "200px", marginLeft: "-125px" }}
                                alt="Doctor gif"
                            />
                        </Grid>
                        <Grid item xs={11}>
                            <div className="phqna">
                                <Conversation selectedQ={selectedQ} endOfContentRef={endOfContentRef} />
                            </div>
                        </Grid>
                        <Grid item xs={0.5}>
                            <img
                                className="petimage"
                                src={imagepet}
                                style={{ width: "200px", height: "200px" }}
                                alt="patient gif"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <NavigationButtons handleClick1={handleClick1} handleClick={handleClick} isSubmitDiagnosis={isSubmitDiagnosis} />
        </div>
    );
};

export default CaseDesc;
