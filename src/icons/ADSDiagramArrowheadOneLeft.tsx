// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOneLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.75 4L4.75 7.25L16 7.25V8.75L4.75 8.75L4.75 12H3.25L3.25 8.75L0 8.75L0 7.25L3.25 7.25L3.25 4L4.75 4Z"/>
  </svg>
);

const aDSDiagramArrowheadOneLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadOneLeftSvg,
  'ads-diagram-arrowhead-one-left'
);

/**![ADSDiagramArrowheadOneLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNC43NSA0TDQuNzUgNy4yNUwxNiA3LjI1VjguNzVMNC43NSA4Ljc1TDQuNzUgMTJIMy4yNUwzLjI1IDguNzVMMCA4Ljc1TDAgNy4yNUwzLjI1IDcuMjVMMy4yNSA0TDQuNzUgNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOneLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOneLeft';
}

export default RefIcon;
