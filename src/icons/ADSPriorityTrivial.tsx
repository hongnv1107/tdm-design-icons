// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityTrivialSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="7.25" stroke="currentColor" stroke-width="1.5" fill="none"/>
  </svg>
);

const aDSPriorityTrivialIconDefinition = svgToIconDefinition(
  aDSPriorityTrivialSvg,
  'ads-priority-trivial'
);

/**![ADSPriorityTrivial](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNy4yNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityTrivialIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityTrivial';
}

export default RefIcon;
