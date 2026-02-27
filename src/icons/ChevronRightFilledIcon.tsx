// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronRightFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289Z"/>
  </svg>
);

const chevronRightFilledIconDefinition = svgToIconDefinition(
  chevronRightFilledSvg,
  'chevron-right-filled'
);

/**![ChevronRightFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMjkyODkgNS4yOTI4OUM5LjY4MzQyIDQuOTAyMzcgMTAuMzE2NiA0LjkwMjM3IDEwLjcwNzEgNS4yOTI4OUwxNi43MDcxIDExLjI5MjlDMTcuMDk3NiAxMS42ODM0IDE3LjA5NzYgMTIuMzE2NiAxNi43MDcxIDEyLjcwNzFMMTAuNzA3MSAxOC43MDcxQzEwLjMxNjYgMTkuMDk3NiA5LjY4MzQyIDE5LjA5NzYgOS4yOTI4OSAxOC43MDcxQzguOTAyMzcgMTguMzE2NiA4LjkwMjM3IDE3LjY4MzQgOS4yOTI4OSAxNy4yOTI5TDE0LjU4NTggMTJMOS4yOTI4OSA2LjcwNzExQzguOTAyMzcgNi4zMTY1OCA4LjkwMjM3IDUuNjgzNDIgOS4yOTI4OSA1LjI5Mjg5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronRightFilledIcon';
}

export default RefIcon;
