export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}