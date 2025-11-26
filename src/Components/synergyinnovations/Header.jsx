'use client'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const location = useLocation()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/synergy-innovations/about' },
    { name: 'Announcements', href: '/synergy-innovations/notifications' },
    { name: 'Contact Us', href: '/synergy-innovations/contact' }
  ]

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="Logo" className="h-12 w-10 rounded-full p-1 bg-white " />
            <span className="ml-3 text-2xl font-bold tracking-tight">
              Synergy <span className="text-white">Innovations</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleScrollTop}
                className={`relative text-white px-3 py-2 text-sm font-medium transition-colors duration-200 group ${
                  location.pathname === item.href ? 'font-semibold' : ''
                }`}
              >
                {item.name}
                {/* underline animation */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-md hover:bg-white/20 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-primary border-t border-white/30">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleScrollTop}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-white/20 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
