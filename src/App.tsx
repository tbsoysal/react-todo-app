import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTask: Todo = {
      id: Date.now(),
      text: newTodo,
      isDone: false,
    };

    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  const listTodos = (): ReactNode => {
    if (todos.length) {
      todos.map((todo) => <li>{todo.text}</li>);
    }
  };

  return (
    <div className="min-h-screen text-center sf-pro-font py-8 bg-[#F5F5F7]">
      <h1 className="font-bold text-[28px] text-[#000000] mt-4">Today</h1>
      <p className="font-medium text-[14px] text-[#8E8E93] mb-12">
        Your tasks for today
      </p>
      <div className="mx-12">
        <input
          className="block w-full shadow-[0_4px_10px_rgba(0,0,0,0.15)] outline-none rounded-[16px] bg-[white] text-[16px] px-[16px] h-[54px]"
          placeholder="Add a new task"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-[#007AFF] w-[40px] h-[40px] mt-12 rounded-full font-bold text-white text-[20px]"
        >
          +
        </button>
      </div>
      <ul>
        { listTodos() }
      </ul>
    </div>
  );
}

export default App;
