// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolClassSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 10.25H3V14L3.01 14.101C3.056 14.329 3.258 14.5 3.5 14.5H12.5C12.776 14.5 13 14.276 13 14V10.25ZM3 8.75H13V4.5H3V8.75ZM13 2C13 1.724 12.776 1.5 12.5 1.5H3.5C3.224 1.5 3 1.724 3 2V3H13V2ZM14.5 14C14.5 15.105 13.605 16 12.5 16H3.5C2.464 16 1.613 15.213 1.511 14.204L1.5 14V2C1.5 0.895 2.395 0 3.5 0H12.5C13.605 0 14.5 0.895 14.5 2V14Z"/>
  </svg>
);

const aDSDiagramSymbolClassIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolClassSvg,
  'ads-diagram-symbol-class'
);

/**![ADSDiagramSymbolClass](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMgMTAuMjVIM1YxNEwzLjAxIDE0LjEwMUMzLjA1NiAxNC4zMjkgMy4yNTggMTQuNSAzLjUgMTQuNUgxMi41QzEyLjc3NiAxNC41IDEzIDE0LjI3NiAxMyAxNFYxMC4yNVpNMyA4Ljc1SDEzVjQuNUgzVjguNzVaTTEzIDJDMTMgMS43MjQgMTIuNzc2IDEuNSAxMi41IDEuNUgzLjVDMy4yMjQgMS41IDMgMS43MjQgMyAyVjNIMTNWMlpNMTQuNSAxNEMxNC41IDE1LjEwNSAxMy42MDUgMTYgMTIuNSAxNkgzLjVDMi40NjQgMTYgMS42MTMgMTUuMjEzIDEuNTExIDE0LjIwNEwxLjUgMTRWMkMxLjUgMC44OTUgMi4zOTUgMCAzLjUgMEgxMi41QzEzLjYwNSAwIDE0LjUgMC44OTUgMTQuNSAyVjE0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolClassIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolClass';
}

export default RefIcon;
