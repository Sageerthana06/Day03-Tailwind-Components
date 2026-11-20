function Navbar() {
  return (
    <nav className="w-full bg-[#f5f6f8] px-6 md:px-12 py-5 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#064e4b] flex items-center justify-center text-white font-bold">
          P
        </div>

        <h1 className="text-xl font-bold text-gray-800">Prodmast</h1>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-teal-700">
          Home
        </a>
        <a href="#" className="hover:text-teal-700">
          About
        </a>
        <a href="#" className="hover:text-teal-700">
          Services
        </a>
        <a href="#" className="hover:text-teal-700">
          Contact
        </a>
      </div>

      {/* Sign Up */}
      <button className="bg-[#064e4b] text-white px-7 py-3 rounded-full text-sm hover:bg-teal-800 transition">
        Sign Up
      </button>
    </nav>
  );
}

export default Navbar;
