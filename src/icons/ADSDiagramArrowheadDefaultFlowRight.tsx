// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadDefaultFlowRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.061 7.249H16V8.749H13.561L15.03 10.219L13.97 11.279L11.44 8.749H0V7.249H9.939L8.22 5.529L9.28 4.469L12.061 7.249Z"/>
  </svg>
);

const aDSDiagramArrowheadDefaultFlowRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadDefaultFlowRightSvg,
  'ads-diagram-arrowhead-default-flow-right'
);

/**![ADSDiagramArrowheadDefaultFlowRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMi4wNjEgNy4yNDlIMTZWOC43NDlIMTMuNTYxTDE1LjAzIDEwLjIxOUwxMy45NyAxMS4yNzlMMTEuNDQgOC43NDlIMFY3LjI0OUg5LjkzOUw4LjIyIDUuNTI5TDkuMjggNC40NjlMMTIuMDYxIDcuMjQ5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadDefaultFlowRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadDefaultFlowRight';
}

export default RefIcon;
