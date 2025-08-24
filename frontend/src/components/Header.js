import React from 'react';
import MenuIcon from './icons/MenuIcon';

const NavLink = ({ children, href }) => (
  <li>
    <a
      href={href}
      className="px-4 py-2 text-sm text-gray-400 rounded-full hover:bg-[#2A2B2F] hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  </li>
);

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="text-2xl font-bold tracking-wider text-white">MZ</div>
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-2 bg-[#1C1D20] p-1 rounded-full">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </ul>
      </nav>
      <div className="text-gray-400">
        <MenuIcon className="h-6 w-6" />
      </div>
    </header>
  );
};

export default Header;
