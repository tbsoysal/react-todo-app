import TodoItem from "./TodoItem";

interface TodoProps extends TodoItem {
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const Todo = ({ id, text, isCompleted, setTodos }: TodoProps) => {
  const deleteTodo = () => {
    setTodos((prev: TodoItem[]) => {
      return prev.filter((todo: TodoItem) => todo.id !== id);
    });
  };

  const toggleCompleted = (id: number) => {
    setTodos((prev: TodoItem[]) => {
      return prev.map((el) => {
        el.id === id ? { ...el, isCompleted: !el.isCompleted } : el;
      });
    });
  };

  return (
    <li
      key={id}
      className="w-[85vw] max-w-lg mb-4 bg-white rounded-3xl flex px-5 py-3.5 items-center mx-auto"
    >
      <button
        className={`${isCompleted ? "bg-black" : "bg-transparent"} w-6 h-6 border-[#D1D1D6] shrink-0 rounded-full bg-white border mr-3`}
        onClick={() => toggleCompleted(id)}
      ></button>
      <p className="text-lg text-start">{text}</p>
      <button className="ml-auto shrink-0 pl-3" onClick={deleteTodo}>
        <img className="w-3" src="./public/trash.svg" />
      </button>
    </li>
  );
};

export default Todo;
