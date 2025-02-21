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

   const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  function listTodos() {
    if (todos.length > 0) {
      return todos.map((todo) => {
        return (
          <li key={todo.id} className="bg-white flex align-center w-[90%] mx-auto rounded-3xl my-4 p-6">
            <div onClick={() => toggleTodo(todo.id)} className={`w-[30px] h-[30px] rounded-full border-1 border-[#D1D1D6] mr-3 ${todo.isDone ? "bg-black": "bg-none"}`}></div>
            <p className={`text-[22px] ${todo.isDone ? "line-through": ""}`}>{todo.text}</p>
            <div className="ml-auto flex">
              <button><img className="w-[16px]" src="/trash.svg" alt="trash icon" /></button>
              <button><img className="w-[16px] ml-4" src="/pen.svg" alt="" /></button>
            </div>
          </li>
        );
      });
    }
  }

  return (
    <div className="min-h-screen text-center sf-pro-font py-8 bg-[#F5F5F7]">
      <h1 className="font-bold text-[28px] text-[#000000] mt-4">Today</h1>
      <p className="font-medium text-[14px] text-[#8E8E93] mb-12">
        Your tasks for today
      </p>
      <div className="mx-12 mb-12">
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
      <ul>{listTodos()}</ul>
    </div>
  );
}

export default App;
