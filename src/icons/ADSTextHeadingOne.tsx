// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextHeadingOneSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6.25V1H1V13H2.5V7.75H8V13H9.5V1H8V6.25H2.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.5H13.75C14.164 8.5 14.5 8.836 14.5 9.25V16H13V10H12V8.5Z"/>
  </svg>
);

const aDSTextHeadingOneIconDefinition = svgToIconDefinition(
  aDSTextHeadingOneSvg,
  'ads-text-heading-one'
);

/**![ADSTextHeadingOne](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuNSA2LjI1VjFIMVYxM0gyLjVWNy43NUg4VjEzSDkuNVYxSDhWNi4yNUgyLjVaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiA4LjVIMTMuNzVDMTQuMTY0IDguNSAxNC41IDguODM2IDE0LjUgOS4yNVYxNkgxM1YxMEgxMlY4LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextHeadingOneIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextHeadingOne';
}

export default RefIcon;
