import "./App.css";
import Monitoring from "./components/monitoring/Monitoring";
import Card from "./pages/Cards/Card";
import Main from "./pages/main/Main";
import Modify from "./pages/modify/Modify";
import Register from "./pages/register/register";
import AddWallet from "./pages/addWallet/AddWallet";
import LandingPageHeader from "./components/LandingPageHeader/LandingPageHeader";
import History from "./components/History/History"

function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      {/* <Monitoring /> */}
      {/* <Modify /> */}
      {/* <Card /> */}
      {/* <AddWallet /> */}
      <LandingPageHeader />
      <History />
    </div>
  );
}

export default App;
