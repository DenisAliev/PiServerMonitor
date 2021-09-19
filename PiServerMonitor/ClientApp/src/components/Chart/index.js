import WithStats from "../../hocs/WithStats";
import Chart from "./Chart";
import CheckAuth from "../../hocs/CheckAuth";
const withStats = WithStats(Chart, 10_000);
const finalChart = CheckAuth(withStats);
export default finalChart;