import React, { useState } from 'react';
import './dentalChart.scss';
import { BackTooth, FrontTooth } from "../../components/Components.jsx";
import { Box, Button, Grid } from "@mui/material";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import { useNavigate } from "react-router-dom";
import config from "../../config.js";
import axios from "axios";
import { useCase } from "../../contexts/CaseContext.jsx";
import { useToothDetails } from '../../contexts/ToothDetailsContext.jsx';
import Tooltip from "@mui/material/Tooltip";

// DentalChart component
const DentalChart = () => {
  const { state: teethDetails, updateToothDetail, clearTeethDetails } = useToothDetails();
  const navigate = useNavigate();
  const { caseDetails, updateCaseDetails, clearCaseDetails } = useCase();

  const handleToothUpdate = (toothDetail) => {
    console.log("tooth details", toothDetail);
    updateToothDetail(toothDetail);
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

    try {
      const response = await axios.post(
        `${config.apiBaseUrl}teethDetails/store`,
        {
          mainTypeName: caseDetails.mainComplaintType,
          complaintTypeName: caseDetails.caseName,
          caseId: caseDetails.caseId,
          sectionName: "toothDetails",
          Teeth: formattedDetails,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Teeth details successfully sent!");
      console.log(response);
      navigate("/recordPlaqueScore");
    } catch (error) {
      console.error("Failed to send teeth details", error);
    }
  };

  return (
      <div>
        <Grid container justifyContent="center">
          <Grid
              item
              xs={12}
              sm={11}
              sx={{ boxShadow: 3, padding: 2, borderRadius: 1 }}
          >
            <p style={{ textAlign: "center", marginBottom: "20px" }}>
              Click on a tooth box to select its options
            </p>
            {/* Upper Row */}
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
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Box>
                  <Button onClick={() => navigate('/hardTissueAssessment')} variant="outlined" color="primary" sx={{ marginRight: 1 }}>
                    Back
                  </Button>
                </Box>
                <Button onClick={() => handleSendDetails()} variant="contained" color="primary">
                  Next
                </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
  );
};

export default DentalChart;
