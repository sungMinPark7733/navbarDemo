import "./Screen.css";
import yourImage from "./tech.jpg";

const Screen = () => {
  return (
    <div style={{ backgroundColor: "yellow", width: "100vw", height: "100vh" }}>
      <div className="fullscreen-image">
        <img
          src={yourImage}
          alt="Description of the image"
          style={{ width: "100vw", height: "100vh" }}
        />
      </div>
    </div>
  );
};

export default Screen;
