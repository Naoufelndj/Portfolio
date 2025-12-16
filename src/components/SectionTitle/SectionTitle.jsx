import "./SectionTitle.css";

function SectionTitle({ title }) {
  return (
    <div className="section-title reveal" data-sr-origin="left">
      <h2>{title}</h2>
      <div className="line"></div>
    </div>
  );
}

export default SectionTitle;
