import "./css/styles.css";

import Navbar from "./component/Navbar";
import Box from "./component/Box";
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
import ToDoApp from "./component/ToDoApp";

function Page() {
  return (
    <div className="oss">
      <div className="warning">
        <p>This website is only visible from a computer</p>
      </div>
      <div className="bg">
        <ToDoApp />
      </div>
    </div>
  );
}

export default Page;
