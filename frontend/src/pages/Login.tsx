import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiEye,
  HiEyeOff,
} from "react-icons/hi";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden px-4 py-16">
      {/* ── Ambient glow ─────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-44 right-1/4 h-[380px] w-[380px] rounded-full bg-emerald-600/8 blur-[120px]"
      />

      {/* ── Card ─────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900/60 p-8 shadow-2xl shadow-green-500/5 backdrop-blur-xl sm:p-10">
        {/* Logo */}
        <div className="mb-2 text-center">
          <Link
            to="/"
            className="inline-block text-2xl font-bold tracking-tight text-white transition hover:opacity-80"
          >
            Gesture<span className="text-green-400">Snake</span> AI
          </Link>
        </div>

        {/* Heading */}
        <h1 className="mb-1 text-center text-3xl font-bold text-white">
          Welcome Back
        </h1>
        <p className="mb-8 text-center text-sm text-gray-400">
          Sign in to continue your game
        </p>

        {/* ── Form ───────────────────────────────────────── */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5"
        >
          {/* Email */}
          <div className="group">
            <label
              htmlFor="login-email"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400"
            >
              Email
            </label>
            <div className="relative">
              <HiOutlineMail className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 transition group-focus-within:text-green-400" />
              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full rounded-xl border border-gray-700 bg-gray-800/60 py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
            </div>
          </div>

          {/* Password */}
          <div className="group">
            <label
              htmlFor="login-password"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400"
            >
              Password
            </label>
            <div className="relative">
              <HiOutlineLockClosed className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 transition group-focus-within:text-green-400" />
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="current-password"
                className="w-full rounded-xl border border-gray-700 bg-gray-800/60 py-3 pl-11 pr-12 text-sm text-white placeholder-gray-500 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-gray-300"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <HiEyeOff className="h-[18px] w-[18px]" />
                ) : (
                  <HiEye className="h-[18px] w-[18px]" />
                )}
              </button>
            </div>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-green-500 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition hover:bg-green-600 hover:shadow-green-500/35 active:scale-[0.98]"
          >
            Login
          </button>
        </form>

        {/* ── Divider ────────────────────────────────────── */}
        <div className="my-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-800" />
          <span className="text-xs text-gray-600">or</span>
          <span className="h-px flex-1 bg-gray-800" />
        </div>

        {/* Register link */}
        <p className="text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-green-400 transition hover:text-green-300 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
