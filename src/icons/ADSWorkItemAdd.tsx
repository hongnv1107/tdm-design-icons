// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSWorkItemAddSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.573 5.983L7.573 10.733C7.431 10.902 7.221 11 7 11C6.779 11 6.569 10.902 6.427 10.733L4.427 8.358L5.573 7.392L7 9.085L10.427 5.017L11.573 5.983ZM14.5 4C14.5 3.758 14.329 3.556 14.101 3.51L14 3.5H2C1.724 3.5 1.5 3.724 1.5 4V12C1.5 12.276 1.724 12.5 2 12.5H7.5V14H2C0.895 14 0 13.105 0 12V4C0 2.895 0.895 2 2 2H14L14.204 2.011C15.213 2.113 16 2.964 16 4V8.5H14.5V4Z"/><path d="M13.5 9.5V12H16V13.5H13.5V16H12V13.5H9.5V12H12V9.5H13.5Z"/>
  </svg>
);

const aDSWorkItemAddIconDefinition = svgToIconDefinition(
  aDSWorkItemAddSvg,
  'ads-work-item-add'
);

/**![ADSWorkItemAdd](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMS41NzMgNS45ODNMNy41NzMgMTAuNzMzQzcuNDMxIDEwLjkwMiA3LjIyMSAxMSA3IDExQzYuNzc5IDExIDYuNTY5IDEwLjkwMiA2LjQyNyAxMC43MzNMNC40MjcgOC4zNThMNS41NzMgNy4zOTJMNyA5LjA4NUwxMC40MjcgNS4wMTdMMTEuNTczIDUuOTgzWk0xNC41IDRDMTQuNSAzLjc1OCAxNC4zMjkgMy41NTYgMTQuMTAxIDMuNTFMMTQgMy41SDJDMS43MjQgMy41IDEuNSAzLjcyNCAxLjUgNFYxMkMxLjUgMTIuMjc2IDEuNzI0IDEyLjUgMiAxMi41SDcuNVYxNEgyQzAuODk1IDE0IDAgMTMuMTA1IDAgMTJWNEMwIDIuODk1IDAuODk1IDIgMiAySDE0TDE0LjIwNCAyLjAxMUMxNS4yMTMgMi4xMTMgMTYgMi45NjQgMTYgNFY4LjVIMTQuNVY0WiIvPjxwYXRoIGQ9Ik0xMy41IDkuNVYxMkgxNlYxMy41SDEzLjVWMTZIMTJWMTMuNUg5LjVWMTJIMTJWOS41SDEzLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSWorkItemAddIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSWorkItemAdd';
}

export default RefIcon;
