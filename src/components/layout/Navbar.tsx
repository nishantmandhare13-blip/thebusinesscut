'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Film,
  BookOpen,
  Compass,
  FileCheck2,
  LayoutDashboard,
  ShieldAlert,
  GraduationCap,
  Users,
  ChevronDown,
  Menu,
  X,
  UserCheck,
  RotateCcw
} from 'lucide-react';
import { useLms } from '@/context/LmsContext';
import { UserRole } from '@/types/lms';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { currentRole, currentUser, switchRole, setIsOnboardingOpen, resetDemoData } = useLms();
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/catalog', label: 'Catalog', icon: Compass },
    { href: '/paths', label: 'Learning Paths', icon: BookOpen },
    { href: '/assignments', label: 'Assignments', icon: FileCheck2 },
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      {/* Top Demo Notification Strip */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/15 to-amber-500/10 border-b border-amber-500/20 px-4 py-1 text-center text-[11px] font-mono text-amber-300/90 flex items-center justify-between">
        <div className="mx-auto flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>Demo Mode: 104 verified MBA cinematic case studies loaded. Local persistence active.</span>
        </div>
        <button
          type="button"
          onClick={() => {
            if (confirm('Reset demo data back to default initial seed state?')) {
              resetDemoData();
            }
          }}
          className="hidden sm:inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-amber-300 transition"
          title="Reset demo data"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Demo</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Product Name */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition">
                <Film className="w-5 h-5 text-slate-950" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-slate-100 group-hover:text-amber-400 transition">
                  The Business Cut
                </span>
                <span className="text-[10px] font-mono text-slate-400 -mt-0.5 tracking-wider uppercase">
                  Film-Based MBA Learning
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 ml-4" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}

              {/* Instructor Workspace Link */}
              <Link
                href="/instructor"
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  pathname.startsWith('/instructor')
                    ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Users className="w-3.5 h-3.5 text-purple-400" />
                <span>Instructor Workspace</span>
              </Link>

              {/* Admin Settings Link */}
              <Link
                href="/admin"
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  pathname.startsWith('/admin')
                    ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                <span>Admin</span>
              </Link>
            </nav>
          </div>

          {/* Right Role Switcher & Profile CTA */}
          <div className="flex items-center gap-3">
            {/* Interactive Role Switcher Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono font-medium transition shadow-sm ${
                  currentRole === 'student'
                    ? 'bg-sky-500/10 border-sky-500/30 text-sky-300'
                    : currentRole === 'instructor'
                    ? 'bg-purple-500/10 border-purple-500/30 text-purple-300'
                    : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                }`}
                aria-haspopup="true"
                aria-expanded={roleMenuOpen}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
                <span className="capitalize hidden sm:inline">{currentRole}:</span>
                <span className="font-semibold">{currentUser.name.split(' ')[0]}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {roleMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-700 bg-slate-900 shadow-xl p-2 z-50 text-slate-200 animate-fade-in"
                  onMouseLeave={() => setRoleMenuOpen(false)}
                >
                  <div className="px-3 py-2 border-b border-slate-800 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Switch Active Persona
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      switchRole('student');
                      setRoleMenuOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg flex items-center justify-between text-xs transition ${
                      currentRole === 'student' ? 'bg-sky-500/20 text-sky-200 font-bold' : 'hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-slate-100">Student: Sarah Chen</div>
                      <div className="text-[10px] text-slate-400 font-mono">Stanford GSB • PM Fellow</div>
                    </div>
                    {currentRole === 'student' && <UserCheck className="w-4 h-4 text-sky-400" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      switchRole('instructor');
                      setRoleMenuOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg flex items-center justify-between text-xs transition ${
                      currentRole === 'instructor' ? 'bg-purple-500/20 text-purple-200 font-bold' : 'hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-slate-100">Instructor: Prof. Vance</div>
                      <div className="text-[10px] text-slate-400 font-mono">HBS Clinical Faculty</div>
                    </div>
                    {currentRole === 'instructor' && <UserCheck className="w-4 h-4 text-purple-400" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      switchRole('admin');
                      setRoleMenuOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg flex items-center justify-between text-xs transition ${
                      currentRole === 'admin' ? 'bg-amber-500/20 text-amber-200 font-bold' : 'hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-slate-100">Admin: Elena Rostova</div>
                      <div className="text-[10px] text-slate-400 font-mono">Director of Academic Tech</div>
                    </div>
                    {currentRole === 'admin' && <UserCheck className="w-4 h-4 text-amber-400" />}
                  </button>
                </div>
              )}
            </div>

            {/* Profile / Onboarding trigger */}
            <button
              type="button"
              onClick={() => setIsOnboardingOpen(true)}
              className="p-1.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:border-amber-400/50 hover:bg-slate-800 text-slate-300 hover:text-white transition flex items-center gap-2"
              title="Edit Learning Profile & Goals"
            >
              <img
                src={currentUser.avatarUrl}
                alt={currentUser.name}
                className="w-6 h-6 rounded-lg object-cover"
              />
              <span className="text-xs font-medium hidden lg:inline">{currentUser.name}</span>
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 p-4 space-y-2 animate-fade-in">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-850"
              >
                <Icon className="w-4 h-4 text-amber-400" />
                <span>{link.label}</span>
              </Link>
            );
          })}
          <Link
            href="/instructor"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-purple-300 hover:bg-slate-850"
          >
            <Users className="w-4 h-4" />
            <span>Instructor Workspace</span>
          </Link>
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-rose-300 hover:bg-slate-850"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Admin Settings</span>
          </Link>
          <div className="pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={() => {
                setIsOnboardingOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-mono text-amber-400"
            >
              Edit Profile & Goals
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
