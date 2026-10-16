// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSListChecklistSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.591 9.969L2.591 13.719C2.44 13.907 2.208 14.011 1.967 13.999C1.756 13.988 1.562 13.89 1.429 13.73L1.375 13.657L0 11.532L1.26 10.718L2.068 11.968L4.419 9.031L5.591 9.969ZM5.591 2.469L2.591 6.219C2.44 6.407 2.208 6.511 1.967 6.499C1.756 6.488 1.562 6.389 1.429 6.229L1.375 6.157L0 4.032L1.26 3.218L2.068 4.468L4.419 1.531L5.591 2.469Z"/><path d="M16.005 11V12.5L7.005 12.5V11L16.005 11ZM16.005 3.5V5L7.005 5V3.5L16.005 3.5Z"/>
  </svg>
);

const aDSListChecklistIconDefinition = svgToIconDefinition(
  aDSListChecklistSvg,
  'ads-list-checklist'
);

/**![ADSListChecklist](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS41OTEgOS45NjlMMi41OTEgMTMuNzE5QzIuNDQgMTMuOTA3IDIuMjA4IDE0LjAxMSAxLjk2NyAxMy45OTlDMS43NTYgMTMuOTg4IDEuNTYyIDEzLjg5IDEuNDI5IDEzLjczTDEuMzc1IDEzLjY1N0wwIDExLjUzMkwxLjI2IDEwLjcxOEwyLjA2OCAxMS45NjhMNC40MTkgOS4wMzFMNS41OTEgOS45NjlaTTUuNTkxIDIuNDY5TDIuNTkxIDYuMjE5QzIuNDQgNi40MDcgMi4yMDggNi41MTEgMS45NjcgNi40OTlDMS43NTYgNi40ODggMS41NjIgNi4zODkgMS40MjkgNi4yMjlMMS4zNzUgNi4xNTdMMCA0LjAzMkwxLjI2IDMuMjE4TDIuMDY4IDQuNDY4TDQuNDE5IDEuNTMxTDUuNTkxIDIuNDY5WiIvPjxwYXRoIGQ9Ik0xNi4wMDUgMTFWMTIuNUw3LjAwNSAxMi41VjExTDE2LjAwNSAxMVpNMTYuMDA1IDMuNVY1TDcuMDA1IDVWMy41TDE2LjAwNSAzLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSListChecklistIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSListChecklist';
}

export default RefIcon;
