import Authentication from "./authentication.service";
const User = {
    isAuthenticated:()=>{
        return window.localStorage.getItem("access-token")!==null;
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