// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPersonSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C6.619 1.5 5.5 2.619 5.5 4C5.5 5.381 6.619 6.5 8 6.5C9.381 6.5 10.5 5.381 10.5 4C10.5 2.619 9.381 1.5 8 1.5ZM4 4C4 1.791 5.791 0 8 0C10.209 0 12 1.791 12 4C12 6.209 10.209 8 8 8C5.791 8 4 6.209 4 4ZM2 13C2 10.929 3.679 9.25 5.75 9.25H10.25C12.321 9.25 14 10.929 14 13V15H12.5V13C12.5 11.757 11.493 10.75 10.25 10.75H5.75C4.507 10.75 3.5 11.757 3.5 13V15H2V13Z"/>
  </svg>
);

const aDSPersonIconDefinition = svgToIconDefinition(
  aDSPersonSvg,
  'ads-person'
);

/**![ADSPerson](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMS41QzYuNjE5IDEuNSA1LjUgMi42MTkgNS41IDRDNS41IDUuMzgxIDYuNjE5IDYuNSA4IDYuNUM5LjM4MSA2LjUgMTAuNSA1LjM4MSAxMC41IDRDMTAuNSAyLjYxOSA5LjM4MSAxLjUgOCAxLjVaTTQgNEM0IDEuNzkxIDUuNzkxIDAgOCAwQzEwLjIwOSAwIDEyIDEuNzkxIDEyIDRDMTIgNi4yMDkgMTAuMjA5IDggOCA4QzUuNzkxIDggNCA2LjIwOSA0IDRaTTIgMTNDMiAxMC45MjkgMy42NzkgOS4yNSA1Ljc1IDkuMjVIMTAuMjVDMTIuMzIxIDkuMjUgMTQgMTAuOTI5IDE0IDEzVjE1SDEyLjVWMTNDMTIuNSAxMS43NTcgMTEuNDkzIDEwLjc1IDEwLjI1IDEwLjc1SDUuNzVDNC41MDcgMTAuNzUgMy41IDExLjc1NyAzLjUgMTNWMTVIMlYxM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPersonIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPerson';
}

export default RefIcon;
