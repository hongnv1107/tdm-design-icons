// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHashtagSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSHashtag](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS4yNzQgNUw2LjAxMiAwLjg2OEw3LjQ4OCAxLjEzMkw2Ljc5OCA1SDEwLjI3NEwxMS4wMTIgMC44NjhMMTIuNDg4IDEuMTMyTDExLjc5OCA1SDE1VjYuNUgxMS41M0wxMC45OTQgOS41SDE0VjExSDEwLjcyNkw5Ljk4OCAxNS4xMzJMOC41MTIgMTQuODY4TDkuMjAyIDExSDUuNzI2TDQuOTg4IDE1LjEzMkwzLjUxMiAxNC44NjhMNC4yMDIgMTFIMVY5LjVINC40N0w1LjAwNiA2LjVIMlY1SDUuMjc0Wk02LjUzIDYuNUw1Ljk5NCA5LjVIOS40N0wxMC4wMDYgNi41SDYuNTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHashtagIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHashtag';
}

export default RefIcon;
