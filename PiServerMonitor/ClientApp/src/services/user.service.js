const User = {
    isAuthenticated:()=>{
        return window.localStorage.getItem("access-token")!==undefined;
    },
    removeToken:()=>{
        window.localStorage.removeItem("access-token");
    },
    setToken:(accessToken)=>{
        window.localStorage.setItem("access-token",accessToken);
    }
};
export default User;