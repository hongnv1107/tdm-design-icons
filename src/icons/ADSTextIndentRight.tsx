// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextIndentRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5L1 2.5L1 1L15 1L15 2.5ZM2.03 4.72L4.78 7.47C4.921 7.61 5 7.801 5 8C5 8.199 4.921 8.39 4.78 8.53L2.03 11.28L0.97 10.22L3.189 8L0.97 5.78L2.03 4.72ZM15 6.667L8 6.667L8 5.167L15 5.167L15 6.667ZM15 10.833L8 10.833L8 9.333L15 9.333L15 10.833ZM15 13.5L15 15L1 15L1 13.5L15 13.5Z"/>
  </svg>
);

const aDSTextIndentRightIconDefinition = svgToIconDefinition(
  aDSTextIndentRightSvg,
  'ads-text-indent-right'
);

/**![ADSTextIndentRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDIuNUwxIDIuNUwxIDFMMTUgMUwxNSAyLjVaTTIuMDMgNC43Mkw0Ljc4IDcuNDdDNC45MjEgNy42MSA1IDcuODAxIDUgOEM1IDguMTk5IDQuOTIxIDguMzkgNC43OCA4LjUzTDIuMDMgMTEuMjhMMC45NyAxMC4yMkwzLjE4OSA4TDAuOTcgNS43OEwyLjAzIDQuNzJaTTE1IDYuNjY3TDggNi42NjdMOCA1LjE2N0wxNSA1LjE2N0wxNSA2LjY2N1pNMTUgMTAuODMzTDggMTAuODMzTDggOS4zMzNMMTUgOS4zMzNMMTUgMTAuODMzWk0xNSAxMy41TDE1IDE1TDEgMTVMMSAxMy41TDE1IDEzLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextIndentRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextIndentRight';
}

export default RefIcon;
