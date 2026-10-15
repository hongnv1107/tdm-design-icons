// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolParallelMiSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.5 15H2L2 1L3.5 1L3.5 15ZM8.75 15H7.25L7.25 1L8.75 1L8.75 15ZM14 15L12.5 15L12.5 1L14 1L14 15Z"/>
  </svg>
);

const aDSDiagramSymbolParallelMiIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolParallelMiSvg,
  'ads-diagram-symbol-parallel-mi'
);

/**![ADSDiagramSymbolParallelMi](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMy41IDE1SDJMMiAxTDMuNSAxTDMuNSAxNVpNOC43NSAxNUg3LjI1TDcuMjUgMUw4Ljc1IDFMOC43NSAxNVpNMTQgMTVMMTIuNSAxNUwxMi41IDFMMTQgMUwxNCAxNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolParallelMiIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolParallelMi';
}

export default RefIcon;
