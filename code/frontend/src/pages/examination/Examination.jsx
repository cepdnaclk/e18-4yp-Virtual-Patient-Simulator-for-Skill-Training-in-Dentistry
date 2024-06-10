// import {ThreeDModel} from "../../components/Components.jsx";
//
// const Examination = () => {
//     const handleUnityData = (data) => {
//         console.log("Data received from Unity:", data);
//     };
//     const getSendMessageToUnity = (sendMessage) => {
//         console.log("getSendMessageToUnity called, function: ", sendMessage);
//     };
//     return (
//         <div>
//             <h1>Examination</h1>
//             {/*<div>*/}
//             {/*    <ThreeDModel*/}
//             {/*        onUnityData={handleUnityData}*/}
//             {/*        onSendMessageToUnity={getSendMessageToUnity}/>*/}
//             {/*</div>*/}
//         </div>
//     )
// }
// export default Examination

// Examination.jsx

import React, { useState } from 'react';
import { Grid, IconButton, Paper } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import './examination.scss';

const Examination = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleToggleFullscreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <Paper elevation={3} className="examination-container">
            <Grid container>
                {!isFullScreen && (
                    <Grid item md={6} className="questions-container">
                        {/* Replace the below div with your actual MCQ questions component */}
                        <div className="questions">
                            <p> Questions </p>
                        </div>
                    </Grid>
                )}
                <Grid item md={isFullScreen ? 12 : 6} className="image-container">
                    <IconButton onClick={handleToggleFullscreen} className="toggle-button">
                        {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                    </IconButton>
                    {isFullScreen && (
                        <IconButton onClick={handleToggleFullscreen} className="toggle-questions-button">
                            <FullscreenExitIcon />
                        </IconButton>
                    )}
                    <div className="image">
                        <p> Images </p>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Examination;
