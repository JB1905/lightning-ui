import toPX from 'to-px';

export function convertUnits(unit: number | string): number {
  return Math.round(typeof unit === 'string' ? toPX(unit) : unit);
}