// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHashtagSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.274 5L6.012 0.868L7.488 1.132L6.798 5H10.274L11.012 0.868L12.488 1.132L11.798 5H15V6.5H11.53L10.994 9.5H14V11H10.726L9.988 15.132L8.512 14.868L9.202 11H5.726L4.988 15.132L3.512 14.868L4.202 11H1V9.5H4.47L5.006 6.5H2V5H5.274ZM6.53 6.5L5.994 9.5H9.47L10.006 6.5H6.53Z"/>
  </svg>
);

const aDSHashtagIconDefinition = svgToIconDefinition(
  aDSHashtagSvg,
  'ads-hashtag'
);

/**![ADSHashtag](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjc0IDVMNi4wMTIgMC44NjhMNy40ODggMS4xMzJMNi43OTggNUgxMC4yNzRMMTEuMDEyIDAuODY4TDEyLjQ4OCAxLjEzMkwxMS43OTggNUgxNVY2LjVIMTEuNTNMMTAuOTk0IDkuNUgxNFYxMUgxMC43MjZMOS45ODggMTUuMTMyTDguNTEyIDE0Ljg2OEw5LjIwMiAxMUg1LjcyNkw0Ljk4OCAxNS4xMzJMMy41MTIgMTQuODY4TDQuMjAyIDExSDFWOS41SDQuNDdMNS4wMDYgNi41SDJWNUg1LjI3NFpNNi41MyA2LjVMNS45OTQgOS41SDkuNDdMMTAuMDA2IDYuNUg2LjUzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHashtagIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHashtag';
}

export default RefIcon;
