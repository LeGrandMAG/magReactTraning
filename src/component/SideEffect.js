import { useState, useEffect } from "react";

export default function SideEffect() {
  const url = "https://swapi.dev/api/people/";
  const [people, setPeople] = useState({});
  const [count, setCount] = useState(1);
  const peopleElement = "";
  useEffect(
    function () {
      fetch(url + count)
        .then((res) => res.json())
        .then((res) => setPeople(res));
    },
    [count]
  );

  return (
    <div>
      <pre>{JSON.stringify(people, null, 2)}</pre>
      <button onClick={() => setCount(count + 1)}>Next character</button>
    </div>
  );
}
