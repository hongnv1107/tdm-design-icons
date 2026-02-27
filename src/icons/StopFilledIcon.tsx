// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const stopFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 8C6 6.90625 6.875 6 8 6H16C17.0938 6 18 6.90625 18 8V16C18 17.125 17.0938 18 16 18H8C6.875 18 6 17.125 6 16V8Z"/><path d="M4 6.66667C4.02778 5.91667 4.29167 5.29167 4.79167 4.79167C5.29167 4.29167 5.91667 4.02778 6.66667 4H17.3333C18.0833 4.02778 18.7083 4.29167 19.2083 4.79167C19.7083 5.29167 19.9722 5.91667 20 6.66667V17.3333C19.9722 18.0833 19.7083 18.7083 19.2083 19.2083C18.7083 19.7083 18.0833 19.9722 17.3333 20H6.66667C5.91667 19.9722 5.29167 19.7083 4.79167 19.2083C4.29167 18.7083 4.02778 18.0833 4 17.3333V6.66667Z"/>
  </svg>
);

const stopFilledIconDefinition = svgToIconDefinition(
  stopFilledSvg,
  'stop-filled'
);

/**![StopFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNiA4QzYgNi45MDYyNSA2Ljg3NSA2IDggNkgxNkMxNy4wOTM4IDYgMTggNi45MDYyNSAxOCA4VjE2QzE4IDE3LjEyNSAxNy4wOTM4IDE4IDE2IDE4SDhDNi44NzUgMTggNiAxNy4xMjUgNiAxNlY4WiIvPjxwYXRoIGQ9Ik00IDYuNjY2NjdDNC4wMjc3OCA1LjkxNjY3IDQuMjkxNjcgNS4yOTE2NyA0Ljc5MTY3IDQuNzkxNjdDNS4yOTE2NyA0LjI5MTY3IDUuOTE2NjcgNC4wMjc3OCA2LjY2NjY3IDRIMTcuMzMzM0MxOC4wODMzIDQuMDI3NzggMTguNzA4MyA0LjI5MTY3IDE5LjIwODMgNC43OTE2N0MxOS43MDgzIDUuMjkxNjcgMTkuOTcyMiA1LjkxNjY3IDIwIDYuNjY2NjdWMTcuMzMzM0MxOS45NzIyIDE4LjA4MzMgMTkuNzA4MyAxOC43MDgzIDE5LjIwODMgMTkuMjA4M0MxOC43MDgzIDE5LjcwODMgMTguMDgzMyAxOS45NzIyIDE3LjMzMzMgMjBINi42NjY2N0M1LjkxNjY3IDE5Ljk3MjIgNS4yOTE2NyAxOS43MDgzIDQuNzkxNjcgMTkuMjA4M0M0LjI5MTY3IDE4LjcwODMgNC4wMjc3OCAxOC4wODMzIDQgMTcuMzMzM1Y2LjY2NjY3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={stopFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StopFilledIcon';
}

export default RefIcon;
