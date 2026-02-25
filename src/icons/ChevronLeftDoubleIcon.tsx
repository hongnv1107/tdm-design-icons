// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronLeftDoubleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.7071 6.29298C18.341 5.92686 17.762 5.90427 17.3692 6.22462L17.293 6.29298L12.293 11.293C11.9025 11.6835 11.9025 12.3165 12.293 12.707L17.293 17.707C17.6836 18.0976 18.3166 18.0976 18.7071 17.707C19.0976 17.3165 19.0976 16.6835 18.7071 16.293L14.4141 12L18.7071 7.70704L18.7755 7.63087C19.0958 7.2381 19.0732 6.65909 18.7071 6.29298ZM11.7071 6.29298C11.341 5.92686 10.762 5.90427 10.3692 6.22462L10.293 6.29298L5.29304 11.293C4.90252 11.6835 4.90252 12.3165 5.29304 12.707L10.293 17.707C10.6836 18.0976 11.3166 18.0976 11.7071 17.707C12.0976 17.3165 12.0976 16.6835 11.7071 16.293L7.41414 12L11.7071 7.70704L11.7755 7.63087C12.0958 7.2381 12.0732 6.65909 11.7071 6.29298Z" />
  </svg>
);

const chevronLeftDoubleIconDefinition = svgToIconDefinition(
  chevronLeftDoubleSvg,
  'chevron-left-double'
);

/**![ChevronLeftDoubleIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTguNzA3MSA2LjI5Mjk4QzE4LjM0MSA1LjkyNjg2IDE3Ljc2MiA1LjkwNDI3IDE3LjM2OTIgNi4yMjQ2MkwxNy4yOTMgNi4yOTI5OEwxMi4yOTMgMTEuMjkzQzExLjkwMjUgMTEuNjgzNSAxMS45MDI1IDEyLjMxNjUgMTIuMjkzIDEyLjcwN0wxNy4yOTMgMTcuNzA3QzE3LjY4MzYgMTguMDk3NiAxOC4zMTY2IDE4LjA5NzYgMTguNzA3MSAxNy43MDdDMTkuMDk3NiAxNy4zMTY1IDE5LjA5NzYgMTYuNjgzNSAxOC43MDcxIDE2LjI5M0wxNC40MTQxIDEyTDE4LjcwNzEgNy43MDcwNEwxOC43NzU1IDcuNjMwODdDMTkuMDk1OCA3LjIzODEgMTkuMDczMiA2LjY1OTA5IDE4LjcwNzEgNi4yOTI5OFpNMTEuNzA3MSA2LjI5Mjk4QzExLjM0MSA1LjkyNjg2IDEwLjc2MiA1LjkwNDI3IDEwLjM2OTIgNi4yMjQ2MkwxMC4yOTMgNi4yOTI5OEw1LjI5MzA0IDExLjI5M0M0LjkwMjUyIDExLjY4MzUgNC45MDI1MiAxMi4zMTY1IDUuMjkzMDQgMTIuNzA3TDEwLjI5MyAxNy43MDdDMTAuNjgzNiAxOC4wOTc2IDExLjMxNjYgMTguMDk3NiAxMS43MDcxIDE3LjcwN0MxMi4wOTc2IDE3LjMxNjUgMTIuMDk3NiAxNi42ODM1IDExLjcwNzEgMTYuMjkzTDcuNDE0MTQgMTJMMTEuNzA3MSA3LjcwNzA0TDExLjc3NTUgNy42MzA4N0MxMi4wOTU4IDcuMjM4MSAxMi4wNzMyIDYuNjU5MDkgMTEuNzA3MSA2LjI5Mjk4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronLeftDoubleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronLeftDoubleIcon';
}

export default RefIcon;
