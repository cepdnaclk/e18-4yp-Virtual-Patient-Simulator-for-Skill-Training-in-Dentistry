import {Outlet} from "react-router-dom";
import NavigationBar from "./navigationBar/NavigationBar.jsx";


const MainLayout = () => {
    return (
        <>
        <NavigationBar username={`Abilash`}/>
        <Outlet/>
        </>


    )
}
export default MainLayout
