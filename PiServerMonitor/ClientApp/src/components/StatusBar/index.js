import StatusBar from "./StatusBar";
import CheckAuth from "../../hocs/CheckAuth/CheckAuth";
import WithStats from "../../hocs/WithStats";
const withStats = WithStats(StatusBar, 500);
const finalStatusBar = CheckAuth(withStats);
export default finalStatusBar;
