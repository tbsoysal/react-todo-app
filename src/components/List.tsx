import React from "react";
import TodoItem from "./TodoItem";
import Todo from "./Todo";

interface Props {
  todos: TodoItem[];
  todoText: string;
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
}

const List: React.FC<Props> = (props) => {
  return (
    <ul className="my-10">
      {props.todos.map((currTodo: TodoItem) => {
        return <Todo key={currTodo.id} {...currTodo} {...props} />;
      })}
    </ul>
  );
};

export default List;
