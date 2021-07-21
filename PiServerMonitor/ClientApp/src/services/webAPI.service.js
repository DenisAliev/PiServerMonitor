import User from "./user.service";
import axios from "axios";
const webApi = {
    getInfo: async () => {
        if (User.isAuthenticated()) {
            try {
                let response = await axios.get(`${process.env.URL}/data/common/info`);
                return response.data;
            }catch{
                return null;
            }
        }
        return null
    }
};
