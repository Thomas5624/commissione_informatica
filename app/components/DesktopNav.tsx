"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface NavItem {
  name: string;
  href: string;
}

interface DesktopNavProps {
  navItems: NavItem[];
}

export default function DesktopNav({ navItems }: DesktopNavProps) {
  const pathname = usePathname();
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const activeLink = navRefs.current.find((ref) => {
      return ref && ref.href.endsWith(pathname);
    });

    if (activeLink) {
      setUnderlineStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    } else {
      // If no active link, hide the underline or set to default
      setUnderlineStyle({ left: 0, width: 0 });
    }
  }, [pathname, navItems]);

  return (
    <nav className="hidden lg:flex text-white text-sm font-medium relative">
      <ul className="flex space-x-6">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                ref={(el) => { navRefs.current[index] = el; }}
                className={`hover:text-blue-300 transition duration-150 block py-1 ${
                  isActive ? "text-blue-300" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className="absolute bottom-0 h-0.5 bg-blue-300 transition-all duration-300 ease-in-out"
        style={{ left: underlineStyle.left, width: underlineStyle.width }}
      />
    </nav>
  );
}
