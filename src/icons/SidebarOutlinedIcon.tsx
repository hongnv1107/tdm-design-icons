// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const sidebarOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 5.77734C18.9998 5.34813 18.6519 5.00023 18.2227 5H10.333V19H18.2227C18.6519 18.9998 18.9998 18.6519 19 18.2227V5.77734ZM5 18.2227C5.00023 18.6519 5.34813 18.9998 5.77734 19H8.33301V5H5.77734C5.34813 5.00023 5.00023 5.34813 5 5.77734V18.2227ZM21 18.2227C20.9998 19.7564 19.7564 20.9998 18.2227 21H5.77734C4.24356 20.9998 3.00023 19.7564 3 18.2227V5.77734C3.00023 4.24356 4.24356 3.00023 5.77734 3H18.2227C19.7564 3.00023 20.9998 4.24356 21 5.77734V18.2227Z"/>
  </svg>
);

const sidebarOutlinedIconDefinition = svgToIconDefinition(
  sidebarOutlinedSvg,
  'sidebar-outlined'
);

/**![SidebarOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTkgNS43NzczNEMxOC45OTk4IDUuMzQ4MTMgMTguNjUxOSA1LjAwMDIzIDE4LjIyMjcgNUgxMC4zMzNWMTlIMTguMjIyN0MxOC42NTE5IDE4Ljk5OTggMTguOTk5OCAxOC42NTE5IDE5IDE4LjIyMjdWNS43NzczNFpNNSAxOC4yMjI3QzUuMDAwMjMgMTguNjUxOSA1LjM0ODEzIDE4Ljk5OTggNS43NzczNCAxOUg4LjMzMzAxVjVINS43NzczNEM1LjM0ODEzIDUuMDAwMjMgNS4wMDAyMyA1LjM0ODEzIDUgNS43NzczNFYxOC4yMjI3Wk0yMSAxOC4yMjI3QzIwLjk5OTggMTkuNzU2NCAxOS43NTY0IDIwLjk5OTggMTguMjIyNyAyMUg1Ljc3NzM0QzQuMjQzNTYgMjAuOTk5OCAzLjAwMDIzIDE5Ljc1NjQgMyAxOC4yMjI3VjUuNzc3MzRDMy4wMDAyMyA0LjI0MzU2IDQuMjQzNTYgMy4wMDAyMyA1Ljc3NzM0IDNIMTguMjIyN0MxOS43NTY0IDMuMDAwMjMgMjAuOTk5OCA0LjI0MzU2IDIxIDUuNzc3MzRWMTguMjIyN1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={sidebarOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SidebarOutlinedIcon';
}

export default RefIcon;
