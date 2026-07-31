import { FaCamera, FaBrain, FaGamepad, FaTrophy } from "react-icons/fa";
import type { IconType } from "react-icons";

interface Step {
  icon: IconType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: FaCamera,
    title: "Camera",
    description: "Your webcam captures hand movements in real time.",
  },
  {
    icon: FaBrain,
    title: "AI Gesture Recognition",
    description: "AI detects gestures and translates them into directions.",
  },
  {
    icon: FaGamepad,
    title: "Snake Game",
    description: "The snake responds instantly to your hand commands.",
  },
  {
    icon: FaTrophy,
    title: "Score Saved",
    description: "Your score is recorded and ranked on the leaderboard.",
  },
];

function HowItWorks() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-gray-400">
          From camera to leaderboard in four simple steps.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center">
              {/* Connector line (hidden on first item & mobile) */}
              {index !== 0 && (
                <span className="absolute -left-4 top-8 hidden h-0.5 w-8 bg-green-500/40 lg:block" />
              )}

              {/* Step number badge */}
              <span className="mb-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-[10px] font-bold text-green-400">
                {index + 1}
              </span>

              {/* Icon */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-800 bg-gray-900 text-green-400 transition hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10">
                <step.icon size={28} />
              </div>

              {/* Text */}
              <h3 className="mb-1 text-sm font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
