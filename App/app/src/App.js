import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Login from "./Component/Login";
import Register from "./Component/Register";
import ContactState from "./Contexts/Contacts/ContactState";
import AlertState from "./Contexts/Alert/AlertState";
import Alert from "./Component/Alert";
import AuthState from "./Contexts/Auth/AutheState";

function App() {

  return (
    <AuthState>
      <AlertState>
        <ContactState>
          <Router>
            <div className="App">
              <Navbar />
              <Alert />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </Router>
        </ContactState>
      </AlertState>
    </AuthState>
  );
}

export default App;
