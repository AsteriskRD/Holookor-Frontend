"use client";

import { useState } from "react";
import { Bell, ChevronDown } from "lucide-react";
import Logo from "../Logo";
import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";

/**
 * Navigation Bar component
 * TODO: API Integration - Connect navigation items to routing system
 * TODO: API Integration - Connect notification bell to real-time notification service
 * TODO: API Integration - Connect user dropdown to authentication/profile management
 */
export default function   NavBar({ user, notificationCount }) {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navItems = ["Dashboard", "Sessions", "Tutors", "Study Hub", "Progress"];

  return (
    <nav className="bg-[var(--background)] border-b border-[var(--color-border)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-6 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Centered Navigation (pill) */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-full px-2 py-1 shadow-sm flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-colors duration-150 ${activeTab === item
                      ? "bg-[var(--primary)] text-white shadow"
                      : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Notification Bell */}
            <button className="relative p-2 hover:bg-[var(--muted)] rounded-lg transition-colors duration-150">
              <Bell className="w-5 h-5 text-[var(--muted-foreground)]" />
              {notificationCount > 0 && (
                <Badge
                  variant="error"
                  className="absolute -top-1 -right-1 min-w-[1rem] h-[1rem] flex items-center justify-center p-0 text-[0.65rem]"
                >
                  {notificationCount}
                </Badge>
              )}
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-3 p-1.5 hover:bg-[var(--muted)] rounded-lg transition-colors duration-150"
              >
                <Avatar src={user.avatarUrl} alt={user.fullName} size="md" />
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium text-[var(--foreground)] leading-tight">
                    {user.fullName}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)] leading-tight">
                    {user.email}
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-[var(--muted-foreground)] hidden sm:block" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-[var(--border)] py-1 overflow-hidden">
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-[var(--muted)] transition-colors duration-150">
                    Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-[var(--muted)] transition-colors duration-150">
                    Settings
                  </button>
                  <div className="border-t border-[var(--border)]  my-1"></div>
                  <button className="w-full px-4 py-2 text-left text-white text-sm bg-[#FF0000] hover:bg-[#8B0000] transition-colors duration-150 text-[var(--accent)]">
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {showMobileMenu && (
        <div className="md:hidden bg-[var(--background)] border-t border-[var(--color-border)]">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  setShowMobileMenu(false);
                }}
                className={`w-full text-left px-3 py-2 rounded transition-colors duration-150 ${
                  activeTab === item
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--color-muted-foreground)] hover:bg-[var(--muted)]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
