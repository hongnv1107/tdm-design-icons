// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextItalicSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1H12.5V2.5H10.091L7.451 13.5H10V15H3.5V13.5H5.909L8.549 2.5H6V1Z"/>
  </svg>
);

const aDSTextItalicIconDefinition = svgToIconDefinition(
  aDSTextItalicSvg,
  'ads-text-italic'
);

/**![ADSTextItalic](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgMUgxMi41VjIuNUgxMC4wOTFMNy40NTEgMTMuNUgxMFYxNUgzLjVWMTMuNUg1LjkwOUw4LjU0OSAyLjVINlYxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextItalicIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextItalic';
}

export default RefIcon;
