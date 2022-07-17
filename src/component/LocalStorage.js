import { Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function LocalStorage() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  let e;

  useEffect(() => {}, [input]);
  function handleChange(event) {
    setInput(event.target.value);
    console.log(input);
  }
  function save() {
    setText(input);
    console.log(text);
    localStorage.setItem("word", text);
  }
  let x;
  function retrieve() {
    x = JSON.parse(localStorage.getItem("expense"));
    console.log(x + " Welcome");
  }
  return (
    <div>
      <p>Hello world</p>
      <input onChange={handleChange} id="input" />
      <Button onClick={save}>Save</Button>
      <Button onClick={retrieve}> Retrieve</Button>
      <p>{x}</p>
    </div>
  );
}
