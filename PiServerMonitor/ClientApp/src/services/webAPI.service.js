import User from "./user.service";
import axios from "axios";
const webApi = {
    getInfo: async () => {
        if(await User.isAuthenticated()){
            let token = User.getCurrentToken();
            try{
                let response = await axios.get("/data/common/info", {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                } );
                return response.data;
            }catch (e) {
                return null;
            }
        }
    },
    shutUpRaspberry:async()=>{
        if(await User.isAuthenticated()){
            let token = User.getCurrentToken();
            try{
                await axios.post("/act/shutup", {}, {
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                } );
            }catch (e) {
            }
        }
    },
    restartRaspberry:async () => {
        if(await User.isAuthenticated()){
            let token = User.getCurrentToken();
            try{
                await axios.post("/act/restart", {}, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                } );
            }catch (e) {
            }
        }
    }
};
