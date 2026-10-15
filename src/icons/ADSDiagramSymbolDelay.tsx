// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolDelaySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 5.515 12.485 3.5 10 3.5H1.5V12.5H10C12.485 12.5 14.5 10.485 14.5 8ZM16 8C16 11.314 13.314 14 10 14H1.447C0.648 14 0 13.352 0 12.553V3.447C0 2.648 0.648 2 1.447 2H10C13.314 2 16 4.686 16 8Z"/>
  </svg>
);

const aDSDiagramSymbolDelayIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolDelaySvg,
  'ads-diagram-symbol-delay'
);

/**![ADSDiagramSymbolDelay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA4QzE0LjUgNS41MTUgMTIuNDg1IDMuNSAxMCAzLjVIMS41VjEyLjVIMTBDMTIuNDg1IDEyLjUgMTQuNSAxMC40ODUgMTQuNSA4Wk0xNiA4QzE2IDExLjMxNCAxMy4zMTQgMTQgMTAgMTRIMS40NDdDMC42NDggMTQgMCAxMy4zNTIgMCAxMi41NTNWMy40NDdDMCAyLjY0OCAwLjY0OCAyIDEuNDQ3IDJIMTBDMTMuMzE0IDIgMTYgNC42ODYgMTYgOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolDelayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolDelay';
}

export default RefIcon;
