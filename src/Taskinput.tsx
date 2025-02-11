function Taskinput() {
  return (
    <div className="mx-12">
      <input
        className="block w-full shadow-[0_4px_10px_rgba(0,0,0,0.15)] outline-none rounded-[16px] bg-[white] text-[16px] px-[16px] h-[54px]"
        placeholder="Add a new task"
        type="text"
      />
      <button className="bg-[#007AFF] w-[40px] h-[40px] mt-12 rounded-full font-bold text-white text-[20px]">+</button>
    </div>
  );
}

export default Taskinput;
