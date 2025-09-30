import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import "./Case.css";
import Card from "@mui/material/Card";
import Periodental from "./Periodental";
import Hard from "./Hard";
import img3 from "../../../../Images/222.jpg";
import Grid from "@mui/material/Grid";
import {useSelector} from "react-redux";
import CombinedComponent from "./CombinedComponent";

const Intra = () => {
    const navigate = useNavigate();
    const {selectedCaseDetails} = useSelector((state) => state.caseSelected);

    const [exam_inv, setexam_inv] = useState({
        perio: false,
        soft: false,
        mark: false,
        intraview: false,
        ging: false,
    });

    const onClickHandler1 = () => {
        console.log("button clicked");

        setexam_inv({
            perio: false,
            soft: false,
            mark: false,
            intraview: true,
            ging: false,
        });
        const btn1 = document.getElementById("perio");
        btn1.style.backgroundColor = "brown";
        const btn2 = document.getElementById("soft");
        btn2.style.backgroundColor = "brown";
        const btn3 = document.getElementById("plaq");
        btn3.style.backgroundColor = "brown";
        const btn4 = document.getElementById("intrav");
        btn4.style.backgroundColor = "#660000";
        // const btn5 = document.getElementById("ging");
        // btn5.style.backgroundColor = "brown";
    };

    const onClickHandler2 = () => {
        console.log("button clicked");

        setexam_inv({
            perio: true,
            soft: false,
            mark: false,
            intraview: false,
            ging: false,
        });
        const btn1 = document.getElementById("perio");
        btn1.style.backgroundColor = "#660000";
        const btn2 = document.getElementById("soft");
        btn2.style.backgroundColor = "brown";
        const btn3 = document.getElementById("plaq");
        btn3.style.backgroundColor = "brown";
        const btn4 = document.getElementById("intrav");
        btn4.style.backgroundColor = "brown";
    };

    const onClickHandler4 = () => {
        console.log("button clicked");
        setexam_inv({
            perio: false,
            soft: true,
            mark: false,
            intraview: false,
            ging: false,
        });
        const btn1 = document.getElementById("perio");
        btn1.style.backgroundColor = "brown";
        const btn2 = document.getElementById("soft");
        btn2.style.backgroundColor = "#660000";
        const btn3 = document.getElementById("plaq");
        btn3.style.backgroundColor = "brown";
        const btn4 = document.getElementById("intrav");
        btn4.style.backgroundColor = "brown";
        // const btn5 = document.getElementById("ging");
        // btn5.style.backgroundColor = "brown";
    };
    const onClickHandler5 = () => {
        console.log("button clicked");
        setexam_inv({
            perio: false,
            soft: false,
            mark: true,
            intraview: false,
            ging: false,
        });
        const btn1 = document.getElementById("perio");
        btn1.style.backgroundColor = "brown";
        const btn2 = document.getElementById("soft");
        btn2.style.backgroundColor = "brown";
        const btn3 = document.getElementById("plaq");
        btn3.style.backgroundColor = "#660000";
        const btn4 = document.getElementById("intrav");
        btn4.style.backgroundColor = "brown";
        // const btn5 = document.getElementById('ging');
        // btn5.style.backgroundColor =  'brown';
    };
    const onClickHandler6 = () => {
        console.log("button clicked");
        setexam_inv({
            perio: false,
            soft: false,
            mark: false,
            intraview: false,
            ging: true,
        });
        const btn1 = document.getElementById("perio");
        btn1.style.backgroundColor = "brown";
        const btn2 = document.getElementById("soft");
        btn2.style.backgroundColor = "brown";
        const btn3 = document.getElementById("plaq");
        btn3.style.backgroundColor = "brown";
        const btn4 = document.getElementById("intrav");
        btn4.style.backgroundColor = "brown";
        const btn5 = document.getElementById("intrav");
        btn5.style.backgroundColor = "#660000";
    };

    return (
        <div>
            <div className="app" style={{backgroundImage: `url(${img3})`, minHeight: "100vh", fontSize: "50px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",}}>
                <div className="contThr1">


                  {exam_inv.perio ? (
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <CombinedComponent></CombinedComponent>
                            </Grid>

                            <Grid item xs={12}>
                                <div style={{ display: "flex", justifyContent: "center", margin: "20px 0",}}></div>
                                <div className="softcard" style={{margin: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px", overflow: "hidden",}}>
                                    <Card style={{backgroundColor: "#f0f8ff", padding: "20px"}}>
                                        <div className="quest" style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", color: "#2c3e50",}}>
                                            Answer the questionnaire given below!
                                        </div>
                                    </Card>
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                                <Periodental/>
                            </Grid>
                        </Grid>
                    ) : null}


                  {exam_inv.soft ? (
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <CombinedComponent></CombinedComponent>
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{display: "flex", justifyContent: "center", margin: "20px 0",}}></div>
                                <div className="softcard">
                                    <Card>
                                        <div className="quest">Oral Mucosa</div>
                                        <div className="ans">Normal in color and texture</div>
                                    </Card>
                                    <div className="softcard">
                                        <Card>
                                            <div className="quest">Gingival Assessment</div>
                                            <div className="quest">Color</div>
                                            <div className="ans">
                                                {selectedCaseDetails.gingival_color}
                                            </div>
                                            <div className="quest">Inflammatory status</div>
                                            <div className="ans">
                                                {selectedCaseDetails.gingival_Inflammatory}
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    ) : null}

                    {exam_inv.mark ? (
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <CombinedComponent></CombinedComponent>
                            </Grid>
                            <Grid item xs={12}>
                              <div style={{display: "flex", justifyContent: "center", margin: "20px 0",}}></div>
                                <div className="softcard" style={{ margin: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px", overflow: "hidden",}}>
                                    <Card style={{backgroundColor: "#f0f8ff", padding: "20px"}}>
                                        <div className="quest" style={{textAlign: "center", fontWeight: "bold", fontSize: "20px", color: "#2c3e50",}}>
                                            Answer the questionnaire given below!
                                        </div>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <Hard/>{" "}
                            </Grid>
                        </Grid>
                    ) : null}

                    {exam_inv.intraview ? (
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <CombinedComponent></CombinedComponent>
                            </Grid>
                            <Grid item xs={12}>
                              <div style={{display: "flex", justifyContent: "center", margin: "20px 0",}}></div>
                            </Grid>
                        </Grid>
                    ) : null}

                    {!exam_inv.perio && !exam_inv.soft && !exam_inv.mark && !exam_inv.intraview && !exam_inv.ging ? (

                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <CombinedComponent></CombinedComponent>
                            </Grid>
                            <Grid item xs={12}>
                              <div style={{display: "flex", justifyContent: "center", margin: "20px 0",}}></div>
                            </Grid>
                        </Grid>
                    ) : null}


                </div>
            </div>
        </div>
    );
};

export default Intra;
