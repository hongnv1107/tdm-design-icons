// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAlignTextCenterSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5L4 3.5V2L12 2V3.5ZM15 8.75H1L1 7.25H15V8.75ZM12 14H4L4 12.5H12V14Z"/>
  </svg>
);

const aDSAlignTextCenterIconDefinition = svgToIconDefinition(
  aDSAlignTextCenterSvg,
  'ads-align-text-center'
);

/**![ADSAlignTextCenter](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDMuNUw0IDMuNVYyTDEyIDJWMy41Wk0xNSA4Ljc1SDFMMSA3LjI1SDE1VjguNzVaTTEyIDE0SDRMNCAxMi41SDEyVjE0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAlignTextCenterIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAlignTextCenter';
}

export default RefIcon;
