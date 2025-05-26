import { Container } from "./components/Container";
import { Countdown } from "./components/Countdown";
import { Input } from "./components/Input";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Countdown />
      </Container>

      <Container>
        <form action="">
          <div className="flex flex-col items-center justify-center gap-4">
            <Input
              labelText="Task"
              type="text"
              placeholder="Informe uma tarefa"
            />
          </div>
        </form>
      </Container>
    </>
  );
}
