import Authentication from "./authentication.service";
const User = {
    isAuthenticated:async()=>{
        let token = window.localStorage.getItem("access-token");
        if(token){
            return await Authentication.isValidToken(token);
        }
        return false;
    },
    removeToken:()=>{
        window.localStorage.removeItem("access-token");
    },
    setToken:(accessToken)=>{
        window.localStorage.setItem("access-token",accessToken);
    },
    getCurrentToken:()=>{
        let token = window.localStorage.getItem("access-token");
        if(token){
            return token;
        }else{
            return null;
        }
    }
};
export default User;