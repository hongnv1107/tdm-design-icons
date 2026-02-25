// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronDownSingleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289Z" />
  </svg>
);

const chevronDownSingleIconDefinition = svgToIconDefinition(
  chevronDownSingleSvg,
  'chevron-down-single'
);

/**![ChevronDownSingleIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsUnVsZT0iZXZlbm9kZCIgY2xpcFJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC43MDcxIDkuMjkyODlDMTkuMDk3NiA5LjY4MzQyIDE5LjA5NzYgMTAuMzE2NiAxOC43MDcxIDEwLjcwNzFMMTIuNzA3MSAxNi43MDcxQzEyLjMxNjYgMTcuMDk3NiAxMS42ODM0IDE3LjA5NzYgMTEuMjkyOSAxNi43MDcxTDUuMjkyODkgMTAuNzA3MUM0LjkwMjM3IDEwLjMxNjYgNC45MDIzNyA5LjY4MzQyIDUuMjkyODkgOS4yOTI4OUM1LjY4MzQyIDguOTAyMzcgNi4zMTY1OCA4LjkwMjM3IDYuNzA3MTEgOS4yOTI4OUwxMiAxNC41ODU4TDE3LjI5MjkgOS4yOTI4OUMxNy42ODM0IDguOTAyMzcgMTguMzE2NiA4LjkwMjM3IDE4LjcwNzEgOS4yOTI4OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronDownSingleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronDownSingleIcon';
}

export default RefIcon;
