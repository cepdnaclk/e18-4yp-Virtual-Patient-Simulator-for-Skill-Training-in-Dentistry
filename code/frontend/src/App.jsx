import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    TeacherLogin,
    Home,
    BasicCaseDetails,
    HistoryQuestions,
    PeriodontalScreeningQuestions,
    StudentLogin, ShowCases, HistoryTaking, ExaminationGuideline, Examination
} from "./pages/Pages.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import "./styles/global.scss";
import StepperComponent from "./layout/stepper/StepperComponent.jsx";

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
            path: "/studentLogin",
            element: <StudentLogin />,
        },

        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/createCase",
                    element: <StepperComponent />,
                },
                {
                    path: "/historyQuestions",
                    element: <HistoryQuestions />,
                },
                {
                    path: "/periodontalScreeningQuestions",
                    element: <PeriodontalScreeningQuestions />,
                },
                    //student pages//
                {
                    path: "/showCases",
                    element: <ShowCases/>,
                },
                {
                    path: "/historyTaking",
                    element: <HistoryTaking/>,
                },
                {
                    path: "/examinationGuideline",
                    element: <ExaminationGuideline/>,
                },
                {
                    path: "/examination",
                    element: <Examination/>,
                }

            ],
        },

    ]);

    return <RouterProvider router={router} />;
}
export default App
