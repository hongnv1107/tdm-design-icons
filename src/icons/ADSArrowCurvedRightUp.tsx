// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowCurvedRightUpSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 13.5C7.657 13.5 9 12.157 9 10.5V3.561L5.78 6.78L4.72 5.72L9.22 1.22C9.36 1.079 9.551 1 9.75 1C9.949 1 10.14 1.079 10.28 1.22L14.78 5.72L13.72 6.78L10.5 3.561V10.5C10.5 12.985 8.485 15 6 15H1L1 13.5H6Z"/>
  </svg>
);

const aDSArrowCurvedRightUpIconDefinition = svgToIconDefinition(
  aDSArrowCurvedRightUpSvg,
  'ads-arrow-curved-right-up'
);

/**![ADSArrowCurvedRightUp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik02IDEzLjVDNy42NTcgMTMuNSA5IDEyLjE1NyA5IDEwLjVWMy41NjFMNS43OCA2Ljc4TDQuNzIgNS43Mkw5LjIyIDEuMjJDOS4zNiAxLjA3OSA5LjU1MSAxIDkuNzUgMUM5Ljk0OSAxIDEwLjE0IDEuMDc5IDEwLjI4IDEuMjJMMTQuNzggNS43MkwxMy43MiA2Ljc4TDEwLjUgMy41NjFWMTAuNUMxMC41IDEyLjk4NSA4LjQ4NSAxNSA2IDE1SDFMMSAxMy41SDZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowCurvedRightUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowCurvedRightUp';
}

export default RefIcon;
