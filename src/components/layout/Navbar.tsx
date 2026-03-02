"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Bell, ChevronDown, Search, Settings } from "lucide-react";

export default function Navbar() {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-14 flex items-center px-6 justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 w-52">
        <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
          <span className="text-white text-xs font-bold">S</span>
        </div>
        <span className="text-blue-600 font-bold text-lg tracking-tight">
          Soludesks
        </span>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-md mx-8">
        <label htmlFor="search" className="sr-only">
          Search Soludesk
        </label>
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            id="search"
            type="search"
            placeholder="Search soludesk"
            className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="relative" aria-label="Notifications">
          <Bell className="w-5 h-5 text-gray-500" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <button aria-label="Settings">
          <Settings className="w-5 h-5 text-gray-500" />
        </button>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white text-sm font-semibold">
            {user.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800 leading-tight">
              {user.name}
            </span>
            <span className="text-xs text-gray-400 leading-tight truncate max-w-[120px]">
              {user.email}
            </span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
}
