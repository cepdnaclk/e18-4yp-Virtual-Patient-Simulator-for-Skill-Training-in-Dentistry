import React from 'react';

const TitleBox = ({title,subTitle}) => {

    const instructionBoxStyle = {
        backgroundColor: "snow",
        border: "1px solid black",
        color: "black",
        padding: "10px",
        fontSize: "14px",
        width: "300px", // You can adjust this width to suit your content
        minHeight: "100px", // Set a minimum height or set it as per your design requirements
        alignSelf: "flex-start", // Align this specific item to the start if needed
    };

    return (
        <div>
            <div style={instructionBoxStyle}>
                <p>{title}</p>
                <p>{subTitle}</p>
            </div>
        </div>
    );
};

export default TitleBox;