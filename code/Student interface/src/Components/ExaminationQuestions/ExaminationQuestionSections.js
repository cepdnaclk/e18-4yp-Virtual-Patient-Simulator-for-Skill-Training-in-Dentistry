import React, { useContext, useEffect, useState } from 'react';
import { StepContext } from "../../context/StepContext";
import PeriodontalScreening from "./Steps/PeriodontalScreening";
import SoftTissueAssessment from "./Steps/SoftTissueAssessment";
import HardTissueAssessment from "./Steps/HardTissueAssessment";
import Investigations from "./Steps/Investigations";
import Radiographs from "./Steps/Radiographs";
import SensibilityRecordings from "./Steps/SensibilityRecordings";
import HematologicalRecordings from "./Steps/HematologicalRecordings";
import Diagnosis from "./Steps/Diagnosis";
import DentalChart from "../Dental Charts/DentalChart";
import OtherCharts from "./Steps/OtherCharts";

const ExaminationQuestionSections = () => {
    const { step, incrementStep } = useContext(StepContext);
    const [section, setSection] = useState(0);

    const handleComplete = () => {
        incrementStep(step + 1);
    };

    useEffect(() => {
        setSection(step);
    }, [step]);

    return (
        <div>
            {section === 0 ? (
                <PeriodontalScreening onComplete={handleComplete} />
            ) : section === 1 ? (
                <SoftTissueAssessment onComplete={handleComplete} />
            ) : section === 2 ? (
                <HardTissueAssessment onComplete={handleComplete} />
            ) : section === 3 ? (
                <DentalChart onComplete={handleComplete} />
            ) : section === 4 ? (
                <OtherCharts onComplete={handleComplete} />
            ) : section === 5 ? (
                <Investigations onComplete={handleComplete} />
            ) : section === 6 ? (
                <Radiographs onComplete={handleComplete} />
            ) : section === 7 ? (
                <SensibilityRecordings onComplete={handleComplete} />
            ) : section === 8 ? (
                <HematologicalRecordings onComplete={handleComplete} />
            ) : section === 9 ? (
                <Diagnosis onComplete={handleComplete} />
            ) : null}
        </div>
    );
};

export default ExaminationQuestionSections;
