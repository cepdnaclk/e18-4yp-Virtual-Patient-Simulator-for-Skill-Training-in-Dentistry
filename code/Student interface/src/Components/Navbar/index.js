import React, {useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { UserLogoutActions } from '../../Actions/User/UserLogoutActions';
import { ExaminationActions } from '../../Actions/Examination/ExaminationActions';
import { CaseActions } from '../../Actions/Case/CaseActions';
import { DiagnosisActions } from '../../Actions/Diagnosis/DiagnosisActions';
import { InvestigationActions } from '../../Actions/Investigation/InvestigationActions';
import { ScoreActions } from '../../Actions/Score/ScoreActions';
import { historyTakingActions } from '../../Actions/historyTakingQ/historyTakingActions';
import { TimeActions } from '../../Actions/Time/TimeActions';
import {CaseContext} from "../../context/CaseContext";

const Navbar = () => {
  const { userInfomation } = useSelector((state) => state.user);
  const { selectedCaseDetails } = useContext(CaseContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(UserLogoutActions.logout());
    dispatch(ExaminationActions.clearhistory());
    dispatch(CaseActions.clearhistory());
    dispatch(DiagnosisActions.clearhistory());
    dispatch(historyTakingActions.clearhistory());
    dispatch(InvestigationActions.clearhistory());
    dispatch(ScoreActions.clearhistory());
    dispatch(TimeActions.clearhistory());
    const signInDiv = document.getElementById("signInDiv");
    if (signInDiv) {
      signInDiv.style.display = "block"; // Ensure the sign-in button is visible upon logout
    }
    navigate("/");
  };

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hi {userInfomation.name}
          </Typography>
          {selectedCaseDetails && (
              <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                {selectedCaseDetails.caseName}
              </Typography>
          )}
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
