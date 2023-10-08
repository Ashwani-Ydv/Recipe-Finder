const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl text-white font-bold">Recipe Finder</div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="text-white hover:text-gray-200 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
