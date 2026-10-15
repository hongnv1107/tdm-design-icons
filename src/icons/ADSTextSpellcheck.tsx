// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextSpellcheckSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.67 0.494C4.777 0.198 5.059 0 5.375 0H6.125C6.441 0 6.723 0.198 6.83 0.494L10.455 10.494C10.485 10.576 10.5 10.663 10.5 10.75V11H9.06L9.045 11.006L9.043 11H9V10.882L7.955 8H3.545L2.5 10.882V11H2.457L2.455 11.006L2.44 11H1V10.75C1 10.663 1.015 10.576 1.045 10.494L4.67 0.494ZM4.088 6.5H7.412L5.75 1.916L4.088 6.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.928 9.265L15.072 10.235L10.405 15.735C10.263 15.903 10.054 16 9.833 16C9.613 16 9.404 15.903 9.261 15.735L6.928 12.985L8.072 12.015L9.833 14.091L13.928 9.265Z"/>
  </svg>
);

const aDSTextSpellcheckIconDefinition = svgToIconDefinition(
  aDSTextSpellcheckSvg,
  'ads-text-spellcheck'
);

/**![ADSTextSpellcheck](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuNjcgMC40OTRDNC43NzcgMC4xOTggNS4wNTkgMCA1LjM3NSAwSDYuMTI1QzYuNDQxIDAgNi43MjMgMC4xOTggNi44MyAwLjQ5NEwxMC40NTUgMTAuNDk0QzEwLjQ4NSAxMC41NzYgMTAuNSAxMC42NjMgMTAuNSAxMC43NVYxMUg5LjA2TDkuMDQ1IDExLjAwNkw5LjA0MyAxMUg5VjEwLjg4Mkw3Ljk1NSA4SDMuNTQ1TDIuNSAxMC44ODJWMTFIMi40NTdMMi40NTUgMTEuMDA2TDIuNDQgMTFIMVYxMC43NUMxIDEwLjY2MyAxLjAxNSAxMC41NzYgMS4wNDUgMTAuNDk0TDQuNjcgMC40OTRaTTQuMDg4IDYuNUg3LjQxMkw1Ljc1IDEuOTE2TDQuMDg4IDYuNVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjkyOCA5LjI2NUwxNS4wNzIgMTAuMjM1TDEwLjQwNSAxNS43MzVDMTAuMjYzIDE1LjkwMyAxMC4wNTQgMTYgOS44MzMgMTZDOS42MTMgMTYgOS40MDQgMTUuOTAzIDkuMjYxIDE1LjczNUw2LjkyOCAxMi45ODVMOC4wNzIgMTIuMDE1TDkuODMzIDE0LjA5MUwxMy45MjggOS4yNjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextSpellcheckIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextSpellcheck';
}

export default RefIcon;
