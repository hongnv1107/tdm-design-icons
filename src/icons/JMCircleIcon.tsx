// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const jMCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#FFDA44" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#6DA544" d="M19.306 2.48A11.946 11.946 0 0 0 12 0C9.25 0 6.718.925 4.694 2.48L12 9.788l7.306-7.306Z"/><path fill="#000" d="M2.48 4.694A11.948 11.948 0 0 0 0 12c0 2.75.925 5.282 2.48 7.305L9.786 12 2.48 4.694Z"/><path fill="#6DA544" d="M4.694 21.519A11.948 11.948 0 0 0 12 24c2.75 0 5.282-.926 7.306-2.481L12 14.213l-7.306 7.306Z"/><path fill="#000" d="M21.52 19.305A11.944 11.944 0 0 0 24 12c0-2.75-.925-5.283-2.48-7.306l-7.306 7.305 7.305 7.306Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const jMCircleIconDefinition = svgToIconDefinition(
  jMCircleSvg,
  'jmcircle'
);

/**![JMCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0xOS4zMDYgMi40OEExMS45NDYgMTEuOTQ2IDAgMCAwIDEyIDBDOS4yNSAwIDYuNzE4LjkyNSA0LjY5NCAyLjQ4TDEyIDkuNzg4bDcuMzA2LTcuMzA2WiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yLjQ4IDQuNjk0QTExLjk0OCAxMS45NDggMCAwIDAgMCAxMmMwIDIuNzUuOTI1IDUuMjgyIDIuNDggNy4zMDVMOS43ODYgMTIgMi40OCA0LjY5NFoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNNC42OTQgMjEuNTE5QTExLjk0OCAxMS45NDggMCAwIDAgMTIgMjRjMi43NSAwIDUuMjgyLS45MjYgNy4zMDYtMi40ODFMMTIgMTQuMjEzbC03LjMwNiA3LjMwNloiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjEuNTIgMTkuMzA1QTExLjk0NCAxMS45NDQgMCAwIDAgMjQgMTJjMC0yLjc1LS45MjUtNS4yODMtMi40OC03LjMwNmwtNy4zMDYgNy4zMDUgNy4zMDUgNy4zMDZaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={jMCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'JMCircleIcon';
}

export default RefIcon;
