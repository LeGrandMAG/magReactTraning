/* This is a component about the meme generator */
import React, { useState } from "react";
import meme from "../data/memed";
function Meme() {
  let data = meme.data.memes;

  return (
    <div className="meme-container">
      <div className="meme-form">
        <input type="text" placeholder="Insert text 1" />
        <input type="text" placeholder="Insert text 1" />
        <button className="meme-button">Get a new meme</button>
      </div>
    </div>
  );
}

export default Meme;
