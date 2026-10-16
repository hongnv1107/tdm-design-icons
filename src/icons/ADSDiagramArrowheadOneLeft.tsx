// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOneLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSDiagramArrowheadOneLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik00Ljc1IDRMNC43NSA3LjI1TDE2IDcuMjVWOC43NUw0Ljc1IDguNzVMNC43NSAxMkgzLjI1TDMuMjUgOC43NUwwIDguNzVMMCA3LjI1TDMuMjUgNy4yNUwzLjI1IDRMNC43NSA0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOneLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOneLeft';
}

export default RefIcon;
