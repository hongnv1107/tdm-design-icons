// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFlagFilledSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1.75C2 1.336 2.336 1 2.75 1H14C14.284 1 14.544 1.161 14.671 1.415C14.798 1.669 14.77 1.973 14.6 2.2L11.938 5.75L14.6 9.3C14.77 9.527 14.798 9.831 14.671 10.085C14.544 10.34 14.284 10.5 14 10.5H3.5V15H2V1.75Z"/>
  </svg>
);

const aDSFlagFilledIconDefinition = svgToIconDefinition(
  aDSFlagFilledSvg,
  'ads-flag-filled'
);

/**![ADSFlagFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMS43NUMyIDEuMzM2IDIuMzM2IDEgMi43NSAxSDE0QzE0LjI4NCAxIDE0LjU0NCAxLjE2MSAxNC42NzEgMS40MTVDMTQuNzk4IDEuNjY5IDE0Ljc3IDEuOTczIDE0LjYgMi4yTDExLjkzOCA1Ljc1TDE0LjYgOS4zQzE0Ljc3IDkuNTI3IDE0Ljc5OCA5LjgzMSAxNC42NzEgMTAuMDg1QzE0LjU0NCAxMC4zNCAxNC4yODQgMTAuNSAxNCAxMC41SDMuNVYxNUgyVjEuNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFlagFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFlagFilled';
}

export default RefIcon;
