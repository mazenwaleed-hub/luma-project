import "./HeroSection.css";
import { CollectionBtn } from "../Button/CollectionBtn";

export function HeroSection() {
  return (
    <section className="HeroSection">
      <div className="content">
        <h1>
          Designed <br /> For Living.
        </h1>
        <p>Thoughful furniture for spaces that feel like home.</p>
        <CollectionBtn />
      </div>
    </section>
  );
}
