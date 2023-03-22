import "./SectionTitle.scss";

export default function SectionTitle({ isRight = false, title }) {
  return (
    <div
      className={`section-title absolute origin-top ${
        isRight ? "right" : "left"
      }`}
    >
      <h2 className="text-center uppercase opacity-60 text-8xl">{title}</h2>
    </div>
  );
}
