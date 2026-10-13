// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const messageMiddleFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.125 19.5L12.5625 23.7188C12.4062 23.9062 12.2188 24 12 24C11.75 24 11.5625 23.9062 11.4375 23.7188L7.92188 19.5H3C2.15625 19.4688 1.45312 19.1719 0.890625 18.6094C0.328125 18.0469 0.03125 17.3438 0 16.5V3C0.03125 2.15625 0.328125 1.45312 0.890625 0.890625C1.45312 0.328125 2.15625 0.03125 3 0H21C21.8438 0.03125 22.5469 0.328125 23.1094 0.890625C23.6719 1.45312 23.9688 2.15625 24 3V16.5C23.9688 17.3438 23.6719 18.0469 23.1094 18.6094C22.5469 19.1719 21.8438 19.4688 21 19.5H16.125Z"/>
  </svg>
);

const messageMiddleFilledIconDefinition = svgToIconDefinition(
  messageMiddleFilledSvg,
  'message-middle-filled'
);

/**![MessageMiddleFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTYuMTI1IDE5LjVMMTIuNTYyNSAyMy43MTg4QzEyLjQwNjIgMjMuOTA2MiAxMi4yMTg4IDI0IDEyIDI0QzExLjc1IDI0IDExLjU2MjUgMjMuOTA2MiAxMS40Mzc1IDIzLjcxODhMNy45MjE4OCAxOS41SDNDMi4xNTYyNSAxOS40Njg4IDEuNDUzMTIgMTkuMTcxOSAwLjg5MDYyNSAxOC42MDk0QzAuMzI4MTI1IDE4LjA0NjkgMC4wMzEyNSAxNy4zNDM4IDAgMTYuNVYzQzAuMDMxMjUgMi4xNTYyNSAwLjMyODEyNSAxLjQ1MzEyIDAuODkwNjI1IDAuODkwNjI1QzEuNDUzMTIgMC4zMjgxMjUgMi4xNTYyNSAwLjAzMTI1IDMgMEgyMUMyMS44NDM4IDAuMDMxMjUgMjIuNTQ2OSAwLjMyODEyNSAyMy4xMDk0IDAuODkwNjI1QzIzLjY3MTkgMS40NTMxMiAyMy45Njg4IDIuMTU2MjUgMjQgM1YxNi41QzIzLjk2ODggMTcuMzQzOCAyMy42NzE5IDE4LjA0NjkgMjMuMTA5NCAxOC42MDk0QzIyLjU0NjkgMTkuMTcxOSAyMS44NDM4IDE5LjQ2ODggMjEgMTkuNUgxNi4xMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={messageMiddleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MessageMiddleFilled';
}

export default RefIcon;
