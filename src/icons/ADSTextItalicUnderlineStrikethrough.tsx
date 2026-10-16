// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextItalicUnderlineStrikethroughSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.51 1H6.44V2.5H8.224L7.756 4.5H9.297L9.765 2.5H11.51V1Z"/><path d="M8.244 9H6.703L6.235 11H4.49V12.5H9.56V11H7.776L8.244 9Z"/><path d="M16 16H0V14.5H16V16Z"/><path d="M15 6H1V7.5H15V6Z"/>
  </svg>
);

const aDSTextItalicUnderlineStrikethroughIconDefinition = svgToIconDefinition(
  aDSTextItalicUnderlineStrikethroughSvg,
  'ads-text-italic-underline-strikethrough'
);

/**![ADSTextItalicUnderlineStrikethrough](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEuNTEgMUg2LjQ0VjIuNUg4LjIyNEw3Ljc1NiA0LjVIOS4yOTdMOS43NjUgMi41SDExLjUxVjFaIi8+PHBhdGggZD0iTTguMjQ0IDlINi43MDNMNi4yMzUgMTFINC40OVYxMi41SDkuNTZWMTFINy43NzZMOC4yNDQgOVoiLz48cGF0aCBkPSJNMTYgMTZIMFYxNC41SDE2VjE2WiIvPjxwYXRoIGQ9Ik0xNSA2SDFWNy41SDE1VjZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextItalicUnderlineStrikethroughIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextItalicUnderlineStrikethrough';
}

export default RefIcon;
