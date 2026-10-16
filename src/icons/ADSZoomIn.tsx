// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSZoomInSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.5C4.515 2.5 2.5 4.515 2.5 7C2.5 9.485 4.515 11.5 7 11.5C8.243 11.5 9.367 10.997 10.182 10.182C10.997 9.367 11.5 8.243 11.5 7C11.5 4.515 9.485 2.5 7 2.5ZM1 7C1 3.686 3.686 1 7 1C10.314 1 13 3.686 13 7C13 8.386 12.529 9.663 11.74 10.679L15.03 13.97L13.97 15.03L10.679 11.74C9.663 12.529 8.386 13 7 13C3.686 13 1 10.314 1 7ZM6.25 7.75V10H7.75V7.75H10V6.25H7.75V4H6.25V6.25H4V7.75H6.25Z"/>
  </svg>
);

const aDSZoomInIconDefinition = svgToIconDefinition(
  aDSZoomInSvg,
  'ads-zoom-in'
);

/**![ADSZoomIn](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNyAyLjVDNC41MTUgMi41IDIuNSA0LjUxNSAyLjUgN0MyLjUgOS40ODUgNC41MTUgMTEuNSA3IDExLjVDOC4yNDMgMTEuNSA5LjM2NyAxMC45OTcgMTAuMTgyIDEwLjE4MkMxMC45OTcgOS4zNjcgMTEuNSA4LjI0MyAxMS41IDdDMTEuNSA0LjUxNSA5LjQ4NSAyLjUgNyAyLjVaTTEgN0MxIDMuNjg2IDMuNjg2IDEgNyAxQzEwLjMxNCAxIDEzIDMuNjg2IDEzIDdDMTMgOC4zODYgMTIuNTI5IDkuNjYzIDExLjc0IDEwLjY3OUwxNS4wMyAxMy45N0wxMy45NyAxNS4wM0wxMC42NzkgMTEuNzRDOS42NjMgMTIuNTI5IDguMzg2IDEzIDcgMTNDMy42ODYgMTMgMSAxMC4zMTQgMSA3Wk02LjI1IDcuNzVWMTBINy43NVY3Ljc1SDEwVjYuMjVINy43NVY0SDYuMjVWNi4yNUg0VjcuNzVINi4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSZoomInIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSZoomIn';
}

export default RefIcon;
