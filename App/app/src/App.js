import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Login from "./Component/Login";
import Register from "./Component/Register";
import ContactState from "./Contexts/Contacts/ContactState";
import AlertState from "./Contexts/Alert/AlertState";
import Alert from "./Component/Alert";

function App() {
  return (
    <AlertState>
      <ContactState>
        <Router>
          <div className="App">
            <Navbar />
            <Alert/>
            <Switch>
              <Route exact path="/" children={<Home />} />
              <Route path="/about" children={<About />} />
              <Route path="/login" children={<Login />} />
              <Route path="/register" children={<Register />} />
            </Switch>
          </div>
        </Router>
      </ContactState>
    </AlertState>
  );
}

export default App;
