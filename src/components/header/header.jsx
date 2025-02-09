const Header = () => {
  return (
    <header className="h-24 w-screen bg-[#212327] grid grid-cols-3 shadow-md border border-neutral-600">
      <div className="col-start-2 flex flex-row justify-center items-end rounded-full">
          <img
            alt="imagen principal"
            src="/rostro.jpg"
            width={50}
            height={50}
            className="w-36 rounded-full border border-gray-600 bg-slate-300 -m-14"
          />
      </div>
    </header>
  );
};

export default Header;
