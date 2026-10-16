// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMinusSquareSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 3C13.5 2.724 13.276 2.5 13 2.5H3C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V3ZM12 7.25V8.75H4V7.25H12ZM15 13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V13Z"/>
  </svg>
);

const aDSMinusSquareIconDefinition = svgToIconDefinition(
  aDSMinusSquareSvg,
  'ads-minus-square'
);

/**![ADSMinusSquare](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNSAzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVIM0MyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTNDMTMuMjc2IDEzLjUgMTMuNSAxMy4yNzYgMTMuNSAxM1YzWk0xMiA3LjI1VjguNzVINFY3LjI1SDEyWk0xNSAxM0MxNSAxNC4xMDUgMTQuMTA1IDE1IDEzIDE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1YzQzEgMS44OTUgMS44OTUgMSAzIDFIMTNDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1YxM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMinusSquareIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMinusSquare';
}

export default RefIcon;
