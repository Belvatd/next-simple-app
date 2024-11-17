"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const hideNavbar = ["/login", "/register"];

  return (
    !hideNavbar.includes(pathname) && (
      <nav className="flex justify-between bg-gray-800 p-4">
        <ul className="flex items-center space-x-4">
          <Link href="/">
            <li
              className={`${
                pathname !== "/" ? "text-white" : "text-blue-500"
              } hover:text-gray-40`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`${
                pathname !== "/about" ? "text-white" : "text-blue-500"
              } hover:text-gray-40`}
            >
              About
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`${
                pathname !== "/contact" ? "text-white" : "text-blue-500"
              } hover:text-gray-40`}
            >
              Contact
            </li>
          </Link>
        </ul>
        <div>
          <button
            onClick={() => router.push("/login")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </nav>
    )
  );
};

export default Navbar;
