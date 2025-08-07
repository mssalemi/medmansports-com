export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-light text-white mb-4 tracking-wider">MEDMANSPORTS</h3>
            <p className="text-neutral-400">
              Where software engineering meets athletic ambition. Building digital solutions while competing on the court.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-neutral-400 hover:text-blue-500 transition-colors"
              >
                Twitter
              </a>
              <a 
                href="#" 
                className="block text-neutral-400 hover:text-blue-500 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="#" 
                className="block text-neutral-400 hover:text-blue-500 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="#" 
                className="block text-neutral-400 hover:text-blue-500 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Store</h3>
            <a 
              href="https://medmansports.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-neutral-400 hover:text-blue-500 transition-colors font-medium"
            >
              Visit MEDMANSPORTS Store
              <span className="ml-1">→</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-500">
            &copy; {new Date().getFullYear()} MEDMANSPORTS. Built with ambition.
          </p>
        </div>
      </div>
    </footer>
  );
}