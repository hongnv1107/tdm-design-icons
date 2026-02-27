// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bookOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 2C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H7.1875C6.33292 22 5.51928 21.6505 4.92383 21.0381C4.36637 20.4647 4.04217 19.7049 4.00391 18.9092L4 18.75V5.25C4 4.39699 4.3293 3.57343 4.92383 2.96191C5.51928 2.34948 6.33292 2 7.1875 2H19ZM6.00586 18.877C6.03421 19.1694 6.15997 19.4403 6.35742 19.6436C6.58243 19.875 6.88179 20 7.1875 20H18V17.5H7.1875C6.88179 17.5 6.58243 17.625 6.35742 17.8564C6.15997 18.0597 6.03421 18.3306 6.00586 18.623L6 18.75L6.00586 18.877ZM6 15.7344C6.37313 15.5816 6.77548 15.5 7.1875 15.5H18V4H7.1875C6.88179 4 6.58243 4.12501 6.35742 4.35645C6.13167 4.58882 6 4.90969 6 5.25V15.7344Z"/>
  </svg>
);

const bookOutlinedIconDefinition = svgToIconDefinition(
  bookOutlinedSvg,
  'book-outlined'
);

/**![BookOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTkgMkMxOS41NTIzIDIgMjAgMi40NDc3MiAyMCAzVjIxQzIwIDIxLjU1MjMgMTkuNTUyMyAyMiAxOSAyMkg3LjE4NzVDNi4zMzI5MiAyMiA1LjUxOTI4IDIxLjY1MDUgNC45MjM4MyAyMS4wMzgxQzQuMzY2MzcgMjAuNDY0NyA0LjA0MjE3IDE5LjcwNDkgNC4wMDM5MSAxOC45MDkyTDQgMTguNzVWNS4yNUM0IDQuMzk2OTkgNC4zMjkzIDMuNTczNDMgNC45MjM4MyAyLjk2MTkxQzUuNTE5MjggMi4zNDk0OCA2LjMzMjkyIDIgNy4xODc1IDJIMTlaTTYuMDA1ODYgMTguODc3QzYuMDM0MjEgMTkuMTY5NCA2LjE1OTk3IDE5LjQ0MDMgNi4zNTc0MiAxOS42NDM2QzYuNTgyNDMgMTkuODc1IDYuODgxNzkgMjAgNy4xODc1IDIwSDE4VjE3LjVINy4xODc1QzYuODgxNzkgMTcuNSA2LjU4MjQzIDE3LjYyNSA2LjM1NzQyIDE3Ljg1NjRDNi4xNTk5NyAxOC4wNTk3IDYuMDM0MjEgMTguMzMwNiA2LjAwNTg2IDE4LjYyM0w2IDE4Ljc1TDYuMDA1ODYgMTguODc3Wk02IDE1LjczNDRDNi4zNzMxMyAxNS41ODE2IDYuNzc1NDggMTUuNSA3LjE4NzUgMTUuNUgxOFY0SDcuMTg3NUM2Ljg4MTc5IDQgNi41ODI0MyA0LjEyNTAxIDYuMzU3NDIgNC4zNTY0NUM2LjEzMTY3IDQuNTg4ODIgNiA0LjkwOTY5IDYgNS4yNVYxNS43MzQ0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bookOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BookOutlinedIcon';
}

export default RefIcon;
