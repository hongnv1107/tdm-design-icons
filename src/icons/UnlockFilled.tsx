// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const unlockFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 4.00003C16.125 4.00003 14.6667 5.50003 14.6667 7.33336V9.33336H16C17.4583 9.33336 18.6667 10.5417 18.6667 12V20C18.6667 21.5 17.4583 22.6667 16 22.6667H2.66667C1.16667 22.6667 0 21.5 0 20V12C0 10.5417 1.16667 9.33336 2.66667 9.33336H12V7.33336C12 4.0417 14.6667 1.33336 18 1.33336C21.2917 1.33336 24 4.0417 24 7.33336V9.33336C24 10.0834 23.375 10.6667 22.6667 10.6667C21.9167 10.6667 21.3333 10.0834 21.3333 9.33336V7.33336C21.3333 5.50003 19.8333 4.00003 18 4.00003ZM10.6667 17.3334C11.375 17.3334 12 16.75 12 16C12 15.2917 11.375 14.6667 10.6667 14.6667H8C7.25 14.6667 6.66667 15.2917 6.66667 16C6.66667 16.75 7.25 17.3334 8 17.3334H10.6667Z"/>
  </svg>
);

const unlockFilledIconDefinition = svgToIconDefinition(
  unlockFilledSvg,
  'unlock-filled'
);

/**![UnlockFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTggNC4wMDAwM0MxNi4xMjUgNC4wMDAwMyAxNC42NjY3IDUuNTAwMDMgMTQuNjY2NyA3LjMzMzM2VjkuMzMzMzZIMTZDMTcuNDU4MyA5LjMzMzM2IDE4LjY2NjcgMTAuNTQxNyAxOC42NjY3IDEyVjIwQzE4LjY2NjcgMjEuNSAxNy40NTgzIDIyLjY2NjcgMTYgMjIuNjY2N0gyLjY2NjY3QzEuMTY2NjcgMjIuNjY2NyAwIDIxLjUgMCAyMFYxMkMwIDEwLjU0MTcgMS4xNjY2NyA5LjMzMzM2IDIuNjY2NjcgOS4zMzMzNkgxMlY3LjMzMzM2QzEyIDQuMDQxNyAxNC42NjY3IDEuMzMzMzYgMTggMS4zMzMzNkMyMS4yOTE3IDEuMzMzMzYgMjQgNC4wNDE3IDI0IDcuMzMzMzZWOS4zMzMzNkMyNCAxMC4wODM0IDIzLjM3NSAxMC42NjY3IDIyLjY2NjcgMTAuNjY2N0MyMS45MTY3IDEwLjY2NjcgMjEuMzMzMyAxMC4wODM0IDIxLjMzMzMgOS4zMzMzNlY3LjMzMzM2QzIxLjMzMzMgNS41MDAwMyAxOS44MzMzIDQuMDAwMDMgMTggNC4wMDAwM1pNMTAuNjY2NyAxNy4zMzM0QzExLjM3NSAxNy4zMzM0IDEyIDE2Ljc1IDEyIDE2QzEyIDE1LjI5MTcgMTEuMzc1IDE0LjY2NjcgMTAuNjY2NyAxNC42NjY3SDhDNy4yNSAxNC42NjY3IDYuNjY2NjcgMTUuMjkxNyA2LjY2NjY3IDE2QzYuNjY2NjcgMTYuNzUgNy4yNSAxNy4zMzM0IDggMTcuMzMzNEgxMC42NjY3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={unlockFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UnlockFilled';
}

export default RefIcon;
