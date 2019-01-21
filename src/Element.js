import styled from 'styled-components';

import { layers } from './layers';

export const Element = styled.div`
  ${({
    perspective = { x: 5, y: 5 },
    color = '#444',
    hoverable = false,
    clickable = false
  }) => `
    transition: all 300ms ease;

    &:not(:focus):not(:active) {
      box-shadow: ${layers(perspective.x, perspective.y, color)};
    }

    ${hoverable &&
      `
      &:hover {
        cursor: pointer;
      }

      &:not(:active):hover {
        box-shadow: ${layers(
          perspective.x > 0 ? perspective.x + 6 : perspective.x - 6,
          perspective.y > 0 ? perspective.y + 6 : perspective.y - 6,
          color
        )};

        transform: translate(${perspective.x > 0 ? -6 : 6}px, ${
        perspective.y > 0 ? -6 : 6
      }px);
      }
    `}

    ${clickable &&
      `
      &:focus,
      &:active {
        box-shadow: 0, 0, 0 rgba(0, 0, 0, 0);
        transform: translate(${perspective.x}px, ${perspective.y}px);
      }
    `}
  `}
`;

/*{
  clickable: 'up' || 'down' || 'reverseDir',
  focusable: 'up' || 'down' || 'reverseDir',
  onScroll:
    {
      mode: 'move' || 'roundAbout',
      speed: 100,
      direction: 'straight' || 'reverse'
    } || false
}*/
