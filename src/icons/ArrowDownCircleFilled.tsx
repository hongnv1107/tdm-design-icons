// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowDownCircleFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 8.59036e-08 18.6274 0 12C0 5.37258 5.37258 8.59036e-08 12 0ZM12 6.39941C11.2637 6.39941 10.6671 6.99714 10.667 7.7334V13.0479L8.67578 11.0576C8.15507 10.537 7.31069 10.537 6.79004 11.0576C6.26995 11.5782 6.26995 12.4218 6.79004 12.9424L11.0576 17.21L11.1592 17.3008C11.6827 17.7275 12.4543 17.6976 12.9424 17.21L17.21 12.9424L17.3008 12.8408C17.7275 12.3173 17.6976 11.5457 17.21 11.0576C16.7217 10.5694 15.9485 10.5385 15.4248 10.9658L15.3242 11.0576L13.333 13.0479V7.7334C13.3329 6.99714 12.7363 6.39941 12 6.39941Z"/>
  </svg>
);

const arrowDownCircleFilledIconDefinition = svgToIconDefinition(
  arrowDownCircleFilledSvg,
  'arrow-down-circle-filled'
);

/**![ArrowDownCircleFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDBDMTguNjI3NCAwIDI0IDUuMzcyNTggMjQgMTJDMjQgMTguNjI3NCAxOC42Mjc0IDI0IDEyIDI0QzUuMzcyNTggMjQgOC41OTAzNmUtMDggMTguNjI3NCAwIDEyQzAgNS4zNzI1OCA1LjM3MjU4IDguNTkwMzZlLTA4IDEyIDBaTTEyIDYuMzk5NDFDMTEuMjYzNyA2LjM5OTQxIDEwLjY2NzEgNi45OTcxNCAxMC42NjcgNy43MzM0VjEzLjA0NzlMOC42NzU3OCAxMS4wNTc2QzguMTU1MDcgMTAuNTM3IDcuMzEwNjkgMTAuNTM3IDYuNzkwMDQgMTEuMDU3NkM2LjI2OTk1IDExLjU3ODIgNi4yNjk5NSAxMi40MjE4IDYuNzkwMDQgMTIuOTQyNEwxMS4wNTc2IDE3LjIxTDExLjE1OTIgMTcuMzAwOEMxMS42ODI3IDE3LjcyNzUgMTIuNDU0MyAxNy42OTc2IDEyLjk0MjQgMTcuMjFMMTcuMjEgMTIuOTQyNEwxNy4zMDA4IDEyLjg0MDhDMTcuNzI3NSAxMi4zMTczIDE3LjY5NzYgMTEuNTQ1NyAxNy4yMSAxMS4wNTc2QzE2LjcyMTcgMTAuNTY5NCAxNS45NDg1IDEwLjUzODUgMTUuNDI0OCAxMC45NjU4TDE1LjMyNDIgMTEuMDU3NkwxMy4zMzMgMTMuMDQ3OVY3LjczMzRDMTMuMzMyOSA2Ljk5NzE0IDEyLjczNjMgNi4zOTk0MSAxMiA2LjM5OTQxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowDownCircleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowDownCircleFilled';
}

export default RefIcon;
