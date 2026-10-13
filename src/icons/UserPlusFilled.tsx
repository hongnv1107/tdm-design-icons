// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const userPlusFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 14.6667C19.6819 14.6667 22.6667 17.6514 22.6667 21.3333V22.6667C22.6667 23.403 22.0698 24 21.3334 24H2.66671C1.93033 24 1.33337 23.403 1.33337 22.6667V21.3333C1.33337 17.6514 4.31814 14.6667 8.00004 14.6667H16Z"/><path d="M18 6C18 9.31371 15.3137 12 12 12C8.68633 12 6.00004 9.31371 6.00004 6C6.00004 2.68629 8.68633 0 12 0C15.3137 0 18 2.68629 18 6Z"/>
  </svg>
);

const userPlusFilledIconDefinition = svgToIconDefinition(
  userPlusFilledSvg,
  'user-plus-filled'
);

/**![UserPlusFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDE0LjY2NjdDMTkuNjgxOSAxNC42NjY3IDIyLjY2NjcgMTcuNjUxNCAyMi42NjY3IDIxLjMzMzNWMjIuNjY2N0MyMi42NjY3IDIzLjQwMyAyMi4wNjk4IDI0IDIxLjMzMzQgMjRIMi42NjY3MUMxLjkzMDMzIDI0IDEuMzMzMzcgMjMuNDAzIDEuMzMzMzcgMjIuNjY2N1YyMS4zMzMzQzEuMzMzMzcgMTcuNjUxNCA0LjMxODE0IDE0LjY2NjcgOC4wMDAwNCAxNC42NjY3SDE2WiIvPjxwYXRoIGQ9Ik0xOCA2QzE4IDkuMzEzNzEgMTUuMzEzNyAxMiAxMiAxMkM4LjY4NjMzIDEyIDYuMDAwMDQgOS4zMTM3MSA2LjAwMDA0IDZDNi4wMDAwNCAyLjY4NjI5IDguNjg2MzMgMCAxMiAwQzE1LjMxMzcgMCAxOCAyLjY4NjI5IDE4IDZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={userPlusFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UserPlusFilled';
}

export default RefIcon;
