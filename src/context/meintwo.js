import "./templates/maintwo.css";
import ImageSlider from "../components/slider/ImageSlider";
import { SliderData } from "../components/slider/SliderData";

function Maintwo() {
  return (
    <div className="silider_box">
      <div className="bbf">
        <div className="bb1"></div>
        <div className="bb2"></div>
        <div className="bb3"></div>
        <div className="bb4"></div>
      </div>
      <div className="bbf2">
        <div className="bb5"></div>
        <div className="bb6"></div>
      </div>
      <div className="bbf3">
        <div className="bb7"></div>
        <div className="bb8"></div>
        <div className="bb9"></div>
      </div>
      <div className="about_game">ABOUT GAME</div>
      <ImageSlider slides={SliderData} />
      <div className="random_box"></div>
      <div className="random_box_two"></div>
    </div>
  );
}
export default Maintwo;
