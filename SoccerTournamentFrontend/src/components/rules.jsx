import React, { Component } from "react";

class Rules extends React.Component {
  render() {
    return(
        <div>
            
            <h1><center><u>Tournament Rules</u></center></h1>
            <p> *Soccer Tournament uses the official Fifa rules.</p>
            <h5><u>General</u></h5>
            <ul>
                <li>Each game lasts from 25 to 40 minutes.</li>
                <li>A <b>face mask</b> is mandatory in the tournament premises with the exception of active players.</li>
                <li>Abuse of referees of any kind can result in <b>immediate removal</b> of the person from the ground.</li>
                <li>Teams are required to enter the field of play atleast <b>10 minutes</b> prior to game start time.</li>
                <li>The coach must hand in a roster with all the player names(including the substitutes).</li>
                <li>A team is considered to be forfeited if they do not show up until <b>10 minutes after the game time</b>.</li>
            </ul>
            <h5><u>Player Uniforms and Accessories</u></h5>
            <ul>
                <li>All players are required to wear <b>jerseys</b> during the game.</li>
                <li>Any accessories, with the exception of medical bracelets, are <b>banned</b> during the game.</li>
            </ul>
            <h5><u>Kicks</u></h5>
            <ul>
                <li>Kick off is considered as an indirect kick and one cannot score directly from a kick off.</li>
                <li>Kick-ins are indirect kicks and a goal from this kick is not considered.</li>
                <li>Goal kicks can be taken from any point of the goal box.</li>
                <li>No corner kicks</li>
                <li>The decision of penalty kicks lie in the hands of the referee, who will award one in case of nullification of scoring chance.</li>
            </ul>
            
            <h2><center>PLAY FAIR AND HAVE FUN!</center></h2>
        </div>
    ) 
      }
}

export default Rules;
