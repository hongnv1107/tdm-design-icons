// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolInputOutputSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.642 2C15.522 2 16.159 2.808 15.991 3.643L15.947 3.81L12.863 13.06C12.675 13.621 12.151 14 11.559 14H1.376C0.438 14 -0.225 13.081 0.072 12.19L3.155 2.94L3.194 2.837C3.408 2.333 3.904 2 4.459 2H14.642ZM1.549 12.5H11.468L14.469 3.5H4.55L1.549 12.5Z"/>
  </svg>
);

const aDSDiagramSymbolInputOutputIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolInputOutputSvg,
  'ads-diagram-symbol-input-output'
);

/**![ADSDiagramSymbolInputOutput](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNjQyIDJDMTUuNTIyIDIgMTYuMTU5IDIuODA4IDE1Ljk5MSAzLjY0M0wxNS45NDcgMy44MUwxMi44NjMgMTMuMDZDMTIuNjc1IDEzLjYyMSAxMi4xNTEgMTQgMTEuNTU5IDE0SDEuMzc2QzAuNDM4IDE0IC0wLjIyNSAxMy4wODEgMC4wNzIgMTIuMTlMMy4xNTUgMi45NEwzLjE5NCAyLjgzN0MzLjQwOCAyLjMzMyAzLjkwNCAyIDQuNDU5IDJIMTQuNjQyWk0xLjU0OSAxMi41SDExLjQ2OEwxNC40NjkgMy41SDQuNTVMMS41NDkgMTIuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolInputOutputIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolInputOutput';
}

export default RefIcon;
