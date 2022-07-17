import { useEffect, useState } from "react";

function Item(props) {
  const styles = {
    marginTop: "10px",
    display: "flex",
    height: "20px",
    alignItems: "center",
    paddingLeft: "20px"
  };
  return (
    <div style={styles}>
      <p style={{ marginRight: "10px" }}>{props.text}</p>
      <button id={props.id} onClick={props.target}>
        Delete
      </button>
    </div>
  );
}

function AlerAlreadyExist(props) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        top: "0px",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(2px)"
      }}
    >
      <div
        style={{
          borderRadius: "5px",
          position: "relative",
          display: "flex",
          width: "30%",
          height: "30%",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          transition: "3s ease"
        }}
      >
        <p>This element already exists</p>
        <button
          style={{
            position: "absolute",
            top: "5px",
            right: "5px"
          }}
          onClick={props.toggle}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  let taskElements = [];
  const [exist, setExist] = useState(false);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function existToggle() {
    setExist((prevExist) => !prevExist);
  }

  function add() {
    setTasks(function (prevTask) {
      if (prevTask.includes(input, 0)) {
        setExist(() => true);
        console.log(exist);
        return [...prevTask];
      } else {
        let p = [...prevTask, input];
        return p;
      }
    });
    document.getElementById("input").value = "";
  }
  function dele(e) {
    let id = e.target.getAttribute("id");
    setTasks((prev) =>
      prev.filter((item) => prev.indexOf(item) !== Number(id))
    );
    document.getElementById("input").value = "";
  }

  function clearList() {
    setTasks([]);
    document.getElementById("input").value = "";
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
    <div id="main">
      <input id="input" onChange={handleChange} />
      <button onClick={add}>Add</button>
      <button onClick={clearList}>Clear</button>
      {taskElements.length == 0 ? <p>There is no element</p> : taskElements}
      {exist && <AlerAlreadyExist toggle={existToggle} />}
    </div>
  );
}
