// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronRightSingleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289Z" />
  </svg>
);

const chevronRightSingleIconDefinition = svgToIconDefinition(
  chevronRightSingleSvg,
  'chevron-right-single'
);

/**![ChevronRightSingleIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsUnVsZT0iZXZlbm9kZCIgY2xpcFJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjI5Mjg5IDUuMjkyODlDOS42ODM0MiA0LjkwMjM3IDEwLjMxNjYgNC45MDIzNyAxMC43MDcxIDUuMjkyODlMMTYuNzA3MSAxMS4yOTI5QzE3LjA5NzYgMTEuNjgzNCAxNy4wOTc2IDEyLjMxNjYgMTYuNzA3MSAxMi43MDcxTDEwLjcwNzEgMTguNzA3MUMxMC4zMTY2IDE5LjA5NzYgOS42ODM0MiAxOS4wOTc2IDkuMjkyODkgMTguNzA3MUM4LjkwMjM3IDE4LjMxNjYgOC45MDIzNyAxNy42ODM0IDkuMjkyODkgMTcuMjkyOUwxNC41ODU4IDEyTDkuMjkyODkgNi43MDcxMUM4LjkwMjM3IDYuMzE2NTggOC45MDIzNyA1LjY4MzQyIDkuMjkyODkgNS4yOTI4OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronRightSingleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronRightSingleIcon';
}

export default RefIcon;
