// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSRadioCheckedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM8 5C6.343 5 5 6.343 5 8C5 9.657 6.343 11 8 11C9.657 11 11 9.657 11 8C11 6.343 9.657 5 8 5Z"/>
  </svg>
);

const aDSRadioCheckedIconDefinition = svgToIconDefinition(
  aDSRadioCheckedSvg,
  'ads-radio-checked'
);

/**![ADSRadioChecked](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAwQzMuNTgyIDAgMCAzLjU4MiAwIDhDMCAxMi40MTggMy41ODIgMTYgOCAxNkMxMi40MTggMTYgMTYgMTIuNDE4IDE2IDhDMTYgMy41ODIgMTIuNDE4IDAgOCAwWk04IDVDNi4zNDMgNSA1IDYuMzQzIDUgOEM1IDkuNjU3IDYuMzQzIDExIDggMTFDOS42NTcgMTEgMTEgOS42NTcgMTEgOEMxMSA2LjM0MyA5LjY1NyA1IDggNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSRadioCheckedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSRadioChecked';
}

export default RefIcon;
