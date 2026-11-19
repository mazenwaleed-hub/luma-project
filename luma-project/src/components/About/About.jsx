import AboutImage from "../../assets/about-image.jpg";
import {CollectionBtn} from '../Button/CollectionBtn'
import "../About/About.css";
export function About() {
  return (
    <section className="About">
      <div className="image">
        <img src={AboutImage} alt="" />
      </div>
      <div className="contentPart">
        <div className="content">
        <h1>Simplicity in Every Detail.</h1>
        <p>
          At LUMA, we believe great design comes from thoughtful simplicity. Our
          furniture is crafted with care, using natural materials and timeless
          design to bring warmth and beauty to your home.
        </p>
        < CollectionBtn text={"Learn More"}/>
        </div>
      </div>
    </section>
  );
}
