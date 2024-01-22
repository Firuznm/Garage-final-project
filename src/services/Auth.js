import myshop from "../Helpers/MyShop";

export const LoginCall = (data) => {
    let res = myshop.api().post("/login",data);
    return res;
};

export const ProfileCall = (data) => {
   let res= myshop.api().get("/profile",data);
    return res;
};
