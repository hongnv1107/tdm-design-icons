// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 1V2.5H6.25V15H4.75V2.5H0V1H11ZM12 13V8H10V6.5H12V4H13.5V6.5H16V8H13.5V13C13.5 13.276 13.724 13.5 14 13.5H16V15H14C12.895 15 12 14.105 12 13Z"/>
  </svg>
);

const aDSTextIconDefinition = svgToIconDefinition(
  aDSTextSvg,
  'ads-text'
);

/**![ADSText](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEgMVYyLjVINi4yNVYxNUg0Ljc1VjIuNUgwVjFIMTFaTTEyIDEzVjhIMTBWNi41SDEyVjRIMTMuNVY2LjVIMTZWOEgxMy41VjEzQzEzLjUgMTMuMjc2IDEzLjcyNCAxMy41IDE0IDEzLjVIMTZWMTVIMTRDMTIuODk1IDE1IDEyIDE0LjEwNSAxMiAxM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSText';
}

export default RefIcon;
