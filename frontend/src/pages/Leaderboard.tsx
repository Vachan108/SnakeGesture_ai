import {
  HiOutlineTrophy,
  HiOutlineChevronUp,
  HiOutlineChevronDown,
  HiMinus,
} from "react-icons/hi2";
import { FaCrown } from "react-icons/fa";

/* ── Dummy leaderboard data ──────────────────────────────── */
interface Player {
  rank: number;
  username: string;
  score: number;
  trend: "up" | "down" | "same";
}

const players: Player[] = [
  { rank: 1, username: "ViperKing", score: 5_320, trend: "same" },
  { rank: 2, username: "SnakeMaster42", score: 4_870, trend: "up" },
  { rank: 3, username: "GesturePro", score: 4_510, trend: "up" },
  { rank: 4, username: "CobraStrike", score: 3_990, trend: "down" },
  { rank: 5, username: "NeonSerpent", score: 3_740, trend: "up" },
  { rank: 6, username: "PixelVenom", score: 3_385, trend: "same" },
  { rank: 7, username: "ArcadePhoenix", score: 3_120, trend: "down" },
  { rank: 8, username: "ByteSlither", score: 2_880, trend: "up" },
  { rank: 9, username: "ZeroLatency", score: 2_650, trend: "down" },
  { rank: 10, username: "ShadowFang", score: 2_410, trend: "same" },
];

/* ── Medal colours for top 3 ─────────────────────────────── */
const medalColor: Record<number, string> = {
  1: "text-yellow-400",
  2: "text-gray-300",
  3: "text-amber-600",
};

const rowHighlight: Record<number, string> = {
  1: "bg-yellow-500/5 border-yellow-500/20",
  2: "bg-gray-400/5 border-gray-400/15",
  3: "bg-amber-600/5 border-amber-600/15",
};

/* ── Trend icon ──────────────────────────────────────────── */
function TrendIcon({ trend }: { trend: Player["trend"] }) {
  if (trend === "up")
    return <HiOutlineChevronUp className="h-4 w-4 text-green-400" />;
  if (trend === "down")
    return <HiOutlineChevronDown className="h-4 w-4 text-red-400" />;
  return <HiMinus className="h-4 w-4 text-gray-600" />;
}

function Leaderboard() {
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

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* ── Header ─────────────────────────────────── */}
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-green-400">
            <HiOutlineTrophy className="h-4 w-4" />
            Global Rankings
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Leaderboard
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Top players ranked by their highest score
          </p>
        </div>

        {/* ── Table card ─────────────────────────────── */}
        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60 shadow-2xl shadow-green-500/5 backdrop-blur-xl">
          {/* Table header */}
          <div className="grid grid-cols-[3.5rem_1fr_5rem_2rem] items-center gap-2 border-b border-gray-800 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:grid-cols-[4rem_1fr_6rem_2.5rem] sm:px-6">
            <span>Rank</span>
            <span>Player</span>
            <span className="text-right">Score</span>
            <span className="text-right" />
          </div>

          {/* Rows */}
          <ul>
            {players.map((player) => {
              const isTop3 = player.rank <= 3;
              const highlight = rowHighlight[player.rank] ?? "";

              return (
                <li
                  key={player.rank}
                  className={`grid grid-cols-[3.5rem_1fr_5rem_2rem] items-center gap-2 border-b border-gray-800/60 px-5 py-4 transition last:border-b-0 hover:bg-gray-800/40 sm:grid-cols-[4rem_1fr_6rem_2.5rem] sm:px-6 ${
                    isTop3 ? `border ${highlight}` : ""
                  }`}
                >
                  {/* Rank */}
                  <span className="flex items-center gap-1">
                    {isTop3 ? (
                      <FaCrown
                        className={`h-4 w-4 ${medalColor[player.rank]}`}
                      />
                    ) : (
                      <span className="text-sm font-medium text-gray-500">
                        {player.rank}
                      </span>
                    )}
                  </span>

                  {/* Username */}
                  <span
                    className={`truncate text-sm font-semibold ${
                      isTop3 ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {player.username}
                  </span>

                  {/* Score */}
                  <span
                    className={`text-right text-sm font-bold tabular-nums ${
                      isTop3 ? "text-green-400" : "text-gray-400"
                    }`}
                  >
                    {player.score.toLocaleString()}
                  </span>

                  {/* Trend */}
                  <span className="flex justify-end">
                    <TrendIcon trend={player.trend} />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ── Footer note ────────────────────────────── */}
        <p className="mt-5 text-center text-xs text-gray-600">
          Rankings update after each game session
        </p>
      </div>
    </section>
  );
}

export default Leaderboard;
