import React, { Component } from "react";
import "../App.css";
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="leftSide">
            <div className="main-container">
              <img className="image1" src="/images/soccer.jpeg" alt="/"></img>
              <div className="article">Things to know about League.</div>
              <div>
                <span>by</span>
                VNolas
              </div>
              <div>
                From the Ivy League and Pac-12, to a look at the nation's top
                scorer and one of the top attacks in the nation, here are Five
                Things to Know from the last round of action in women's DI
                soccer.<a href="/">Read more</a>
              </div>
            </div>
            <div className="slideshow">
              <div classname="0">
                <div className="image-article">
                  <img src="/images/image01.jpeg" alt="/"></img>
                </div>
                <div className="description">
                  <a className="desc" href="/">
                    Description 0
                  </a>
                </div>
              </div>
              <div classname="1">
                <div className="image-article">
                  <img src="/images/image1.jpeg" alt="/"></img>
                </div>
                <div className="description">
                  <a className="desc" href="/">
                    Description 1
                  </a>
                </div>
              </div>
              <div classname="2">
                <div className="image-article">
                  <img src="/images/image2.jpeg" alt="/"></img>
                </div>
                <div className="description">
                  <a className="desc" href="/">
                    Description 2
                  </a>
                </div>
              </div>
              <div classname="3">
                <div className="image-article">
                  <img src="/images/image4.jpeg" alt="/"></img>
                </div>
                <div className="description">
                  <a className="desc" href="/">
                    Description 3
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rightSide">
            <div className="headLine"></div>
            <ul>
              <li className="Todo from here"></li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
