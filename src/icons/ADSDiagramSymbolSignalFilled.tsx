// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolSignalFilledSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.844 1.656C7.386 0.818 8.613 0.818 9.155 1.656L15.757 11.879C16.348 12.794 15.691 14 14.602 14H1.397C0.308 14 -0.349 12.794 0.241 11.879L6.844 1.656Z"/>
  </svg>
);

const aDSDiagramSymbolSignalFilledIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolSignalFilledSvg,
  'ads-diagram-symbol-signal-filled'
);

/**![ADSDiagramSymbolSignalFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNi44NDQgMS42NTZDNy4zODYgMC44MTggOC42MTMgMC44MTggOS4xNTUgMS42NTZMMTUuNzU3IDExLjg3OUMxNi4zNDggMTIuNzk0IDE1LjY5MSAxNCAxNC42MDIgMTRIMS4zOTdDMC4zMDggMTQgLTAuMzQ5IDEyLjc5NCAwLjI0MSAxMS44NzlMNi44NDQgMS42NTZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolSignalFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolSignalFilled';
}

export default RefIcon;
