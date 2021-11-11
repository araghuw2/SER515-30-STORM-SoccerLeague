import React, { Component } from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router";
import LoginForm from "./components/loginForm";
import Home from "./components/home";
import News from "./components/news";
import Video from "./components/video";
import Rules from "./components/rules";
import SignUp from "./components/SignUp";
import "./App.css";
import Footer from "./components/footer";
import MyProfile from "./components/myProfile";
import CreateTeam from "./components/createTeam";
import AboutUs from "./components/aboutUs";
import ViewTeamDetails from "./components/viewTeamDetails";
import LoanFields from "./components/loanFields";
import Email from "./components/Email";


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
              <Route path="/rules" component={Rules}/>
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/login" component={LoginForm} />
              <Route path="/signup" component={SignUp}/>
              <Route path="/myprofile" component={MyProfile}/>
              <Route path="/createNewTeam" component={CreateTeam} />
              <Route path="/viewteamdetails" component={ViewTeamDetails}/>
              <Route path="/loanFields" component={LoanFields} />
              <Route path="/Email" component={Email} />
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
