import "./App.css";
import "./Style/core.scss";
import HeaderData from "./Components/HeaderData";
import DayCards from "./Components/DayCards";
import HourlyTable from "./Components/HourlyTable";
import { getWeather } from "./Servises/getWeather";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
      (res) => {
        console.log(res);
      }
    );
  }, []);

  return (
    <div className="App ">
      <HeaderData />
      <DayCards />
      <HourlyTable />
    </div>
  );
}

export default App;
