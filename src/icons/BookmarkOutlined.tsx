// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bookmarkOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.99597 2.25101C3.02724 1.62573 3.24608 1.09424 3.65252 0.656546C4.09021 0.250113 4.6217 0.0312641 5.24699 0V2.25101V20.6812L11.3435 16.3668C11.7812 16.0854 12.2189 16.0854 12.6566 16.3668L18.7531 20.6812V2.25101H5.24699V0H18.7531C19.3784 0.0312641 19.9098 0.250113 20.3475 0.656546C20.754 1.09424 20.9728 1.62573 21.0041 2.25101V22.8853C21.0041 23.323 20.8009 23.6513 20.3944 23.8701C19.988 24.0577 19.5972 24.0421 19.222 23.8232L12 18.6647L4.77803 23.8232C4.40286 24.0421 4.01205 24.0577 3.60562 23.8701C3.23045 23.6513 3.02724 23.323 2.99597 22.8853V2.25101Z"/>
  </svg>
);

const bookmarkOutlinedIconDefinition = svgToIconDefinition(
  bookmarkOutlinedSvg,
  'bookmark-outlined'
);

/**![BookmarkOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMi45OTU5NyAyLjI1MTAxQzMuMDI3MjQgMS42MjU3MyAzLjI0NjA4IDEuMDk0MjQgMy42NTI1MiAwLjY1NjU0NkM0LjA5MDIxIDAuMjUwMTEzIDQuNjIxNyAwLjAzMTI2NDEgNS4yNDY5OSAwVjIuMjUxMDFWMjAuNjgxMkwxMS4zNDM1IDE2LjM2NjhDMTEuNzgxMiAxNi4wODU0IDEyLjIxODkgMTYuMDg1NCAxMi42NTY2IDE2LjM2NjhMMTguNzUzMSAyMC42ODEyVjIuMjUxMDFINS4yNDY5OVYwSDE4Ljc1MzFDMTkuMzc4NCAwLjAzMTI2NDEgMTkuOTA5OCAwLjI1MDExMyAyMC4zNDc1IDAuNjU2NTQ2QzIwLjc1NCAxLjA5NDI0IDIwLjk3MjggMS42MjU3MyAyMS4wMDQxIDIuMjUxMDFWMjIuODg1M0MyMS4wMDQxIDIzLjMyMyAyMC44MDA5IDIzLjY1MTMgMjAuMzk0NCAyMy44NzAxQzE5Ljk4OCAyNC4wNTc3IDE5LjU5NzIgMjQuMDQyMSAxOS4yMjIgMjMuODIzMkwxMiAxOC42NjQ3TDQuNzc4MDMgMjMuODIzMkM0LjQwMjg2IDI0LjA0MjEgNC4wMTIwNSAyNC4wNTc3IDMuNjA1NjIgMjMuODcwMUMzLjIzMDQ1IDIzLjY1MTMgMy4wMjcyNCAyMy4zMjMgMi45OTU5NyAyMi44ODUzVjIuMjUxMDFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bookmarkOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BookmarkOutlined';
}

export default RefIcon;
