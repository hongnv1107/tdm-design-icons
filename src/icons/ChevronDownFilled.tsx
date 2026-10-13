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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4979 5.64499C24.1674 6.31446 24.1674 7.39988 23.4979 8.06935L13.2122 18.3551C12.5427 19.0245 11.4573 19.0245 10.7878 18.3551L0.502102 8.06935C-0.16737 7.39988 -0.16737 6.31446 0.502102 5.64499C1.17157 4.97552 2.257 4.97552 2.92647 5.64499L12 14.7185L21.0735 5.64499C21.743 4.97552 22.8284 4.97552 23.4979 5.64499Z"/>
  </svg>
);

const chevronDownFilledIconDefinition = svgToIconDefinition(
  chevronDownFilledSvg,
  'chevron-down-filled'
);

/**![ChevronDownFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIzLjQ5NzkgNS42NDQ5OUMyNC4xNjc0IDYuMzE0NDYgMjQuMTY3NCA3LjM5OTg4IDIzLjQ5NzkgOC4wNjkzNUwxMy4yMTIyIDE4LjM1NTFDMTIuNTQyNyAxOS4wMjQ1IDExLjQ1NzMgMTkuMDI0NSAxMC43ODc4IDE4LjM1NTFMMC41MDIxMDIgOC4wNjkzNUMtMC4xNjczNyA3LjM5OTg4IC0wLjE2NzM3IDYuMzE0NDYgMC41MDIxMDIgNS42NDQ5OUMxLjE3MTU3IDQuOTc1NTIgMi4yNTcgNC45NzU1MiAyLjkyNjQ3IDUuNjQ0OTlMMTIgMTQuNzE4NUwyMS4wNzM1IDUuNjQ0OTlDMjEuNzQzIDQuOTc1NTIgMjIuODI4NCA0Ljk3NTUyIDIzLjQ5NzkgNS42NDQ5OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronDownFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronDownFilled';
}

export default RefIcon;
