// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const crosshairOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C18.6274 1.54626e-07 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 1.54622e-07 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM10.8 5.51953V2.47617C6.45778 3.01775 3.01898 6.45779 2.47734 10.8H5.51953C6.18227 10.8 6.71953 11.3373 6.71953 12C6.71953 12.6627 6.18227 13.2 5.51953 13.2H2.47734C3.01898 17.5422 6.45784 20.981 10.8 21.5227V18.4805C10.8 17.8177 11.3373 17.2805 12 17.2805C12.6627 17.2805 13.2 17.8177 13.2 18.4805V21.5227C17.5422 20.981 20.981 17.5422 21.5227 13.2H18.4805C17.8177 13.2 17.2805 12.6627 17.2805 12C17.2805 11.3373 17.8177 10.8 18.4805 10.8H21.5227C20.981 6.4578 17.5422 3.01775 13.2 2.47617V5.51953C13.2 6.18227 12.6627 6.71953 12 6.71953C11.3373 6.71953 10.8 6.18227 10.8 5.51953Z"/>
  </svg>
);

const crosshairOutlinedIconDefinition = svgToIconDefinition(
  crosshairOutlinedSvg,
  'crosshair-outlined'
);

/**![CrosshairOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIgMEMxOC42Mjc0IDEuNTQ2MjZlLTA3IDI0IDUuMzcyNTggMjQgMTJDMjQgMTguNjI3NCAxOC42Mjc0IDI0IDEyIDI0QzUuMzcyNTggMjQgMS41NDYyMmUtMDcgMTguNjI3NCAwIDEyQzAgNS4zNzI1OCA1LjM3MjU4IDAgMTIgMFpNMTAuOCA1LjUxOTUzVjIuNDc2MTdDNi40NTc3OCAzLjAxNzc1IDMuMDE4OTggNi40NTc3OSAyLjQ3NzM0IDEwLjhINS41MTk1M0M2LjE4MjI3IDEwLjggNi43MTk1MyAxMS4zMzczIDYuNzE5NTMgMTJDNi43MTk1MyAxMi42NjI3IDYuMTgyMjcgMTMuMiA1LjUxOTUzIDEzLjJIMi40NzczNEMzLjAxODk4IDE3LjU0MjIgNi40NTc4NCAyMC45ODEgMTAuOCAyMS41MjI3VjE4LjQ4MDVDMTAuOCAxNy44MTc3IDExLjMzNzMgMTcuMjgwNSAxMiAxNy4yODA1QzEyLjY2MjcgMTcuMjgwNSAxMy4yIDE3LjgxNzcgMTMuMiAxOC40ODA1VjIxLjUyMjdDMTcuNTQyMiAyMC45ODEgMjAuOTgxIDE3LjU0MjIgMjEuNTIyNyAxMy4ySDE4LjQ4MDVDMTcuODE3NyAxMy4yIDE3LjI4MDUgMTIuNjYyNyAxNy4yODA1IDEyQzE3LjI4MDUgMTEuMzM3MyAxNy44MTc3IDEwLjggMTguNDgwNSAxMC44SDIxLjUyMjdDMjAuOTgxIDYuNDU3OCAxNy41NDIyIDMuMDE3NzUgMTMuMiAyLjQ3NjE3VjUuNTE5NTNDMTMuMiA2LjE4MjI3IDEyLjY2MjcgNi43MTk1MyAxMiA2LjcxOTUzQzExLjMzNzMgNi43MTk1MyAxMC44IDYuMTgyMjcgMTAuOCA1LjUxOTUzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={crosshairOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CrosshairOutlined';
}

export default RefIcon;
