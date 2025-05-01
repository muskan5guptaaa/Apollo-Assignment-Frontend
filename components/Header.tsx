const Header = () => {
  return (
    <header className="shadow-md p-4 flex flex-col md:flex-row items-center justify-between bg-white gap-4">
      <div className="text-2xl font-bold text-blue-600">Apollo Clone</div>

      <div className="w-full md:w-96 relative">
        <input
          type="text"
          placeholder="Search doctors, clinics, hospitals..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <nav className="space-x-6 text-sm text-gray-600">
        <a href="#">Home</a>
        <a href="#">Doctors</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
