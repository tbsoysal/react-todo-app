type Props = {
  menuIndex: number;
  setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
};

function FooterMenu({ menuIndex, setMenuIndex }: Props) {
  const activeMenuStyle = `text-black relative after:content-[""] after:absolute after:w-12 after:h-2 after:bg-[#007AFF] after:rounded-2xl after:bottom-2.5 after:left-[50%] after:translate-x-[-50%]`;

  return (
    <footer className="fixed bottom-0 w-screen bg-white flex justify-center px-4 max-w-lg left-[50%] translate-x-[-50%]">
      <a
        onClick={() => setMenuIndex(0)}
        className={`py-5 flex-1 text-[#8E8E93] ${menuIndex === 0 && activeMenuStyle}`}
      >
        All
      </a>
      <a
        onClick={() => setMenuIndex(1)}
        className={`py-5 flex-1 text-[#8E8E93] ${menuIndex === 1 && activeMenuStyle} `}
      >
        Pending
      </a>
      <a
        onClick={() => setMenuIndex(2)}
        className={`py-5 flex-1 text-[#8E8E93] ${menuIndex === 2 && activeMenuStyle} `}
      >
        Completed
      </a>
    </footer>
  );
}

export default FooterMenu;
