import React, { Component } from "react";
import "./footer.css";
class Footer extends React.Component {
  render() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="row">
              {/* Column 1 */}
              <div className="col">
                <h4>VIKRAM</h4>
                <ul className="list-unstyled">
                  <li>123456</li>
                  <li>India</li>
                  <li>1275E,East University drive</li>
                </ul>
              </div>
              {/* Column 2 */}
              <div className="col">
                <h4>ARU</h4>
                <ul className="list-unstyled">
                  <li>123456</li>
                  <li>India</li>
                  <li>1275E,East University drive</li>
                </ul>
              </div>
              {/* Column 3 */}
              <div className="col">
                <h4>TAPS</h4>
                <ul className="list-unstyled">
                  <li>123456</li>
                  <li>India</li>
                  <li>1275E,East University drive</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              <p className="col-sm">
                &copy;{new Date().getFullYear()} PROJECT31 | ALL RIGHTS RESERVED
                | Terms Of Service | Privacy
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
