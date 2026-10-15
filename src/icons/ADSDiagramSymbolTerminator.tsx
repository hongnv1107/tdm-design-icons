// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolTerminatorSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 5.515 12.485 3.5 10 3.5H6C3.515 3.5 1.5 5.515 1.5 8C1.5 10.485 3.515 12.5 6 12.5H10C12.485 12.5 14.5 10.485 14.5 8ZM16 8C16 11.314 13.314 14 10 14H6C2.686 14 0 11.314 0 8C0 4.686 2.686 2 6 2H10C13.314 2 16 4.686 16 8Z"/>
  </svg>
);

const aDSDiagramSymbolTerminatorIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolTerminatorSvg,
  'ads-diagram-symbol-terminator'
);

/**![ADSDiagramSymbolTerminator](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA4QzE0LjUgNS41MTUgMTIuNDg1IDMuNSAxMCAzLjVINkMzLjUxNSAzLjUgMS41IDUuNTE1IDEuNSA4QzEuNSAxMC40ODUgMy41MTUgMTIuNSA2IDEyLjVIMTBDMTIuNDg1IDEyLjUgMTQuNSAxMC40ODUgMTQuNSA4Wk0xNiA4QzE2IDExLjMxNCAxMy4zMTQgMTQgMTAgMTRINkMyLjY4NiAxNCAwIDExLjMxNCAwIDhDMCA0LjY4NiAyLjY4NiAyIDYgMkgxMEMxMy4zMTQgMiAxNiA0LjY4NiAxNiA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolTerminatorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolTerminator';
}

export default RefIcon;
