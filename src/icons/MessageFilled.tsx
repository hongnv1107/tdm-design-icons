// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const messageFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 0.00524902H21C21.8438 0.036499 22.5469 0.333374 23.1094 0.895874C23.6719 1.45837 23.9688 2.1615 24 3.00525V16.5053C23.9688 17.349 23.6719 18.0521 23.1094 18.6146C22.5469 19.1771 21.8438 19.474 21 19.5053H14.4844L8.71875 23.8646C8.46875 24.0209 8.20312 24.0365 7.92188 23.9115C7.64062 23.7865 7.5 23.5678 7.5 23.2553V19.5053H3C2.15625 19.474 1.45312 19.1771 0.890625 18.6146C0.328125 18.0521 0.03125 17.349 0 16.5053V3.00525C0.03125 2.1615 0.328125 1.45837 0.890625 0.895874C1.45312 0.333374 2.15625 0.036499 3 0.00524902Z"/>
  </svg>
);

const messageFilledIconDefinition = svgToIconDefinition(
  messageFilledSvg,
  'message-filled'
);

/**![MessageFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMyAwLjAwNTI0OTAySDIxQzIxLjg0MzggMC4wMzY0OTkgMjIuNTQ2OSAwLjMzMzM3NCAyMy4xMDk0IDAuODk1ODc0QzIzLjY3MTkgMS40NTgzNyAyMy45Njg4IDIuMTYxNSAyNCAzLjAwNTI1VjE2LjUwNTNDMjMuOTY4OCAxNy4zNDkgMjMuNjcxOSAxOC4wNTIxIDIzLjEwOTQgMTguNjE0NkMyMi41NDY5IDE5LjE3NzEgMjEuODQzOCAxOS40NzQgMjEgMTkuNTA1M0gxNC40ODQ0TDguNzE4NzUgMjMuODY0NkM4LjQ2ODc1IDI0LjAyMDkgOC4yMDMxMiAyNC4wMzY1IDcuOTIxODggMjMuOTExNUM3LjY0MDYyIDIzLjc4NjUgNy41IDIzLjU2NzggNy41IDIzLjI1NTNWMTkuNTA1M0gzQzIuMTU2MjUgMTkuNDc0IDEuNDUzMTIgMTkuMTc3MSAwLjg5MDYyNSAxOC42MTQ2QzAuMzI4MTI1IDE4LjA1MjEgMC4wMzEyNSAxNy4zNDkgMCAxNi41MDUzVjMuMDA1MjVDMC4wMzEyNSAyLjE2MTUgMC4zMjgxMjUgMS40NTgzNyAwLjg5MDYyNSAwLjg5NTg3NEMxLjQ1MzEyIDAuMzMzMzc0IDIuMTU2MjUgMC4wMzY0OTkgMyAwLjAwNTI0OTAyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={messageFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MessageFilled';
}

export default RefIcon;
