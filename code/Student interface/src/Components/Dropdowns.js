import React from 'react';
import { Grid } from '@mui/material';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Dropdowns = ({ handleSection, handleSelect, questionsForDropdown, selectedCaseDetails }) => {
    return (
        <Grid container style={{ marginLeft: "1px" }}>
            <Grid item xs={6}>
                <Dropdown
                    className="phddown1"
                    title="Select the Section"
                    id="dropdown-menu-align-right"
                    onSelect={handleSection}
                >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select the section
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="General Questions">General Questions</Dropdown.Item>
                        <Dropdown.Item eventKey="Medical History">Medical History</Dropdown.Item>
                        <Dropdown.Item eventKey="Smoking and drinking habits">Smoking and drinking habits</Dropdown.Item>
                        <Dropdown.Item eventKey="Dietary history">Dietary history</Dropdown.Item>
                        <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Grid>
            <Grid item xs={6}>
                <div className="phddown2">
                    <DropdownButton
                        className="ddown1"
                        alignRight
                        title="Select the question"
                        id="dropdown-menu-align-right1"
                        onSelect={handleSelect}
                        variant="success"
                    >
                        {questionsForDropdown.length > 0 ? (
                            questionsForDropdown.map((question) => (
                                <Dropdown.Item eventKey={question.id} key={question.id}>
                                    {question.q}
                                </Dropdown.Item>
                            ))
                        ) : (
                            <Dropdown.Item disabled>No questions available</Dropdown.Item>
                        )}
                    </DropdownButton>
                </div>
            </Grid>
        </Grid>
    );
};

export default Dropdowns;
