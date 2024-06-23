import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Icon, Snackbar, Alert, Box, Grid
} from '@mui/material';

import Shape1 from '../../assets/Shape1.png';
import imagesArray from "../../data.js";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import {useNavigate} from "react-router-dom";

function DentalChart() {
    const [toothPresent, setToothPresent] = useState('yes');
    const [currentStatus, setCurrentStatus] = useState('');
    const [selectedShape, setSelectedShape] = useState('');
    const [options, setOptions] = useState("default")
    const navigate = useNavigate();

    const handleToothPresentChange = (event) => {
        setToothPresent(event.target.value);
        if (event.target.value === 'no') {
            setCurrentStatus('');
        }
    };

    const handleCurrentStatusChange = (event) => {
        setCurrentStatus(event.target.value);
    };

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleImageSelect = (id) => {
        setSelectedShape(id);
    };

    const handleUpdateTooth = () => {
        if (toothPresent === 'yes') {
            setOptions(currentStatus+selectedShape);
        } else {
            setOptions("default");
        }
        setIsDialogOpen(false);
    }

    function handleNext() {
        navigate("/recordPlaqueScore");
    }

    return (
        <div>
            <StepperComponent selectedStep={"Dental Chart"}></StepperComponent>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={11} sx={{boxShadow: 3, padding: 2, borderRadius: 1}}>
            {/* Button to open the dialog */}
            <Button variant="contained" color="primary" onClick={handleOpenDialog}>
                Update Tooth Status
            </Button>
            <div>{options}</div>
            <img src={Shape1} alt="Dental Chart" />

            {/* Dialog for updating tooth status */}
            <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth >
                <DialogTitle>Details for Tooth</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="tooth-present-label">Tooth Present</InputLabel>
                        <Select
                            labelId="tooth-present-label"
                            id="tooth-present-select"
                            value={toothPresent}
                            label="Tooth Present"
                            onChange={handleToothPresentChange}
                        >
                            <MenuItem value="yes">Yes</MenuItem>
                            <MenuItem value="no">No</MenuItem>
                        </Select>
                    </FormControl>
                    {toothPresent === 'yes' && (
                    <div>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="current-status-label">Current Status</InputLabel>
                        <Select
                            labelId="current-status-label"
                            id="current-status-select"
                            value={currentStatus}
                            label="Current Status"
                            onChange={handleCurrentStatusChange}
                        >
                            <MenuItem value="cavity">Cavity</MenuItem>
                            <MenuItem value="inlayFilling">Inlay Filling</MenuItem>
                            <MenuItem value="amalgamFilling">Amalgam Filling</MenuItem>
                            <MenuItem value="whiteFilling">White Filling</MenuItem>
                        </Select>
                    </FormControl>
                        <div style={{ marginTop: '20px' }}>
                            <div>Please select the shape from the following:</div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop:'20px' }}>
                                {imagesArray.map((image) => (
                                    <img
                                        key={image.id}
                                        src={image.src}
                                        alt={image.alt}
                                        style={{
                                            width: '50px', // Set your desired size
                                            cursor: 'pointer',
                                            border: selectedShape === image.id ? '2px solid blue' : 'none'
                                        }}
                                        onClick={() => handleImageSelect(image.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleUpdateTooth} color="primary">
                        Update Tooth
                    </Button>
                </DialogActions>
            </Dialog>
            <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button onClick={() => handleNext()} variant="contained" color="primary">
                    Next
                </Button>
            </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default DentalChart;
