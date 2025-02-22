import { useState } from "react";
import Form from "./Form";
import List from "./List";

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
      <div className="mt-16 mb-12">
        <h1 className="font-bold text-3xl mb-2">Today</h1>
        <p className="text-[#8E8E93] text-lg">Your tasks for today</p>
      </div>
      <Form newTodo={newTodo} setNewTodo={setNewTodo} />
      <List />
    </>
  );
};

export default App;
