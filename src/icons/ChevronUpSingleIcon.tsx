// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronUpSingleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M18.7071 14.7071C19.0976 14.3166 19.0976 13.6834 18.7071 13.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L5.29289 13.2929C4.90237 13.6834 4.90237 14.3166 5.29289 14.7071C5.68342 15.0976 6.31658 15.0976 6.70711 14.7071L12 9.41421L17.2929 14.7071C17.6834 15.0976 18.3166 15.0976 18.7071 14.7071Z" />
  </svg>
);

const chevronUpSingleIconDefinition = svgToIconDefinition(
  chevronUpSingleSvg,
  'chevron-up-single'
);

/**![ChevronUpSingleIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsUnVsZT0iZXZlbm9kZCIgY2xpcFJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC43MDcxIDE0LjcwNzFDMTkuMDk3NiAxNC4zMTY2IDE5LjA5NzYgMTMuNjgzNCAxOC43MDcxIDEzLjI5MjlMMTIuNzA3MSA3LjI5Mjg5QzEyLjMxNjYgNi45MDIzNyAxMS42ODM0IDYuOTAyMzcgMTEuMjkyOSA3LjI5Mjg5TDUuMjkyODkgMTMuMjkyOUM0LjkwMjM3IDEzLjY4MzQgNC45MDIzNyAxNC4zMTY2IDUuMjkyODkgMTQuNzA3MUM1LjY4MzQyIDE1LjA5NzYgNi4zMTY1OCAxNS4wOTc2IDYuNzA3MTEgMTQuNzA3MUwxMiA5LjQxNDIxTDE3LjI5MjkgMTQuNzA3MUMxNy42ODM0IDE1LjA5NzYgMTguMzE2NiAxNS4wOTc2IDE4LjcwNzEgMTQuNzA3MVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronUpSingleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronUpSingleIcon';
}

export default RefIcon;
