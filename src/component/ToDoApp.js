import { useEffect, useState } from "react";

function Item(props) {
  return (
    <div>
      <p>""{props.text}""</p>
      <button id={props.id} onClick={props.target}>
        Delete
      </button>
    </div>
  );
}

export default function ToDoApp() {
  const [tasks, setTasks] = useState(["Eat"]);
  const [input, setInput] = useState("");
  let taskElements = [];

  function handleChange(event) {
    setInput(event.target.value);
  }
  function add() {
    setTasks((prevTask) => [...prevTask, input]);
  }
  function dele(e) {
    let id = e.target.getAttribute("id");
    setTasks((prev) =>
      prev.filter((item) => prev.indexOf(item) !== Number(id))
    );
  }
  function clearList() {
    setTasks([]);
  }
  taskElements = tasks.map((item) => (
    <Item
      key={item + tasks.indexOf(item)}
      id={tasks.indexOf(item)}
      target={dele}
      text={item}
    />
  ));
  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={add}>Add</button>
      <button onClick={clearList}>Clear</button>
      {taskElements}
    </div>
  );
}
