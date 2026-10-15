// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadCircleRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSDiagramArrowheadCircleRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA4QzE0LjUgNy4wMzQgMTMuNzE3IDYuMjUgMTIuNzUgNi4yNUMxMS43ODQgNi4yNSAxMSA3LjAzNCAxMSA4QzExIDguOTY3IDExLjc4NCA5Ljc1IDEyLjc1IDkuNzVDMTMuNzE3IDkuNzUgMTQuNSA4Ljk2NyAxNC41IDhaTTE2IDhDMTYgOS43OTUgMTQuNTQ1IDExLjI1IDEyLjc1IDExLjI1QzExLjIxMyAxMS4yNSA5LjkyNyAxMC4xODMgOS41ODggOC43NUgwVjcuMjVIOS41ODhDOS45MjcgNS44MTcgMTEuMjEzIDQuNzUgMTIuNzUgNC43NUMxNC41NDUgNC43NSAxNiA2LjIwNSAxNiA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadCircleRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadCircleRight';
}

export default RefIcon;
