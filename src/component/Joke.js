import { useState } from "react";
/*This is a component that shows and hide bunchline jokes */
export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {
    /*toggleShown*/
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <div className="joke-container">
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShown}>
        {isShown ? "Hide Punchline" : "Show Punchline"}
      </button>
      <hr />
    </div>
  );
}
