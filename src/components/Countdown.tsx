import { useTaskContext } from "../contexts/TaskContext/useTaskContext";

export function Countdown() {
  const { state } = useTaskContext();

  return (
    <div className="flex justify-center font-semibold text-8xl md:text-[10rem] pt-4">
      {state.formattedSecondsRemaining}
    </div>
  );
}
