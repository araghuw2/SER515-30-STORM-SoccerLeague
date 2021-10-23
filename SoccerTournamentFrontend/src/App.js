import React, { Component } from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router";
import LoginForm from "./components/loginForm";
import Home from "./components/home";
import News from "./components/news";
import Video from "./components/video";
import CreateTeam from "./components/createTeam";
import "./App.css";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-container">
          <div className="page-wrap">
            <NavBar />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/news" component={News} />
              <Route path="/video" component={Video} />
              <Route path="/login" component={LoginForm} />
              <Route path="/createteam" component={CreateTeam} />
            </Switch>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
