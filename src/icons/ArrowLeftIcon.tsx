// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M4 12.12C4 11.8548 4.10536 11.6004 4.29289 11.4129L11.2929 4.41289C11.6834 4.02236 12.3166 4.02236 12.7071 4.41289C13.0976 4.80341 13.0976 5.43658 12.7071 5.8271L7.41421 11.12L19 11.12C19.5523 11.12 20 11.5677 20 12.12C20 12.6723 19.5523 13.12 19 13.12L7.41421 13.12L12.7071 18.4129C13.0976 18.8034 13.0976 19.4366 12.7071 19.8271C12.3166 20.2176 11.6834 20.2176 11.2929 19.8271L4.29289 12.8271C4.10536 12.6396 4 12.3852 4 12.12Z" />
  </svg>
);

const arrowLeftIconDefinition = svgToIconDefinition(
  arrowLeftSvg,
  'arrow-left'
);

/**![ArrowLeftIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsUnVsZT0iZXZlbm9kZCIgY2xpcFJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDEyLjEyQzQgMTEuODU0OCA0LjEwNTM2IDExLjYwMDQgNC4yOTI4OSAxMS40MTI5TDExLjI5MjkgNC40MTI4OUMxMS42ODM0IDQuMDIyMzYgMTIuMzE2NiA0LjAyMjM2IDEyLjcwNzEgNC40MTI4OUMxMy4wOTc2IDQuODAzNDEgMTMuMDk3NiA1LjQzNjU4IDEyLjcwNzEgNS44MjcxTDcuNDE0MjEgMTEuMTJMMTkgMTEuMTJDMTkuNTUyMyAxMS4xMiAyMCAxMS41Njc3IDIwIDEyLjEyQzIwIDEyLjY3MjMgMTkuNTUyMyAxMy4xMiAxOSAxMy4xMkw3LjQxNDIxIDEzLjEyTDEyLjcwNzEgMTguNDEyOUMxMy4wOTc2IDE4LjgwMzQgMTMuMDk3NiAxOS40MzY2IDEyLjcwNzEgMTkuODI3MUMxMi4zMTY2IDIwLjIxNzYgMTEuNjgzNCAyMC4yMTc2IDExLjI5MjkgMTkuODI3MUw0LjI5Mjg5IDEyLjgyNzFDNC4xMDUzNiAxMi42Mzk2IDQgMTIuMzg1MiA0IDEyLjEyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowLeftIcon';
}

export default RefIcon;
