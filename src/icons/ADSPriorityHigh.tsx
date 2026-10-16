// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityHighSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.913 9.25L8.413 5.625C8.163 5.459 7.837 5.459 7.587 5.625L2.087 9.25L2.913 10.502L8 7.149L13.087 10.502L13.913 9.25Z"/>
  </svg>
);

const aDSPriorityHighIconDefinition = svgToIconDefinition(
  aDSPriorityHighSvg,
  'ads-priority-high'
);

/**![ADSPriorityHigh](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuOTEzIDkuMjVMOC40MTMgNS42MjVDOC4xNjMgNS40NTkgNy44MzcgNS40NTkgNy41ODcgNS42MjVMMi4wODcgOS4yNUwyLjkxMyAxMC41MDJMOCA3LjE0OUwxMy4wODcgMTAuNTAyTDEzLjkxMyA5LjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityHighIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityHigh';
}

export default RefIcon;
