import "./App.css";
import Main from "./pages/main/Main";
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
