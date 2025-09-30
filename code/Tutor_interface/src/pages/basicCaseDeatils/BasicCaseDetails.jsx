import React, {useEffect, useRef, useState} from 'react';
import {
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Grid, Box, Snackbar, Alert, CircularProgress
} from '@mui/material';

import {AddMainType} from "../../components/Components.jsx";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './basicCaseDetails.scss';
import axios from "axios";
import config from "../../config.js";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import {useNavigate} from "react-router-dom";
import {useCase} from "../../contexts/CaseContext.jsx";

const BasicCaseDetails = () => {
    const [image, setImage] = useState(null);
    const [mainType , setMainType] = useState('');
    const [complaintType, setComplaintType] = useState('');
    const [caseScenario, setCaseScenario] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [newType, setNewType] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [mainTypes, setMainTypes] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [severity, setSeverity] = useState('info');
    const { caseDetails, updateCaseDetails, clearCaseDetails } = useCase();

    useEffect(() => {
        const url = `${config.apiBaseUrl}dentalComplaintCases/getAllDentalComplaintMainTypes`;
        axios.get(url)
            .then(response => {
                setMainTypes(response.data.mainTypeNames);
            })
            .catch(error => {
                console.error('Error fetching main types:', error);
            });
    }, []);

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const file = files[0];
            setImage(URL.createObjectURL(file)); // For displaying the image preview
            setSelectedFile(file); // Setting the file
        }
    };


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // for displaying the preview
            setSelectedFile(file); // setting the file
        }
    };

    const handleDrop = (event) => {
        event.preventDefault(); // Prevent default behavior (Prevent file from being opened)
        const file = event.dataTransfer.files[0]; // Access files
        if (file) {
            setImage(URL.createObjectURL(file)); // for displaying the preview
            setSelectedFile(file); // setting the file
        }
    };


    const handleCancelUpload = () => {
        // Reset the file input and clear related states
        setSelectedFile(null);
        setUploadProgress(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        // Abort the file upload request here if necessary
    };

    const handleMainTypeChange = (event) => {
        setMainType(event.target.value);
    }
    const handleComplaintTypeChange = (event) => {
        setComplaintType(event.target.value);
    };
    const handleNewTypeChange = (event) => {
        setNewType(event.target.value);
    };

    const handleCaseScenarioChange = (event) => {
        setCaseScenario(event.target.value);
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();

        let missingFields = [];
        if (!mainType) missingFields.push("Main Type");
        if (!complaintType) missingFields.push("Complaint Type");
        if (!caseScenario) missingFields.push("Case Scenario");
        if (!selectedFile) missingFields.push("Image");

        if (missingFields.length > 0) {
            setIsLoading(false);
            setSnackbarMessage(`Please complete all required fields: ${missingFields.join(', ')}`);
            setSeverity('error');
            setOpenSnackbar(true);
            return;
        }

        const formData = new FormData();
        formData.append('mainTypeName', mainType);
        formData.append('complaintTypeName', complaintType);
        formData.append('caseScenario', caseScenario);
        formData.append('file', selectedFile);

        const url = `${config.apiBaseUrl}dentalComplaintCases/createCase`;

        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Case created successfully:', response.data);
            updateCaseDetails({
                caseId: response.data.caseId,
                caseName: response.data.caseName,
                caseScenario: response.data.caseScenario,
                mainComplaintType: response.data.mainComplaintType,
                imgUrl: response.data.thumbnailImageURL
            });
            setSnackbarMessage(`Basic details added successfully`);
            setSeverity('success');
            navigate('/historyQuestions');
        } catch (error) {
            console.error('Error creating case:', error);
            setIsLoading(false);
            setSnackbarMessage(`Something went wrong. Please try again.`);
            setSeverity('error');
        } finally {
            setOpenSnackbar(true);
            setIsLoading(false);
        }
    };



    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleAddType = () => {
        const url = `${config.apiBaseUrl}dentalComplaintCases/createDentalComplaintMainType`;

        axios.post(url, { mainTypeName: newType })
            .then(response => {
                console.log('Main Type Added:', response.data);
                setMainTypes(prevTypes => [...prevTypes, newType]);
                setMainType(newType);
                setNewType(''); // Clear the input after successful addition
                handleClose(); // Close the dialog
            })
            .catch(error => {
                console.error('Error adding main type:', error);
            });
    };


    return (
        <div className="basic-case-details">
            <StepperComponent selectedStep={"Basic Details"}></StepperComponent>
            <Box position="relative" minHeight="100vh">
                {isLoading && (
                    <Box position="absolute" top="20%" left="50%" style={{ transform: 'translate(-50%, -50%)' }}>
                        <CircularProgress />
                    </Box>
                )}
                {!isLoading && (
            <Grid container justifyContent="center" >
                <Grid item xs={12} sm={11} sx={{ boxShadow: 3, padding: 2, borderRadius: 1}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} className="image-upload-container">
                                    <div className="upload-section">
                                        {/* Drag and drop area */}
                                        <div className="drag-drop-area" onDrop={(e) => {
                                            e.preventDefault();
                                            handleDrop(e.dataTransfer.files);
                                        }} onDragOver={(e) => e.preventDefault()}>
                                            <CloudUploadIcon fontSize="large" />
                                            <Typography>Drag and Drop the Case Thumbnail Image</Typography>
                                            {image && (
                                                <div className="file-status">
                                                    <span className="file-name">screenshot.png</span>
                                                    <div className="upload-progress" style={{ width: `${uploadProgress}%` }}></div>
                                                    <button className="cancel-upload" onClick={handleCancelUpload}>×</button>
                                                </div>
                                            )}
                                        </div>
                                        {/* File selection input */}
                                        <input
                                            accept="image/*"
                                            className="upload-input"
                                            id="upload-thumbnail"
                                            type="file"
                                            onChange={handleFileChange} // Updated to use the correct handler
                                            hidden
                                        />

                                        <label htmlFor="upload-thumbnail">
                                            <Button component="span" startIcon={<CloudUploadIcon />}>
                                                Browse Image
                                            </Button>
                                        </label>


                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} className="form-inputs-container">
                                    <div className="form-section">
                                        <FormControl fullWidth margin="normal">
                                            <InputLabel id="main-type-label">Select the Main
                                                type</InputLabel>
                                            <Select
                                                labelId="main-type-label"
                                                id="main-type-select"
                                                value={mainType}
                                                label="Select the Main type"
                                                onChange={handleMainTypeChange}
                                            >
                                                {mainTypes.map((type, index) => (
                                                    <MenuItem key={index} value={type.trim()}>{type}</MenuItem>
                                                ))}
                                                <MenuItem value="add-new">
                                                    <Button startIcon={<AddCircleOutlineIcon/>}
                                                            onClick={handleClickOpen}>
                                                        Add New Type
                                                    </Button>
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                        <TextField
                                            fullWidth
                                            margin="normal"
                                            id="compalint-type"
                                            label="Complaint"
                                            variant="outlined"
                                            value={complaintType}
                                            onChange={handleComplaintTypeChange}
                                        />
                                        <TextField
                                            fullWidth
                                            margin="normal"
                                            id="case-scenario"
                                            label="Case Scenario"
                                            variant="outlined"
                                            value={caseScenario}
                                            onChange={handleCaseScenarioChange}
                                        />
                                    </div>
                                    <Box display="flex" justifyContent="flex-end" mt={2}>
                                        <Button onClick={handleSubmit} variant="contained" color="primary">
                                            Next
                                        </Button>
                                        <Snackbar
                                            open={openSnackbar}
                                            autoHideDuration={6000}
                                            onClose={handleSnackbarClose}
                                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}  // Positions the Snackbar at the top center
                                        >
                                            <Alert onClose={handleSnackbarClose} severity={severity} sx={{ width: '100%' }}>
                                                {snackbarMessage}
                                            </Alert>
                                        </Snackbar>
                                    </Box>

                                </Grid>
                            </Grid>
                </Grid>
                <Box display="flex" justifyContent="flex-end" mt={2}>
                    <Typography variant="h6" gutterBottom>New to the system? 👉 </Typography>
                    <Button  variant="contained" color="primary">
                        <a href="https://docs.google.com/document/d/1_ySUF1pEpn02zSNgCarxD4ZEnyougR06VH493kVkpx8/edit?usp=sharing" target="_blank">Check out these sample questions!</a>
                    </Button>
                </Box>
            </Grid>
                )}
            </Box>
            <AddMainType
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                onAddType={handleAddType}
                newType={newType}
                setNewType={setNewType}
            />
        </div>
    );
};

export default BasicCaseDetails;
