'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/about' },
    { name: 'Products & Services', href: '/#products' },
    { name: 'Gallery', href: '/#gallery' },
  ];

  return (
    <nav id="site-navbar" className="fixed top-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-15">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-green-800 to-gray-600 rounded-full flex items-center justify-center font-bold text-white text-lg shadow">
                A
              </div>
            </Link>
          </div>
          {/* All nav items right side */}
          <div className="flex items-center gap-2 md:gap-8 ml-auto">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-gray-700 hover:text-black transition-colors duration-300 text-sm relative group',
                    'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-gray-800 after:to-gray-500',
                    'after:transition-all after:duration-300 hover:after:w-full'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center ml-2">
              <button className="px-3 py-1.5 text-sm bg-green-800 text-white font-semibold rounded-full hover:shadow transition-all duration-200">
                Contact Us
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <IconX size={24} stroke={1.5} /> : <IconMenu2 size={24} stroke={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <button className="w-full px-3 py-1.5 text-sm bg-green-800 text-white font-semibold rounded-full hover:shadow transition-all duration-200">
                Contact me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
