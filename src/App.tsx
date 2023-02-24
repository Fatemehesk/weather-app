import "./App.css";
import "./Style/header.scss";
import HeaderData from "./Components/HeaderData";
import DayCards from "./Components/DayCards";

function App() {
  return (
    <div className="App ">
      <HeaderData />
      <DayCards />
    </div>
  );
}

export default App;
