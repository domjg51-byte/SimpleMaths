import React from 'react';
import { motion } from 'motion/react';
import { Star, Play, Flame } from 'lucide-react';
import { Game } from '../constants';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 cursor-pointer"
      onClick={() => onClick(game)}
    >
      {/* Thumbnail */}
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
      </div>

      {/* Badges */}
      <div className="absolute top-3 left-3 flex gap-2">
        {game.isNew && (
          <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
            New
          </span>
        )}
        {game.isHot && (
          <span className="flex items-center gap-1 rounded-full bg-orange-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
            <Flame size={10} /> Hot
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors">
            {game.title}
          </h3>
          <div className="flex items-center gap-1 text-xs text-yellow-500">
            <Star size={12} fill="currentColor" />
            <span>{game.rating}</span>
          </div>
        </div>
        <p className="text-xs text-white/50 line-clamp-1 mb-3">
          {game.description}
        </p>
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/30">
          <span>{game.category}</span>
          <span>{game.plays} Plays</span>
        </div>
      </div>

      {/* Hover Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-black shadow-lg shadow-emerald-500/20">
          <Play size={24} fill="currentColor" className="ml-1" />
        </div>
      </div>
    </motion.div>
  );
};
