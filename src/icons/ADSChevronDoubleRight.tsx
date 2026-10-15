// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChevronDoubleRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.28 1.47L14.28 7.47C14.555 7.744 14.572 8.179 14.332 8.474L14.28 8.53L8.28 14.53L7.22 13.47L12.69 8L7.22 2.53L8.28 1.47Z"/><path d="M3.53 1.47L9.53 7.47C9.805 7.744 9.822 8.179 9.582 8.474L9.53 8.53L3.53 14.53L2.47 13.47L7.939 8L2.47 2.53L3.53 1.47Z"/>
  </svg>
);

const aDSChevronDoubleRightIconDefinition = svgToIconDefinition(
  aDSChevronDoubleRightSvg,
  'ads-chevron-double-right'
);

/**![ADSChevronDoubleRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOC4yOCAxLjQ3TDE0LjI4IDcuNDdDMTQuNTU1IDcuNzQ0IDE0LjU3MiA4LjE3OSAxNC4zMzIgOC40NzRMMTQuMjggOC41M0w4LjI4IDE0LjUzTDcuMjIgMTMuNDdMMTIuNjkgOEw3LjIyIDIuNTNMOC4yOCAxLjQ3WiIvPjxwYXRoIGQ9Ik0zLjUzIDEuNDdMOS41MyA3LjQ3QzkuODA1IDcuNzQ0IDkuODIyIDguMTc5IDkuNTgyIDguNDc0TDkuNTMgOC41M0wzLjUzIDE0LjUzTDIuNDcgMTMuNDdMNy45MzkgOEwyLjQ3IDIuNTNMMy41MyAxLjQ3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChevronDoubleRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChevronDoubleRight';
}

export default RefIcon;
