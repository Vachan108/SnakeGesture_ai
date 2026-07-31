import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiMediapipe,
  SiPostgresql,
} from "react-icons/si";
import { FaGamepad } from "react-icons/fa";
import type { IconType } from "react-icons";

interface Tech {
  icon: IconType;
  name: string;
  color: string;
}

const techs: Tech[] = [
  { icon: SiReact, name: "React", color: "text-cyan-400" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
  { icon: FaGamepad, name: "Phaser.js", color: "text-yellow-400" },
  { icon: SiFastapi, name: "FastAPI", color: "text-emerald-400" },
  { icon: SiPython, name: "Python", color: "text-yellow-300" },
  { icon: SiMediapipe, name: "MediaPipe", color: "text-green-400" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-300" },
];

function TechStack() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Built With
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-gray-400">
          A modern stack combining real‑time AI, a blazing‑fast frontend, and a
          robust backend.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {techs.map(({ icon: Icon, name, color }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-3 rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-6 transition hover:border-gray-700 hover:bg-gray-900"
            >
              <Icon
                size={32}
                className={`${color} transition group-hover:scale-110`}
              />
              <span className="text-sm font-medium text-gray-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
