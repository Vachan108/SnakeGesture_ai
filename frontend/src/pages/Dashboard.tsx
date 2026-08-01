import { Link } from "react-router-dom";
import {
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineGlobe,
  HiOutlineLogout,
} from "react-icons/hi";
import { FaGamepad, FaTrophy } from "react-icons/fa";

/* ── Dummy data ──────────────────────────────────────────── */
const PLAYER = {
  username: "SnakeMaster42",
  highScore: 2_480,
  gamesPlayed: 137,
  globalRank: 12,
};

/* ── Stat card data ──────────────────────────────────────── */
const stats = [
  {
    id: "high-score",
    label: "Highest Score",
    value: PLAYER.highScore.toLocaleString(),
    icon: HiOutlineLightningBolt,
    accent: "from-green-500 to-emerald-600",
    glow: "shadow-green-500/20",
  },
  {
    id: "games-played",
    label: "Games Played",
    value: PLAYER.gamesPlayed.toLocaleString(),
    icon: HiOutlineChartBar,
    accent: "from-cyan-500 to-teal-600",
    glow: "shadow-cyan-500/20",
  },
  {
    id: "global-rank",
    label: "Global Rank",
    value: `#${PLAYER.globalRank}`,
    icon: HiOutlineGlobe,
    accent: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/20",
  },
];

function Dashboard() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden px-4 py-12 sm:py-16">
      {/* ── Ambient glow ───────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-green-500/8 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-600/6 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* ── Welcome card ─────────────────────────────── */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-800 bg-gray-900/60 p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="mb-1 text-sm font-medium uppercase tracking-wider text-green-400">
              Welcome back
            </p>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              {PLAYER.username}
            </h1>
            <p className="mt-1 text-sm text-gray-400">
              Ready for your next game? Let&apos;s beat that high score.
            </p>
          </div>

          {/* Logout */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800/60 px-5 py-2.5 text-sm font-medium text-gray-400 transition hover:border-red-500/50 hover:text-red-400"
          >
            <HiOutlineLogout className="h-4 w-4" />
            Logout
          </button>
        </div>

        {/* ── Stats grid ───────────────────────────────── */}
        <div className="mb-10 grid gap-5 sm:grid-cols-3">
          {stats.map(({ id, label, value, icon: Icon, accent, glow }) => (
            <div
              key={id}
              className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60 p-6 shadow-lg backdrop-blur-xl transition hover:border-gray-700 ${glow}`}
            >
              {/* Gradient bar at top */}
              <div
                className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${accent} opacity-60 transition group-hover:opacity-100`}
              />

              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} shadow-lg ${glow}`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  {label}
                </span>
              </div>

              <p className="text-3xl font-bold text-white">{value}</p>
            </div>
          ))}
        </div>

        {/* ── Action buttons ───────────────────────────── */}
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Play Game */}
          <Link
            to="/game"
            className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60 p-6 backdrop-blur-xl transition hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 sm:p-8"
          >
            {/* Hover glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-500/10 blur-3xl opacity-0 transition group-hover:opacity-100"
            />

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/25">
              <FaGamepad className="h-6 w-6 text-white" />
            </div>

            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white">Play Game</h2>
              <p className="mt-0.5 text-sm text-gray-400">
                Start a new gesture-controlled session
              </p>
            </div>
          </Link>

          {/* Leaderboard */}
          <Link
            to="/leaderboard"
            className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60 p-6 backdrop-blur-xl transition hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10 sm:p-8"
          >
            {/* Hover glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition group-hover:opacity-100"
            />

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/25">
              <FaTrophy className="h-6 w-6 text-white" />
            </div>

            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white">Leaderboard</h2>
              <p className="mt-0.5 text-sm text-gray-400">
                See how you rank against other players
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
