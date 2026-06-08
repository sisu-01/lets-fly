// src/ts/types.ts
export const COLORS = ["white", "yellow", "red", "orange", "blue", "green"] as const;
export type Colors = (typeof COLORS)[number];

export type Cubelet = {
  id: number;
  initPosition: [number, number, number];
  curPosition: [number, number, number];
  rotation: [number, number, number];
}