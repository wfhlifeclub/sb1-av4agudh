export type Shape = 'star' | 'triangle' | 'circle' | 'umbrella';

export interface Player {
  name: string;
  shape: Shape;
}