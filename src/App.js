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
import Expense from "./App/Expense";
import ButtonAppBar from "./component/Appbar";
import Memory from "./App/Memory";

function Page() {
  return (
    <div className="oss">
      <div className="warning">
        <p>This website is only visible from a computer</p>
      </div>
      <div className="bg">
        <ButtonAppBar />
        <Memory />
      </div>
    </div>
  );
}

export default Page;
