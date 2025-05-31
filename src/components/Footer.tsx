export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-xs gap-4">
      <a href="#" className="text-zinc-300 hover:underline">
        The Pomodoro Technique Explained
      </a>
      <a href="#" className="text-zinc-300 hover:underline">
        Pomo Timer &copy; {new Date().getFullYear()}
      </a>
    </footer>
  );
}
