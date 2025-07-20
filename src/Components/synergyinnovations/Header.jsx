'use client'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'


const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-blue-300 via-blue-300 to-blue-300 shadow-lg sticky top-0 z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center group">
            <img
              alt="Synergy Innovations Group Logo"
              src="/logo.png"
              className="h-10 w-auto sm:h-12 transition-transform duration-300 group-hover:scale-105"
            />
          </a>
          <div className="block">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 tracking-tight">
              Synergy Innovations Group
            </span>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-blue-400/30 transition-colors duration-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <Link 
            to="/" 
            className="text-base font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-400/20"
          > 
            Home 
          </Link> 
          <Link 
            to="/about" 
            className="text-base font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-400/20"
          > 
            About Us 
          </Link>
          <Link 
            to="/contact" 
            className="text-base font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-400/20"
          > 
            Contact Us 
          </Link>
        </PopoverGroup>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-auto min-w-80 max-w-md overflow-y-auto bg-gradient-to-br from-blue-300 via-blue-300 to-blue-300 px-6 py-4 shadow-2xl">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between border-b border-blue-500/30 pb-4">
            <div className="flex items-center space-x-2">
              <a href="#" className="flex items-center">
                <img
                  alt="Synergy Innovations Group Logo"
                  src="/logo.png"
                  className="h-8 w-auto"
                />
              </a>
              <span className="text-sm font-bold text-gray-900 leading-tight">
                Synergy Innovations Group
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-700 hover:bg-blue-400/30 transition-colors duration-200 flex-shrink-0"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
          
          {/* Mobile menu content */}
          <div className="mt-6 flow-root">
            <div className="space-y-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-semibold text-gray-900 hover:bg-blue-400/30 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-semibold text-gray-900 hover:bg-blue-400/30 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-semibold text-gray-900 hover:bg-blue-400/30 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}