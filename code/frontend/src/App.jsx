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
import {PrivateRoute} from "./components/Components.jsx";

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
            path: "/dentalChartTest",
            element: <DentalChart/>,
        },
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/createCase",
                    element: <PrivateRoute><BasicCaseDetails /></PrivateRoute>,
                },
                {
                    path: "/historyQuestions",
                    element: <PrivateRoute><HistoryQuestions /></PrivateRoute>,
                },
                {
                    path: "/periodontalScreeningQuestions",
                    element: <PrivateRoute><PeriodontalScreeningQuestions /></PrivateRoute>,
                },
                {
                    path: "/softTissueAssessment",
                    element: <PrivateRoute><SoftTissueAssessment /></PrivateRoute>,
                },
                {
                    path: "/hardTissueAssessment",
                    element: <PrivateRoute><HardTissueAssessment /></PrivateRoute>,
                },
                {
                    path: "/dentalChart",
                    element: <PrivateRoute><DentalChart /></PrivateRoute>,
                },
                {
                    path: "/recordPlaqueScore",
                    element: <PrivateRoute><RecordPlaqueScore /></PrivateRoute>,
                },
                {
                    path: "/radiographs",
                    element: <PrivateRoute><Radiographs /></PrivateRoute>,
                },
                {
                    path: "/sensibilityRecordings",
                    element: <PrivateRoute><SensibilityRecordings /></PrivateRoute>,
                },
                {
                    path: "/hematologicalRecordings",
                    element: <PrivateRoute><HematologicalRecordings /></PrivateRoute>,
                },
                {
                    path: "/diagnosis",
                    element: <PrivateRoute><Diagnosis /></PrivateRoute>,
                },
                {
                    path: "/showCases",
                    element: <PrivateRoute><ShowCases/></PrivateRoute>,
                },
                {
                    path: "/teacherSignup",
                    element: <PrivateRoute><TeacherSignup /></PrivateRoute>,
                },

            ],
        },

    ]);

    return <RouterProvider router={router} />;
}
export default App
