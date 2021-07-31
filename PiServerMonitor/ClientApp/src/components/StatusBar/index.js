import StatusBar from "./StatusBar";
import {checkAuth} from "../../hocs/CheckAuth/CheckAuth";
export const ChStatusBar = checkAuth(StatusBar);
export default StatusBar;


