import React from 'react';
import TitleBox from "../TitleBox";
import QuestionBox from "../QuestionBox";

const IntraOralViewInstruction = () => {
    const title = "INTRA ORAL EXAMINATION"
    const subTitle = "Periodontal Screening"

    return (
        <div>
            <TitleBox title={title} subTitle={subTitle}/>
            <QuestionBox><p>Press The TOOL TRAY VIEW button to see the dental tools</p></QuestionBox>
        </div>
    );
};

export default IntraOralViewInstruction;