"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              MedMansports
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`px-3 py-2 text-sm transition-colors ${
                isActive('/') 
                  ? 'text-gray-900 font-bold' 
                  : 'text-gray-700 hover:text-gray-900 font-medium'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className={`px-3 py-2 text-sm transition-colors ${
                isActive('/projects') 
                  ? 'text-gray-900 font-bold' 
                  : 'text-gray-700 hover:text-gray-900 font-medium'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/log" 
              className={`px-3 py-2 text-sm transition-colors ${
                isActive('/log') 
                  ? 'text-gray-900 font-bold' 
                  : 'text-gray-700 hover:text-gray-900 font-medium'
              }`}
            >
              Log
            </Link>
            <Link 
              href="/collaborate" 
              className={`px-3 py-2 text-sm transition-colors ${
                isActive('/collaborate') 
                  ? 'text-gray-900 font-bold' 
                  : 'text-gray-700 hover:text-gray-900 font-medium'
              }`}
            >
              Collaborate
            </Link>
            <Link 
              href="/about" 
              className={`px-3 py-2 text-sm transition-colors ${
                isActive('/about') 
                  ? 'text-gray-900 font-bold' 
                  : 'text-gray-700 hover:text-gray-900 font-medium'
              }`}
            >
              About
            </Link>
            <a 
              href="https://medmansports.ca" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700"
            >
              Shop
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link 
                href="/" 
                className={`block px-3 py-2 text-base transition-colors ${
                  isActive('/') 
                    ? 'text-gray-900 font-bold' 
                    : 'text-gray-700 hover:text-gray-900 font-medium'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className={`block px-3 py-2 text-base transition-colors ${
                  isActive('/projects') 
                    ? 'text-gray-900 font-bold' 
                    : 'text-gray-700 hover:text-gray-900 font-medium'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/log" 
                className={`block px-3 py-2 text-base transition-colors ${
                  isActive('/log') 
                    ? 'text-gray-900 font-bold' 
                    : 'text-gray-700 hover:text-gray-900 font-medium'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Log
              </Link>
              <Link 
                href="/collaborate" 
                className={`block px-3 py-2 text-base transition-colors ${
                  isActive('/collaborate') 
                    ? 'text-gray-900 font-bold' 
                    : 'text-gray-700 hover:text-gray-900 font-medium'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Collaborate
              </Link>
              <Link 
                href="/about" 
                className={`block px-3 py-2 text-base transition-colors ${
                  isActive('/about') 
                    ? 'text-gray-900 font-bold' 
                    : 'text-gray-700 hover:text-gray-900 font-medium'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a 
                href="https://medmansports.ca" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white px-3 py-2 text-base font-medium rounded-md hover:bg-blue-700 mx-3 mt-2"
              >
                Shop
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}