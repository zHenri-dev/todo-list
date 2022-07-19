import { useState } from 'react';
import { TaskType } from '../App';
import { Task } from './Task';

import clipboard from '../assets/clipboard.svg';

interface TaskListProps {
  taskList: TaskType[];
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
}

export function TaskList({ taskList, onDeleteTask, onCompleteTask }: TaskListProps) {
  return (
    <main className="m-auto w-[46rem] mt-[2.25rem]">
      <header className="flex justify-between font-bold mb-4">
        <div className="text-blue-400 flex gap-2 items-center">
          Tarefas criadas
          <span className="text-gray-200 bg-gray-400 text-sm px-2 h-[1.25rem] rounded-l-[8px] rounded-r-[8px] text-center">{taskList.length}</span>
        </div>
        <div className="text-purple-400 flex gap-2 items-center">
          Concluídas
          <span className="text-gray-200 bg-gray-400 text-sm px-2 h-[1.25rem] rounded-l-[8px] rounded-r-[8px] text-center">{taskList.filter(task => task.completed).length} de {taskList.length}</span>
        </div>
      </header>

      {taskList.length == 0 ? (
        <div className="mt-6 rounded-lg border-t border-gray-400 w-[46rem] h-[15.25rem] flex items-center justify-center flex-col text-gray-300">
          <img src={clipboard} alt="Imagem de uma prancheta" className="mb-4" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      ) : (
        taskList.map((task) => {
          return <Task key={task.id} id={task.id} name={task.name} completed={task.completed} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask} />
        })
      )}
    </main>
  );
}