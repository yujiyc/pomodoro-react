import { Container } from "../components/Container";
import { Countdown } from "../components/Countdown";
import { MainForm } from "../components/MainForm";
import { MainTemplate } from "../templates/MainTemplate";

import type { TaskStateModel } from "../models/TaskStateModel";

type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  return (
    <MainTemplate>
      <Container>
        <Countdown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
