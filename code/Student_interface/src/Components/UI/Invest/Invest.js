import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Intra from "./Intra/Intra";
import Extra from "./Extra";
import img3 from "../../../Images/back.jpg";
import Instructions from "./Instructions";
import {useSelector} from "react-redux";
import Navbar from "../../Navbar";

const Invest = () => {
    const {userInfomation} = useSelector((state) => state.user);
    const {plaqueValue} = useSelector((state) => state.examination);
    const {bleedingValue} = useSelector((state) => state.examination);
    const {submitedHardTissueTools} = useSelector((state) => state.examination);
    const {selectedPerodentalTools} = useSelector((state) => state.examination);
    const [isGuidelinesRead, setIsGuidelinesRead] = useState(false);
    const [isProceedClicked, setIsProceedClicked] = useState(false);

    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate("/historyTaking");
    };

    const [exam_inv, setexam_inv] = useState({
        intra: false,
        extra: false,
    });

    // Function to handle checkbox change
    const handleCheckboxChange = (event) => {
        setIsGuidelinesRead(event.target.checked);
    };

    const onClickHandler4 = () => {
        console.log("button clicked");
        setexam_inv({
            intra: true,
            extra: false,
            help: false,
        });

        setIsProceedClicked(true);

        // Safely attempt to access and modify button styles
        const btn1 = document.getElementById("help");
        const btn2 = document.getElementById("intra");
        const btn3 = document.getElementById("extra");

        if (btn1 && btn2 && btn3) {
            btn1.style.backgroundColor = "rgb(9, 105, 239)";
            btn2.style.backgroundColor = "rgb(95,129,182)";
            btn3.style.backgroundColor = "rgb(9, 105, 239)";
        }
    };

    if (exam_inv.help && !exam_inv.intra && !exam_inv.extra) {
        const btn1 = document.getElementById("help");
        btn1.style.backgroundColor = "rgb(95,129,182)";
    }

    return (
        <div className="app" style={{backgroundImage: `url(${img3})`, minHeight: "100vh", fontSize: "50px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",}}>
            <div className="navText">
                <Navbar/>
            </div>
            <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "200px 1fr 200px", gridGap: 20, marginLeft: "20px", marginRight: "20px",}}>
                <div className="bleft">
                    <button className="custom-button1" onClick={handleClick1}>Back</button>
                </div>
                <div className="bmid"></div>
            </div>
            <div className="exmTopic">Examination</div>





            {/* Add a div for the checkbox and proceed button */}
            <div className="contThr">{exam_inv.intra ? <Intra/> : null}</div>
            <div className="contFr">{exam_inv.extra ? <Extra/> : null}
                <div className="setExtra2">{exam_inv.help ? <Instructions/> : null}</div>
                <div className="setExtra">
                    {!exam_inv.intra && !exam_inv.extra && !exam_inv.help ? (
                        <Instructions/>
                    ) : null}
                </div>
            </div>







            {!isProceedClicked && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px",}} >
                    {/* Checkbox and Proceed button */}
                    <div style={styles.container}>
                        <label style={styles.label}>
                            <input type="checkbox"  checked={isGuidelinesRead} onChange={handleCheckboxChange} style={styles.checkbox}/>
                            <span style={styles.text}>I have read the guidelines</span>
                        </label>
                    </div>

                    <button id="proceed" type="button" className={`btn btn-primary custom-btn1 
                    ${isGuidelinesRead ? "" : "disabled"}`} disabled={!isGuidelinesRead} onClick={() => onClickHandler4()} style={{backgroundColor: isGuidelinesRead ? "#095af0" : "gray", color: "white", padding: "12px 24px", border: "none", borderRadius: "5px", cursor: isGuidelinesRead ? "pointer" : "not-allowed", marginBottom: "20px", transition: "background-color 0.3s",}}>
                        PROCEED
                    </button>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {margin: "20px",},
    label: {display: "flex", alignItems: "center",},
    checkbox: {marginRight: "10px",},
    text: {fontFamily: "Arial, sans-serif", fontSize: "16px", color: "#333",},
};
export default Invest;
