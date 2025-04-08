import React from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-gradient-to-r from-emerald-900/80 via-green-900/80 to-teal-900/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 text-white">
                <Leaf className="h-8 w-8 text-emerald-400" />
                <span className="text-xl font-semibold">Mindtunes</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {['About', 'How It Works', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="nav-link px-3 py-2 text-sm font-medium"
                >
                  {item}
                </button>
              ))}
              <button className="btn-secondary">
                Login
              </button>
              <button className="btn-primary">
                Sign Up
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-emerald-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-emerald-900/95 to-green-900/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['About', 'How It Works', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase().replace(/\s+/g, '-'));
                  setIsOpen(false);
                }}
                className="nav-link block px-3 py-2 text-base font-medium w-full text-left"
              >
                {item}
              </button>
            ))}
            <button className="btn-secondary w-full mt-2">
              Login
            </button>
            <button className="btn-primary w-full mt-2">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;