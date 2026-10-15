// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDataBucketSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 12.5V14H1V12.5H15ZM7 7.25V8.75H1V7.25H7ZM15 7.25V8.75H9V7.25H15ZM3 2V3.5H1V2H3ZM7 2V3.5H5V2H7ZM11 2V3.5H9V2H11ZM15 2V3.5H13V2H15Z"/>
  </svg>
);

const aDSDataBucketIconDefinition = svgToIconDefinition(
  aDSDataBucketSvg,
  'ads-data-bucket'
);

/**![ADSDataBucket](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTUgMTIuNVYxNEgxVjEyLjVIMTVaTTcgNy4yNVY4Ljc1SDFWNy4yNUg3Wk0xNSA3LjI1VjguNzVIOVY3LjI1SDE1Wk0zIDJWMy41SDFWMkgzWk03IDJWMy41SDVWMkg3Wk0xMSAyVjMuNUg5VjJIMTFaTTE1IDJWMy41SDEzVjJIMTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDataBucketIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDataBucket';
}

export default RefIcon;
