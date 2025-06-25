import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-full bg-gray-100 transition-all duration-300 ${isOpen ? 'w-24' : 'w-10'}`}>
      <button
        className="p-2 hover:bg-gray-200 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          // Close (X) icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      {isOpen && (
        <nav className="p-4">
          <ul>
            <li className="mb-2">Dashboard</li>
            <li className="mb-2">Settings</li>
            <li className="mb-2">Profile</li>
          </ul>
        </nav>
      )}
      {!isOpen && (
        <nav className="p-4">
          <ul>
            <li className="mb-2">I</li>
            <li className="mb-2">I</li>
            <li className="mb-2">I</li>
          </ul>
        </nav>
      )}
    </div>
  );
}
