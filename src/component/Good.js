import "../css/styles.css";

function Good(props) {
  return (
    <div className="g-element">
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Good;
