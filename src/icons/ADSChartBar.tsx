// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChartBarSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 13V1H2.5V13C2.5 13.276 2.724 13.5 3 13.5H15V15H3C1.895 15 1 14.105 1 13Z"/><path d="M5.25 8.5L5.327 8.504C5.705 8.543 6 8.862 6 9.25V11.75C6 12.164 5.664 12.5 5.25 12.5H4.25C3.836 12.5 3.5 12.164 3.5 11.75V9.25C3.5 8.836 3.836 8.5 4.25 8.5H5.25ZM9.25 5C9.664 5 10 5.336 10 5.75V11.75C10 12.164 9.664 12.5 9.25 12.5H8.25C7.836 12.5 7.5 12.164 7.5 11.75V5.75C7.5 5.336 7.836 5 8.25 5H9.25ZM13.25 2C13.664 2 14 2.336 14 2.75V11.75C14 12.164 13.664 12.5 13.25 12.5H12.25C11.836 12.5 11.5 12.164 11.5 11.75V2.75C11.5 2.336 11.836 2 12.25 2H13.25Z"/>
  </svg>
);

const aDSChartBarIconDefinition = svgToIconDefinition(
  aDSChartBarSvg,
  'ads-chart-bar'
);

/**![ADSChartBar](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xIDEzVjFIMi41VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTVWMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzWiIvPjxwYXRoIGQ9Ik01LjI1IDguNUw1LjMyNyA4LjUwNEM1LjcwNSA4LjU0MyA2IDguODYyIDYgOS4yNVYxMS43NUM2IDEyLjE2NCA1LjY2NCAxMi41IDUuMjUgMTIuNUg0LjI1QzMuODM2IDEyLjUgMy41IDEyLjE2NCAzLjUgMTEuNzVWOS4yNUMzLjUgOC44MzYgMy44MzYgOC41IDQuMjUgOC41SDUuMjVaTTkuMjUgNUM5LjY2NCA1IDEwIDUuMzM2IDEwIDUuNzVWMTEuNzVDMTAgMTIuMTY0IDkuNjY0IDEyLjUgOS4yNSAxMi41SDguMjVDNy44MzYgMTIuNSA3LjUgMTIuMTY0IDcuNSAxMS43NVY1Ljc1QzcuNSA1LjMzNiA3LjgzNiA1IDguMjUgNUg5LjI1Wk0xMy4yNSAyQzEzLjY2NCAyIDE0IDIuMzM2IDE0IDIuNzVWMTEuNzVDMTQgMTIuMTY0IDEzLjY2NCAxMi41IDEzLjI1IDEyLjVIMTIuMjVDMTEuODM2IDEyLjUgMTEuNSAxMi4xNjQgMTEuNSAxMS43NVYyLjc1QzExLjUgMi4zMzYgMTEuODM2IDIgMTIuMjUgMkgxMy4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChartBarIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChartBar';
}

export default RefIcon;
