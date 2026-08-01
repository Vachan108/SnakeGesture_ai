import {
  HiOutlineLightningBolt,
  HiOutlineStatusOnline,
  HiOutlineRefresh,
  HiOutlinePause,
  HiOutlinePlay,
} from "react-icons/hi";
import {
  FaGamepad,
  FaHandPaper,
  FaVideo,
  FaTachometerAlt,
} from "react-icons/fa";
import {
  HiOutlineArrowUp,
  HiOutlineArrowDown,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi2";

/* ── Dummy values ────────────────────────────────────────── */
const SCORE = 0;
const HIGH_SCORE = 2_480;
const FPS = 60;
const GESTURE = "None";
const CONNECTION = "Connected";

/* ── Reusable stat row ───────────────────────────────────── */
function StatRow({
  icon: Icon,
  label,
  value,
  accent = "text-gray-300",
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  accent?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="flex items-center gap-2 text-xs text-gray-500">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </span>
      <span className={`text-sm font-semibold tabular-nums ${accent}`}>
        {value}
      </span>
    </div>
  );
}

/* ── Sidebar card wrapper ────────────────────────────────── */
function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-4 backdrop-blur-xl">
      <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Game() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden px-3 py-6 sm:px-4 sm:py-8">
      {/* ── Ambient glow ───────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-green-500/6 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-600/5 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ── Page title ───────────────────────────────── */}
        <div className="mb-6 flex items-center gap-3">
          <FaGamepad className="h-5 w-5 text-green-400" />
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Snake Game
          </h1>
          <span className="ml-auto flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-green-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            Live
          </span>
        </div>

        {/* ── Main 3-column layout ─────────────────────── */}
        <div className="grid gap-4 lg:grid-cols-[240px_1fr_240px]">
          {/* ─── Left sidebar ────────────────────────── */}
          <aside className="flex flex-col gap-4 max-lg:order-2 max-lg:grid max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">
            {/* Score */}
            <Card title="Score">
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-3xl font-bold tabular-nums text-green-400">
                    {SCORE.toLocaleString()}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-gray-600">
                    Current Score
                  </p>
                </div>
                <div className="h-px bg-gray-800" />
                <StatRow
                  icon={HiOutlineLightningBolt}
                  label="High Score"
                  value={HIGH_SCORE.toLocaleString()}
                  accent="text-yellow-400"
                />
              </div>
            </Card>

            {/* Gesture Status */}
            <Card title="Gesture Status">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10">
                    <FaHandPaper className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {GESTURE}
                    </p>
                    <p className="text-[10px] text-gray-600">
                      Detected gesture
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gray-800" />
                <StatRow
                  icon={HiOutlineStatusOnline}
                  label="Status"
                  value="Idle"
                  accent="text-gray-500"
                />
              </div>
            </Card>

            {/* Controls */}
            <Card title="Controls">
              <div className="grid grid-cols-3 gap-1.5">
                <div />
                <div className="flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/60 py-2 text-gray-500">
                  <HiOutlineArrowUp className="h-4 w-4" />
                </div>
                <div />
                <div className="flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/60 py-2 text-gray-500">
                  <HiOutlineArrowLeft className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/60 py-2 text-gray-500">
                  <HiOutlineArrowDown className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/60 py-2 text-gray-500">
                  <HiOutlineArrowRight className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-2.5 text-center text-[10px] text-gray-600">
                Use gestures or arrow keys
              </p>
            </Card>
          </aside>

          {/* ─── Center — Game canvas ────────────────── */}
          <div className="flex flex-col gap-4 max-lg:order-1">
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/80 shadow-2xl shadow-green-500/5 backdrop-blur-xl sm:aspect-[4/3]">
              {/* Grid pattern */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Corner accents */}
              <div
                aria-hidden
                className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-green-500/30 rounded-tl-2xl"
              />
              <div
                aria-hidden
                className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-green-500/30 rounded-tr-2xl"
              />
              <div
                aria-hidden
                className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-green-500/30 rounded-bl-2xl"
              />
              <div
                aria-hidden
                className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-green-500/30 rounded-br-2xl"
              />

              {/* Placeholder text */}
              <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-800 bg-gray-900/80">
                  <FaGamepad className="h-7 w-7 text-green-500/50" />
                </div>
                <p className="text-lg font-semibold text-gray-500">
                  Game Canvas
                </p>
                <p className="max-w-xs text-xs text-gray-600">
                  The snake game will render here
                </p>
              </div>
            </div>

            {/* ── Bottom controls ──────────────────────── */}
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800/60 px-6 py-2.5 text-sm font-medium text-gray-400 transition hover:border-gray-600 hover:text-white active:scale-[0.97]"
              >
                <HiOutlineRefresh className="h-4 w-4" />
                Restart
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition hover:bg-green-600 hover:shadow-green-500/35 active:scale-[0.97]"
              >
                <HiOutlinePause className="h-4 w-4" />
                Pause
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800/60 px-6 py-2.5 text-sm font-medium text-gray-400 transition hover:border-green-500/40 hover:text-green-400 active:scale-[0.97]"
              >
                <HiOutlinePlay className="h-4 w-4" />
                Play
              </button>
            </div>
          </div>

          {/* ─── Right sidebar ───────────────────────── */}
          <aside className="flex flex-col gap-4 max-lg:order-3 max-lg:grid max-lg:grid-cols-2 max-lg:gap-3 max-sm:grid-cols-1">
            {/* Camera feed */}
            <Card title="Camera Feed">
              <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-gray-800 bg-gray-950/60">
                <div className="flex flex-col items-center gap-2 text-center">
                  <FaVideo className="h-5 w-5 text-gray-600" />
                  <p className="text-[10px] text-gray-600">
                    Camera preview
                  </p>
                </div>
              </div>
            </Card>

            {/* Performance */}
            <Card title="Performance">
              <div className="flex flex-col gap-2.5">
                <StatRow
                  icon={FaTachometerAlt}
                  label="FPS"
                  value={FPS}
                  accent="text-green-400"
                />
                <div className="h-px bg-gray-800" />
                <StatRow
                  icon={HiOutlineStatusOnline}
                  label="Connection"
                  value={CONNECTION}
                  accent="text-green-400"
                />
              </div>
            </Card>

            {/* Current Gesture */}
            <Card title="Current Gesture">
              <div className="flex flex-col items-center gap-2 py-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-800 bg-gray-950/60">
                  <FaHandPaper className="h-5 w-5 text-gray-600" />
                </div>
                <p className="text-sm font-semibold text-gray-500">
                  {GESTURE}
                </p>
                <p className="text-[10px] text-gray-600">
                  Waiting for input…
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Game;
