import { useState } from "react";

export default function Form1() {
  var gapi = require("gapi");
  const [form, setForm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form>
      <input />
      <button onClick={handleSubmit}> Send Form </button>
    </form>
  );
}
