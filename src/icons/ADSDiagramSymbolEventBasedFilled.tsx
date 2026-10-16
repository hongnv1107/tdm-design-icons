// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolEventBasedFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.814 1.19C7.519 0.671 8.48 0.671 9.185 1.19L14.47 5.078C15.162 5.587 15.452 6.482 15.189 7.3L13.164 13.61C12.898 14.438 12.129 14.999 11.26 14.999H4.74C3.871 14.999 3.102 14.438 2.836 13.61L0.811 7.3C0.548 6.482 0.838 5.586 1.53 5.077L6.814 1.19Z"/>
  </svg>
);

const aDSDiagramSymbolEventBasedFilledIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolEventBasedFilledSvg,
  'ads-diagram-symbol-event-based-filled'
);

/**![ADSDiagramSymbolEventBasedFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik02LjgxNCAxLjE5QzcuNTE5IDAuNjcxIDguNDggMC42NzEgOS4xODUgMS4xOUwxNC40NyA1LjA3OEMxNS4xNjIgNS41ODcgMTUuNDUyIDYuNDgyIDE1LjE4OSA3LjNMMTMuMTY0IDEzLjYxQzEyLjg5OCAxNC40MzggMTIuMTI5IDE0Ljk5OSAxMS4yNiAxNC45OTlINC43NEMzLjg3MSAxNC45OTkgMy4xMDIgMTQuNDM4IDIuODM2IDEzLjYxTDAuODExIDcuM0MwLjU0OCA2LjQ4MiAwLjgzOCA1LjU4NiAxLjUzIDUuMDc3TDYuODE0IDEuMTlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolEventBasedFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolEventBasedFilled';
}

export default RefIcon;
