import Taskinput from "./Taskinput";

function App() {
  return (
    <div className="min-h-screen text-center sf-pro-font py-8 bg-[#F5F5F7]">
      <h1 className="font-bold text-[28px] text-[#000000] mt-4">Today</h1>
      <p className="font-medium text-[14px] text-[#8E8E93] mb-12">Your tasks for today</p>
      <Taskinput />
    </div>
  );
}

export default App;
