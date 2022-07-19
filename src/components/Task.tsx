import { useState } from "react";
import { Trash } from "phosphor-react";

interface TaskProps {
  id: string;
  name: string;
  completed: boolean;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function Task({ id, name, completed, onDeleteTask, onCompleteTask }: TaskProps) {
  const [isCompleted, setIsCompleted] = useState(completed);

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCompleteTask() {
    onCompleteTask(id);
    setIsCompleted(!isCompleted);
  }

  return (
    <div className="w-[46rem] flex items-start gap-[1.125rem] justify-between bg-gray-500 mb-[0.75rem] text-gray-100 p-4 rounded-lg">
      <div className="flex gap-4">
        <input
          className="rounded-full w-5 h-5 mt-1 ml-1 bg-transparent border-2 border-blue-400 focus:ring-0 focus:ring-transparent focus:ring-offset-0 checked:focus:bg-purple-600 hover:bg-blue-600 hover:bg-opacity-20 checked:border-0 checked:hover:bg-purple-400 checked:bg-purple-600 transition-colors"
          type="checkbox"
          checked={isCompleted}
          onChange={handleCompleteTask}
        />
        <p className={isCompleted ? "text-gray-300 line-through max-w-[38.5rem] break-words" : 'max-w-[38.5rem] break-words'}>{name}</p>
      </div>
      <Trash
        className="hover:text-red-300 transition-colors text-gray-300 cursor-pointer mr-1"
        onClick={handleDeleteTask}
        size={22}
      />
    </div>
  );
}