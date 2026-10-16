// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAccessibilitySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.5C7.586 2.5 7.25 2.836 7.25 3.25C7.25 3.664 7.586 4 8 4C8.414 4 8.75 3.664 8.75 3.25C8.75 2.836 8.414 2.5 8 2.5ZM5.75 3.25C5.75 2.007 6.757 1 8 1C9.243 1 10.25 2.007 10.25 3.25C10.25 4.493 9.243 5.5 8 5.5C6.757 5.5 5.75 4.493 5.75 3.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.768 8H2V6.5H14V8H9.232L12.416 14.155L11.084 14.845L8 8.882L4.916 14.845L3.584 14.155L6.768 8Z"/>
  </svg>
);

const aDSAccessibilityIconDefinition = svgToIconDefinition(
  aDSAccessibilitySvg,
  'ads-accessibility'
);

/**![ADSAccessibility](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAyLjVDNy41ODYgMi41IDcuMjUgMi44MzYgNy4yNSAzLjI1QzcuMjUgMy42NjQgNy41ODYgNCA4IDRDOC40MTQgNCA4Ljc1IDMuNjY0IDguNzUgMy4yNUM4Ljc1IDIuODM2IDguNDE0IDIuNSA4IDIuNVpNNS43NSAzLjI1QzUuNzUgMi4wMDcgNi43NTcgMSA4IDFDOS4yNDMgMSAxMC4yNSAyLjAwNyAxMC4yNSAzLjI1QzEwLjI1IDQuNDkzIDkuMjQzIDUuNSA4IDUuNUM2Ljc1NyA1LjUgNS43NSA0LjQ5MyA1Ljc1IDMuMjVaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02Ljc2OCA4SDJWNi41SDE0VjhIOS4yMzJMMTIuNDE2IDE0LjE1NUwxMS4wODQgMTQuODQ1TDggOC44ODJMNC45MTYgMTQuODQ1TDMuNTg0IDE0LjE1NUw2Ljc2OCA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAccessibilityIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAccessibility';
}

export default RefIcon;
