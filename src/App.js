import "./App.css";
import Monitoring from "./components/monitoring/Monitoring";
import Main from "./pages/main/Main";
import Modify from "./pages/modify/Modify";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      <Monitoring />
      {/* <Modify /> */}
    </div>
  );
}

export default App;
