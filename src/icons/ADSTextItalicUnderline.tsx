// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextItalicUnderlineSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSTextItalicUnderline](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDE2TDAgMTZMMCAxNC41TDE2IDE0LjVWMTZaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01Ljc1IDFIMTEuNzVWMi41SDkuNjE1TDcuOTE1IDExSDEwVjEyLjVINC4yNVYxMUg2LjM4NUw4LjA4NSAyLjVINS43NVYxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextItalicUnderlineIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextItalicUnderline';
}

export default RefIcon;
