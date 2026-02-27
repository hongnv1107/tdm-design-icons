// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const tGCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#FFDA44" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#496E2D" d="M12 0c-.009 0-.522 4.8-.522 4.8h10.123A11.982 11.982 0 0 0 12 0Zm0 24c3.926 0 7.411-1.885 9.6-4.8H2.4A11.98 11.98 0 0 0 12 24ZM23.76 9.6H11.478L12 14.4h11.76a12.05 12.05 0 0 0 0-4.8Z"/><path fill="#D80027" d="M12 14.4V0C5.373 0 0 5.373 0 12c0 .822.083 1.624.24 2.4H12Z"/><path fill="#F0F0F0" d="m6.621 5.738.777 2.392h2.515L7.878 9.608l.777 2.391-2.034-1.478L4.587 12l.777-2.391L3.33 8.13h2.514l.777-2.392Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const tGCircleIconDefinition = svgToIconDefinition(
  tGCircleSvg,
  'tgcircle'
);

/**![TGCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiM0OTZFMkQiIGQ9Ik0xMiAwYy0uMDA5IDAtLjUyMiA0LjgtLjUyMiA0LjhoMTAuMTIzQTExLjk4MiAxMS45ODIgMCAwIDAgMTIgMFptMCAyNGMzLjkyNiAwIDcuNDExLTEuODg1IDkuNi00LjhIMi40QTExLjk4IDExLjk4IDAgMCAwIDEyIDI0Wk0yMy43NiA5LjZIMTEuNDc4TDEyIDE0LjRoMTEuNzZhMTIuMDUgMTIuMDUgMCAwIDAgMC00LjhaIi8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTEyIDE0LjRWMEM1LjM3MyAwIDAgNS4zNzMgMCAxMmMwIC44MjIuMDgzIDEuNjI0LjI0IDIuNEgxMloiLz48cGF0aCBmaWxsPSIjRjBGMEYwIiBkPSJtNi42MjEgNS43MzguNzc3IDIuMzkyaDIuNTE1TDcuODc4IDkuNjA4bC43NzcgMi4zOTEtMi4wMzQtMS40NzhMNC41ODcgMTJsLjc3Ny0yLjM5MUwzLjMzIDguMTNoMi41MTRsLjc3Ny0yLjM5MloiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={tGCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TGCircleIcon';
}

export default RefIcon;
