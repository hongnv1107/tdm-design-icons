// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOneOrManyRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.372 4.65L10.824 7.249H16V8.749H10.824L15.372 11.348L14.628 12.65L8 8.862V11.999H6.5V8.749H0V7.249H6.5V3.999H8V7.135L14.628 3.348L15.372 4.65Z"/>
  </svg>
);

const aDSDiagramArrowheadOneOrManyRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadOneOrManyRightSvg,
  'ads-diagram-arrowhead-one-or-many-right'
);

/**![ADSDiagramArrowheadOneOrManyRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTUuMzcyIDQuNjVMMTAuODI0IDcuMjQ5SDE2VjguNzQ5SDEwLjgyNEwxNS4zNzIgMTEuMzQ4TDE0LjYyOCAxMi42NUw4IDguODYyVjExLjk5OUg2LjVWOC43NDlIMFY3LjI0OUg2LjVWMy45OTlIOFY3LjEzNUwxNC42MjggMy4zNDhMMTUuMzcyIDQuNjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOneOrManyRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOneOrManyRight';
}

export default RefIcon;
