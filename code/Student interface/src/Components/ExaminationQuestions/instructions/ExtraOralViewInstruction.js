import React from 'react';
import TitleBox from "../TitleBox";
import QuestionBox from "../QuestionBox";

const ExtraOralViewInstruction = () => {

    const title = "EXTRA ORAL VIEW EXAMINATION"
    const subTitle = ""

    return (
        <div>
            <TitleBox title={title} subTitle={subTitle}/>
            <QuestionBox><p>Since Patient looks fit and healthy , please click Enter INTRA ORAL View button to proceed with the rest of the examination.</p></QuestionBox>
        </div>
    );
};

export default ExtraOralViewInstruction;