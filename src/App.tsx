import "./App.css";
import "./Style/core.scss";
import HeaderData from "./Components/HeaderData";
import DayCards from "./Components/DayCards";
import HourlyTable from "./Components/HourlyTable";
import Weather from "./Components/weather/";

function App() {
  return (
    <div className="App ">
      <Weather/>
      <DayCards />
      <HourlyTable />
    </div>
  );
}

export default App;
