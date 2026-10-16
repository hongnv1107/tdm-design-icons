// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSBooleanSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 5.791 12.709 4 10.5 4H5.5C3.291 4 1.5 5.791 1.5 8C1.5 10.209 3.291 12 5.5 12H10.5C12.709 12 14.5 10.209 14.5 8ZM16 8C16 11.038 13.538 13.5 10.5 13.5H5.5C2.462 13.5 0 11.038 0 8C0 4.962 2.462 2.5 5.5 2.5H10.5C13.538 2.5 16 4.962 16 8Z"/><path d="M5.5 5.25C7.019 5.25 8.25 6.481 8.25 8C8.25 9.519 7.019 10.75 5.5 10.75C3.981 10.75 2.75 9.519 2.75 8C2.75 6.481 3.981 5.25 5.5 5.25Z"/>
  </svg>
);

const aDSBooleanIconDefinition = svgToIconDefinition(
  aDSBooleanSvg,
  'ads-boolean'
);

/**![ADSBoolean](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDhDMTQuNSA1Ljc5MSAxMi43MDkgNCAxMC41IDRINS41QzMuMjkxIDQgMS41IDUuNzkxIDEuNSA4QzEuNSAxMC4yMDkgMy4yOTEgMTIgNS41IDEySDEwLjVDMTIuNzA5IDEyIDE0LjUgMTAuMjA5IDE0LjUgOFpNMTYgOEMxNiAxMS4wMzggMTMuNTM4IDEzLjUgMTAuNSAxMy41SDUuNUMyLjQ2MiAxMy41IDAgMTEuMDM4IDAgOEMwIDQuOTYyIDIuNDYyIDIuNSA1LjUgMi41SDEwLjVDMTMuNTM4IDIuNSAxNiA0Ljk2MiAxNiA4WiIvPjxwYXRoIGQ9Ik01LjUgNS4yNUM3LjAxOSA1LjI1IDguMjUgNi40ODEgOC4yNSA4QzguMjUgOS41MTkgNy4wMTkgMTAuNzUgNS41IDEwLjc1QzMuOTgxIDEwLjc1IDIuNzUgOS41MTkgMi43NSA4QzIuNzUgNi40ODEgMy45ODEgNS4yNSA1LjUgNS4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSBooleanIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSBoolean';
}

export default RefIcon;
