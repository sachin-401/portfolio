const ScreenHeader = () => {
  return (
    <header
      id="os-screen-header"
      className="fixed top-0 left-0 right-0 z-50 w-full h-10 border-b border-white/10 backdrop-blur-2xl flex items-center justify-between px-3 shadow-md"
    >
      <div className="w-full flex justify-center items-center gap-2">
        <span className="text-sm">Sachin Bhattarai</span>
      </div>
    </header>
  );
};

export default ScreenHeader;
