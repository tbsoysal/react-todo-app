import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

interface TodoProps extends TodoItem {
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const Todo = ({ id, text, isCompleted, isEditing, setTodos }: TodoProps) => {
  // State for the editting text
  const [newText, setNewText] = useState(text); // Deletes the todo object from the array
  const deleteTodo = () => {
    setTodos((prev: TodoItem[]) => {
      return prev.filter((todo: TodoItem) => todo.id !== id);
    });
  };

  // changes the isCompleted property
  const toggleCompleted = () => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
        return todo;
      }),
    );
  };

  // Change the isEditing property to true/false
  const editTodo = () => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) return { ...todo, isEditing: !todo.isEditing };
        return todo;
      }),
    );
  };

  // Change the text property of the todo and isEditing property to false
  const saveEdit = () => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id)
          return { ...todo, text: newText, isEditing: !todo.isEditing };
        return todo;
      }),
    );
  };

  return (
    <li className="w-[85vw] max-w-lg mb-4 bg-white rounded-3xl flex px-5 py-3.5 items-center mx-auto">
      <button
        className={`${isCompleted ? "bg-black" : "bg-transparent"} w-6 h-6 border-[#D1D1D6] shrink-0 rounded-full border mr-3 cursor-pointer`}
        onClick={toggleCompleted}
      ></button>
      {isEditing ? (
        <input
          className="text-lg block w-[100%] grow outline-0"
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          autoFocus
        />
      ) : (
        <p
          onClick={toggleCompleted}
          className={`${isCompleted ? "line-through text-gray-700 italic" : "no-underline"} grow text-lg text-start`}
        >
          {text}
        </p>
      )}
      <button
        className="shrink-0 p-2 cursor-pointer"
        onClick={() => (isEditing ? saveEdit() : editTodo())}
      >
        <img className="w-4" src={isEditing ? "./tick.svg" : "./pen.svg"} />
      </button>
      <button className="shrink-0 p-2 cursor-pointer" onClick={deleteTodo}>
        <img className="w-4" src="./trash.svg" />
      </button>
    </li>
  );
};

export default Todo;
