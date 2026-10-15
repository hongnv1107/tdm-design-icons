// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSmartLinkInlineSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C1.724 6.5 1.5 6.724 1.5 7V9C1.5 9.276 1.724 9.5 2 9.5H4.5V6.5H2ZM6 6.5V9.5H14C14.276 9.5 14.5 9.276 14.5 9V7C14.5 6.724 14.276 6.5 14 6.5H6ZM0 7C0 5.895 0.895 5 2 5H14C15.105 5 16 5.895 16 7V9C16 10.105 15.105 11 14 11H2C0.895 11 0 10.105 0 9V7Z"/>
  </svg>
);

const aDSSmartLinkInlineIconDefinition = svgToIconDefinition(
  aDSSmartLinkInlineSvg,
  'ads-smart-link-inline'
);

/**![ADSSmartLinkInline](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgNi41QzEuNzI0IDYuNSAxLjUgNi43MjQgMS41IDdWOUMxLjUgOS4yNzYgMS43MjQgOS41IDIgOS41SDQuNVY2LjVIMlpNNiA2LjVWOS41SDE0QzE0LjI3NiA5LjUgMTQuNSA5LjI3NiAxNC41IDlWN0MxNC41IDYuNzI0IDE0LjI3NiA2LjUgMTQgNi41SDZaTTAgN0MwIDUuODk1IDAuODk1IDUgMiA1SDE0QzE1LjEwNSA1IDE2IDUuODk1IDE2IDdWOUMxNiAxMC4xMDUgMTUuMTA1IDExIDE0IDExSDJDMC44OTUgMTEgMCAxMC4xMDUgMCA5VjdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSmartLinkInlineIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSmartLinkInline';
}

export default RefIcon;
