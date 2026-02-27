// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const tabletScreenOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 4.7998C17.9999 4.33134 17.6378 4 17.25 4H6.75C6.36221 4 6.0001 4.33134 6 4.7998V19.2002C6.0001 19.6687 6.36221 20 6.75 20H17.25C17.6378 20 17.9999 19.6687 18 19.2002V4.7998ZM12.0088 16.4004L12.1113 16.4053C12.6154 16.4566 13.0088 16.8827 13.0088 17.4004C13.0086 17.9179 12.6153 18.3432 12.1113 18.3945L12.0088 18.4004H12C11.4478 18.4004 11.0002 17.9525 11 17.4004C11 16.8481 11.4477 16.4004 12 16.4004H12.0088ZM20 19.2002C19.9999 20.7198 18.7951 22 17.25 22H6.75C5.20491 22 4.0001 20.7198 4 19.2002V4.7998C4.0001 3.28024 5.20491 2 6.75 2H17.25C18.7951 2 19.9999 3.28024 20 4.7998V19.2002Z"/>
  </svg>
);

const tabletScreenOutlinedIconDefinition = svgToIconDefinition(
  tabletScreenOutlinedSvg,
  'tablet-screen-outlined'
);

/**![TabletScreenOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTggNC43OTk4QzE3Ljk5OTkgNC4zMzEzNCAxNy42Mzc4IDQgMTcuMjUgNEg2Ljc1QzYuMzYyMjEgNCA2LjAwMDEgNC4zMzEzNCA2IDQuNzk5OFYxOS4yMDAyQzYuMDAwMSAxOS42Njg3IDYuMzYyMjEgMjAgNi43NSAyMEgxNy4yNUMxNy42Mzc4IDIwIDE3Ljk5OTkgMTkuNjY4NyAxOCAxOS4yMDAyVjQuNzk5OFpNMTIuMDA4OCAxNi40MDA0TDEyLjExMTMgMTYuNDA1M0MxMi42MTU0IDE2LjQ1NjYgMTMuMDA4OCAxNi44ODI3IDEzLjAwODggMTcuNDAwNEMxMy4wMDg2IDE3LjkxNzkgMTIuNjE1MyAxOC4zNDMyIDEyLjExMTMgMTguMzk0NUwxMi4wMDg4IDE4LjQwMDRIMTJDMTEuNDQ3OCAxOC40MDA0IDExLjAwMDIgMTcuOTUyNSAxMSAxNy40MDA0QzExIDE2Ljg0ODEgMTEuNDQ3NyAxNi40MDA0IDEyIDE2LjQwMDRIMTIuMDA4OFpNMjAgMTkuMjAwMkMxOS45OTk5IDIwLjcxOTggMTguNzk1MSAyMiAxNy4yNSAyMkg2Ljc1QzUuMjA0OTEgMjIgNC4wMDAxIDIwLjcxOTggNCAxOS4yMDAyVjQuNzk5OEM0LjAwMDEgMy4yODAyNCA1LjIwNDkxIDIgNi43NSAySDE3LjI1QzE4Ljc5NTEgMiAxOS45OTk5IDMuMjgwMjQgMjAgNC43OTk4VjE5LjIwMDJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={tabletScreenOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TabletScreenOutlinedIcon';
}

export default RefIcon;
