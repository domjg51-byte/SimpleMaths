import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, RotateCcw, Share2, Heart } from 'lucide-react';
import { Game } from '../constants';

interface GamePlayerProps {
  game: Game | null;
  onClose: () => void;
}

export const GamePlayer: React.FC<GamePlayerProps> = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-xl"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-bottom border-white/5 p-4 md:px-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 overflow-hidden rounded-lg">
                <img src={game.thumbnail} alt="" className="h-full w-full object-cover" />
              </div>
              <div>
                <h2 className="font-bold text-white">{game.title}</h2>
                <p className="text-xs text-white/40">{game.category} • {game.plays} players</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
            >
              <X size={20} />
            </button>
          </div>

          {/* Game Area */}
          <div className="relative flex-1 bg-black">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="mb-6 h-24 w-24 animate-float rounded-3xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                <img src={game.thumbnail} alt="" className="h-16 w-16 rounded-xl object-cover" />
              </div>
              <h3 className="text-2xl font-display uppercase tracking-wider text-white mb-2">Loading {game.title}...</h3>
              <p className="text-white/40 max-w-md">In a real application, this would be an iframe loading the unblocked game content from a secure source.</p>
              
              <div className="mt-8 flex gap-4">
                <div className="h-1.5 w-48 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                  />
                </div>
              </div>
            </div>
            
            {/* Mock Iframe Overlay for visual effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-between border-t border-white/5 p-4 md:px-6">
            <div className="flex items-center gap-2">
              <button className="flex h-10 items-center gap-2 rounded-xl bg-white/5 px-4 text-xs font-medium text-white transition-colors hover:bg-white/10">
                <Heart size={16} /> Favorite
              </button>
              <button className="flex h-10 items-center gap-2 rounded-xl bg-white/5 px-4 text-xs font-medium text-white transition-colors hover:bg-white/10">
                <Share2 size={16} /> Share
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white transition-colors hover:bg-white/10">
                <RotateCcw size={18} />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-black transition-transform hover:scale-105 active:scale-95">
                <Maximize2 size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
