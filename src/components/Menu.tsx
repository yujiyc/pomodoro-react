import { Home, History, Settings, Sun } from "lucide-react";
import { MenuButton } from "./MenuButton";

export function Menu() {
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

      <MenuButton href="#" ariaLabel="Mudar Tema" title="Mudar Tema">
        <Sun className="w-6 h-6" />
      </MenuButton>
    </nav>
  );
}
