// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const sCCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#FFDA44" d="M20.1 3.146A11.955 11.955 0 0 0 12 0c-.511 0-1.015.032-1.51.094L4.696 6.782.38 15.006a11.925 11.925 0 0 0 1.256 3.043L12 11.998l8.1-8.853Z"/><path fill="#6DA544" d="m21.99 18.648-16.789 3.24A11.944 11.944 0 0 0 12 24c4.168 0 7.84-2.126 9.99-5.352Z"/><path fill="#D80027" d="M20.102 3.148 1.642 18.06a12.045 12.045 0 0 0 1.72 2.268L24 12c0-3.504-1.502-6.658-3.898-8.852Z"/><path fill="#0052B4" d="M0 12a12 12 0 0 0 .38 3.005L10.49.095C4.577.836 0 5.884 0 12Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const sCCircleIconDefinition = svgToIconDefinition(
  sCCircleSvg,
  'sccircle'
);

/**![SCCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0yMC4xIDMuMTQ2QTExLjk1NSAxMS45NTUgMCAwIDAgMTIgMGMtLjUxMSAwLTEuMDE1LjAzMi0xLjUxLjA5NEw0LjY5NiA2Ljc4Mi4zOCAxNS4wMDZhMTEuOTI1IDExLjkyNSAwIDAgMCAxLjI1NiAzLjA0M0wxMiAxMS45OThsOC4xLTguODUzWiIvPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Im0yMS45OSAxOC42NDgtMTYuNzg5IDMuMjRBMTEuOTQ0IDExLjk0NCAwIDAgMCAxMiAyNGM0LjE2OCAwIDcuODQtMi4xMjYgOS45OS01LjM1MloiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMjAuMTAyIDMuMTQ4IDEuNjQyIDE4LjA2YTEyLjA0NSAxMi4wNDUgMCAwIDAgMS43MiAyLjI2OEwyNCAxMmMwLTMuNTA0LTEuNTAyLTYuNjU4LTMuODk4LTguODUyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0wIDEyYTEyIDEyIDAgMCAwIC4zOCAzLjAwNUwxMC40OS4wOTVDNC41NzcuODM2IDAgNS44ODQgMCAxMloiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={sCCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SCCircleIcon';
}

export default RefIcon;
