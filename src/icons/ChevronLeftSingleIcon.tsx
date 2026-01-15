// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const chevronLeftSingleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071C15.0976 18.3166 15.0976 17.6834 14.7071 17.2929L9.41421 12L14.7071 6.70711C15.0976 6.31658 15.0976 5.68342 14.7071 5.29289Z" />
  </svg>
);

const chevronLeftSingleIconDefinition = svgToIconDefinition(
  chevronLeftSingleSvg,
  'chevron-left-single'
);

/**![ChevronLeftSingleIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsUnVsZT0iZXZlbm9kZCIgY2xpcFJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43MDcxIDUuMjkyODlDMTQuMzE2NiA0LjkwMjM3IDEzLjY4MzQgNC45MDIzNyAxMy4yOTI5IDUuMjkyODlMNy4yOTI4OSAxMS4yOTI5QzYuOTAyMzcgMTEuNjgzNCA2LjkwMjM3IDEyLjMxNjYgNy4yOTI4OSAxMi43MDcxTDEzLjI5MjkgMTguNzA3MUMxMy42ODM0IDE5LjA5NzYgMTQuMzE2NiAxOS4wOTc2IDE0LjcwNzEgMTguNzA3MUMxNS4wOTc2IDE4LjMxNjYgMTUuMDk3NiAxNy42ODM0IDE0LjcwNzEgMTcuMjkyOUw5LjQxNDIxIDEyTDE0LjcwNzEgNi43MDcxMUMxNS4wOTc2IDYuMzE2NTggMTUuMDk3NiA1LjY4MzQyIDE0LjcwNzEgNS4yOTI4OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={chevronLeftSingleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronLeftSingleIcon';
}

export default RefIcon;
