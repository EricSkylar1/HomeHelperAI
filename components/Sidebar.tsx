import { useState } from "react";

export default function RightSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const maxSidebarWidth = 96; // px

  return (
    <div className="h-screen flex flex-row w-full">
      {/* Main content */}
      <main
        className="flex-grow"
        style={{ transition: "margin-right 0.3s ease" }}
      >
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="mb-4 p-2 bg-tech-blue text-white hover:bg-blue-700 transition-colors duration-300"
            aria-label="Open sidebar"
          >
            {/* Hamburger icon */}
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
          </button>
        )}
      </main>

      {/* Sidebar */}
      <aside
        className={`bg-gray-100 overflow-hidden transition-[max-width] duration-300 flex flex-col ${
          isOpen ? "border-l border-gray-300" : ""
        }`}
        style={{ maxWidth: isOpen ? `${maxSidebarWidth}px` : "0px" }}
      >
        <div
          className={`transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="mb-6 p-2 hover:bg-gray-300 transition-colors duration-300"
            aria-label="Close sidebar"
          >
            {/* X icon */}
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
          </button>
          <nav className="flex-grow w-24 text-center">
            <ul className="space-y-4 font-medium text-gray-700">
              <li className="hover:text-tech-blue cursor-pointer">Dashboard</li>
              <li className="hover:text-tech-blue cursor-pointer">Settings</li>
              <li className="hover:text-tech-blue cursor-pointer">Profile</li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}
