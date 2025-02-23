import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TodoItem from "./components/TodoItem.tsx";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>([]);

  return (
    <>
      <div className="mt-16 mb-12">
        <h1 className="font-bold text-3xl mb-2">Today</h1>
        <p className="text-[#8E8E93] text-lg">Your tasks for today</p>
      </div>
      <Form todoText={todoText} setTodoText={setTodoText} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
