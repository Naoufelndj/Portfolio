import "./SectionTitle.css";

function SectionTitle({ title, description }) {
  return (
    <div className="section-title reveal" data-sr-origin="left">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SectionTitle;
