// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const expandVerticalFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.4092 4.19337C11.7855 3.91728 12.309 3.93727 12.6641 4.25294L16.6641 7.80861L16.7373 7.87989C17.0802 8.25318 17.0911 8.83274 16.7471 9.21974C16.403 9.60674 15.826 9.6641 15.4151 9.3672L15.336 9.30275L13 7.2256V16.7734L15.336 14.6973C15.7487 14.3304 16.3802 14.3676 16.7471 14.7803C17.114 15.193 17.0768 15.8245 16.6641 16.1914L12.6641 19.7471C12.2852 20.0839 11.7149 20.0839 11.336 19.7471L7.33597 16.1914C6.92324 15.8245 6.88606 15.193 7.25296 14.7803C7.59701 14.3933 8.17409 14.3359 8.58499 14.6328L8.66409 14.6973L11 16.7734V7.2256L8.66409 9.30275C8.25133 9.6696 7.61987 9.63245 7.25296 9.21974C6.88606 8.80697 6.92324 8.17553 7.33597 7.80861L11.336 4.25294L11.4092 4.19337Z"/>
  </svg>
);

const expandVerticalFilledIconDefinition = svgToIconDefinition(
  expandVerticalFilledSvg,
  'expand-vertical-filled'
);

/**![ExpandVerticalFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEuNDA5MiA0LjE5MzM3QzExLjc4NTUgMy45MTcyOCAxMi4zMDkgMy45MzcyNyAxMi42NjQxIDQuMjUyOTRMMTYuNjY0MSA3LjgwODYxTDE2LjczNzMgNy44Nzk4OUMxNy4wODAyIDguMjUzMTggMTcuMDkxMSA4LjgzMjc0IDE2Ljc0NzEgOS4yMTk3NEMxNi40MDMgOS42MDY3NCAxNS44MjYgOS42NjQxIDE1LjQxNTEgOS4zNjcyTDE1LjMzNiA5LjMwMjc1TDEzIDcuMjI1NlYxNi43NzM0TDE1LjMzNiAxNC42OTczQzE1Ljc0ODcgMTQuMzMwNCAxNi4zODAyIDE0LjM2NzYgMTYuNzQ3MSAxNC43ODAzQzE3LjExNCAxNS4xOTMgMTcuMDc2OCAxNS44MjQ1IDE2LjY2NDEgMTYuMTkxNEwxMi42NjQxIDE5Ljc0NzFDMTIuMjg1MiAyMC4wODM5IDExLjcxNDkgMjAuMDgzOSAxMS4zMzYgMTkuNzQ3MUw3LjMzNTk3IDE2LjE5MTRDNi45MjMyNCAxNS44MjQ1IDYuODg2MDYgMTUuMTkzIDcuMjUyOTYgMTQuNzgwM0M3LjU5NzAxIDE0LjM5MzMgOC4xNzQwOSAxNC4zMzU5IDguNTg0OTkgMTQuNjMyOEw4LjY2NDA5IDE0LjY5NzNMMTEgMTYuNzczNFY3LjIyNTZMOC42NjQwOSA5LjMwMjc1QzguMjUxMzMgOS42Njk2IDcuNjE5ODcgOS42MzI0NSA3LjI1Mjk2IDkuMjE5NzRDNi44ODYwNiA4LjgwNjk3IDYuOTIzMjQgOC4xNzU1MyA3LjMzNTk3IDcuODA4NjFMMTEuMzM2IDQuMjUyOTRMMTEuNDA5MiA0LjE5MzM3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={expandVerticalFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ExpandVerticalFilledIcon';
}

export default RefIcon;
