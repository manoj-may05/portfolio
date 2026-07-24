import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Manoj.
      </p>
    </footer>
  );
}