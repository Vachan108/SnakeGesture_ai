import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/leaderboard", label: "Leaderboard" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-white">
          Gesture<span className="text-green-400">Snake</span> AI
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ to, label }) => (
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

        {/* Desktop right side */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/login"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Register
          </Link>
          <Link
            to="/game"
            className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            Play Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="text-gray-400 transition hover:text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-800 px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="block text-sm text-gray-400 transition hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                className="block text-sm text-gray-400 transition hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="block text-sm text-gray-400 transition hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/game"
                className="inline-block rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
                onClick={() => setMenuOpen(false)}
              >
                Play Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
