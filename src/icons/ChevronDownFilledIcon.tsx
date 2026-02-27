// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronDownFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 8.1729C19.0976 8.56342 19.0976 9.19659 18.7071 9.58711L12.7071 15.5871C12.3166 15.9776 11.6834 15.9776 11.2929 15.5871L5.29289 9.58711C4.90237 9.19659 4.90237 8.56342 5.29289 8.1729C5.68342 7.78237 6.31658 7.78237 6.70711 8.1729L12 13.4658L17.2929 8.1729C17.6834 7.78237 18.3166 7.78237 18.7071 8.1729Z"/>
  </svg>
);

const chevronDownFilledIconDefinition = svgToIconDefinition(
  chevronDownFilledSvg,
  'chevron-down-filled'
);

/**![ChevronDownFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4LjcwNzEgOC4xNzI5QzE5LjA5NzYgOC41NjM0MiAxOS4wOTc2IDkuMTk2NTkgMTguNzA3MSA5LjU4NzExTDEyLjcwNzEgMTUuNTg3MUMxMi4zMTY2IDE1Ljk3NzYgMTEuNjgzNCAxNS45Nzc2IDExLjI5MjkgMTUuNTg3MUw1LjI5Mjg5IDkuNTg3MTFDNC45MDIzNyA5LjE5NjU5IDQuOTAyMzcgOC41NjM0MiA1LjI5Mjg5IDguMTcyOUM1LjY4MzQyIDcuNzgyMzcgNi4zMTY1OCA3Ljc4MjM3IDYuNzA3MTEgOC4xNzI5TDEyIDEzLjQ2NThMMTcuMjkyOSA4LjE3MjlDMTcuNjgzNCA3Ljc4MjM3IDE4LjMxNjYgNy43ODIzNyAxOC43MDcxIDguMTcyOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronDownFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronDownFilledIcon';
}

export default RefIcon;
