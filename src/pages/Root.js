import { Outlet } from 'react-router-dom';
import MainNavigation from "../components/MainNavigation"

const Root = () => {
    return <div className="wrapper">
        <MainNavigation />
        <Outlet />
    </div>;
}

export default Root;