// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCompassSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8ZM11.78 4.219C12 4.439 12.061 4.771 11.935 5.054L9.935 9.554C9.86 9.724 9.724 9.86 9.554 9.935L5.054 11.935C4.771 12.061 4.439 12 4.22 11.78C4 11.561 3.938 11.229 4.065 10.945L6.065 6.445C6.14 6.275 6.276 6.14 6.445 6.064L10.945 4.064C11.229 3.938 11.561 4 11.78 4.219ZM6.992 8.052L7.947 9.008L6.227 9.772L6.992 8.052ZM9.008 7.947L8.052 6.992L9.773 6.227L9.008 7.947Z"/>
  </svg>
);

const aDSCompassIconDefinition = svgToIconDefinition(
  aDSCompassSvg,
  'ads-compass'
);

/**![ADSCompass](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxLjVDNC40MSAxLjUgMS41IDQuNDEgMS41IDhDMS41IDExLjU5IDQuNDEgMTQuNSA4IDE0LjVDMTEuNTkgMTQuNSAxNC41IDExLjU5IDE0LjUgOEMxNC41IDQuNDEgMTEuNTkgMS41IDggMS41Wk0wIDhDMCAzLjU4MiAzLjU4MiAwIDggMEMxMi40MTggMCAxNiAzLjU4MiAxNiA4QzE2IDEyLjQxOCAxMi40MTggMTYgOCAxNkMzLjU4MiAxNiAwIDEyLjQxOCAwIDhaTTExLjc4IDQuMjE5QzEyIDQuNDM5IDEyLjA2MSA0Ljc3MSAxMS45MzUgNS4wNTRMOS45MzUgOS41NTRDOS44NiA5LjcyNCA5LjcyNCA5Ljg2IDkuNTU0IDkuOTM1TDUuMDU0IDExLjkzNUM0Ljc3MSAxMi4wNjEgNC40MzkgMTIgNC4yMiAxMS43OEM0IDExLjU2MSAzLjkzOCAxMS4yMjkgNC4wNjUgMTAuOTQ1TDYuMDY1IDYuNDQ1QzYuMTQgNi4yNzUgNi4yNzYgNi4xNCA2LjQ0NSA2LjA2NEwxMC45NDUgNC4wNjRDMTEuMjI5IDMuOTM4IDExLjU2MSA0IDExLjc4IDQuMjE5Wk02Ljk5MiA4LjA1Mkw3Ljk0NyA5LjAwOEw2LjIyNyA5Ljc3Mkw2Ljk5MiA4LjA1MlpNOS4wMDggNy45NDdMOC4wNTIgNi45OTJMOS43NzMgNi4yMjdMOS4wMDggNy45NDdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCompassIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCompass';
}

export default RefIcon;
