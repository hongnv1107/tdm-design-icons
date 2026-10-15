// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOneOrManyLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 7.135V3.999H9.5V7.249H16V8.749H9.5V11.999H8V8.862L1.372 12.65L0.628 11.348L5.176 8.749H0V7.249H5.176L0.628 4.65L1.372 3.348L8 7.135Z"/>
  </svg>
);

const aDSDiagramArrowheadOneOrManyLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadOneOrManyLeftSvg,
  'ads-diagram-arrowhead-one-or-many-left'
);

/**![ADSDiagramArrowheadOneOrManyLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOCA3LjEzNVYzLjk5OUg5LjVWNy4yNDlIMTZWOC43NDlIOS41VjExLjk5OUg4VjguODYyTDEuMzcyIDEyLjY1TDAuNjI4IDExLjM0OEw1LjE3NiA4Ljc0OUgwVjcuMjQ5SDUuMTc2TDAuNjI4IDQuNjVMMS4zNzIgMy4zNDhMOCA3LjEzNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOneOrManyLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOneOrManyLeft';
}

export default RefIcon;
