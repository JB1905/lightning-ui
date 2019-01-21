import { generateColors } from './generateColors';

interface Props {
  x: number;
  y: number;
  color: string;
  shadow?: string;
  colorify?: boolean;
}

export const layers: Props | any = (x, y, color, shadow, colorify): string => {
  /*if (x > Element.offsetWidth / 2) x = Element.offsetWidth / 2;
  if (y > Element.offsetHeight / 2) y = Element.offsetHeight / 2;*/

  let master: number, slave: number;

  if (Math.abs(x) >= Math.abs(y)) {
    master = x;
    slave = y;
  } else {
    master = y;
    slave = x;
  }

  const slaveDifference: number = Math.abs(slave) / Math.abs(master);

  let depth: string[] = [];
  let slaveDepth: number = 0;

  for (let masterDepth = 1; masterDepth <= Math.abs(master); masterDepth++) {
    slaveDepth += slaveDifference;

    if (colorify) color = generateColors(color);

    let horizontal = Math.abs(x) > Math.abs(y) ? masterDepth : slaveDepth;
    let vertical = Math.abs(x) < Math.abs(y) ? masterDepth : slaveDepth;

    depth = [
      ...depth,
      `${x > 0 ? horizontal : -horizontal}px ${
        y > 0 ? vertical : -vertical
      }px 0 ${color}`
    ];
  }

  if (shadow) depth = [...depth, `${shadow}`];

  return depth.join(',');
};