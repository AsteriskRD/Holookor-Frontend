"use client";

import { useEffect, useState, useRef } from "react";
import { Bell, ChevronDown } from "lucide-react";
import Logo from "../Logo";
import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Navigation Bar component
 * TODO: API Integration - Connect navigation items to routing system
 * TODO: API Integration - Connect notification bell to real-time notification service
 * TODO: API Integration - Connect user dropdown to authentication/profile management
 */

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Sessions", href: "/sessions" },
  { name: "Tutors", href: "/tutors" },
  { name: "Study Hub", href: "/study-hub" },
  { name: "Progress", href: "/progress" },
];

export default function NavBar({ user, notificationCount }) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuRef = useRef(null); // 👈 Ref for detecting outside clicks

  // Automatically update active tab when route changes
  useEffect(() => {
    const current = navItems.find((item) => item.href === pathname);
    if (current) setActiveTab(current.name);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#ffffff]  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-6 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Mobile hamburger (visible on small screens) + Centered Navigation (pill) for md+ */}
          <div className="flex-1 flex items-center justify-end">
            <button
              aria-label="Toggle navigation"
              onClick={() => setShowMobileMenu((s) => !s)}
              className="mr-3 p-2 rounded-md hover:bg-[var(--muted)] transition-colors duration-150 md:hidden"
            >
              <svg
                className="w-6 h-6 text-[var(--foreground)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop pill nav (hidden on small screens) */}
            <div className="hidden md:block bg-white rounded-full px-2 py-3 shadow-md justify-between gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-colors duration-150 ${
                    activeTab === item.name
                      ? "bg-[#0c5b29] text-white shadow"
                      : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                  }`}
                >
                  {item.name}
                </Link>
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
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setShowUserMenu((prev) => !prev)}
                className="flex items-center gap-3 p-1.5 hover:bg-[var(--muted)] rounded-lg transition-colors duration-150"
              >
                <Avatar
                  src={user?.avatarUrl}
                  alt={user?.fullName || "User"}
                  size="md"
                />
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium text-[var(--foreground)] leading-tight">
                    {user?.fullName || "no-user"}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)] leading-tight">
                    {user?.email || "no-email "}
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[var(--muted-foreground)] hidden sm:block transition-transform duration-200 ${
                    showUserMenu ? "rotate-180" : ""
                  }`}
                />
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
                  <Link href="/">
                    <button className="w-full px-4 py-2 text-left text-white text-sm bg-[#FF0000] hover:bg-[#8B0000] transition-colors duration-150 text-[var(--accent)]">
                      Log out
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {showMobileMenu && (
        <div className="md:hidden bg-[var(--background)] border-t border-[var(--color-border)]">
          <div className=" min-h-screen backdrop-blur px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.name);
                  setShowMobileMenu(false);
                }}
              >
                <button
                  className={`block w-full text-left px-3 py-2 rounded transition-colors duration-150 ${
                    activeTab === item.name
                      ? "bg-[var(--primary)] text-white"
                      : "text-[var(--color-muted-foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
