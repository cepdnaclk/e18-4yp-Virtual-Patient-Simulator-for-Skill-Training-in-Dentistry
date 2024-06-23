import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    TeacherLogin,
    Home,
    BasicCaseDetails,
    HistoryQuestions,
    PeriodontalScreeningQuestions,
    ShowCases,
    SoftTissueAssessment,
    HardTissueAssessment,
    DentalChart,
    Diagnosis,
    HematologicalRecordings,
    SensibilityRecordings,
    Radiographs,
    RecordPlaqueScore, TeacherSignup
} from "./pages/Pages.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import "./styles/global.scss";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/teacherLogin",
            element: <TeacherLogin />,
        },

        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/createCase",
                    element: <BasicCaseDetails />,
                },
                {
                    path: "/historyQuestions",
                    element: <HistoryQuestions />,
                },
                {
                    path: "/periodontalScreeningQuestions",
                    element: <PeriodontalScreeningQuestions />,
                },
                {
                    path: "/softTissueAssessment",
                    element: <SoftTissueAssessment />,
                },
                {
                    path: "/hardTissueAssessment",
                    element: <HardTissueAssessment />,
                },
                {
                    path: "/dentalChart",
                    element: <DentalChart />,
                },
                {
                    path: "/recordPlaqueScore",
                    element: <RecordPlaqueScore />,
                },
                {
                    path: "/radiographs",
                    element: <Radiographs />,
                },
                {
                    path: "/sensibilityRecordings",
                    element: <SensibilityRecordings />,
                },
                {
                    path: "/hematologicalRecordings",
                    element: <HematologicalRecordings />,
                },
                {
                    path: "/diagnosis",
                    element: <Diagnosis />,
                },
                {
                    path: "/showCases",
                    element: <ShowCases/>,
                },
                {
                    path: "/teacherSignup",
                    element: <TeacherSignup />,
                },

            ],
        },

    ]);

    return <RouterProvider router={router} />;
}
export default App
