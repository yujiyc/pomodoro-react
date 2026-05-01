import { Button } from "./Button";
import { Cycles } from "./Cycles";
import { Input } from "./Input";
import { PlayCircle } from "lucide-react";
import { useRef } from "react";
import type { TaskModel } from "../models/TaskModel";
import { useTaskContext } from "../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../utils/getNextCycle";

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);

  function handleStartNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Digite o nome da tarefa");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: "workTime",
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining, // Conferir
        formattedSecondsRemaining: "00:00", // Conferir
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <form
      onSubmit={handleStartNewTask}
      action=""
      className="flex flex-col items-center justify-center gap-6"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <Input
          labelText="Task"
          type="text"
          placeholder="Task"
          ref={taskNameInput}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <p>
          Your next break is in <span className="font-semibold">25min</span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <Cycles />
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <Button ariaLabel="Start new task" title="Start new task">
          <PlayCircle className="w-8 h-8" />
        </Button>
      </div>
    </form>
  );
}
