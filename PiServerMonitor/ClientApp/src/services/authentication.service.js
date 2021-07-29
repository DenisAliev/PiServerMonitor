import axios from "axios";
import User from "./user.service";
const Authentication = {
    getToken:async(_login, _password)=>{
        try {
            let response = await axios.post("/auth/token",{
                login: _login, password: _password
            });
            let token = response.data.access_token;
            return (token !== undefined) ? token: null;
        }catch (e) {
            return null;
        }
    },
    isValidToken:async(_token)=>{
      try {
          let response = await axios.post("/auth/check/token",{
              token:_token
          });
          let isAuthenticated =response.data.isAuthenticated;
          return (isAuthenticated !== undefined)? isAuthenticated: false;
      }catch (e) {
          return false;
      }
    }
}
export default Authentication;
