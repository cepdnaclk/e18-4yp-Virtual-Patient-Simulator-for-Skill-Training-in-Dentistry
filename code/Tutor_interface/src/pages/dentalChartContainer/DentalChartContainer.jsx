import React from 'react';
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import {DentalChart} from "../Pages.jsx";

const DentalChartContainer = () => {
    return (
        <div>
            <StepperComponent selectedStep={"Dental Chart"}></StepperComponent>
            <DentalChart/>
        </div>
    );
};

export default DentalChartContainer;