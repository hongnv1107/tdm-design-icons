// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929L12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289C10.9024 4.68342 10.9024 5.31658 11.2929 5.70711L16.5858 11L5 11C4.44771 11 4 11.4477 4 12C4 12.5523 4.44771 13 5 13L16.5858 13L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12Z" />
  </svg>
);

const arrowRightIconDefinition = svgToIconDefinition(
  arrowRightSvg,
  'arrow-right'
);

/**![ArrowRightIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsUnVsZT0iZXZlbm9kZCIgY2xpcFJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAxMkMyMCAxMS43MzQ4IDE5Ljg5NDYgMTEuNDgwNCAxOS43MDcxIDExLjI5MjlMMTIuNzA3MSA0LjI5Mjg5QzEyLjMxNjYgMy45MDIzNyAxMS42ODM0IDMuOTAyMzcgMTEuMjkyOSA0LjI5Mjg5QzEwLjkwMjQgNC42ODM0MiAxMC45MDI0IDUuMzE2NTggMTEuMjkyOSA1LjcwNzExTDE2LjU4NTggMTFMNSAxMUM0LjQ0NzcxIDExIDQgMTEuNDQ3NyA0IDEyQzQgMTIuNTUyMyA0LjQ0NzcxIDEzIDUgMTNMMTYuNTg1OCAxM0wxMS4yOTI5IDE4LjI5MjlDMTAuOTAyNCAxOC42ODM0IDEwLjkwMjQgMTkuMzE2NiAxMS4yOTI5IDE5LjcwNzFDMTEuNjgzNCAyMC4wOTc2IDEyLjMxNjYgMjAuMDk3NiAxMi43MDcxIDE5LjcwNzFMMTkuNzA3MSAxMi43MDcxQzE5Ljg5NDYgMTIuNTE5NiAyMCAxMi4yNjUyIDIwIDEyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowRightIcon';
}

export default RefIcon;
