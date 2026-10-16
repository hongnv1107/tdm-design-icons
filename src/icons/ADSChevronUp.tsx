// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChevronUpSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.53 9.97L8.53 3.97C8.256 3.695 7.821 3.678 7.526 3.918L7.47 3.97L1.47 9.97L2.53 11.03L8 5.561L13.47 11.03L14.53 9.97Z"/>
  </svg>
);

const aDSChevronUpIconDefinition = svgToIconDefinition(
  aDSChevronUpSvg,
  'ads-chevron-up'
);

/**![ADSChevronUp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNTMgOS45N0w4LjUzIDMuOTdDOC4yNTYgMy42OTUgNy44MjEgMy42NzggNy41MjYgMy45MThMNy40NyAzLjk3TDEuNDcgOS45N0wyLjUzIDExLjAzTDggNS41NjFMMTMuNDcgMTEuMDNMMTQuNTMgOS45N1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChevronUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChevronUp';
}

export default RefIcon;
