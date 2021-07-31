import User from "./user.service";
import axios from "axios";
const webAPI = {
    getInfo: async () => {
        if(User.isAuthenticated()){
            let token = User.getCurrentToken();
            try{
                let response = await axios.get("/rpi/stats", {
                    headers:{
                        Accept: "application/json",
                        Authorization: "Bearer " + token
                    }
                } );
                return response.data;
            }catch (e) {
                return null;
            }
        }
        return null;
    },
    shutdownRaspberry:async()=>{
        if(await User.isAuthenticated()){
            let token = User.getCurrentToken();
          
            await axios.post("/rpi/shutdown", {}, {
                        headers:{
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`
                        }
            } );
           
        }
    },
    rebootRaspberry:async () => {
        if(await User.isAuthenticated()){
            let token = User.getCurrentToken();
            await axios.post("/rpi/reboot", {}, {
                    headers:{
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
            } );
        }
    }
};
export default webAPI;
