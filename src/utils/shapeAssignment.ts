import { Shape, Player } from '../types';

const shapes: Shape[] = ['star', 'triangle', 'circle', 'umbrella'];

export const assignShapes = (names: string[]): Player[] => {
  return names.map((name) => ({
    name,
    shape: shapes[Math.floor(Math.random() * shapes.length)]
  }));
};