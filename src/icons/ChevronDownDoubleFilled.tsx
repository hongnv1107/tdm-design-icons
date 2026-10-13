// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronDownDoubleFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.7837 0.502108C22.4114 1.12974 22.4501 2.12233 21.9009 2.79566L21.7837 2.92624L13.2122 11.4978C12.5427 12.1672 11.4576 12.1672 10.7881 11.4978L2.21657 2.92624C1.54709 2.25676 1.54709 1.17159 2.21657 0.502108C2.88605 -0.167369 3.97123 -0.167369 4.64071 0.502108L12.0002 7.86156L19.3596 0.502108L19.4902 0.384919C20.1635 -0.164259 21.1561 -0.125526 21.7837 0.502108ZM21.7837 12.5022C22.4114 13.1299 22.4501 14.1225 21.9009 14.7958L21.7837 14.9264L13.2122 23.4979C12.5427 24.1674 11.4576 24.1674 10.7881 23.4979L2.21657 14.9264C1.54709 14.2569 1.54709 13.1717 2.21657 12.5022C2.88605 11.8328 3.97123 11.8328 4.64071 12.5022L12.0002 19.8617L19.3596 12.5022L19.4902 12.385C20.1635 11.8359 21.1561 11.8746 21.7837 12.5022Z"/>
  </svg>
);

const chevronDownDoubleFilledIconDefinition = svgToIconDefinition(
  chevronDownDoubleFilledSvg,
  'chevron-down-double-filled'
);

/**![ChevronDownDoubleFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjEuNzgzNyAwLjUwMjEwOEMyMi40MTE0IDEuMTI5NzQgMjIuNDUwMSAyLjEyMjMzIDIxLjkwMDkgMi43OTU2NkwyMS43ODM3IDIuOTI2MjRMMTMuMjEyMiAxMS40OTc4QzEyLjU0MjcgMTIuMTY3MiAxMS40NTc2IDEyLjE2NzIgMTAuNzg4MSAxMS40OTc4TDIuMjE2NTcgMi45MjYyNEMxLjU0NzA5IDIuMjU2NzYgMS41NDcwOSAxLjE3MTU5IDIuMjE2NTcgMC41MDIxMDhDMi44ODYwNSAtMC4xNjczNjkgMy45NzEyMyAtMC4xNjczNjkgNC42NDA3MSAwLjUwMjEwOEwxMi4wMDAyIDcuODYxNTZMMTkuMzU5NiAwLjUwMjEwOEwxOS40OTAyIDAuMzg0OTE5QzIwLjE2MzUgLTAuMTY0MjU5IDIxLjE1NjEgLTAuMTI1NTI2IDIxLjc4MzcgMC41MDIxMDhaTTIxLjc4MzcgMTIuNTAyMkMyMi40MTE0IDEzLjEyOTkgMjIuNDUwMSAxNC4xMjI1IDIxLjkwMDkgMTQuNzk1OEwyMS43ODM3IDE0LjkyNjRMMTMuMjEyMiAyMy40OTc5QzEyLjU0MjcgMjQuMTY3NCAxMS40NTc2IDI0LjE2NzQgMTAuNzg4MSAyMy40OTc5TDIuMjE2NTcgMTQuOTI2NEMxLjU0NzA5IDE0LjI1NjkgMS41NDcwOSAxMy4xNzE3IDIuMjE2NTcgMTIuNTAyMkMyLjg4NjA1IDExLjgzMjggMy45NzEyMyAxMS44MzI4IDQuNjQwNzEgMTIuNTAyMkwxMi4wMDAyIDE5Ljg2MTdMMTkuMzU5NiAxMi41MDIyTDE5LjQ5MDIgMTIuMzg1QzIwLjE2MzUgMTEuODM1OSAyMS4xNTYxIDExLjg3NDYgMjEuNzgzNyAxMi41MDIyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronDownDoubleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronDownDoubleFilled';
}

export default RefIcon;
