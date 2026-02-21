import { Gamepad2, Trophy, Flame, Clock, Search, Filter } from 'lucide-react';

export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  rating: number;
  plays: string;
  isNew?: boolean;
  isHot?: boolean;
}

export const GAMES: Game[] = [];

export const CATEGORIES: any[] = [];
