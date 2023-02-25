import "./App.css";
import "./Style/core.scss";
import HeaderData from "./Components/HeaderData";
import DayCards from "./Components/DayCards";
import HourlyTable from "./Components/HourlyTable";

function App() {
  return (
    <div className="App ">
      <HeaderData />
      <DayCards />
      <HourlyTable />
    </div>
  );
}

export default App;
