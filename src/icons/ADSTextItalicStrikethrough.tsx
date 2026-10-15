// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextItalicStrikethroughSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 1H12.5V2.5H10.091L9.311 5.75H7.769L8.549 2.5H6V1Z"/><path d="M6.689 10.25H8.231L7.451 13.5H10V15H3.5V13.5H5.909L6.689 10.25Z"/><path d="M15 7.25H1V8.75H15V7.25Z"/>
  </svg>
);

const aDSTextItalicStrikethroughIconDefinition = svgToIconDefinition(
  aDSTextItalicStrikethroughSvg,
  'ads-text-italic-strikethrough'
);

/**![ADSTextItalicStrikethrough](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNiAxSDEyLjVWMi41SDEwLjA5MUw5LjMxMSA1Ljc1SDcuNzY5TDguNTQ5IDIuNUg2VjFaIi8+PHBhdGggZD0iTTYuNjg5IDEwLjI1SDguMjMxTDcuNDUxIDEzLjVIMTBWMTVIMy41VjEzLjVINS45MDlMNi42ODkgMTAuMjVaIi8+PHBhdGggZD0iTTE1IDcuMjVIMVY4Ljc1SDE1VjcuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextItalicStrikethroughIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextItalicStrikethrough';
}

export default RefIcon;
