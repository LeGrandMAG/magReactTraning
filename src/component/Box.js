function Box(props) {
  const styles = {
    border: "1px solid black",
    borderRadius: "3px",
    width: "100px",
    height: "100px",
    display: "inline-block",
    margin: "10px",
    justifyContent: "center",
    background: props.on ? "#222222" : "transparent"
  };

  return <div onClick={() => props.toggle(props.id)} style={styles}></div>;
}

export default Box;
