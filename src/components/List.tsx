import React from "react";
import TodoItem from "./TodoItem";
import Todo from "./Todo";

interface Props {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const List: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <ul className="my-10">
      {todos.map((currTodo: TodoItem) => {
        return (
          <Todo
            key={currTodo.id}
            id={currTodo.id}
            text={currTodo.text}
            isCompleted={currTodo.isCompleted}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
};

export default List;
