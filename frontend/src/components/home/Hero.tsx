import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-4 py-32 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
        AI Gesture Controlled
        <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Snake Game
        </span>
      </h1>

      <p className="max-w-xl text-lg text-gray-400">
        Control the snake with your hand gestures. No keyboard needed — just
        your webcam and reflexes.
      </p>

      <div className="flex gap-4">
        <Link
          to="/game"
          className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
        >
          Play Now
        </Link>
        <Link
          to="/login"
          className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-gray-300 transition hover:border-gray-400 hover:text-white"
        >
          Login
        </Link>
      </div>
    </section>
  );
}

export default Hero;
