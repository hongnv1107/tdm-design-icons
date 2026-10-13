// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronLeftFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.355 0.502103C17.6855 -0.167368 16.6001 -0.167368 15.9306 0.502103L5.64493 10.7878C4.97546 11.4573 4.97546 12.5427 5.64493 13.2122L15.9306 23.4979C16.6001 24.1674 17.6855 24.1674 18.355 23.4979C19.0245 22.8284 19.0245 21.743 18.355 21.0735L9.28148 12L18.355 2.92647C19.0245 2.257 19.0245 1.17157 18.355 0.502103Z"/>
  </svg>
);

const chevronLeftFilledIconDefinition = svgToIconDefinition(
  chevronLeftFilledSvg,
  'chevron-left-filled'
);

/**![ChevronLeftFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4LjM1NSAwLjUwMjEwM0MxNy42ODU1IC0wLjE2NzM2OCAxNi42MDAxIC0wLjE2NzM2OCAxNS45MzA2IDAuNTAyMTAzTDUuNjQ0OTMgMTAuNzg3OEM0Ljk3NTQ2IDExLjQ1NzMgNC45NzU0NiAxMi41NDI3IDUuNjQ0OTMgMTMuMjEyMkwxNS45MzA2IDIzLjQ5NzlDMTYuNjAwMSAyNC4xNjc0IDE3LjY4NTUgMjQuMTY3NCAxOC4zNTUgMjMuNDk3OUMxOS4wMjQ1IDIyLjgyODQgMTkuMDI0NSAyMS43NDMgMTguMzU1IDIxLjA3MzVMOS4yODE0OCAxMkwxOC4zNTUgMi45MjY0N0MxOS4wMjQ1IDIuMjU3IDE5LjAyNDUgMS4xNzE1NyAxOC4zNTUgMC41MDIxMDNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronLeftFilled';
}

export default RefIcon;
