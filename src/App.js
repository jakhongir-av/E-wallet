import "./App.css";
import Monitoring from "./components/monitoring/Monitoring";
import Main from "./pages/main/Main";
import Modify from "./pages/modify/Modify";
import Register from "./pages/register/register";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Modify />
      </BrowserRouter>
    </div>
  );
}

export default App;
