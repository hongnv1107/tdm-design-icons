// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSWorkItemSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 4C14.5 3.758 14.329 3.556 14.101 3.51L14 3.5H2C1.724 3.5 1.5 3.724 1.5 4V12C1.5 12.276 1.724 12.5 2 12.5H14C14.276 12.5 14.5 12.276 14.5 12V4ZM11.573 5.983L7.573 10.733C7.431 10.902 7.221 11 7 11C6.779 11 6.569 10.902 6.427 10.733L4.427 8.358L5.573 7.392L7 9.085L10.427 5.017L11.573 5.983ZM16 12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V4C0 2.895 0.895 2 2 2H14L14.204 2.011C15.213 2.113 16 2.964 16 4V12Z"/>
  </svg>
);

const aDSWorkItemIconDefinition = svgToIconDefinition(
  aDSWorkItemSvg,
  'ads-work-item'
);

/**![ADSWorkItem](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDRDMTQuNSAzLjc1OCAxNC4zMjkgMy41NTYgMTQuMTAxIDMuNTFMMTQgMy41SDJDMS43MjQgMy41IDEuNSAzLjcyNCAxLjUgNFYxMkMxLjUgMTIuMjc2IDEuNzI0IDEyLjUgMiAxMi41SDE0QzE0LjI3NiAxMi41IDE0LjUgMTIuMjc2IDE0LjUgMTJWNFpNMTEuNTczIDUuOTgzTDcuNTczIDEwLjczM0M3LjQzMSAxMC45MDIgNy4yMjEgMTEgNyAxMUM2Ljc3OSAxMSA2LjU2OSAxMC45MDIgNi40MjcgMTAuNzMzTDQuNDI3IDguMzU4TDUuNTczIDcuMzkyTDcgOS4wODVMMTAuNDI3IDUuMDE3TDExLjU3MyA1Ljk4M1pNMTYgMTJDMTYgMTMuMTA1IDE1LjEwNSAxNCAxNCAxNEgyQzAuODk1IDE0IDAgMTMuMTA1IDAgMTJWNEMwIDIuODk1IDAuODk1IDIgMiAySDE0TDE0LjIwNCAyLjAxMUMxNS4yMTMgMi4xMTMgMTYgMi45NjQgMTYgNFYxMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSWorkItemIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSWorkItem';
}

export default RefIcon;
