// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const archiveFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 4L21.1025 4.00488C21.6067 4.05621 22 4.48232 22 5V7C22 7.55228 21.5523 8 21 8C17.8626 8 6.82031 8 3 8C2.44772 8 2 7.55228 2 7V5L2.00488 4.89746C2.05621 4.39333 2.48232 4 3 4H21Z" /> <path d="M20.3633 19C20.3633 19.5523 19.9156 20 19.3633 20H4.63672C4.08449 19.9999 3.63672 19.5522 3.63672 19V10C-0.862407 10 16.344 10 20.3633 10V19ZM10.3643 12C9.81197 12 9.36426 12.4477 9.36426 13C9.36426 13.5523 9.81197 14 10.3643 14H13.6367L13.7393 13.9951C14.2433 13.9437 14.6367 13.5176 14.6367 13C14.6367 12.4824 14.2433 12.0563 13.7393 12.0049L13.6367 12H10.3643Z" />
  </svg>
);

const archiveFilledIconDefinition = svgToIconDefinition(
  archiveFilledSvg,
  'archive-filled'
);

/**![ArchiveFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEgNEwyMS4xMDI1IDQuMDA0ODhDMjEuNjA2NyA0LjA1NjIxIDIyIDQuNDgyMzIgMjIgNVY3QzIyIDcuNTUyMjggMjEuNTUyMyA4IDIxIDhDMTcuODYyNiA4IDYuODIwMzEgOCAzIDhDMi40NDc3MiA4IDIgNy41NTIyOCAyIDdWNUwyLjAwNDg4IDQuODk3NDZDMi4wNTYyMSA0LjM5MzMzIDIuNDgyMzIgNCAzIDRIMjFaIi8+PHBhdGggZD0iTTIwLjM2MzMgMTlDMjAuMzYzMyAxOS41NTIzIDE5LjkxNTYgMjAgMTkuMzYzMyAyMEg0LjYzNjcyQzQuMDg0NDkgMTkuOTk5OSAzLjYzNjcyIDE5LjU1MjIgMy42MzY3MiAxOVYxMEMtMC44NjI0MDcgMTAgMTYuMzQ0IDEwIDIwLjM2MzMgMTBWMTlaTTEwLjM2NDMgMTJDOS44MTE5NyAxMiA5LjM2NDI2IDEyLjQ0NzcgOS4zNjQyNiAxM0M5LjM2NDI2IDEzLjU1MjMgOS44MTE5NyAxNCAxMC4zNjQzIDE0SDEzLjYzNjdMMTMuNzM5MyAxMy45OTUxQzE0LjI0MzMgMTMuOTQzNyAxNC42MzY3IDEzLjUxNzYgMTQuNjM2NyAxM0MxNC42MzY3IDEyLjQ4MjQgMTQuMjQzMyAxMi4wNTYzIDEzLjczOTMgMTIuMDA0OUwxMy42MzY3IDEySDEwLjM2NDNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={archiveFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArchiveFilledIcon';
}

export default RefIcon;
