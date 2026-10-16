// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextItalicUnderlineSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 16L0 16L0 14.5L16 14.5V16Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 1H11.75V2.5H9.615L7.915 11H10V12.5H4.25V11H6.385L8.085 2.5H5.75V1Z"/>
  </svg>
);

const aDSTextItalicUnderlineIconDefinition = svgToIconDefinition(
  aDSTextItalicUnderlineSvg,
  'ads-text-italic-underline'
);

/**![ADSTextItalicUnderline](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYgMTZMMCAxNkwwIDE0LjVMMTYgMTQuNVYxNloiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNzUgMUgxMS43NVYyLjVIOS42MTVMNy45MTUgMTFIMTBWMTIuNUg0LjI1VjExSDYuMzg1TDguMDg1IDIuNUg1Ljc1VjFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextItalicUnderlineIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextItalicUnderline';
}

export default RefIcon;
