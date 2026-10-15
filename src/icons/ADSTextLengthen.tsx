// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextLengthenSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5L1 2.5L1 1L15 1V2.5ZM15 6.667L1 6.667L1 5.167L15 5.167V6.667ZM15 10.833L1 10.833L1 9.333L15 9.333L15 10.833ZM8 15L1 15L1 13.5L8 13.5V15Z"/>
  </svg>
);

const aDSTextLengthenIconDefinition = svgToIconDefinition(
  aDSTextLengthenSvg,
  'ads-text-lengthen'
);

/**![ADSTextLengthen](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDIuNUwxIDIuNUwxIDFMMTUgMVYyLjVaTTE1IDYuNjY3TDEgNi42NjdMMSA1LjE2N0wxNSA1LjE2N1Y2LjY2N1pNMTUgMTAuODMzTDEgMTAuODMzTDEgOS4zMzNMMTUgOS4zMzNMMTUgMTAuODMzWk04IDE1TDEgMTVMMSAxMy41TDggMTMuNVYxNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextLengthenIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextLengthen';
}

export default RefIcon;
