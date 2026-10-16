// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextItalicUnderlineStrikethroughSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSTextItalicUnderlineStrikethrough](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMS41MSAxSDYuNDRWMi41SDguMjI0TDcuNzU2IDQuNUg5LjI5N0w5Ljc2NSAyLjVIMTEuNTFWMVoiLz48cGF0aCBkPSJNOC4yNDQgOUg2LjcwM0w2LjIzNSAxMUg0LjQ5VjEyLjVIOS41NlYxMUg3Ljc3Nkw4LjI0NCA5WiIvPjxwYXRoIGQ9Ik0xNiAxNkgwVjE0LjVIMTZWMTZaIi8+PHBhdGggZD0iTTE1IDZIMVY3LjVIMTVWNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextItalicUnderlineStrikethroughIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextItalicUnderlineStrikethrough';
}

export default RefIcon;
