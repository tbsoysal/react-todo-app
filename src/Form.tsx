type Props = {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
};

const Form: React.FC<Props> = ({ newTodo, setNewTodo }) => {
  return (
    <div>
      <input
        className="block text-lg w-[85vw] max-w-lg mb-10 mx-auto h-12 outline-0 border-[inherit] rounded-2xl bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.15)] px-4"
        placeholder="Add a new task"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="w-10 h-10 bg-[#007AFF] border-0 rounded-full text-2xl text-white text-extrabold cursor-pointer">
        +
      </button>
    </div>
  );
};

export default Form;
