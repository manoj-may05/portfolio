import loadlink from "../assets/loadlink.png";
import inventory from "../assets/inventory.png";
export const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

export const SKILLS = {
  Languages: ["HTML", "JavaScript", "Python", "SQL"],
  Frontend: ["React.js" ,"CSS"],
  Backend: ["FastAPI", "PostgreSQL"],
  Tooling: ["GitHub", "VS Code", "Vite", "Figma"],
};

export const SKILL_COLORS = {
  Languages: { bg: "#2a1a00", text: "#E8A733", dot: "#E8A733" },
  Frontend: { bg: "#001a2a", text: "#33b5e8", dot: "#33b5e8" },
  Backend: { bg: "#0d1a00", text: "#7ae833", dot: "#7ae833" },
  Tooling: { bg: "#1a001a", text: "#e833d4", dot: "#e833d4" },
};

export const PROJECTS = [
  {
    title: "LoadLink",
    category: "Logistics Web App",
    year: "2026",
    description:
      "A full-stack logistics platform designed to manage shipments, track deliveries, and provide real-time shipment status updates. Includes dashboards for shippers and tracking management.",
    tags: [
          "React",
          "JavaScript",
          "FastAPI",
          "Python",
          "PostgreSQL",
          "SQLAlchemy",
          "REST APIs"
          ],
    link: "https://github.com/manoj-may05/LoadLink",
    featured: true,
    image: loadlink,
  },
  {
  title: "Inventory Management System",
  category: "Inventory Management Web App",
  year: "2026",
  description:
    "A full-stack inventory management system designed to manage products, monitor stock levels, track stock-in and stock-out transactions, and maintain detailed product activity history.",
  tags: [
    "React",
    "JavaScript",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "SQLAlchemy",
    "REST APIs",
  ],
  link: "https://github.com/manoj-may05/Inventory-Management-System",
  featured: true,
  image: inventory,
}
];