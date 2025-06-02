import { Home, History, Settings, Sun, Moon } from "lucide-react";
import { MenuButton } from "./MenuButton";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme = localStorage.getItem("theme") as AvailableThemes;
    return savedTheme || "dark"; // Dark theme if not set
  });

  const nextThemeIcon = {
    dark: <Sun className="w-6 h-6" />,
    light: <Moon className="w-6 h-6" />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="flex gap-4 items-center justify-center">
      <MenuButton href="#" ariaLabel="Home" title="Home">
        <Home className="w-6 h-6" />
      </MenuButton>

      <MenuButton href="#" ariaLabel="Histórico" title="Histórico">
        <History className="w-6 h-6" />
      </MenuButton>

      <MenuButton href="#" ariaLabel="Ajustes" title="Ajustes">
        <Settings className="w-6 h-6" />
      </MenuButton>

      <MenuButton
        href="#"
        ariaLabel="Mudar Tema"
        title="Mudar Tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </MenuButton>
    </nav>
  );
}
