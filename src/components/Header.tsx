import toDoLogo from '../assets/todo-logo.svg';

export function Header() {
  return (
    <header className="m-0 min-w-full h-[12.5rem] bg-gray-700 flex items-center justify-center flex-col">
      <img src={toDoLogo} alt="Logotipo ToDo" />
    </header>
  )
}