const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-1 mt-10">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Recipe Finder. All rights reserved.
        </p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400 transition duration-200">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition duration-200">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition duration-200">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
