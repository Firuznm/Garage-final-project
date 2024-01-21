import { API } from "../Helpers/axios";

export const LoginCall = (data) => {
    let res = API.post("/login",data);
    return res;
};

export const ProfileCall = (data) => {
   let res= API.get("/profile",data);
    return res;
};
