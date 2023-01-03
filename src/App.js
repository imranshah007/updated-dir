import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewPerson from "./Components/NewPerson";
import AddRet from "./Components/AddRet";
import Retrieve from "./Components/Retrieve";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddRet />
      <Routes>
        <Route path="/" element={<NewPerson />} />
        <Route path="/retrieve" element={<Retrieve />} />
      </Routes>
    </div>
  );
}

export default App;
