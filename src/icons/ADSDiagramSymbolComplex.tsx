// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolComplexSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSDiagramSymbolComplex](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik04Ljc1IDFWNi40NDJMMTMuMDA2IDMuMDVMMTMuNDczIDMuNjM2TDEzLjk0IDQuMjIyTDkuNjg2IDcuNjE1TDE0Ljk5MSA4LjgyNkwxNC44MjQgOS41NThMMTQuNjU4IDEwLjI4OUw5LjM1MSA5LjA3N0wxMS43MTMgMTMuOTgxTDEwLjM2MSAxNC42MzJMOCA5LjcyOEw1LjYzOSAxNC42MzJMNC4yODcgMTMuOTgxTDYuNjQ4IDkuMDc3TDEuMzQzIDEwLjI4OUwxLjAwOSA4LjgyNkw2LjMxNCA3LjYxNEwyLjA2IDQuMjIyTDIuOTk1IDMuMDQ5TDcuMjUgNi40NDFWMUg4Ljc1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolComplexIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolComplex';
}

export default RefIcon;
