// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadCircleRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 7.034 13.717 6.25 12.75 6.25C11.784 6.25 11 7.034 11 8C11 8.967 11.784 9.75 12.75 9.75C13.717 9.75 14.5 8.967 14.5 8ZM16 8C16 9.795 14.545 11.25 12.75 11.25C11.213 11.25 9.927 10.183 9.588 8.75H0V7.25H9.588C9.927 5.817 11.213 4.75 12.75 4.75C14.545 4.75 16 6.205 16 8Z"/>
  </svg>
);

const aDSDiagramArrowheadCircleRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadCircleRightSvg,
  'ads-diagram-arrowhead-circle-right'
);

/**![ADSDiagramArrowheadCircleRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDhDMTQuNSA3LjAzNCAxMy43MTcgNi4yNSAxMi43NSA2LjI1QzExLjc4NCA2LjI1IDExIDcuMDM0IDExIDhDMTEgOC45NjcgMTEuNzg0IDkuNzUgMTIuNzUgOS43NUMxMy43MTcgOS43NSAxNC41IDguOTY3IDE0LjUgOFpNMTYgOEMxNiA5Ljc5NSAxNC41NDUgMTEuMjUgMTIuNzUgMTEuMjVDMTEuMjEzIDExLjI1IDkuOTI3IDEwLjE4MyA5LjU4OCA4Ljc1SDBWNy4yNUg5LjU4OEM5LjkyNyA1LjgxNyAxMS4yMTMgNC43NSAxMi43NSA0Ljc1QzE0LjU0NSA0Ljc1IDE2IDYuMjA1IDE2IDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadCircleRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadCircleRight';
}

export default RefIcon;
