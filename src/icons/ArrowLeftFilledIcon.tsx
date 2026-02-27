// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowLeftFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L7.41421 11L19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13L7.41421 13L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12Z"/>
  </svg>
);

const arrowLeftFilledIconDefinition = svgToIconDefinition(
  arrowLeftFilledSvg,
  'arrow-left-filled'
);

/**![ArrowLeftFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQgMTJDNCAxMS43MzQ4IDQuMTA1MzYgMTEuNDgwNCA0LjI5Mjg5IDExLjI5MjlMMTEuMjkyOSA0LjI5Mjg5QzExLjY4MzQgMy45MDIzNyAxMi4zMTY2IDMuOTAyMzcgMTIuNzA3MSA0LjI5Mjg5QzEzLjA5NzYgNC42ODM0MiAxMy4wOTc2IDUuMzE2NTggMTIuNzA3MSA1LjcwNzExTDcuNDE0MjEgMTFMMTkgMTFDMTkuNTUyMyAxMSAyMCAxMS40NDc3IDIwIDEyQzIwIDEyLjU1MjMgMTkuNTUyMyAxMyAxOSAxM0w3LjQxNDIxIDEzTDEyLjcwNzEgMTguMjkyOUMxMy4wOTc2IDE4LjY4MzQgMTMuMDk3NiAxOS4zMTY2IDEyLjcwNzEgMTkuNzA3MUMxMi4zMTY2IDIwLjA5NzYgMTEuNjgzNCAyMC4wOTc2IDExLjI5MjkgMTkuNzA3MUw0LjI5Mjg5IDEyLjcwNzFDNC4xMDUzNiAxMi41MTk2IDQgMTIuMjY1MiA0IDEyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowLeftFilledIcon';
}

export default RefIcon;
