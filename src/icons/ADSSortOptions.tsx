// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSortOptionsSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.22 1.22C4.513 0.927 4.987 0.927 5.28 1.22L8.53 4.47L7.47 5.53L5.5 3.561L5.5 14H4L4 3.561L2.03 5.53L0.97 4.47L4.22 1.22ZM10.5 12.439V2H12V12.439L13.97 10.47L15.03 11.53L11.78 14.78C11.488 15.073 11.013 15.073 10.72 14.78L7.47 11.53L8.53 10.47L10.5 12.439Z"/>
  </svg>
);

const aDSSortOptionsIconDefinition = svgToIconDefinition(
  aDSSortOptionsSvg,
  'ads-sort-options'
);

/**![ADSSortOptions](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC4yMiAxLjIyQzQuNTEzIDAuOTI3IDQuOTg3IDAuOTI3IDUuMjggMS4yMkw4LjUzIDQuNDdMNy40NyA1LjUzTDUuNSAzLjU2MUw1LjUgMTRINEw0IDMuNTYxTDIuMDMgNS41M0wwLjk3IDQuNDdMNC4yMiAxLjIyWk0xMC41IDEyLjQzOVYySDEyVjEyLjQzOUwxMy45NyAxMC40N0wxNS4wMyAxMS41M0wxMS43OCAxNC43OEMxMS40ODggMTUuMDczIDExLjAxMyAxNS4wNzMgMTAuNzIgMTQuNzhMNy40NyAxMS41M0w4LjUzIDEwLjQ3TDEwLjUgMTIuNDM5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSortOptionsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSortOptions';
}

export default RefIcon;
