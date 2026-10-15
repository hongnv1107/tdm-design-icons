// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSExpandVerticalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1.5L15 1.5V0L1 0L1 1.5ZM1 16H15V14.5L1 14.5L1 16ZM7.47 14.28C7.763 14.573 8.237 14.573 8.53 14.28L11.78 11.03L10.72 9.97L8.75 11.94L8.75 4.061L10.72 6.03L11.78 4.97L8.53 1.72C8.237 1.427 7.763 1.427 7.47 1.72L4.22 4.97L5.28 6.03L7.25 4.061L7.25 11.94L5.28 9.97L4.22 11.03L7.47 14.28Z"/>
  </svg>
);

const aDSExpandVerticalIconDefinition = svgToIconDefinition(
  aDSExpandVerticalSvg,
  'ads-expand-vertical'
);

/**![ADSExpandVertical](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMSAxLjVMMTUgMS41VjBMMSAwTDEgMS41Wk0xIDE2SDE1VjE0LjVMMSAxNC41TDEgMTZaTTcuNDcgMTQuMjhDNy43NjMgMTQuNTczIDguMjM3IDE0LjU3MyA4LjUzIDE0LjI4TDExLjc4IDExLjAzTDEwLjcyIDkuOTdMOC43NSAxMS45NEw4Ljc1IDQuMDYxTDEwLjcyIDYuMDNMMTEuNzggNC45N0w4LjUzIDEuNzJDOC4yMzcgMS40MjcgNy43NjMgMS40MjcgNy40NyAxLjcyTDQuMjIgNC45N0w1LjI4IDYuMDNMNy4yNSA0LjA2MUw3LjI1IDExLjk0TDUuMjggOS45N0w0LjIyIDExLjAzTDcuNDcgMTQuMjhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSExpandVerticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSExpandVertical';
}

export default RefIcon;
