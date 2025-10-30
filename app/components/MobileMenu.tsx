"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  navItems: { name: string; href: string }[];
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        id="menu-button"
        className="text-white p-2 rounded-md hover:bg-blue-700 transition duration-150"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 cilto-bg-blue z-50 transform transition-transform duration-300 translate-x-0"
        >
          <div className="flex justify-end p-4">
            <button
              id="close-menu-button"
              className="text-white p-2 rounded-md hover:bg-blue-700 transition duration-150"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 text-2xl font-semibold text-white mt-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-blue-300 transition duration-150"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
