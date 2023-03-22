import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>NavBAr</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/users">Users</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Routes>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Users />} path="/users"></Route>
          <Route element={<Home />} path="/"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/* <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Users">Users</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route Component={<Home />} path="/" />
        <Route Component={<Users />} path="/users" />
        <Route Component={<About />} path="/about" />
      </Routes>
      <Router></Router> */
