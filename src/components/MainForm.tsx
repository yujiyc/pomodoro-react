import { Button } from "./Button";
import { Cycles } from "./Cycles";
import { Input } from "./Input";
import { PlayCircle } from "lucide-react";

export function MainForm() {
  return (
    <form action="" className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <Input labelText="Task" type="text" placeholder="Task" />
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
