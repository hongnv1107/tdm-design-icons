// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolComplexSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.75 1V6.442L13.006 3.05L13.473 3.636L13.94 4.222L9.686 7.615L14.991 8.826L14.824 9.558L14.658 10.289L9.351 9.077L11.713 13.981L10.361 14.632L8 9.728L5.639 14.632L4.287 13.981L6.648 9.077L1.343 10.289L1.009 8.826L6.314 7.614L2.06 4.222L2.995 3.049L7.25 6.441V1H8.75Z"/>
  </svg>
);

const aDSDiagramSymbolComplexIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolComplexSvg,
  'ads-diagram-symbol-complex'
);

/**![ADSDiagramSymbolComplex](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOC43NSAxVjYuNDQyTDEzLjAwNiAzLjA1TDEzLjQ3MyAzLjYzNkwxMy45NCA0LjIyMkw5LjY4NiA3LjYxNUwxNC45OTEgOC44MjZMMTQuODI0IDkuNTU4TDE0LjY1OCAxMC4yODlMOS4zNTEgOS4wNzdMMTEuNzEzIDEzLjk4MUwxMC4zNjEgMTQuNjMyTDggOS43MjhMNS42MzkgMTQuNjMyTDQuMjg3IDEzLjk4MUw2LjY0OCA5LjA3N0wxLjM0MyAxMC4yODlMMS4wMDkgOC44MjZMNi4zMTQgNy42MTRMMi4wNiA0LjIyMkwyLjk5NSAzLjA0OUw3LjI1IDYuNDQxVjFIOC43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolComplexIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolComplex';
}

export default RefIcon;
