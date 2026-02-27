// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const layoutFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.9999 3H4.99994C3.89537 3 2.99994 3.89543 2.99994 5V8H20.9999V5C20.9999 3.89543 20.1045 3 18.9999 3Z"/><path d="M7.99994 21H4.99994C3.89537 21 2.99994 20.1046 2.99994 19L2.99976 10H7.99994V21Z"/><path d="M9.99994 21H18.9998C20.1043 21 20.9998 20.1046 20.9998 19L20.9999 10H9.99994V21Z"/>
  </svg>
);

const layoutFilledIconDefinition = svgToIconDefinition(
  layoutFilledSvg,
  'layout-filled'
);

/**![LayoutFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTguOTk5OSAzSDQuOTk5OTRDMy44OTUzNyAzIDIuOTk5OTQgMy44OTU0MyAyLjk5OTk0IDVWOEgyMC45OTk5VjVDMjAuOTk5OSAzLjg5NTQzIDIwLjEwNDUgMyAxOC45OTk5IDNaIi8+PHBhdGggZD0iTTcuOTk5OTQgMjFINC45OTk5NEMzLjg5NTM3IDIxIDIuOTk5OTQgMjAuMTA0NiAyLjk5OTk0IDE5TDIuOTk5NzYgMTBINy45OTk5NFYyMVoiLz48cGF0aCBkPSJNOS45OTk5NCAyMUgxOC45OTk4QzIwLjEwNDMgMjEgMjAuOTk5OCAyMC4xMDQ2IDIwLjk5OTggMTlMMjAuOTk5OSAxMEg5Ljk5OTk0VjIxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={layoutFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LayoutFilledIcon';
}

export default RefIcon;
