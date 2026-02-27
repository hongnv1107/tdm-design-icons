// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const tTCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M6.498 1.332a11.993 11.993 0 0 0-2.983 2.182c-.901.9-1.628 1.909-2.182 2.983l7.716 8.454 8.454 7.716a11.993 11.993 0 0 0 2.983-2.182c.9-.9 1.627-1.909 2.182-2.983l-7.716-8.454-8.454-7.716Z"/><path fill="#000" d="M20.486 20.485a12.07 12.07 0 0 0 1.347-1.603L5.118 2.167A12.06 12.06 0 0 0 2.167 5.12l16.715 16.715a12.16 12.16 0 0 0 1.604-1.349Z"/><path fill="#D80027" d="M3.514 20.487c3.786 3.786 9.472 4.512 13.988 2.181L1.332 6.498C-.997 11.016-.27 16.702 3.515 20.488ZM20.485 3.515C16.7-.271 11.015-1 6.498 1.332l16.17 16.17c2.33-4.516 1.603-10.201-2.183-13.987Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const tTCircleIconDefinition = svgToIconDefinition(
  tTCircleSvg,
  'ttcircle'
);

/**![TTCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik02LjQ5OCAxLjMzMmExMS45OTMgMTEuOTkzIDAgMCAwLTIuOTgzIDIuMTgyYy0uOTAxLjktMS42MjggMS45MDktMi4xODIgMi45ODNsNy43MTYgOC40NTQgOC40NTQgNy43MTZhMTEuOTkzIDExLjk5MyAwIDAgMCAyLjk4My0yLjE4MmMuOS0uOSAxLjYyNy0xLjkwOSAyLjE4Mi0yLjk4M2wtNy43MTYtOC40NTQtOC40NTQtNy43MTZaIi8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTIwLjQ4NiAyMC40ODVhMTIuMDcgMTIuMDcgMCAwIDAgMS4zNDctMS42MDNMNS4xMTggMi4xNjdBMTIuMDYgMTIuMDYgMCAwIDAgMi4xNjcgNS4xMmwxNi43MTUgMTYuNzE1YTEyLjE2IDEyLjE2IDAgMCAwIDEuNjA0LTEuMzQ5WiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0zLjUxNCAyMC40ODdjMy43ODYgMy43ODYgOS40NzIgNC41MTIgMTMuOTg4IDIuMTgxTDEuMzMyIDYuNDk4Qy0uOTk3IDExLjAxNi0uMjcgMTYuNzAyIDMuNTE1IDIwLjQ4OFpNMjAuNDg1IDMuNTE1QzE2LjctLjI3MSAxMS4wMTUtMSA2LjQ5OCAxLjMzMmwxNi4xNyAxNi4xN2MyLjMzLTQuNTE2IDEuNjAzLTEwLjIwMS0yLjE4My0xMy45ODdaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={tTCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TTCircleIcon';
}

export default RefIcon;
