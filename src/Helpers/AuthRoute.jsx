import { useNavigate } from "react-router-dom";
import { UserContext, } from "../Contexts/AuthContext";
import { useContext } from "react";
import Loading from "../layouts/Dashboard/Components/Loading";

export default function AuthRoute({ children }) {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    if (user ) return <>{children}</>;
    else if (user === null) return <Loading/>;
    else {
        return navigate("/adminlogin");
    }
}
