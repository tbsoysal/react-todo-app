import TodoItem from "./TodoItem";
import Todo from "./Todo";

interface Props {
  todos: TodoItem[];
  todoText: string;
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
  menuIndex: number;
}

const List: React.FC<Props> = (props) => {
  function createList(index: number) {
    let list: TodoItem[] = [];
    if (index === 0) list = props.todos;
    if (index === 1) list = props.todos.filter((todo) => !todo.isCompleted);
    if (index === 2) list = props.todos.filter((todo) => todo.isCompleted);

    return list.map((currTodo) => (
      <Todo key={currTodo.id} {...currTodo} {...props} />
    ));
  }
  return <ul className="my-10">{createList(props.menuIndex)}</ul>;
};

export default List;
