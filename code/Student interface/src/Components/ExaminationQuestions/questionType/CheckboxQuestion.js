import React from "react";

const CheckboxQuestion = ({ question }) => {
    const { questionText, questionImageUrl, answers } = question;

    return (
        <div>
            <h5>{question.question}</h5>
            {questionImageUrl && <img src={questionImageUrl[0]} alt="Question" style={{ width: '100px', marginBottom: '10px' }} />}
            {answers &&
                <form>
                    {Object.entries(answers).map(([option, {isChecked, imageUrl}]) => (
                        <div key={option}>
                            {(option || imageUrl) &&
                                <label>
                                    <input type="checkbox" name={option} checked={isChecked}/>
                                    {option}
                                    {imageUrl &&
                                        <img src={imageUrl} alt={option} style={{width: '50px', marginLeft: '10px'}}/>}
                                </label>
                            }
                        </div>
                    ))}
                </form>
            }
        </div>
    );
};

export default CheckboxQuestion;
