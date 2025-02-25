import React from "react";
import TodoItem from "./TodoItem.tsx";

type Props = {
  todoText: string;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
};

const Form: React.FC<Props> = ({ todoText, setTodoText, setTodos }) => {
  // This function takes todo text and returns todo item object
  function createTodo(inputText: string): TodoItem | undefined {
    if (inputText.trim()) {
      return {
        id: Date.now(),
        text: inputText.replace(/\s+/g, " ").trim(),
        isCompleted: false,
        isEditing: false,
      };
    }
  }

  // This function takes a todo object and adds it to todo list
  function addNewTodo(newTodoObj: TodoItem | undefined): void {
    if (newTodoObj) {
      setTodos((prev: TodoItem[]) => [...prev, newTodoObj]);
      setTodoText("");
    }
  }

  return (
    <div>
      <input
        className="block text-lg w-[85vw] max-w-lg mb-10 mx-auto h-12 outline-0 border-[inherit] rounded-2xl bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.15)] px-4"
        placeholder="Add a new task"
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addNewTodo(createTodo(todoText));
        }}
      />
      <button
        className="w-10 h-10 bg-[#007AFF] border-0 rounded-full text-2xl text-white text-extrabold cursor-pointer"
        onClick={() => addNewTodo(createTodo(todoText))}
      >
        +
      </button>
    </div>
  );
};

export default Form;
