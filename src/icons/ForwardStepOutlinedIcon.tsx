// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const forwardStepOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 6.75C14.5417 6.29167 14.7917 6.04167 15.25 6C15.7083 6.04167 15.9583 6.29167 16 6.75V17.25C15.9583 17.7083 15.7083 17.9583 15.25 18C14.7917 17.9583 14.5417 17.7083 14.5 17.25V13.9688L8.96875 17.8438C8.80208 17.9479 8.625 18 8.4375 18C8.16667 18 7.94792 17.9062 7.78125 17.7188C7.59375 17.5521 7.5 17.3333 7.5 17.0625V6.9375C7.5 6.66667 7.59375 6.44792 7.78125 6.28125C7.94792 6.09375 8.16667 6 8.4375 6C8.64583 6 8.82292 6.05208 8.96875 6.15625L14.5 10.0312V6.75ZM14.5 12.125V11.875L9 8.03125V16L14.5 12.125Z"/>
  </svg>
);

const forwardStepOutlinedIconDefinition = svgToIconDefinition(
  forwardStepOutlinedSvg,
  'forward-step-outlined'
);

/**![ForwardStepOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA2Ljc1QzE0LjU0MTcgNi4yOTE2NyAxNC43OTE3IDYuMDQxNjcgMTUuMjUgNkMxNS43MDgzIDYuMDQxNjcgMTUuOTU4MyA2LjI5MTY3IDE2IDYuNzVWMTcuMjVDMTUuOTU4MyAxNy43MDgzIDE1LjcwODMgMTcuOTU4MyAxNS4yNSAxOEMxNC43OTE3IDE3Ljk1ODMgMTQuNTQxNyAxNy43MDgzIDE0LjUgMTcuMjVWMTMuOTY4OEw4Ljk2ODc1IDE3Ljg0MzhDOC44MDIwOCAxNy45NDc5IDguNjI1IDE4IDguNDM3NSAxOEM4LjE2NjY3IDE4IDcuOTQ3OTIgMTcuOTA2MiA3Ljc4MTI1IDE3LjcxODhDNy41OTM3NSAxNy41NTIxIDcuNSAxNy4zMzMzIDcuNSAxNy4wNjI1VjYuOTM3NUM3LjUgNi42NjY2NyA3LjU5Mzc1IDYuNDQ3OTIgNy43ODEyNSA2LjI4MTI1QzcuOTQ3OTIgNi4wOTM3NSA4LjE2NjY3IDYgOC40Mzc1IDZDOC42NDU4MyA2IDguODIyOTIgNi4wNTIwOCA4Ljk2ODc1IDYuMTU2MjVMMTQuNSAxMC4wMzEyVjYuNzVaTTE0LjUgMTIuMTI1VjExLjg3NUw5IDguMDMxMjVWMTZMMTQuNSAxMi4xMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={forwardStepOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ForwardStepOutlinedIcon';
}

export default RefIcon;
