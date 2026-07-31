import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/game", label: "Play" },
];

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Left — Brand */}
        <div className="flex flex-col gap-3">
          <span className="text-lg font-bold text-white">
            Gesture<span className="text-green-400">Snake</span> AI
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            A gesture‑controlled snake game powered by AI. Play using just your
            webcam — no keyboard required.
          </p>
        </div>

        {/* Center — Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {footerLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Socials */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Connect
          </h3>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} GestureSnake AI. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
