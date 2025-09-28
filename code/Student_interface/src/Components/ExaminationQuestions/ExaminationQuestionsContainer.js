import React, { useContext, useEffect, useState } from 'react';
import { StepContext } from '../../context/StepContext';
import IntraOralViewInstruction from "./instructions/IntraOralViewInstruction";
import ExtraOralViewInstruction from "./instructions/ExtraOralViewInstruction";
import ExaminationQuestionSections from "./ExaminationQuestionSections"; // Adjust the path as necessary

const ExaminationQuestionsContainer = ({ unityData }) => {
    const [messageFromUnity, setMessageFromUnity] = useState('ExtraOral');
    const [noOfClickIntra,setNoOfClickIntra] = useState(0);

    useEffect(() => {
        console.log("unityData: ",unityData)
        if(unityData === "MessageFromUnity"){
            setNoOfClickIntra(noOfClickIntra+1);
        }
        setMessageFromUnity(unityData);
    }, [unityData]);

    return (
        <div>
            {(unityData === "MessageFromUnity" && noOfClickIntra==1) ? (
                <IntraOralViewInstruction />
            ) : unityData === "Tool tray toggled: Active" || unityData === "Tool tray toggled: Inactive" ? (
                <ExaminationQuestionSections />
            ) :(
                <ExtraOralViewInstruction />
            )}
        </div>
    );
};

export default ExaminationQuestionsContainer;
