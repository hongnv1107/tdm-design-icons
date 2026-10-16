// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolCollateSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.839 2C14.787 2 15.233 3.125 14.627 3.777L14.491 3.901L9.222 8L14.491 12.099L14.627 12.223C15.233 12.875 14.787 14 13.839 14H2.161C1.15 14 0.71 12.72 1.509 12.099L6.778 8L1.509 3.901C0.71 3.28 1.15 2 2.161 2H13.839ZM3.437 12.5H12.564L8 8.95L3.437 12.5ZM8 7.049L12.564 3.5H3.437L8 7.049Z"/>
  </svg>
);

const aDSDiagramSymbolCollateIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolCollateSvg,
  'ads-diagram-symbol-collate'
);

/**![ADSDiagramSymbolCollate](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy44MzkgMkMxNC43ODcgMiAxNS4yMzMgMy4xMjUgMTQuNjI3IDMuNzc3TDE0LjQ5MSAzLjkwMUw5LjIyMiA4TDE0LjQ5MSAxMi4wOTlMMTQuNjI3IDEyLjIyM0MxNS4yMzMgMTIuODc1IDE0Ljc4NyAxNCAxMy44MzkgMTRIMi4xNjFDMS4xNSAxNCAwLjcxIDEyLjcyIDEuNTA5IDEyLjA5OUw2Ljc3OCA4TDEuNTA5IDMuOTAxQzAuNzEgMy4yOCAxLjE1IDIgMi4xNjEgMkgxMy44MzlaTTMuNDM3IDEyLjVIMTIuNTY0TDggOC45NUwzLjQzNyAxMi41Wk04IDcuMDQ5TDEyLjU2NCAzLjVIMy40MzdMOCA3LjA0OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolCollateIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolCollate';
}

export default RefIcon;
