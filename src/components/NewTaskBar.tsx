import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";

interface NewTaskBarProps {
  onCreateNewTask: (taskName: string) => void;
}

export function NewTaskBar({ onCreateNewTask }: NewTaskBarProps) {
  const [newTaskName, setNewTaskName] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    if (newTaskName == "") return;
    onCreateNewTask(newTaskName);
    setNewTaskName('');
  }

  return (
    <div className="w-[46rem] m-auto h-[3.375rem] flex translate-y-[-50%]">
      <form className="flex gap-[0.5rem]" onSubmit={handleCreateNewTask}>
        <input
          type="text"
          onChange={(event) => { setNewTaskName(event.target.value) }}
          value={newTaskName}
          placeholder="Adicione uma nova tarefa"
          className="w-[39.875rem] max-h-[3.375rem] rounded-lg bg-gray-500 border border-gray-700 text-gray-100 placeholder:text-gray-300 p-4 focus:outline-none focus:border-purple-600 transition-colors"
        />
        <button
          type="submit"
          className="bg-blue-600 w-[5.625rem] h-[3.25rem] rounded-lg font-bold text-gray-100 flex items-center justify-center text-sm gap-[0.5rem] hover:bg-blue-400 transition-colors"
        >
          Criar
          <PlusCircle size={18} />
        </button>
      </form>
    </div>
  );
}