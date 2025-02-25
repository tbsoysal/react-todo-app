import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TodoItem from "./components/TodoItem.tsx";
import FooterMenu from "./components/FooterMenu.tsx";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [menuIndex, setMenuIndex] = useState<number>(0);
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    // Load from localStorage on mount
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="mt-16 mb-12">
        <h1 className="font-bold text-3xl mb-2">Today</h1>
        <p className="text-[#8E8E93] text-lg">Your tasks for today</p>
      </div>
      <Form todoText={todoText} setTodoText={setTodoText} setTodos={setTodos} />
      <List
        todoText={todoText}
        setTodoText={setTodoText}
        todos={todos}
        setTodos={setTodos}
        menuIndex={menuIndex}
      />
      <FooterMenu menuIndex={menuIndex} setMenuIndex={setMenuIndex} />
    </>
  );
};

export default App;
