import "./css/styles.css";
import Navbar from "./component/Navbar";
import Meme from "./component/Meme";
import Count from "./component/Count";
import { useState } from "react";
import Box from "./component/Box";
import boxes from "./component/boxes";
import Joke from "./component/Joke";
import jokeData from "./data/jokeData";

export default function Page() {
  const [squares, setSquares] = useState(boxes);
  const [messages, setMessages] = useState(["1", "2"]);
  /* The jokeElements displays a list of joke and their punclines.*/
  const jokeElements = jokeData.map((joke) => (
    <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
  ));
  function toggle(id) {
    /*The toggle function will toggle the box on and off */

    setSquares((prev) => {
      const newSquares = prev.map((x) => {
        return x.id === id ? { ...x, on: !x.on } : x;
      });
      return newSquares;
    });
  }
  /* This variable will return a list of box components. */
  const squareElements = squares.map((square) => (
    <Box toggle={toggle} key={square.id} on={square.on} id={square.id} />
  ));

  return (
    <div className="oss">
      <div className="warning">
        <p>This website is only visible from a computer</p>
      </div>
      <div className="bg">
        <Navbar />
        <h2>
          {messages.length > 0
            ? `You have ${messages.length} ${
                messages.length === 1 ? "message" : "messages"
              }.`
            : "You are all caught up."}
        </h2>
        {/*<Meme />*/}
      </div>
    </div>
  );
}
