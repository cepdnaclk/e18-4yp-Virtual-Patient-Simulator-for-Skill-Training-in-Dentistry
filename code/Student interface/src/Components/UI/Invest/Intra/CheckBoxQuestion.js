import React from "react";

const CheckboxQuestion = ({ question, questionImageUrl, answers }) => {
    const renderCheckbox = (option, { isChecked, imageUrl }) => (
        <div key={option}>
            <label>
                <input
                    type="checkbox"
                    name={option}
                    checked={isChecked}
                />
                {option}
                {imageUrl && <img src={imageUrl} alt={option} style={{ width: '50px', marginLeft: '10px' }} />}
            </label>
        </div>
    );

    const checkboxes = Object.entries(answers).map(([option, props]) =>
        renderCheckbox(option, props)
    );

    return (
        <div>
            <h5>{question}</h5>
            <img src={questionImageUrl} alt="Question" style={{ width: '100px', marginBottom: '10px' }} />
            <form>{checkboxes}</form>
        </div>
    );
};

export default CheckboxQuestion;
