import "./css/styles.css";

import Navbar from "./component/Navbar";
import Box from "./component/Box";
import boxes from "./component/boxes";
import Joke from "./component/Joke";
import jokeData from "./data/jokeData";
import Form1 from "./component/Form1";
import Form from "./component/Form";
import Magic from "./component/Magic";
import CheckUserAge from "./component/CheckUserAge";
import SideEffect from "./component/SideEffect";
import Meme from "./component/Meme";
import React, { Component, useState, useEffect } from "react";
import WindowTracker from "./component/WindowTracker";
function Page() {
  /* The jokeElements displays a list of joke and their punclines.*/
  /*const jokeElements = jokeData.map((joke) => (
    <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
  )); */

  /*The toggle function will toggle the box on and off */

  /* This variable will return a list of box components. */
  /*const squareElements = squares.map((square) => (
    <Box toggle={toggle} key={square.id} on={square.on} id={square.id} />
  ));*/

  return (
    <div className="oss">
      <div className="warning">
        <p>This website is only visible from a computer</p>
      </div>
      <div className="bg">
        <WindowTracker />
      </div>
    </div>
  );
}

export default Page;
