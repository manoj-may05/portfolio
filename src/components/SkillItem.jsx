import "../App.css";

export default function SkillItem({
  name,
  colors,
}) {
  return (
    <li
      className="skill-item"
      style={{
        "--skill-bg": colors.bg,
        "--skill-text": colors.text,
        "--skill-dot": colors.dot,
      }}
    >
      <span className="skill-dot" />

      {name}
    </li>
  );
}