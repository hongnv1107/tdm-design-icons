// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFieldCheckboxGroupSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 2.75C1 2.336 1.336 2 1.75 2H5.25C5.664 2 6 2.336 6 2.75V6.25C6 6.664 5.664 7 5.25 7H1.75C1.336 7 1 6.664 1 6.25V2.75ZM2.5 3.5V5.5H4.5V3.5H2.5ZM16 5.25H8V3.75H16V5.25ZM1 9.75C1 9.336 1.336 9 1.75 9H5.25C5.664 9 6 9.336 6 9.75V13.25C6 13.664 5.664 14 5.25 14H1.75C1.336 14 1 13.664 1 13.25V9.75ZM2.5 10.5V12.5H4.5V10.5H2.5ZM16 12.25H8V10.75H16V12.25Z"/>
  </svg>
);

const aDSFieldCheckboxGroupIconDefinition = svgToIconDefinition(
  aDSFieldCheckboxGroupSvg,
  'ads-field-checkbox-group'
);

/**![ADSFieldCheckboxGroup](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSAyLjc1QzEgMi4zMzYgMS4zMzYgMiAxLjc1IDJINS4yNUM1LjY2NCAyIDYgMi4zMzYgNiAyLjc1VjYuMjVDNiA2LjY2NCA1LjY2NCA3IDUuMjUgN0gxLjc1QzEuMzM2IDcgMSA2LjY2NCAxIDYuMjVWMi43NVpNMi41IDMuNVY1LjVINC41VjMuNUgyLjVaTTE2IDUuMjVIOFYzLjc1SDE2VjUuMjVaTTEgOS43NUMxIDkuMzM2IDEuMzM2IDkgMS43NSA5SDUuMjVDNS42NjQgOSA2IDkuMzM2IDYgOS43NVYxMy4yNUM2IDEzLjY2NCA1LjY2NCAxNCA1LjI1IDE0SDEuNzVDMS4zMzYgMTQgMSAxMy42NjQgMSAxMy4yNVY5Ljc1Wk0yLjUgMTAuNVYxMi41SDQuNVYxMC41SDIuNVpNMTYgMTIuMjVIOFYxMC43NUgxNlYxMi4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFieldCheckboxGroupIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFieldCheckboxGroup';
}

export default RefIcon;
