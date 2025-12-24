const Footer = () => {
  return (
    <footer>
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-1">Rishav</h3>
              <p className="text-gray-400 mb-2">Software Engineer Trainee</p>
            </div>

            <div className="flex-1 w-full md:w-auto">
              <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="flex-1 p-2 sm:p-1.5 rounded-lg sm:rounded-l-lg sm:rounded-r-none bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400 text-sm"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto text-sm bg-gradient-to-r from-red-500 to-blue-600 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-4 mt-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()}</p>

              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
