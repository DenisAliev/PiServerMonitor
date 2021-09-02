import ControlButtons from "./ControlButtons";
import CheckAuth from "../../hocs/CheckAuth/CheckAuth";
export const ChControlButtons = CheckAuth(ControlButtons)
export default ControlButtons;