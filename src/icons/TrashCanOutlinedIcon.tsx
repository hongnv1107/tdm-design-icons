// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const trashCanOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8ZM9 16V12C9 11.4477 9.44772 11 10 11C10.5523 11 11 11.4477 11 12V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16ZM13 16V12C13 11.4477 13.4477 11 14 11C14.5523 11 15 11.4477 15 12V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16ZM14 5C14 4.4478 13.5522 4.00013 13 4H11C10.4477 4 10 4.44772 10 5V6H14V5ZM16 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H19V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19V8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H8V5C8 3.34315 9.34315 2 11 2H13C14.6567 2.00013 16 3.34323 16 5V6Z"/>
  </svg>
);

const trashCanOutlinedIconDefinition = svgToIconDefinition(
  trashCanOutlinedSvg,
  'trash-can-outlined'
);

/**![TrashCanOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTcgOEg3VjE5QzcgMTkuNTUyMyA3LjQ0NzcyIDIwIDggMjBIMTZDMTYuNTUyMyAyMCAxNyAxOS41NTIzIDE3IDE5VjhaTTkgMTZWMTJDOSAxMS40NDc3IDkuNDQ3NzIgMTEgMTAgMTFDMTAuNTUyMyAxMSAxMSAxMS40NDc3IDExIDEyVjE2QzExIDE2LjU1MjMgMTAuNTUyMyAxNyAxMCAxN0M5LjQ0NzcyIDE3IDkgMTYuNTUyMyA5IDE2Wk0xMyAxNlYxMkMxMyAxMS40NDc3IDEzLjQ0NzcgMTEgMTQgMTFDMTQuNTUyMyAxMSAxNSAxMS40NDc3IDE1IDEyVjE2QzE1IDE2LjU1MjMgMTQuNTUyMyAxNyAxNCAxN0MxMy40NDc3IDE3IDEzIDE2LjU1MjMgMTMgMTZaTTE0IDVDMTQgNC40NDc4IDEzLjU1MjIgNC4wMDAxMyAxMyA0SDExQzEwLjQ0NzcgNCAxMCA0LjQ0NzcyIDEwIDVWNkgxNFY1Wk0xNiA2SDIwQzIwLjU1MjMgNiAyMSA2LjQ0NzcyIDIxIDdDMjEgNy41NTIyOCAyMC41NTIzIDggMjAgOEgxOVYxOUMxOSAyMC42NTY5IDE3LjY1NjkgMjIgMTYgMjJIOEM2LjM0MzE1IDIyIDUgMjAuNjU2OSA1IDE5VjhINEMzLjQ0NzcyIDggMyA3LjU1MjI4IDMgN0MzIDYuNDQ3NzIgMy40NDc3MiA2IDQgNkg4VjVDOCAzLjM0MzE1IDkuMzQzMTUgMiAxMSAySDEzQzE0LjY1NjcgMi4wMDAxMyAxNiAzLjM0MzIzIDE2IDVWNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={trashCanOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TrashCanOutlinedIcon';
}

export default RefIcon;
