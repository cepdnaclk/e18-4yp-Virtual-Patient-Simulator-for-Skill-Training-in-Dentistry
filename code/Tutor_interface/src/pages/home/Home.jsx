import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import HomeImage from '../../assets/HomeImage.png';
import './home.scss'

import {TypeAnimation} from "react-type-animation";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const onNavigateTeacher = () => {
        navigate('/teacherLogin');
    }
    const onNavigateStudent = () => {
        navigate('/studentLogin');
    }

    return (
        <Container maxWidth="xl">
            <Box sx={{   alignItems: 'center', justifyContent: 'center', display: 'flex', height: '100vh' }}>
                <Grid container  alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <Typography variant="h2" component="h1" gutterBottom style={{fontWeight:'400',fontSize: '4.75rem', marginBottom:'0px'}}>
                            Virtual Patient
                        </Typography>
                        <Typography variant="h2" component="h1" gutterBottom style={{fontWeight:'500',fontSize: '4.75rem', marginTop:'0px',color:'#1876D1'}}>
                            Simulator
                        </Typography>
                        <Typography variant="h4" component="h1" gutterBottom style={{opacity:'0.7'}}>
                            <TypeAnimation
                                sequence={[
                                    'for Skill Training in Dentistry.',
                                    500,
                                    '',
                                    500
                                ]}
                                repeat={Infinity}
                            />
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom >
                            Virtual training to perfect your dentistry skills & knowledge.
                        </Typography>
                        <Box mt={4}>
                            <Button variant="contained" onClick={onNavigateTeacher} color="primary" sx={{ boxShadow: 'none', padding: '10px 30px', fontSize: 'x-large' }}>
                                I'm a Teacher
                            </Button>
                            <Button variant="outlined" onClick={onNavigateStudent} sx={{ ml: 2, boxShadow: 'none', padding: '10px 30px', fontSize: 'x-large' }}>
                                I'm a Student
                            </Button>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <img src={HomeImage} alt="Home Image" style={{width:'100%'}}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;
