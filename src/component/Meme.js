/* This is a component about the meme generator */
import React, { useState, useEffect } from "react";
import meme from "../data/memed";
import html2canvas from "html2canvas";
function Meme() {
  const url = "https://api.imgflip.com/get_memes";
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topInput: "",
    bottomInput: "",
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [image, setImage] = useState("");
  useEffect(function () {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }));
  }

  function changeImage(event) {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const link = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: link
    }));
  }
  function saveImage() {
    const img = document.getElementById("download");
    html2canvas(img, { allowTaint: true, useCORS: true }).then(function (
      canvas
    ) {
      const imag = canvas.toDataURL("image/jpeg");
      return setImage(imag);
    });
  }
  return (
    <div className="meme-container">
      <div className="meme-form">
        <input
          id="topText"
          onChange={handleChange}
          name="topText"
          type="text"
          placeholder="Insert text 1"
        />
        <input
          onChange={handleChange}
          id="bottomText"
          name="bottomText"
          type="text"
          placeholder="Insert text 1"
        />
        <button onClick={changeImage} className="meme-button">
          Get a new meme
        </button>
      </div>
      <div id="download" className="img-container">
        <img
          crossOrigin="anonymous"
          className="meme-img"
          src={meme.randomImage}
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
      <button onClick={saveImage} className="meme-button space">
        Save Meme
      </button>
      {image.length !== 0 && (
        <a className="download" href={image} download={`${meme.topText}.jpg`}>
          Download
        </a>
      )}
    </div>
  );
}

export default Meme;
