import { useNavigate, useLocation } from "react-router-dom";
import { profile } from "../data";

const link = "text-sm text-ink/80 hover:text-ink transition-colors";

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Radi i na početnoj i na stranici projekta
  const goTo = (id) => (e) => {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-4 rounded-full border border-line bg-white/80 px-4 py-2 shadow-sm backdrop-blur sm:gap-5">
        <a href="/" onClick={goTo("top")} className={link}>Home</a>
        <a href="/" onClick={goTo("projects")} className={link}>Projects</a>
        <a href="/" onClick={goTo("about")} className={`${link} hidden sm:inline`}>About</a>
        <a href={profile.github} target="_blank" rel="noreferrer" className={link}>GitHub</a>
        <a
          href="/"
          onClick={goTo("contact")}
          className="rounded-full bg-ink px-4 py-1.5 text-sm text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
