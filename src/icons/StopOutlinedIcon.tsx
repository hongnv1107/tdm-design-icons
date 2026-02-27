// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const stopOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.3333 6H6.66667C6.25 6.02778 6.02778 6.25 6 6.66667V17.3333C6.02778 17.75 6.25 17.9722 6.66667 18H17.3333C17.75 17.9722 17.9722 17.75 18 17.3333V6.66667C17.9722 6.25 17.75 6.02778 17.3333 6ZM6.66667 4H17.3333C18.0833 4.02778 18.7083 4.29167 19.2083 4.79167C19.7083 5.29167 19.9722 5.91667 20 6.66667V17.3333C19.9722 18.0833 19.7083 18.7083 19.2083 19.2083C18.7083 19.7083 18.0833 19.9722 17.3333 20H6.66667C5.91667 19.9722 5.29167 19.7083 4.79167 19.2083C4.29167 18.7083 4.02778 18.0833 4 17.3333V6.66667C4.02778 5.91667 4.29167 5.29167 4.79167 4.79167C5.29167 4.29167 5.91667 4.02778 6.66667 4Z"/>
  </svg>
);

const stopOutlinedIconDefinition = svgToIconDefinition(
  stopOutlinedSvg,
  'stop-outlined'
);

/**![StopOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTcuMzMzMyA2SDYuNjY2NjdDNi4yNSA2LjAyNzc4IDYuMDI3NzggNi4yNSA2IDYuNjY2NjdWMTcuMzMzM0M2LjAyNzc4IDE3Ljc1IDYuMjUgMTcuOTcyMiA2LjY2NjY3IDE4SDE3LjMzMzNDMTcuNzUgMTcuOTcyMiAxNy45NzIyIDE3Ljc1IDE4IDE3LjMzMzNWNi42NjY2N0MxNy45NzIyIDYuMjUgMTcuNzUgNi4wMjc3OCAxNy4zMzMzIDZaTTYuNjY2NjcgNEgxNy4zMzMzQzE4LjA4MzMgNC4wMjc3OCAxOC43MDgzIDQuMjkxNjcgMTkuMjA4MyA0Ljc5MTY3QzE5LjcwODMgNS4yOTE2NyAxOS45NzIyIDUuOTE2NjcgMjAgNi42NjY2N1YxNy4zMzMzQzE5Ljk3MjIgMTguMDgzMyAxOS43MDgzIDE4LjcwODMgMTkuMjA4MyAxOS4yMDgzQzE4LjcwODMgMTkuNzA4MyAxOC4wODMzIDE5Ljk3MjIgMTcuMzMzMyAyMEg2LjY2NjY3QzUuOTE2NjcgMTkuOTcyMiA1LjI5MTY3IDE5LjcwODMgNC43OTE2NyAxOS4yMDgzQzQuMjkxNjcgMTguNzA4MyA0LjAyNzc4IDE4LjA4MzMgNCAxNy4zMzMzVjYuNjY2NjdDNC4wMjc3OCA1LjkxNjY3IDQuMjkxNjcgNS4yOTE2NyA0Ljc5MTY3IDQuNzkxNjdDNS4yOTE2NyA0LjI5MTY3IDUuOTE2NjcgNC4wMjc3OCA2LjY2NjY3IDRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={stopOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StopOutlinedIcon';
}

export default RefIcon;
