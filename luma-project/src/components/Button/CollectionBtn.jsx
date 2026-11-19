import '../Button/CollectionBtn.css'
export function CollectionBtn( {text} ) {
  return (
    <button className="explore-btn">
      {text} <i className="fa-solid fa-arrow-right"></i>
    </button>
  );
}
