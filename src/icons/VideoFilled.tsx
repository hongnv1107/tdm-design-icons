// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const videoFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 6.66667C0.0277778 5.91667 0.291667 5.29167 0.791667 4.79167C1.29167 4.29167 1.91667 4.02778 2.66667 4H13.3333C14.0833 4.02778 14.7083 4.29167 15.2083 4.79167C15.7083 5.29167 15.9722 5.91667 16 6.66667V17.3333C15.9722 18.0833 15.7083 18.7083 15.2083 19.2083C14.7083 19.7083 14.0833 19.9722 13.3333 20H2.66667C1.91667 19.9722 1.29167 19.7083 0.791667 19.2083C0.291667 18.7083 0.0277778 18.0833 0 17.3333V6.66667ZM23.2917 5.5C23.7361 5.75 23.9722 6.13889 24 6.66667V17.3333C23.9722 17.8611 23.7361 18.25 23.2917 18.5C22.8194 18.75 22.3611 18.7361 21.9167 18.4583L17.9167 15.7917L17.3333 15.375V8.625L17.9167 8.20833L21.9167 5.54167C22.3611 5.29167 22.8194 5.27778 23.2917 5.5Z"/>
  </svg>
);

const videoFilledIconDefinition = svgToIconDefinition(
  videoFilledSvg,
  'video-filled'
);

/**![VideoFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMCA2LjY2NjY3QzAuMDI3Nzc3OCA1LjkxNjY3IDAuMjkxNjY3IDUuMjkxNjcgMC43OTE2NjcgNC43OTE2N0MxLjI5MTY3IDQuMjkxNjcgMS45MTY2NyA0LjAyNzc4IDIuNjY2NjcgNEgxMy4zMzMzQzE0LjA4MzMgNC4wMjc3OCAxNC43MDgzIDQuMjkxNjcgMTUuMjA4MyA0Ljc5MTY3QzE1LjcwODMgNS4yOTE2NyAxNS45NzIyIDUuOTE2NjcgMTYgNi42NjY2N1YxNy4zMzMzQzE1Ljk3MjIgMTguMDgzMyAxNS43MDgzIDE4LjcwODMgMTUuMjA4MyAxOS4yMDgzQzE0LjcwODMgMTkuNzA4MyAxNC4wODMzIDE5Ljk3MjIgMTMuMzMzMyAyMEgyLjY2NjY3QzEuOTE2NjcgMTkuOTcyMiAxLjI5MTY3IDE5LjcwODMgMC43OTE2NjcgMTkuMjA4M0MwLjI5MTY2NyAxOC43MDgzIDAuMDI3Nzc3OCAxOC4wODMzIDAgMTcuMzMzM1Y2LjY2NjY3Wk0yMy4yOTE3IDUuNUMyMy43MzYxIDUuNzUgMjMuOTcyMiA2LjEzODg5IDI0IDYuNjY2NjdWMTcuMzMzM0MyMy45NzIyIDE3Ljg2MTEgMjMuNzM2MSAxOC4yNSAyMy4yOTE3IDE4LjVDMjIuODE5NCAxOC43NSAyMi4zNjExIDE4LjczNjEgMjEuOTE2NyAxOC40NTgzTDE3LjkxNjcgMTUuNzkxN0wxNy4zMzMzIDE1LjM3NVY4LjYyNUwxNy45MTY3IDguMjA4MzNMMjEuOTE2NyA1LjU0MTY3QzIyLjM2MTEgNS4yOTE2NyAyMi44MTk0IDUuMjc3NzggMjMuMjkxNyA1LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={videoFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VideoFilled';
}

export default RefIcon;
