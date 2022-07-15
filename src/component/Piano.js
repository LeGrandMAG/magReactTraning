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

import MIDISounds from "midi-sounds-react";

class Page extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  play() {
    this.midiSounds.playChordNow(1, [62], 2.5);
  }
  render() {
    return (
      <div className="oss">
        <div className="warning">
          <p>This website is only visible from a computer</p>
        </div>
        <div className="bg">
          <MIDISounds
            ref={(ref) => (this.midiSounds = ref)}
            appElementName="root"
            instruments={[3]}
          />
          <button id="13" onClick={this.play}>
            Play
          </button>
          <button id="14" onClick={this.play}>
            Play
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
