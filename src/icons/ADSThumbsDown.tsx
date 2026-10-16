// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSThumbsDownSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.293 13.406C7.537 13.616 7.913 13.543 8.062 13.257L10.5 8.567V2.5H4.129C3.637 2.5 3.202 2.82 3.055 3.29L1.727 7.54C1.5 8.264 2.042 9 2.801 9H6.25C6.665 9 7 9.336 7 9.75V12.925C7 13.071 7.064 13.21 7.175 13.305L7.293 13.406ZM12 2.5V8H14C14.276 8 14.5 7.777 14.5 7.5V3C14.5 2.724 14.276 2.5 14 2.5H12ZM11.706 9.5L9.392 13.949C8.798 15.092 7.294 15.383 6.316 14.545L6.199 14.444C5.755 14.064 5.5 13.509 5.5 12.925V10.5H2.801C1.03 10.5 -0.233 8.783 0.295 7.092L1.623 2.842C1.966 1.747 2.981 1 4.129 1H14C15.105 1 16 1.896 16 3V7.5C16 8.605 15.105 9.5 14 9.5H11.706Z"/>
  </svg>
);

const aDSThumbsDownIconDefinition = svgToIconDefinition(
  aDSThumbsDownSvg,
  'ads-thumbs-down'
);

/**![ADSThumbsDown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjkzIDEzLjQwNkM3LjUzNyAxMy42MTYgNy45MTMgMTMuNTQzIDguMDYyIDEzLjI1N0wxMC41IDguNTY3VjIuNUg0LjEyOUMzLjYzNyAyLjUgMy4yMDIgMi44MiAzLjA1NSAzLjI5TDEuNzI3IDcuNTRDMS41IDguMjY0IDIuMDQyIDkgMi44MDEgOUg2LjI1QzYuNjY1IDkgNyA5LjMzNiA3IDkuNzVWMTIuOTI1QzcgMTMuMDcxIDcuMDY0IDEzLjIxIDcuMTc1IDEzLjMwNUw3LjI5MyAxMy40MDZaTTEyIDIuNVY4SDE0QzE0LjI3NiA4IDE0LjUgNy43NzcgMTQuNSA3LjVWM0MxNC41IDIuNzI0IDE0LjI3NiAyLjUgMTQgMi41SDEyWk0xMS43MDYgOS41TDkuMzkyIDEzLjk0OUM4Ljc5OCAxNS4wOTIgNy4yOTQgMTUuMzgzIDYuMzE2IDE0LjU0NUw2LjE5OSAxNC40NDRDNS43NTUgMTQuMDY0IDUuNSAxMy41MDkgNS41IDEyLjkyNVYxMC41SDIuODAxQzEuMDMgMTAuNSAtMC4yMzMgOC43ODMgMC4yOTUgNy4wOTJMMS42MjMgMi44NDJDMS45NjYgMS43NDcgMi45ODEgMSA0LjEyOSAxSDE0QzE1LjEwNSAxIDE2IDEuODk2IDE2IDNWNy41QzE2IDguNjA1IDE1LjEwNSA5LjUgMTQgOS41SDExLjcwNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSThumbsDownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSThumbsDown';
}

export default RefIcon;
