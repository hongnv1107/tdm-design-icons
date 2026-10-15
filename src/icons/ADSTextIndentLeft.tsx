// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextIndentLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5L1 2.5L1 1L15 1L15 2.5ZM2.811 8L5.03 5.78L3.97 4.72L1.22 7.47C0.927 7.763 0.927 8.237 1.22 8.53L3.97 11.28L5.03 10.22L2.811 8ZM15 6.667L8 6.667L8 5.167L15 5.167L15 6.667ZM15 10.833L8 10.833L8 9.333L15 9.333L15 10.833ZM15 15L1 15L1 13.5L15 13.5L15 15Z"/>
  </svg>
);

const aDSTextIndentLeftIconDefinition = svgToIconDefinition(
  aDSTextIndentLeftSvg,
  'ads-text-indent-left'
);

/**![ADSTextIndentLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDIuNUwxIDIuNUwxIDFMMTUgMUwxNSAyLjVaTTIuODExIDhMNS4wMyA1Ljc4TDMuOTcgNC43MkwxLjIyIDcuNDdDMC45MjcgNy43NjMgMC45MjcgOC4yMzcgMS4yMiA4LjUzTDMuOTcgMTEuMjhMNS4wMyAxMC4yMkwyLjgxMSA4Wk0xNSA2LjY2N0w4IDYuNjY3TDggNS4xNjdMMTUgNS4xNjdMMTUgNi42NjdaTTE1IDEwLjgzM0w4IDEwLjgzM0w4IDkuMzMzTDE1IDkuMzMzTDE1IDEwLjgzM1pNMTUgMTVMMSAxNUwxIDEzLjVMMTUgMTMuNUwxNSAxNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextIndentLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextIndentLeft';
}

export default RefIcon;
