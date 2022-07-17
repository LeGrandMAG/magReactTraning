import images from "../data/images";
import { useState, useEffect } from "react";

function Mage(props) {
  const styles = {
    opacity: props.show ? 1 : 0.1,
    border: "1px solid black"
  };
  return (
    <img
      style={styles}
      alt="hello"
      className="dog-pic"
      src={props.link}
      onClick={() => props.toggle(props.id)}
    />
  );
}
export default function Memory() {
  const [img, setImg] = useState(images);
  const [similar, setSimilar] = useState(
    () => img.filter((item) => item.isShown === false).length
  );

  function blur(id) {
    if (similar > 2) {
      setImg((prev) => {
        const d = prev.map((item) =>
          prev.indexOf(item) === id
            ? { ...item, isShown: !item.isShown }
            : { ...item }
        );
        return d;
      });
    }
  }

  useEffect(() => {
    setSimilar(img.filter((item) => item.isShown === false).length);
    console.log(similar);
  });

  useEffect(
    function () {
      console.log("Updated state");
    }[img]
  );

  const pic = img.map((item) => (
    <Mage
      key={item.id}
      link={item.link}
      toggle={blur}
      show={item.isShown}
      id={img.indexOf(item)}
    />
  ));

  return <div className="dog-container">{pic}</div>;
}
