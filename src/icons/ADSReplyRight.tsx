// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSReplyRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.22 2.279L13.44 5.499H8.5C3.806 5.499 0 9.305 0 13.999H1.5C1.5 10.133 4.634 6.999 8.5 6.999H13.44L10.22 10.219L11.28 11.279L15.78 6.779C15.921 6.639 16 6.448 16 6.249C16 6.05 15.921 5.859 15.78 5.719L11.28 1.219L10.22 2.279Z"/>
  </svg>
);

const aDSReplyRightIconDefinition = svgToIconDefinition(
  aDSReplyRightSvg,
  'ads-reply-right'
);

/**![ADSReplyRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMC4yMiAyLjI3OUwxMy40NCA1LjQ5OUg4LjVDMy44MDYgNS40OTkgMCA5LjMwNSAwIDEzLjk5OUgxLjVDMS41IDEwLjEzMyA0LjYzNCA2Ljk5OSA4LjUgNi45OTlIMTMuNDRMMTAuMjIgMTAuMjE5TDExLjI4IDExLjI3OUwxNS43OCA2Ljc3OUMxNS45MjEgNi42MzkgMTYgNi40NDggMTYgNi4yNDlDMTYgNi4wNSAxNS45MjEgNS44NTkgMTUuNzggNS43MTlMMTEuMjggMS4yMTlMMTAuMjIgMi4yNzlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSReplyRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSReplyRight';
}

export default RefIcon;
