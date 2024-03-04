import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Button, Paper, Typography } from '@mui/material';
import './examinationGuideline.scss'; // Ensure the SCSS file is linked

const ExaminationGuideline = () => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    // Function to handle 'Proceed' button click
    const handleProceed = () => {
        // Implement your logic here, e.g., redirecting to another page or changing the view
        console.log('Proceed to the simulation');
    };

    return (
        <Paper className="examinationGuideline" elevation={3}>
            <Typography variant="h2" component="h1" className="guidelineHeader">
                Examination
            </Typography>
            <Typography className="guidelineSubheader">
                Please read the guidelines on how to use the Virtual Patient Simulator before you proceed!
            </Typography>
            <div className="guidelineContent">
                <Typography variant="h5" className="instructionsHeader">
                    Examination Phase: Instructions & Guidelines
                </Typography>
                <ul className="guidelineList">
                    <li>Overview of Tasks: Simulate the process of assessing a patient as in real-life clinical settings.</li>
                    <li>Navigating Intra and Extra Oral Views: Use buttons on the simulator window to switch between intra and extra oral views of the patient.</li>
                    <li>Movement Controls: Use W, A, S, D keys for movement and the mouse to look around. Space bar for moving up and Shift key for moving down.</li>
                    <li>Using Dental Tools: In the intra oral view, use keys 1, 2, 3, etc., to switch between tools. Tab key to exit from the tools.</li>
                    <li>Screen Control: Press the Escape key to freeze the screen.</li>
                </ul>
                <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleCheckboxChange} name="readCheck" />}
                    label="I have read the guidelines"
                    className="readCheckbox"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleProceed}
                    disabled={!checked}
                    className="proceedButton"
                >
                    Proceed
                </Button>
            </div>
        </Paper>
    );
};

export default ExaminationGuideline;
