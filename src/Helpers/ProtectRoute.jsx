import { Navigate, useNavigate } from "react-router-dom";
import { userContext } from "../Contexts/AuthContext";
import { useContext } from "react";

export default function ProtectRoute({ children }) {
    const { user } = useContext(userContext);
	// console.log(user)
    if (user.role === "superadmin" || user.role === "admin") return <>{children}</>;
    else if (user.role === null) return <h1>... loading</h1>;
    else {
        return <Navigate to={"/adminlogin"} />;
    }
}
