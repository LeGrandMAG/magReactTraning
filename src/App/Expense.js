import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonAppBar from "../component/Appbar";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Item(props) {
  const styles = {
    marginTop: "10px",
    display: "flex",
    height: "20px",
    alignItems: "center",
    paddingLeft: "20px"
  };
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {props.id}
      </TableCell>
      <TableCell align="right">{props.title}</TableCell>
      <TableCell align="right">${props.amount}</TableCell>
      <TableCell align="right">{props.date}</TableCell>
    </TableRow>
  );
}

export default function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState({
    id: 0,
    title: "",
    date: "2022-07-17",
    amount: ""
  });

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(tasks));
  }, []);
  let taskElements = [];
  const [exist, setExist] = useState(false);

  function handleChange(event) {
    setInput((prevExpense) => ({
      ...prevExpense,
      [event.target.name]: event.target.value
    }));
  }

  function existToggle() {
    setExist((prevExist) => !prevExist);
  }

  function add() {
    setTasks((prevTask) => [
      ...prevTask,
      { ...input, id: prevTask.length + 1 }
    ]);
  }

  function dele(e) {
    let id = e.target.getAttribute("id");
    setTasks((prev) =>
      prev.filter((item) => prev.indexOf(item.id) !== Number(id))
    );
  }

  function clearList() {
    setTasks([]);
    document.getElementById("input").value = "";
  }
  taskElements = tasks.map((item) => (
    <Item
      key={item.id}
      target={dele}
      id={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  console.log(tasks);

  return (
    <div style={{ marginTop: "100px" }}>
      <TextField
        id="title"
        value={input.title}
        name="title"
        label="Expense"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        style={{}}
        id="amount"
        value={input.amount}
        name="amount"
        label="amount"
        onChange={handleChange}
        variant="outlined"
      />

      <Button onClick={add} variant="contained">
        Add
      </Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} arial-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{taskElements.length > 0 && taskElements}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
