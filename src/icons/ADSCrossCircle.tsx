// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCrossCircleSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM12.03 5.03L9.061 8L12.03 10.97L10.97 12.03L8 9.061L5.03 12.03L3.97 10.97L6.939 8L3.97 5.03L5.03 3.97L8 6.939L10.97 3.97L12.03 5.03Z"/>
  </svg>
);

const aDSCrossCircleIconDefinition = svgToIconDefinition(
  aDSCrossCircleSvg,
  'ads-cross-circle'
);

/**![ADSCrossCircle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMEMzLjU4MiAwIDAgMy41ODIgMCA4QzAgMTIuNDE4IDMuNTgyIDE2IDggMTZDMTIuNDE4IDE2IDE2IDEyLjQxOCAxNiA4QzE2IDMuNTgyIDEyLjQxOCAwIDggMFpNMTIuMDMgNS4wM0w5LjA2MSA4TDEyLjAzIDEwLjk3TDEwLjk3IDEyLjAzTDggOS4wNjFMNS4wMyAxMi4wM0wzLjk3IDEwLjk3TDYuOTM5IDhMMy45NyA1LjAzTDUuMDMgMy45N0w4IDYuOTM5TDEwLjk3IDMuOTdMMTIuMDMgNS4wM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCrossCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCrossCircle';
}

export default RefIcon;
