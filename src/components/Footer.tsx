export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MedMansports</h3>
            <p className="text-gray-400">
              Content creator who codes. Sharing my journey in tech and athletics.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="#" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <a 
              href="https://medmansports.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Visit MedMansports Store →
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MedMansports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}