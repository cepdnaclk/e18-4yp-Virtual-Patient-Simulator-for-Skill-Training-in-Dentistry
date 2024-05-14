import {useEffect, useRef, useState} from 'react';
import {
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Grid
} from '@mui/material';

import {AddMainType} from "../../components/Components.jsx";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './BasicCaseDetails.scss';
import axios from "axios";
import config from "../../config.js";

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

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // List to hold missing field names
        let missingFields = [];

        // Check for each required field and add the name of the field if it's missing
        if (!mainType) missingFields.push("Main Type");
        if (!complaintType) missingFields.push("Complaint Type");
        if (!caseScenario) missingFields.push("Case Scenario");
        if (!selectedFile) missingFields.push("Image");

        // If there are any missing fields, show an alert and return
        if (missingFields.length > 0) {
            alert(`Please complete all required fields: ${missingFields.join(', ')}.`);
            return;
        }

        // Create a FormData object to build up the data to send
        const formData = new FormData();
        formData.append('mainTypeName', mainType);
        formData.append('complaintTypeName', complaintType);
        formData.append('caseScenario', caseScenario);
        formData.append('file', selectedFile);

        // Construct the API URL
        const url = `${config.apiBaseUrl}dentalComplaintCases/createCase`;

        // Use axios to send a POST request
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Case created successfully:', response.data);
            // Handle further actions here, such as clearing the form or redirecting the user
        } catch (error) {
            console.error('Error creating case:', error.response ? error.response.data : error);
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
                // Optionally, you might want to update the local list of main types or clear the newType state
                setMainTypes(prevTypes => [...prevTypes, newType]); // Update the local state with the new type
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
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={10}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} className="image-upload-container">
                                    <div className="upload-section">
                                        {/* Drag and drop area */}
                                        <div className="drag-drop-area" onDrop={(e) => {
                                            e.preventDefault();
                                            handleDrop(e.dataTransfer.files);
                                        }} onDragOver={(e) => e.preventDefault()}>
                                            <CloudUploadIcon fontSize="large" />
                                            <Typography>Drag and drop files here</Typography>
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
                                                Browse Files
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
                                            label="Compalint Type"
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
                                    <Button onClick={handleSubmit} variant="contained" color="primary">
                                        Create Case
                                    </Button>

                                </Grid>
                            </Grid>
                </Grid>
            </Grid>
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
