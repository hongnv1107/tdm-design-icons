// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const moonFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.1805 3.51259V3.55048C13.4078 3.55048 13.6731 3.55048 13.9004 3.55048C14.1656 3.58837 14.393 3.77782 14.4309 4.04305C14.5066 4.30828 14.393 4.57351 14.1656 4.68719C12.1196 5.82389 10.7555 8.02153 10.7555 10.4844C10.7555 14.1976 13.7488 17.1531 17.4242 17.1531C17.8031 17.1531 18.182 17.1531 18.5609 17.0773C18.8261 17.0394 19.0914 17.1531 19.205 17.3804C19.3187 17.6456 19.2808 17.9109 19.0914 18.1003C17.5757 19.578 15.4918 20.4874 13.1805 20.4874C8.51998 20.4874 4.73096 16.6984 4.73096 12C4.73096 7.3395 8.51998 3.51259 13.1805 3.51259Z"/>
  </svg>
);

const moonFilledIconDefinition = svgToIconDefinition(
  moonFilledSvg,
  'moon-filled'
);

/**![MoonFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuMTgwNSAzLjUxMjU5VjMuNTUwNDhDMTMuNDA3OCAzLjU1MDQ4IDEzLjY3MzEgMy41NTA0OCAxMy45MDA0IDMuNTUwNDhDMTQuMTY1NiAzLjU4ODM3IDE0LjM5MyAzLjc3NzgyIDE0LjQzMDkgNC4wNDMwNUMxNC41MDY2IDQuMzA4MjggMTQuMzkzIDQuNTczNTEgMTQuMTY1NiA0LjY4NzE5QzEyLjExOTYgNS44MjM4OSAxMC43NTU1IDguMDIxNTMgMTAuNzU1NSAxMC40ODQ0QzEwLjc1NTUgMTQuMTk3NiAxMy43NDg4IDE3LjE1MzEgMTcuNDI0MiAxNy4xNTMxQzE3LjgwMzEgMTcuMTUzMSAxOC4xODIgMTcuMTUzMSAxOC41NjA5IDE3LjA3NzNDMTguODI2MSAxNy4wMzk0IDE5LjA5MTQgMTcuMTUzMSAxOS4yMDUgMTcuMzgwNEMxOS4zMTg3IDE3LjY0NTYgMTkuMjgwOCAxNy45MTA5IDE5LjA5MTQgMTguMTAwM0MxNy41NzU3IDE5LjU3OCAxNS40OTE4IDIwLjQ4NzQgMTMuMTgwNSAyMC40ODc0QzguNTE5OTggMjAuNDg3NCA0LjczMDk2IDE2LjY5ODQgNC43MzA5NiAxMkM0LjczMDk2IDcuMzM5NSA4LjUxOTk4IDMuNTEyNTkgMTMuMTgwNSAzLjUxMjU5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={moonFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MoonFilledIcon';
}

export default RefIcon;
