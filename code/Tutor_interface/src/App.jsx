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
    RecordPlaqueScore, TeacherSignup, QuestionsPreview, ExtraOralExamination, Investigations, DentalChartContainer
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
                    path: "/extraOralExamination",
                    element: <PrivateRoute><ExtraOralExamination /></PrivateRoute>,
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
                    element: <PrivateRoute><DentalChartContainer /></PrivateRoute>,
                },
                {
                    path: "/recordPlaqueScore",
                    element: <PrivateRoute><RecordPlaqueScore /></PrivateRoute>,
                },
                {
                    path: "/investigations",
                    element: <PrivateRoute><Investigations /></PrivateRoute>,
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
                {
                    path: "/questionsPreview",
                    element: <PrivateRoute><QuestionsPreview /></PrivateRoute>,
                },

            ],
        },

    ]);

    return <RouterProvider router={router} />;
}
export default App
