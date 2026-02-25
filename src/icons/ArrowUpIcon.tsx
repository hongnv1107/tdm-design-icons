// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowUpSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd"
    d="M12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071C19.3166 13.0976 18.6834 13.0976 18.2929 12.7071L13 7.41421V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V7.41421L5.70711 12.7071C5.31658 13.0976 4.68342 13.0976 4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4Z" />
  </svg>
);

const arrowUpIconDefinition = svgToIconDefinition(
  arrowUpSvg,
  'arrow-up'
);

/**![ArrowUpIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDRDMTIuMjY1MiA0IDEyLjUxOTYgNC4xMDUzNiAxMi43MDcxIDQuMjkyODlMMTkuNzA3MSAxMS4yOTI5QzIwLjA5NzYgMTEuNjgzNCAyMC4wOTc2IDEyLjMxNjYgMTkuNzA3MSAxMi43MDcxQzE5LjMxNjYgMTMuMDk3NiAxOC42ODM0IDEzLjA5NzYgMTguMjkyOSAxMi43MDcxTDEzIDcuNDE0MjFWMTlDMTMgMTkuNTUyMyAxMi41NTIzIDIwIDEyIDIwQzExLjQ0NzcgMjAgMTEgMTkuNTUyMyAxMSAxOVY3LjQxNDIxTDUuNzA3MTEgMTIuNzA3MUM1LjMxNjU4IDEzLjA5NzYgNC42ODM0MiAxMy4wOTc2IDQuMjkyODkgMTIuNzA3MUMzLjkwMjM3IDEyLjMxNjYgMy45MDIzNyAxMS42ODM0IDQuMjkyODkgMTEuMjkyOUwxMS4yOTI5IDQuMjkyODlDMTEuNDgwNCA0LjEwNTM2IDExLjczNDggNCAxMiA0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowUpIcon';
}

export default RefIcon;
