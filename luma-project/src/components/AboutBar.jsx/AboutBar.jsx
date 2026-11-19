import "./AboutBar.css";
export function AboutBar() {
  return (
    <div className="aboutBar">
      <div className="item">
        <i class="fa-regular fa-clock"></i>
        <span>Timeless Design</span>
      </div>

      <div className="item">
        <i class="fa-brands fa-envira"></i>
        <span>Natural Materials</span>
      </div>

      <div className="item">
        <i class="fa-solid fa-house"></i>
        <span>Everyday Comfort</span>
      </div>
    </div>
  );
}
