// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextHeadingFourSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 12V8.5H11V12.125C11 12.884 11.616 13.5 12.375 13.5H14.5V16H16V8.5H14.5V12H12.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6.25V1H1V13H2.5V7.75H8V13H9.5V1H8V6.25H2.5Z"/>
  </svg>
);

const aDSTextHeadingFourIconDefinition = svgToIconDefinition(
  aDSTextHeadingFourSvg,
  'ads-text-heading-four'
);

/**![ADSTextHeadingFour](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjUgMTJWOC41SDExVjEyLjEyNUMxMSAxMi44ODQgMTEuNjE2IDEzLjUgMTIuMzc1IDEzLjVIMTQuNVYxNkgxNlY4LjVIMTQuNVYxMkgxMi41WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDYuMjVWMUgxVjEzSDIuNVY3Ljc1SDhWMTNIOS41VjFIOFY2LjI1SDIuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextHeadingFourIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextHeadingFour';
}

export default RefIcon;
