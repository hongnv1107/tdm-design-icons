// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolEventBasedFilledSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSDiagramSymbolEventBasedFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNi44MTQgMS4xOUM3LjUxOSAwLjY3MSA4LjQ4IDAuNjcxIDkuMTg1IDEuMTlMMTQuNDcgNS4wNzhDMTUuMTYyIDUuNTg3IDE1LjQ1MiA2LjQ4MiAxNS4xODkgNy4zTDEzLjE2NCAxMy42MUMxMi44OTggMTQuNDM4IDEyLjEyOSAxNC45OTkgMTEuMjYgMTQuOTk5SDQuNzRDMy44NzEgMTQuOTk5IDMuMTAyIDE0LjQzOCAyLjgzNiAxMy42MUwwLjgxMSA3LjNDMC41NDggNi40ODIgMC44MzggNS41ODYgMS41MyA1LjA3N0w2LjgxNCAxLjE5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolEventBasedFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolEventBasedFilled';
}

export default RefIcon;
