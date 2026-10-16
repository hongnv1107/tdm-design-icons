// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChevronRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.03 1.47L12.03 7.47C12.305 7.744 12.322 8.179 12.082 8.474L12.03 8.53L6.03 14.53L4.97 13.47L10.44 8L4.97 2.53L6.03 1.47Z"/>
  </svg>
);

const aDSChevronRightIconDefinition = svgToIconDefinition(
  aDSChevronRightSvg,
  'ads-chevron-right'
);

/**![ADSChevronRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNi4wMyAxLjQ3TDEyLjAzIDcuNDdDMTIuMzA1IDcuNzQ0IDEyLjMyMiA4LjE3OSAxMi4wODIgOC40NzRMMTIuMDMgOC41M0w2LjAzIDE0LjUzTDQuOTcgMTMuNDdMMTAuNDQgOEw0Ljk3IDIuNTNMNi4wMyAxLjQ3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChevronRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChevronRight';
}

export default RefIcon;
