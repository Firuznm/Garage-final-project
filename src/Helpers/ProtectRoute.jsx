import { Navigate, useNavigate } from "react-router-dom";
import { UserContext, } from "../Contexts/AuthContext";
import { useContext } from "react";
import Loading from "../layouts/Dashboard/Components/Loading";

export default function ProtectRoute({ children }) {
    
    const { user } = useContext(UserContext);
    if (user.role === "superadmin" || user.role === "admin") return <>{children}</>;
    else if (user.role === null) return <Loading/>;
    else {
        return <Navigate to={"/adminlogin"} />;
    }
}
