import { Timer } from "lucide-react";

export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <a
        href="#"
        className="flex flex-col items-center justify-center gap-1 text-5xl font-bold text-red transition duration-100 hover:brightness-80"
      >
        <Timer className="w-16 h-16" />
        <span>pomo</span>
      </a>
    </div>
  );
}
