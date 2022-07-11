/* Nav bar for the meme generator */
import meme from "../../public/meme.png";

function Navbar() {
  return (
    <div className="nav-bar">
      <div>
        <img alt="meme" src={meme} />
        <h2>Meme Generator</h2>
      </div>
    </div>
  );
}

export default Navbar;
