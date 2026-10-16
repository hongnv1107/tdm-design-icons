// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSReturnSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 8V3H14V8.438C14 9.024 13.524 9.5 12.938 9.5H4.561L7.28 12.22L6.22 13.28L2.22 9.28C1.927 8.987 1.927 8.513 2.22 8.22L6.22 4.22L7.28 5.28L4.561 8H12.5Z"/>
  </svg>
);

const aDSReturnIconDefinition = svgToIconDefinition(
  aDSReturnSvg,
  'ads-return'
);

/**![ADSReturn](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNSA4VjNIMTRWOC40MzhDMTQgOS4wMjQgMTMuNTI0IDkuNSAxMi45MzggOS41SDQuNTYxTDcuMjggMTIuMjJMNi4yMiAxMy4yOEwyLjIyIDkuMjhDMS45MjcgOC45ODcgMS45MjcgOC41MTMgMi4yMiA4LjIyTDYuMjIgNC4yMkw3LjI4IDUuMjhMNC41NjEgOEgxMi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSReturnIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSReturn';
}

export default RefIcon;
