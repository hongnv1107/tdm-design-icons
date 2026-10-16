// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSExpandHorizontalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.5 1V15H0V1H1.5ZM16 1V15H14.5V1H16ZM14.28 7.47C14.573 7.763 14.573 8.237 14.28 8.53L11.03 11.78L9.97 10.72L11.94 8.75H4.061L6.03 10.72L4.97 11.78L1.72 8.53C1.427 8.237 1.427 7.763 1.72 7.47L4.97 4.22L6.03 5.28L4.061 7.25H11.94L9.97 5.28L11.03 4.22L14.28 7.47Z"/>
  </svg>
);

const aDSExpandHorizontalIconDefinition = svgToIconDefinition(
  aDSExpandHorizontalSvg,
  'ads-expand-horizontal'
);

/**![ADSExpandHorizontal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xLjUgMVYxNUgwVjFIMS41Wk0xNiAxVjE1SDE0LjVWMUgxNlpNMTQuMjggNy40N0MxNC41NzMgNy43NjMgMTQuNTczIDguMjM3IDE0LjI4IDguNTNMMTEuMDMgMTEuNzhMOS45NyAxMC43MkwxMS45NCA4Ljc1SDQuMDYxTDYuMDMgMTAuNzJMNC45NyAxMS43OEwxLjcyIDguNTNDMS40MjcgOC4yMzcgMS40MjcgNy43NjMgMS43MiA3LjQ3TDQuOTcgNC4yMkw2LjAzIDUuMjhMNC4wNjEgNy4yNUgxMS45NEw5Ljk3IDUuMjhMMTEuMDMgNC4yMkwxNC4yOCA3LjQ3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSExpandHorizontalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSExpandHorizontal';
}

export default RefIcon;
