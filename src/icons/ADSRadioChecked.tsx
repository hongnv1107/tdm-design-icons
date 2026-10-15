// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSRadioCheckedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM8 5C6.343 5 5 6.343 5 8C5 9.657 6.343 11 8 11C9.657 11 11 9.657 11 8C11 6.343 9.657 5 8 5Z"/>
  </svg>
);

const aDSRadioCheckedIconDefinition = svgToIconDefinition(
  aDSRadioCheckedSvg,
  'ads-radio-checked'
);

/**![ADSRadioChecked](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMEMzLjU4MiAwIDAgMy41ODIgMCA4QzAgMTIuNDE4IDMuNTgyIDE2IDggMTZDMTIuNDE4IDE2IDE2IDEyLjQxOCAxNiA4QzE2IDMuNTgyIDEyLjQxOCAwIDggMFpNOCA1QzYuMzQzIDUgNSA2LjM0MyA1IDhDNSA5LjY1NyA2LjM0MyAxMSA4IDExQzkuNjU3IDExIDExIDkuNjU3IDExIDhDMTEgNi4zNDMgOS42NTcgNSA4IDVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSRadioCheckedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSRadioChecked';
}

export default RefIcon;
