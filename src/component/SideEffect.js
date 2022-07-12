function Page() {
  const [squares, setSquares] = useState(boxes);
  const [message, setMessages] = useState(["1", "2"]);
  /* The jokeElements displays a list of joke and their punclines.*/
  /*const jokeElements = jokeData.map((joke) => (
  <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
)); */

  /*The toggle function will toggle the box on and off */
  function toggle(id) {
    setSquares((prev) => {
      const newSquares = prev.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
      return newSquares;
    });
  }
  /* This variable will return a list of box components. */
  /*const squareElements = squares.map((square) => (
  <Box toggle={toggle} key={square.id} on={square.on} id={square.id} />
));*/

  return (
    <div className="oss">
      <div className="warning">
        <p>This website is only visible from a computer</p>
      </div>
      <div className="bg">{/*<Meme />*/}</div>
    </div>
  );
}

export default Page;
