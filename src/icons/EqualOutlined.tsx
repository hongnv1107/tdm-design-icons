// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const equalOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.71 14.9993C23.4954 15.0708 23.9285 15.5 24 16.2854C23.9286 17.071 23.4955 17.5 22.71 17.5715H1.29C0.504538 17.5 0.0714166 17.071 0 16.2854C0.0714898 15.5 0.504602 15.0708 1.29 14.9993H22.71ZM22.7139 6.42847C23.4996 6.4999 23.9286 6.92889 24 7.7146C23.9285 8.50005 23.4994 8.92785 22.7139 8.99927H1.28613C0.500557 8.92785 0.0715417 8.50005 0 7.7146C0.0714286 6.92889 0.500418 6.4999 1.28613 6.42847H22.7139Z"/>
  </svg>
);

const equalOutlinedIconDefinition = svgToIconDefinition(
  equalOutlinedSvg,
  'equal-outlined'
);

/**![EqualOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjIuNzEgMTQuOTk5M0MyMy40OTU0IDE1LjA3MDggMjMuOTI4NSAxNS41IDI0IDE2LjI4NTRDMjMuOTI4NiAxNy4wNzEgMjMuNDk1NSAxNy41IDIyLjcxIDE3LjU3MTVIMS4yOUMwLjUwNDUzOCAxNy41IDAuMDcxNDE2NiAxNy4wNzEgMCAxNi4yODU0QzAuMDcxNDg5OCAxNS41IDAuNTA0NjAyIDE1LjA3MDggMS4yOSAxNC45OTkzSDIyLjcxWk0yMi43MTM5IDYuNDI4NDdDMjMuNDk5NiA2LjQ5OTkgMjMuOTI4NiA2LjkyODg5IDI0IDcuNzE0NkMyMy45Mjg1IDguNTAwMDUgMjMuNDk5NCA4LjkyNzg1IDIyLjcxMzkgOC45OTkyN0gxLjI4NjEzQzAuNTAwNTU3IDguOTI3ODUgMC4wNzE1NDE3IDguNTAwMDUgMCA3LjcxNDZDMC4wNzE0Mjg2IDYuOTI4ODkgMC41MDA0MTggNi40OTk5IDEuMjg2MTMgNi40Mjg0N0gyMi43MTM5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={equalOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EqualOutlined';
}

export default RefIcon;
