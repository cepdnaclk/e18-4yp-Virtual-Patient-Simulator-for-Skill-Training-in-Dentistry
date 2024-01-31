import {useRef, useState} from 'react';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    DialogTitle, Dialog, DialogContent, DialogActions, Grid, CircularProgress
} from '@mui/material';

import {AddMainType} from "../../components/Components.jsx";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './BasicCaseDetails.scss';

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


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            // Simulate file upload progress
            // Replace this with actual upload logic
            setUploadProgress(30); // Placeholder for initial progress
        }
    };

    const handleDrop = (files) => {
        // You would typically handle file upload here, and update progress
        // For this example, let's assume a single file and simulate progress
        const file = files[0];
        handleImageChange({ target: { files: [file] } }); // Reuse your existing method

        // Simulate file upload progress
        const progressInterval = setInterval(() => {
            setUploadProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return Math.min(oldProgress + 10, 100);
            });
        }, 500);
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

    const handleSubmit = () => {
        // You will need to implement form submission logic here
        console.log('Form submitted', {image, complaintType, caseScenario});
    };

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleAddType = () => {
        handleClose();
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
                                            onChange={(e) => handleDrop(e.target.files)}
                                            hidden
                                        />
                                        <label htmlFor="upload-thumbnail">
                                            <Button component="span" startIcon={<CloudUploadIcon/>}>
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
                                                <MenuItem value="pain-teeth">Pain Teeth</MenuItem>
                                                <MenuItem value="pain-teeth">Pain Teeth</MenuItem>
                                                <MenuItem value="pain-teeth">Pain Teeth</MenuItem>
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
