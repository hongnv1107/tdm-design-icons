// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const checkFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.9395 4.93946C19.5252 4.35368 20.4748 4.35368 21.0606 4.93946C21.6463 5.52525 21.6463 6.47477 21.0606 7.06056L10.0606 18.0606C9.47477 18.6463 8.52525 18.6463 7.93946 18.0606L2.93946 13.0606C2.35368 12.4748 2.35368 11.5252 2.93946 10.9395C3.48849 10.3904 4.35715 10.3558 4.9463 10.8359L5.06056 10.9395L9.00001 14.8789L18.9395 4.93946Z"/>
  </svg>
);

const checkFilledIconDefinition = svgToIconDefinition(
  checkFilledSvg,
  'check-filled'
);

/**![CheckFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTguOTM5NSA0LjkzOTQ2QzE5LjUyNTIgNC4zNTM2OCAyMC40NzQ4IDQuMzUzNjggMjEuMDYwNiA0LjkzOTQ2QzIxLjY0NjMgNS41MjUyNSAyMS42NDYzIDYuNDc0NzcgMjEuMDYwNiA3LjA2MDU2TDEwLjA2MDYgMTguMDYwNkM5LjQ3NDc3IDE4LjY0NjMgOC41MjUyNSAxOC42NDYzIDcuOTM5NDYgMTguMDYwNkwyLjkzOTQ2IDEzLjA2MDZDMi4zNTM2OCAxMi40NzQ4IDIuMzUzNjggMTEuNTI1MiAyLjkzOTQ2IDEwLjkzOTVDMy40ODg0OSAxMC4zOTA0IDQuMzU3MTUgMTAuMzU1OCA0Ljk0NjMgMTAuODM1OUw1LjA2MDU2IDEwLjkzOTVMOS4wMDAwMSAxNC44Nzg5TDE4LjkzOTUgNC45Mzk0NloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={checkFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CheckFilledIcon';
}

export default RefIcon;
