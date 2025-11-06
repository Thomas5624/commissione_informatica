"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch";

interface MobileMenuProps {
  navItems: { name: string; href: string }[];
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        id="menu-button"
        className="header-text p-2 rounded-md hover:opacity-90 transition duration-150"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 header-bg z-50 transform transition-transform duration-300 translate-x-0"
        >
          <div className="flex justify-end p-4">
            <div className="flex items-center space-x-3">
              <ThemeSwitch />
              <button
                id="close-menu-button"
                className="header-text p-2 rounded-md hover:opacity-90 transition duration-150"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </div>
           <nav className="flex flex-col items-center space-y-6 text-2xl font-semibold header-text mt-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:accent transition duration-150"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
           </nav>
        </div>
      )}
    </div>
  );
}
