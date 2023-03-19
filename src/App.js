import "./App.css";
import Monitoring from "./components/monitoring/Monitoring";
import Main from "./pages/main/Main";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      <Monitoring />
    </div>
  );
}

export default App;
