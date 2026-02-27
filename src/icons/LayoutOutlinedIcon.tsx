// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const layoutOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 10.333H10.333V19H18.2227C18.6519 18.9998 18.9998 18.6519 19 18.2227V10.333ZM5 18.2227C5.00023 18.6519 5.34813 18.9998 5.77734 19H8.33301V10.333H5V18.2227ZM19 5.77734C18.9998 5.34813 18.6519 5.00023 18.2227 5H5.77734C5.34813 5.00023 5.00023 5.34813 5 5.77734V8.33301H19V5.77734ZM21 18.2227C20.9998 19.7564 19.7564 20.9998 18.2227 21H5.77734C4.24356 20.9998 3.00023 19.7564 3 18.2227V5.77734C3.00023 4.24356 4.24356 3.00023 5.77734 3H18.2227C19.7564 3.00023 20.9998 4.24356 21 5.77734V18.2227Z"/>
  </svg>
);

const layoutOutlinedIconDefinition = svgToIconDefinition(
  layoutOutlinedSvg,
  'layout-outlined'
);

/**![LayoutOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTkgMTAuMzMzSDEwLjMzM1YxOUgxOC4yMjI3QzE4LjY1MTkgMTguOTk5OCAxOC45OTk4IDE4LjY1MTkgMTkgMTguMjIyN1YxMC4zMzNaTTUgMTguMjIyN0M1LjAwMDIzIDE4LjY1MTkgNS4zNDgxMyAxOC45OTk4IDUuNzc3MzQgMTlIOC4zMzMwMVYxMC4zMzNINVYxOC4yMjI3Wk0xOSA1Ljc3NzM0QzE4Ljk5OTggNS4zNDgxMyAxOC42NTE5IDUuMDAwMjMgMTguMjIyNyA1SDUuNzc3MzRDNS4zNDgxMyA1LjAwMDIzIDUuMDAwMjMgNS4zNDgxMyA1IDUuNzc3MzRWOC4zMzMwMUgxOVY1Ljc3NzM0Wk0yMSAxOC4yMjI3QzIwLjk5OTggMTkuNzU2NCAxOS43NTY0IDIwLjk5OTggMTguMjIyNyAyMUg1Ljc3NzM0QzQuMjQzNTYgMjAuOTk5OCAzLjAwMDIzIDE5Ljc1NjQgMyAxOC4yMjI3VjUuNzc3MzRDMy4wMDAyMyA0LjI0MzU2IDQuMjQzNTYgMy4wMDAyMyA1Ljc3NzM0IDNIMTguMjIyN0MxOS43NTY0IDMuMDAwMjMgMjAuOTk5OCA0LjI0MzU2IDIxIDUuNzc3MzRWMTguMjIyN1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={layoutOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LayoutOutlinedIcon';
}

export default RefIcon;
