// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadSequenceRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.419 2.327C8.675 2.201 8.981 2.231 9.207 2.405L15.707 7.405C15.892 7.547 16 7.767 16 8C16 8.233 15.892 8.453 15.707 8.595L9.207 13.595C8.981 13.769 8.675 13.799 8.419 13.673C8.163 13.547 8 13.286 8 13V8.75H0V7.25H8V3C8 2.714 8.163 2.453 8.419 2.327Z"/>
  </svg>
);

const aDSDiagramArrowheadSequenceRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadSequenceRightSvg,
  'ads-diagram-arrowhead-sequence-right'
);

/**![ADSDiagramArrowheadSequenceRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik04LjQxOSAyLjMyN0M4LjY3NSAyLjIwMSA4Ljk4MSAyLjIzMSA5LjIwNyAyLjQwNUwxNS43MDcgNy40MDVDMTUuODkyIDcuNTQ3IDE2IDcuNzY3IDE2IDhDMTYgOC4yMzMgMTUuODkyIDguNDUzIDE1LjcwNyA4LjU5NUw5LjIwNyAxMy41OTVDOC45ODEgMTMuNzY5IDguNjc1IDEzLjc5OSA4LjQxOSAxMy42NzNDOC4xNjMgMTMuNTQ3IDggMTMuMjg2IDggMTNWOC43NUgwVjcuMjVIOFYzQzggMi43MTQgOC4xNjMgMi40NTMgOC40MTkgMi4zMjdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadSequenceRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadSequenceRight';
}

export default RefIcon;
