// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const backwardStepOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.5 6.75V10.0312L15.0312 6.15625C15.1771 6.05208 15.3542 6 15.5625 6C15.8333 6 16.0521 6.09375 16.2188 6.28125C16.4062 6.44792 16.5 6.66667 16.5 6.9375V17.0625C16.5 17.3333 16.4062 17.5521 16.2188 17.7188C16.0521 17.9062 15.8333 18 15.5625 18C15.375 18 15.1979 17.9479 15.0312 17.8438L9.5 13.9688V17.25C9.45833 17.7083 9.20833 17.9583 8.75 18C8.29167 17.9583 8.04167 17.7083 8 17.25V6.75C8.04167 6.29167 8.29167 6.04167 8.75 6C9.20833 6.04167 9.45833 6.29167 9.5 6.75ZM9.5 12.125L15 16V8.03125L9.5 11.875V12.125Z"/>
  </svg>
);

const backwardStepOutlinedIconDefinition = svgToIconDefinition(
  backwardStepOutlinedSvg,
  'backward-step-outlined'
);

/**![BackwardStepOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOS41IDYuNzVWMTAuMDMxMkwxNS4wMzEyIDYuMTU2MjVDMTUuMTc3MSA2LjA1MjA4IDE1LjM1NDIgNiAxNS41NjI1IDZDMTUuODMzMyA2IDE2LjA1MjEgNi4wOTM3NSAxNi4yMTg4IDYuMjgxMjVDMTYuNDA2MiA2LjQ0NzkyIDE2LjUgNi42NjY2NyAxNi41IDYuOTM3NVYxNy4wNjI1QzE2LjUgMTcuMzMzMyAxNi40MDYyIDE3LjU1MjEgMTYuMjE4OCAxNy43MTg4QzE2LjA1MjEgMTcuOTA2MiAxNS44MzMzIDE4IDE1LjU2MjUgMThDMTUuMzc1IDE4IDE1LjE5NzkgMTcuOTQ3OSAxNS4wMzEyIDE3Ljg0MzhMOS41IDEzLjk2ODhWMTcuMjVDOS40NTgzMyAxNy43MDgzIDkuMjA4MzMgMTcuOTU4MyA4Ljc1IDE4QzguMjkxNjcgMTcuOTU4MyA4LjA0MTY3IDE3LjcwODMgOCAxNy4yNVY2Ljc1QzguMDQxNjcgNi4yOTE2NyA4LjI5MTY3IDYuMDQxNjcgOC43NSA2QzkuMjA4MzMgNi4wNDE2NyA5LjQ1ODMzIDYuMjkxNjcgOS41IDYuNzVaTTkuNSAxMi4xMjVMMTUgMTZWOC4wMzEyNUw5LjUgMTEuODc1VjEyLjEyNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={backwardStepOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BackwardStepOutlinedIcon';
}

export default RefIcon;
