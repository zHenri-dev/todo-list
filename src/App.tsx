import { useState } from "react";
import { v4 as uuid } from 'uuid';

import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";
import { NewTaskBar } from "./components/NewTaskBar";

import './global.css';

export type TaskType = {
  id: string;
  name: string;
  completed: boolean;
}

export function App() {
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  function createNewTask(taskName: string) {
    setTaskList(state => [{
      id: uuid(),
      name: taskName,
      completed: false,
    }, ...state]);
  }

  function deleteTask(id: string) {
    setTaskList(state => state.filter(task => task.id != id));
  }

  function completeTask(id: string) {
    setTaskList(state =>
      state.map(task => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  }

  return (
    <>
      <Header />
      <NewTaskBar onCreateNewTask={createNewTask} />
      <TaskList taskList={taskList} onDeleteTask={deleteTask} onCompleteTask={completeTask} />
    </>
  )
}
