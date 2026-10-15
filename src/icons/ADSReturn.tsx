// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSReturnSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 8V3H14V8.438C14 9.024 13.524 9.5 12.938 9.5H4.561L7.28 12.22L6.22 13.28L2.22 9.28C1.927 8.987 1.927 8.513 2.22 8.22L6.22 4.22L7.28 5.28L4.561 8H12.5Z"/>
  </svg>
);

const aDSReturnIconDefinition = svgToIconDefinition(
  aDSReturnSvg,
  'ads-return'
);

/**![ADSReturn](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjUgOFYzSDE0VjguNDM4QzE0IDkuMDI0IDEzLjUyNCA5LjUgMTIuOTM4IDkuNUg0LjU2MUw3LjI4IDEyLjIyTDYuMjIgMTMuMjhMMi4yMiA5LjI4QzEuOTI3IDguOTg3IDEuOTI3IDguNTEzIDIuMjIgOC4yMkw2LjIyIDQuMjJMNy4yOCA1LjI4TDQuNTYxIDhIMTIuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSReturnIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSReturn';
}

export default RefIcon;
