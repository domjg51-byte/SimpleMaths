import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2, Github, Twitter, Menu, X, Sparkles } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-emerald-500/30 selection:text-emerald-400 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <Gamepad2 size={24} />
              </div>
              <h1 className="font-display text-2xl uppercase tracking-tighter text-white">
                Far From <span className="text-emerald-500">Paradice</span>
              </h1>
            </div>

            <div className="hidden items-center gap-6 md:flex">
              {['Games', 'New', 'Popular', 'About'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-white/50 transition-colors hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden h-10 items-center gap-2 rounded-xl bg-white/5 px-4 text-sm font-medium text-white transition-colors hover:bg-white/10 md:flex">
              Sign In
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white md:hidden"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/5 bg-[#0a0a0a] md:hidden"
            >
              <div className="flex flex-col gap-4 p-4">
                {['Games', 'New', 'Popular', 'About'].map((item) => (
                  <a key={item} href="#" className="px-2 py-1 text-lg font-medium text-white/70">
                    {item}
                  </a>
                ))}
                <button className="h-11 w-full rounded-xl bg-emerald-500 font-bold text-black">
                  Sign In
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <Sparkles size={14} />
            <span>Coming Soon</span>
          </div>
          
          <h2 className="mb-6 font-display text-6xl md:text-8xl uppercase leading-none tracking-tighter text-white">
            The Future of <br />
            <span className="text-emerald-500">Unblocked Gaming</span>
          </h2>
          
          <p className="mb-10 text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
            We're currently curating the ultimate collection of unblocked games. 
            Stay tuned for the most immersive browser gaming experience ever built.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="h-14 w-full sm:w-auto px-10 rounded-2xl bg-emerald-500 text-black font-bold uppercase tracking-wider transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              Get Notified
            </button>
            <button className="h-14 w-full sm:w-auto px-10 rounded-2xl bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
              Follow Updates
            </button>
          </div>
        </motion.div>

        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0a0a0a] py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-black">
                <Gamepad2 size={18} />
              </div>
              <h2 className="font-display text-xl uppercase tracking-tighter text-white">
                Far From <span className="text-emerald-500">Paradice</span>
              </h2>
            </div>
            
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 border-t border-white/5 pt-8 text-center text-xs text-white/20">
            <p>© {new Date().getFullYear()} Far From Paradice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
