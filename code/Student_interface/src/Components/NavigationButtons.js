import React from 'react';

const NavigationButtons = ({ handleClick1, handleClick, isSubmitDiagnosis }) => {
    return (
        <>
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <hr style={{ borderTop: '3px solid #bbb' }} />
            </div>
            <div style={{
                marginTop: "20px",
                display: "grid",
                gridTemplateColumns: "200px 1fr 200px",
                gridGap: 20,
                marginLeft: "20px",
                marginRight: "20px",
            }}>
                <div className="bleft">
                    <button className="custom-button1" onClick={handleClick1}>
                        Back
                    </button>
                </div>
                <div className="bmid">Click next after completing the conversation</div>
                <div className="bright">
                    <button className="custom-button2" onClick={handleClick}>
                        Next
                    </button>
                </div>
            </div>
            {isSubmitDiagnosis && (
                <div id="warningMsg" style={{ fontSize: "15px" }}>
                    <div className="alert alert-dismissible alert-danger">
                        <strong>Allready submitted the answers.</strong> Can not modify Answers.
                    </div>
                </div>
            )}
        </>
    );
};

export default NavigationButtons;
