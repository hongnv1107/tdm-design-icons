// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHardwareDisposeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 10V3C1 1.895 1.895 1 3 1H8V2.5H3C2.724 2.5 2.5 2.724 2.5 3V10C2.5 10.276 2.724 10.5 3 10.5H13C13.276 10.5 13.5 10.276 13.5 10V8H15V10C15 11.105 14.105 12 13 12H8.75V13.5H12V15H4V13.5H7.25V12H3C1.895 12 1 11.105 1 10Z"/><path d="M15.78 1.279L14.061 2.999L15.78 4.719L14.72 5.779L13 4.06L11.28 5.779L10.22 4.719L11.94 2.999L10.22 1.279L11.28 0.219L13 1.938L14.72 0.219L15.78 1.279Z"/>
  </svg>
);

const aDSHardwareDisposeIconDefinition = svgToIconDefinition(
  aDSHardwareDisposeSvg,
  'ads-hardware-dispose'
);

/**![ADSHardwareDispose](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xIDEwVjNDMSAxLjg5NSAxLjg5NSAxIDMgMUg4VjIuNUgzQzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWMTBDMi41IDEwLjI3NiAyLjcyNCAxMC41IDMgMTAuNUgxM0MxMy4yNzYgMTAuNSAxMy41IDEwLjI3NiAxMy41IDEwVjhIMTVWMTBDMTUgMTEuMTA1IDE0LjEwNSAxMiAxMyAxMkg4Ljc1VjEzLjVIMTJWMTVINFYxMy41SDcuMjVWMTJIM0MxLjg5NSAxMiAxIDExLjEwNSAxIDEwWiIvPjxwYXRoIGQ9Ik0xNS43OCAxLjI3OUwxNC4wNjEgMi45OTlMMTUuNzggNC43MTlMMTQuNzIgNS43NzlMMTMgNC4wNkwxMS4yOCA1Ljc3OUwxMC4yMiA0LjcxOUwxMS45NCAyLjk5OUwxMC4yMiAxLjI3OUwxMS4yOCAwLjIxOUwxMyAxLjkzOEwxNC43MiAwLjIxOUwxNS43OCAxLjI3OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHardwareDisposeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHardwareDispose';
}

export default RefIcon;
