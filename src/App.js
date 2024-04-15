import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
