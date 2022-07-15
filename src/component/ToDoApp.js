import { useState } from "react";

function Item(props) {
  return (
    <div>
      <p>""{props.text}""</p>
      <button>Delete</button>
    </div>
  );
}

export default function ToDoApp() {
  const [tasks, setTasks] = useState(["Eat"]);

  function add(event) {
    setTasks((prev) => prev.push(event.target.value));
  }
  console.log(tasks);
  return (
    <div>
      <input />
      <button onClick={add}>Add</button>
    </div>
  );
}
