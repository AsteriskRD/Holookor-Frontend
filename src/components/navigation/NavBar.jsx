'use client';

import { useState } from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import Logo from '../Logo';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';

/**
 * Navigation Bar component
 * TODO: API Integration - Connect navigation items to routing system
 * TODO: API Integration - Connect notification bell to real-time notification service
 * TODO: API Integration - Connect user dropdown to authentication/profile management
 */
export default function NavBar({ user, notificationCount }) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const navItems = ['Dashboard', 'Sessions', 'Tutors', 'Study Hub', 'Progress'];
  
  return (
    <nav className="bg-white border-b border-[var(--color-border)] sticky top-0 z-50 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18 max-w-[1600px] mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-center max-w-2xl mx-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-4 xl:px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === item
                    ? 'bg-[var(--color-neutral-900)] text-white shadow-sm'
                    : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-neutral-100)]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Notification Bell */}
            <button className="relative p-2.5 hover:bg-[var(--color-neutral-100)] rounded-lg transition-all duration-200">
              <Bell className="w-5 h-5 text-[var(--color-muted-foreground)]" />
              {notificationCount > 0 && (
                <Badge variant="error" className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center p-0 px-1 text-[10px]">
                  {notificationCount}
                </Badge>
              )}
            </button>
            
            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-all duration-200"
              >
                <Avatar src={user.avatarUrl} alt={user.fullName} size="md" />
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium text-[var(--color-foreground)] leading-tight">{user.fullName}</div>
                  <div className="text-xs text-[var(--color-muted-foreground)] leading-tight">{user.email}</div>
                </div>
                <ChevronDown className="w-4 h-4 text-[var(--color-muted-foreground)] hidden sm:block" />
              </button>
              
              {/* Dropdown Menu - TODO: Implement dropdown menu items */}
              {showUserMenu && (
                <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-[var(--color-border)] py-2 overflow-hidden">
                  <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-[var(--color-neutral-100)] transition-all duration-200">
                    Profile
                  </button>
                  <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-[var(--color-neutral-100)] transition-all duration-200">
                    Settings
                  </button>
                  <div className="border-t border-[var(--color-border)] my-1"></div>
                  <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-[var(--color-accent-50)] transition-all duration-200 text-[var(--color-error)]">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}