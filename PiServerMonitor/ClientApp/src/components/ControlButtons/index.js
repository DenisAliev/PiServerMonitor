import ControlButtons from "./ControlButtons";
import {checkAuth} from "../../hocs/CheckAuth/CheckAuth";
export const ChControlButtons = checkAuth(ControlButtons)
export default ControlButtons;