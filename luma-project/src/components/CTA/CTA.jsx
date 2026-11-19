import ctaImg from '../../assets/CTA-IMG.png'
import "./CTA.css";

export function CTA() {
  return (
    <section className="cta">
      <div className="ctaContent">
        <h2>Let's Create Your Space.</h2>
        <p>
          Discover furniture that reflects your style
          and makes every moment feel special.
        </p>
        <button>Get in Touch</button>
      </div>

      {/* <div className="ctaImage">
        <img src={ctaImg} alt="Interior design" />
      </div> */}
    </section>
  );
}
