/* This cards is a component that render a card about all the place I have travelled to */

function Travel(props) {
  console.log(props);
  return (
    <div className="travel-container">
      <img src={props.link} alt="travel-location" />
      <div>
        <div className="details">
          <p>
            {props.location} <span className="google">{props.googleMaps}</span>
          </p>
          <h3>{props.title}</h3>
          <h4> start Date - end date</h4>
          <a href={props.link}>{props.title}</a>
        </div>
      </div>
    </div>
  );
}

export default Travel;
