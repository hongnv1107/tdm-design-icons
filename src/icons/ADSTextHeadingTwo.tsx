// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextHeadingTwoSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 8.5H14.625C15.384 8.5 16 9.116 16 9.875V11.625C16 12.384 15.384 13 14.625 13H13V14.5H16V16H12.25C11.836 16 11.5 15.664 11.5 15.25V12.875C11.5 12.116 12.116 11.5 12.875 11.5H14.5V10H11.5V8.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6.25V1H1V13H2.5V7.75H8V13H9.5V1H8V6.25H2.5Z"/>
  </svg>
);

const aDSTextHeadingTwoIconDefinition = svgToIconDefinition(
  aDSTextHeadingTwoSvg,
  'ads-text-heading-two'
);

/**![ADSTextHeadingTwo](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjUgOC41SDE0LjYyNUMxNS4zODQgOC41IDE2IDkuMTE2IDE2IDkuODc1VjExLjYyNUMxNiAxMi4zODQgMTUuMzg0IDEzIDE0LjYyNSAxM0gxM1YxNC41SDE2VjE2SDEyLjI1QzExLjgzNiAxNiAxMS41IDE1LjY2NCAxMS41IDE1LjI1VjEyLjg3NUMxMS41IDEyLjExNiAxMi4xMTYgMTEuNSAxMi44NzUgMTEuNUgxNC41VjEwSDExLjVWOC41WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDYuMjVWMUgxVjEzSDIuNVY3Ljc1SDhWMTNIOS41VjFIOFY2LjI1SDIuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextHeadingTwoIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextHeadingTwo';
}

export default RefIcon;
