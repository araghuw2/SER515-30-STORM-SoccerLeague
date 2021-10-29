import React, { Component } from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router";
import LoginForm from "./components/loginForm";
import Home from "./components/home";
import News from "./components/news";
import Video from "./components/video";
import SignUp from "./components/SignUp";
import ViewTeamDeatils from "./components/viewTeamDetails";
import "./App.css";
import Footer from "./components/footer";
import MyProfile from "./components/myProfile";
import AboutUs from "./components/aboutUs";

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
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/login" component={LoginForm} />
              <Route path="/signup" component={SignUp}/>
              <Route path="/myprofile" component={MyProfile}/>
              <Route path="/viewteamdetails" component={ViewTeamDeatils}/>
              <Route path="/signout" component={Home}/>
              <Route path="/" component={Home} />
            </Switch>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
