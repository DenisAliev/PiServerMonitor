import axios from "axios";
const Authentication = {
    "getToken":async(_login, _password)=>{
        try {
            let response = await axios.post(`${process.env.URL}/auth/token`, {
                login: _login, password: _password
            });
            return response.data?.token;
        }catch (e) {
            return null;
        }
    }
}
export default Authentication;
