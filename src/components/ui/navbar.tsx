'use client'

import { useEffect, useState } from 'react'
import { PlayCircle, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Juegos', href: '/games' },
  { label: 'Semestre', href: '/#semestre' },
  { label: 'Acerca de', href: '/about' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
              <PlayCircle className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">GameLog</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-teal-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex bg-gradient-to-r from-primary to-teal-600 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-white border-0"
            >
              <Link href="/games">Explorar</Link>
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

            {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4 border-t border-border">
              <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-primary to-teal-600">
                <Link href="/games" onClick={() => setIsOpen(false)}>
                  Explorar
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
