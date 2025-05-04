"use client"
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import UseCases from '../use-cases';

const navLinks = [
  // { name: 'Network', href: '#' },
  // { name: 'Devs', href: '#' },
  // { name: 'Ecosystem', href: '#' },
  { name: 'Use Cases', href: '/use-cases', dropdown: true },
  // { name: 'HBAR', href: '#' },
  { name: 'Governance', href: '#' },
  { name: 'Resources', href: '#' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const useCasesRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (useCasesRef.current && !(useCasesRef.current as HTMLDivElement).contains(event.target as Node)) {
        setUseCasesOpen(false);
      }
    }
    if (useCasesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [useCasesOpen]);

  return (
    <nav className="w-full relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="ml-2 text-white font-bold text-xl">Yield</span>
            <Image src="/yield-logo-mark1.png" alt="Yield Logo" width={30} height={30} className="rounded-full object-contain m-2" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setUseCasesOpen(true)}
                  onMouseLeave={() => setUseCasesOpen(false)}
                  ref={useCasesRef}
                >
                  <button
                    className="text-white font-medium hover:text-[#0B4619] transition px-2 py-1 rounded focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={useCasesOpen}
                  >
                    {link.name}
                  </button>
                  {/* Dropdown */}
                  {useCasesOpen && (
                    <div className="absolute mt-4 mr-10 w-[40rem] max-w-[80vw] bg-transparent rounded-2xl shadow-2xl z-50 animate-fadeIn left-[-20rem]">
                      <UseCases />
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white font-medium hover:text-[#0B4619] transition px-2 py-1 rounded"
                  onClick={() => setUseCasesOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-400 to-green-300 px-4 pb-4">
          <div className="flex flex-col space-y-2 mt-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative" ref={useCasesRef}>
                  <button
                    className="text-white font-medium py-2 px-2 rounded hover:bg-[#0B4619]/10 transition w-full text-left"
                    onClick={() => setUseCasesOpen(!useCasesOpen)}
                  >
                    {link.name}
                  </button>
                  {useCasesOpen && (
                    <div className="w-full bg-white rounded-2xl shadow-2xl border border-[#9DC45F]/30 z-50 p-4 mt-2 animate-fadeIn">
                      <UseCases compact={true} />
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white font-medium py-2 px-2 rounded hover:bg-[#0B4619]/10 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}

          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
      `}</style>
    </nav>
  );
} 