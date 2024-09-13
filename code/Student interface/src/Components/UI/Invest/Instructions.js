import React from "react";
import Grid from "@mui/material/Grid";
import Help from "./Help";
import "./Case.css";

function Instructions() {
  return (
    <div>
      <div className="title3">
        Please read the guidelines on how to use the Virtual Patient Simulator
        before you proceed!
      </div>
      <div className="insgrid">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <div className="fontForlist2">
              <div className="alert alert-dismissible alert-secondary">
                <strong>Examination Phase: Instructions & Guidelines</strong>
                <ul>
                  <li>
                    <strong>Overview of Tasks:</strong> Simulate the process of
                    assessing a patient as in real-life clinical settings.
                  </li>
                  <li>
                    <strong>Navigating Intra and Extra Oral Views:</strong> Use
                    buttons on the simulator window to switch between intra and
                    extra oral views of the patient.
                  </li>
                  <li>
                    <strong>Movement Controls:</strong> Use W, A, S, D keys for
                    movement and the mouse to look around. Space bar for moving
                    up and Shift key for moving down.
                  </li>
                  <li>
                    <strong>Using Dental Tools:</strong> In the intra oral view,
                    use keys 1, 2, 3, etc., to switch between tools. Tab key to
                    exit from the tools.
                  </li>
                  <li>
                    <strong>Screen Control:</strong> Press the Escape key to
                    freeze the screen.
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} md={4} >
            <Help />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Instructions;
