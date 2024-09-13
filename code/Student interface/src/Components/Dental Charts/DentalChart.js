import "./Chart.css";
import BackTooth from "../DentalChartTooth/BackTooth.jsx";
import FrontTooth from "../DentalChartTooth/FrontTooth.jsx";
import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import TitleBox from "../ExaminationQuestions/TitleBox";
import QuestionBox from "../ExaminationQuestions/QuestionBox";
import QuestionComponent from "../ExaminationQuestions/QuestionComponent";
import { Margin } from "@mui/icons-material";

// DentalChart component
const DentalChart = ({ onScoreSubmit, onComplete }) => {
  const [teethDetails, setTeethDetails] = useState([
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth18",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth17",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth16",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth15",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth14",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth13",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth12",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth11",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth21",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth22",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth23",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth24",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth25",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth26",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth27",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth28",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth48",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth47",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth46",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth45",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth44",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth43",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth42",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth41",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth31",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth32",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth33",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth34",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth35",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth36",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth37",
      cracked: "no",
    },
    {
      discolouration: "no",
      Veneer: "no",
      Crown: "no",
      partiallyErupted: "no",
      CompositeFilling: "no",
      isPresent: "yes",
      cavity: "no",
      amalgamFilling: "no",
      toothId: "Tooth38",
      cracked: "no",
    },
  ]);

  const handleSubmit = () => {
    // const { score, totalCorrectAnswers } = calculateScore(
    //   allToothSelections,
    //   answer
    // );
    // console.log(`The user's score is ${score} out of ${totalCorrectAnswers}.`);
    //
    // // Call the onScoreSubmit callback with the score data
    // onScoreSubmit(score, totalCorrectAnswers);
    onComplete();
  };

  const handleToothUpdate = (toothDetail) => {
    setTeethDetails((prevDetails) => {
      const updatedDetails = prevDetails.filter(
        (detail) => detail.toothId !== toothDetail.toothId
      );
      return [...updatedDetails, toothDetail];
    });
  };

  const handleSendDetails = async () => {
    console.log("teethDetails", teethDetails);
    const formattedDetails = teethDetails.map((detail) => ({
      toothId: detail.toothId,
      isPresent: detail.isPresent,
      cracked: detail.status === "crack" ? detail.shape : "no",
      cavity: detail.status === "cavity" ? detail.shape : "no",
      amalgamFilling: detail.status === "amalgamFilling" ? detail.shape : "no",
      CompositeFilling: detail.status === "Composite" ? detail.shape : "no",
      Crown: detail.status === "crown" ? detail.shape : "no",
      Veneer: detail.status === "veneer" ? detail.shape : "no",
      discolouration: detail.status === "discolouration" ? detail.shape : "no",
      partiallyErupted:
        detail.status === "partiallyErupted" ? detail.shape : "no",
    }));
  };

  const boxStyle = {
    width: "30%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    marginRight: "300px",
  };

  const title = "Dental Chart Examination";
  const subTitle =
    "Below you can see the dental chart. Click on a tooth box to select its options";

  return (
    <div>
      <div style={boxStyle}>
        <TitleBox title={title} subTitle={subTitle} />
      </div>
      {/* Upper Row */}
      <div style={{ marginTop: "150px", marginLeft: "685px" }}>
        <div className="dental-chart">
          <div>
            <p>18</p>
            <BackTooth toothId="Tooth18" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>17</p>
            <BackTooth toothId="Tooth17" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>16</p>
            <BackTooth toothId="Tooth16" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>15</p>
            <BackTooth toothId="Tooth15" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>14</p>
            <BackTooth toothId="Tooth14" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>13</p>
            <FrontTooth toothId="Tooth13" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>12</p>
            <FrontTooth toothId="Tooth12" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>11</p>
            <FrontTooth toothId="Tooth11" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>21</p>
            <FrontTooth toothId="Tooth21" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>22</p>
            <FrontTooth toothId="Tooth22" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>23</p>
            <FrontTooth toothId="Tooth23" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>24</p>
            <BackTooth toothId="Tooth24" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>25</p>
            <BackTooth toothId="Tooth25" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>26</p>
            <BackTooth toothId="Tooth26" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>27</p>
            <BackTooth toothId="Tooth27" onUpdate={handleToothUpdate} />
          </div>
          <div>
            <p>28</p>
            <BackTooth toothId="Tooth28" onUpdate={handleToothUpdate} />
          </div>
        </div>
        {/* Lower Row */}
        <div className="dental-chart">
          <div>
            <BackTooth toothId="Tooth48" onUpdate={handleToothUpdate} />
            <p>48</p>
          </div>
          <div>
            <BackTooth toothId="Tooth47" onUpdate={handleToothUpdate} />
            <p>47</p>
          </div>
          <div>
            <BackTooth toothId="Tooth46" onUpdate={handleToothUpdate} />
            <p>46</p>
          </div>
          <div>
            <BackTooth toothId="Tooth45" onUpdate={handleToothUpdate} />
            <p>45</p>
          </div>
          <div>
            <BackTooth toothId="Tooth44" onUpdate={handleToothUpdate} />
            <p>44</p>
          </div>
          <div>
            <FrontTooth toothId="Tooth43" onUpdate={handleToothUpdate} />
            <p>43</p>
          </div>
          <div>
            <FrontTooth toothId="Tooth42" onUpdate={handleToothUpdate} />
            <p>42</p>
          </div>
          <div>
            <FrontTooth toothId="Tooth41" onUpdate={handleToothUpdate} />
            <p>41</p>
          </div>
          <div>
            <FrontTooth toothId="Tooth31" onUpdate={handleToothUpdate} />
            <p>31</p>
          </div>
          <div>
            <FrontTooth toothId="Tooth32" onUpdate={handleToothUpdate} />
            <p>32</p>
          </div>
          <div>
            <FrontTooth toothId="Tooth33" onUpdate={handleToothUpdate} />
            <p>33</p>
          </div>
          <div>
            <BackTooth toothId="Tooth34" onUpdate={handleToothUpdate} />
            <p>34</p>
          </div>
          <div>
            <BackTooth toothId="Tooth35" onUpdate={handleToothUpdate} />
            <p>35</p>
          </div>
          <div>
            <BackTooth toothId="Tooth36" onUpdate={handleToothUpdate} />
            <p>36</p>
          </div>
          <div>
            <BackTooth toothId="Tooth37" onUpdate={handleToothUpdate} />
            <p>37</p>
          </div>
          <div>
            <BackTooth toothId="Tooth38" onUpdate={handleToothUpdate} />
            <p>38</p>
          </div>
        </div>
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <button onClick={handleSubmit} className="chrt-submit-btn">
            Submit
          </button>
        </Box>
      </div>
    </div>
  );
};

export default DentalChart;
