// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowRightFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929L12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289C10.9024 4.68342 10.9024 5.31658 11.2929 5.70711L16.5858 11L5 11C4.44771 11 4 11.4477 4 12C4 12.5523 4.44771 13 5 13L16.5858 13L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12Z"/>
  </svg>
);

const arrowRightFilledIconDefinition = svgToIconDefinition(
  arrowRightFilledSvg,
  'arrow-right-filled'
);

/**![ArrowRightFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwIDEyQzIwIDExLjczNDggMTkuODk0NiAxMS40ODA0IDE5LjcwNzEgMTEuMjkyOUwxMi43MDcxIDQuMjkyODlDMTIuMzE2NiAzLjkwMjM3IDExLjY4MzQgMy45MDIzNyAxMS4yOTI5IDQuMjkyODlDMTAuOTAyNCA0LjY4MzQyIDEwLjkwMjQgNS4zMTY1OCAxMS4yOTI5IDUuNzA3MTFMMTYuNTg1OCAxMUw1IDExQzQuNDQ3NzEgMTEgNCAxMS40NDc3IDQgMTJDNCAxMi41NTIzIDQuNDQ3NzEgMTMgNSAxM0wxNi41ODU4IDEzTDExLjI5MjkgMTguMjkyOUMxMC45MDI0IDE4LjY4MzQgMTAuOTAyNCAxOS4zMTY2IDExLjI5MjkgMTkuNzA3MUMxMS42ODM0IDIwLjA5NzYgMTIuMzE2NiAyMC4wOTc2IDEyLjcwNzEgMTkuNzA3MUwxOS43MDcxIDEyLjcwNzFDMTkuODk0NiAxMi41MTk2IDIwIDEyLjI2NTIgMjAgMTJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowRightFilledIcon';
}

export default RefIcon;
