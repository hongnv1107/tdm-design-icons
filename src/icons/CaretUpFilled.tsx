// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const caretUpFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.7214 5.475L23.3015 15.075C24 15.875 24.1746 16.75 23.8254 17.7C23.3763 18.65 22.6279 19.15 21.58 19.2H2.41996C1.37214 19.15 0.623701 18.65 0.174636 17.7C-0.174636 16.75 0 15.875 0.698545 15.075L10.2786 5.475C10.7775 5.025 11.3514 4.8 12 4.8C12.6486 4.8 13.2225 5.025 13.7214 5.475Z"/>
  </svg>
);

const caretUpFilledIconDefinition = svgToIconDefinition(
  caretUpFilledSvg,
  'caret-up-filled'
);

/**![CaretUpFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNzIxNCA1LjQ3NUwyMy4zMDE1IDE1LjA3NUMyNCAxNS44NzUgMjQuMTc0NiAxNi43NSAyMy44MjU0IDE3LjdDMjMuMzc2MyAxOC42NSAyMi42Mjc5IDE5LjE1IDIxLjU4IDE5LjJIMi40MTk5NkMxLjM3MjE0IDE5LjE1IDAuNjIzNzAxIDE4LjY1IDAuMTc0NjM2IDE3LjdDLTAuMTc0NjM2IDE2Ljc1IDAgMTUuODc1IDAuNjk4NTQ1IDE1LjA3NUwxMC4yNzg2IDUuNDc1QzEwLjc3NzUgNS4wMjUgMTEuMzUxNCA0LjggMTIgNC44QzEyLjY0ODYgNC44IDEzLjIyMjUgNS4wMjUgMTMuNzIxNCA1LjQ3NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={caretUpFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretUpFilled';
}

export default RefIcon;
