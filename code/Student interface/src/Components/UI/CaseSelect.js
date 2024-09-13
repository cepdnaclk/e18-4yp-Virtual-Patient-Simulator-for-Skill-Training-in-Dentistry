import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Container, Typography } from "@mui/material";
import img3 from "../../Images/newBack.jpg";
import Navbar from "../Navbar";
import CaseCard from "./caseSelect/CaseCard";
import { CaseActions } from "../../Actions/Case/CaseActions";
import BASE_URL from "../../config"; // Adjust the path as necessary

function CaseSelect() {
    const { userInfomation } = useSelector((state) => state.user);
    const { allCaseData } = useSelector((state) => state.caseSelected);

    const navigate = useNavigate();
    const [cases, setCase] = useState([]);
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log("button clicked");
        navigate("/historyTaking");
    };

    useEffect(() => {
        fetchCase();
    }, []);

    const fetchCase = async () => {
        try {
            const response = await axios.get(`${BASE_URL}dentalComplaintCases/getAllCases`);
            const qArray = response.data;
            console.log(qArray);
            if (cases.length < qArray.length) {
                setCase(qArray);
                dispatch(CaseActions.setAllCases(qArray));
            }
        } catch (error) {
            console.error("Error fetching cases:", error);
        }
    };

    return (
        <div
            className="app"
            style={{
                backgroundImage: `url(${img3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                marginTop: "0px",
            }}
        >
            <Navbar />
            <Container>
                <Typography variant="h3" component="div" align="center" color="white" gutterBottom marginTop={'20px'} marginBottom={'20px'}>
                    Case Selection
                </Typography>
                <Grid container spacing={3}>
                    {cases.map((object) => (
                        <Grid item xs={12} sm={6} md={4} key={object.caseId}>
                            <Paper elevation={3}>
                                <CaseCard caseSelectedInUI={object} />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default CaseSelect;
