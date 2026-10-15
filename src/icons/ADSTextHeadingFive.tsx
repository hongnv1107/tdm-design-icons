// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextHeadingFiveSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8.5H12.25C11.836 8.5 11.5 8.836 11.5 9.25V12.25C11.5 12.664 11.836 13 12.25 13H14.5V14.5H11.5V16H14.625C15.384 16 16 15.384 16 14.625V12.875C16 12.116 15.384 11.5 14.625 11.5H13V10H16V8.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6.25V1H1V13H2.5V7.75H8V13H9.5V1H8V6.25H2.5Z"/>
  </svg>
);

const aDSTextHeadingFiveIconDefinition = svgToIconDefinition(
  aDSTextHeadingFiveSvg,
  'ads-text-heading-five'
);

/**![ADSTextHeadingFive](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDguNUgxMi4yNUMxMS44MzYgOC41IDExLjUgOC44MzYgMTEuNSA5LjI1VjEyLjI1QzExLjUgMTIuNjY0IDExLjgzNiAxMyAxMi4yNSAxM0gxNC41VjE0LjVIMTEuNVYxNkgxNC42MjVDMTUuMzg0IDE2IDE2IDE1LjM4NCAxNiAxNC42MjVWMTIuODc1QzE2IDEyLjExNiAxNS4zODQgMTEuNSAxNC42MjUgMTEuNUgxM1YxMEgxNlY4LjVaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjUgNi4yNVYxSDFWMTNIMi41VjcuNzVIOFYxM0g5LjVWMUg4VjYuMjVIMi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextHeadingFiveIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextHeadingFive';
}

export default RefIcon;
