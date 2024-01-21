import { Navigate, useNavigate } from "react-router-dom";
import { userContext } from "../Contexts/AuthContext";
import { useContext } from "react";

export default function AuthRoute({ children }) {
    const navigate = useNavigate();
    const { user } = useContext(userContext);
    if (user ) return <>{children}</>;
    else if (user === null) return <h1>... loading</h1>;
    else {
        return navigate("/adminlogin");
    }
}
