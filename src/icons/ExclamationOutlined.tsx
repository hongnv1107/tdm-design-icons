// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const exclamationOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.2856 1.28571V16.7143C13.2142 17.5 12.7856 17.9286 11.9999 18C11.2142 17.9286 10.7856 17.5 10.7142 16.7143V1.28571C10.7856 0.5 11.2142 0.0714286 11.9999 0C12.7856 0.0714286 13.2142 0.5 13.2856 1.28571ZM11.9999 24C11.4999 24 11.0892 23.8393 10.7678 23.5179C10.4464 23.1964 10.2856 22.7857 10.2856 22.2857C10.2856 21.7857 10.4464 21.375 10.7678 21.0536C11.0892 20.7321 11.4999 20.5714 11.9999 20.5714C12.4999 20.5714 12.9106 20.7321 13.2321 21.0536C13.5535 21.375 13.7142 21.7857 13.7142 22.2857C13.7142 22.7857 13.5535 23.1964 13.2321 23.5179C12.9106 23.8393 12.4999 24 11.9999 24Z"/>
  </svg>
);

const exclamationOutlinedIconDefinition = svgToIconDefinition(
  exclamationOutlinedSvg,
  'exclamation-outlined'
);

/**![ExclamationOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuMjg1NiAxLjI4NTcxVjE2LjcxNDNDMTMuMjE0MiAxNy41IDEyLjc4NTYgMTcuOTI4NiAxMS45OTk5IDE4QzExLjIxNDIgMTcuOTI4NiAxMC43ODU2IDE3LjUgMTAuNzE0MiAxNi43MTQzVjEuMjg1NzFDMTAuNzg1NiAwLjUgMTEuMjE0MiAwLjA3MTQyODYgMTEuOTk5OSAwQzEyLjc4NTYgMC4wNzE0Mjg2IDEzLjIxNDIgMC41IDEzLjI4NTYgMS4yODU3MVpNMTEuOTk5OSAyNEMxMS40OTk5IDI0IDExLjA4OTIgMjMuODM5MyAxMC43Njc4IDIzLjUxNzlDMTAuNDQ2NCAyMy4xOTY0IDEwLjI4NTYgMjIuNzg1NyAxMC4yODU2IDIyLjI4NTdDMTAuMjg1NiAyMS43ODU3IDEwLjQ0NjQgMjEuMzc1IDEwLjc2NzggMjEuMDUzNkMxMS4wODkyIDIwLjczMjEgMTEuNDk5OSAyMC41NzE0IDExLjk5OTkgMjAuNTcxNEMxMi40OTk5IDIwLjU3MTQgMTIuOTEwNiAyMC43MzIxIDEzLjIzMjEgMjEuMDUzNkMxMy41NTM1IDIxLjM3NSAxMy43MTQyIDIxLjc4NTcgMTMuNzE0MiAyMi4yODU3QzEzLjcxNDIgMjIuNzg1NyAxMy41NTM1IDIzLjE5NjQgMTMuMjMyMSAyMy41MTc5QzEyLjkxMDYgMjMuODM5MyAxMi40OTk5IDI0IDExLjk5OTkgMjRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={exclamationOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ExclamationOutlined';
}

export default RefIcon;
