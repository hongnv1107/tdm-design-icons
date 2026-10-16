// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSBooleanSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSBoolean](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA4QzE0LjUgNS43OTEgMTIuNzA5IDQgMTAuNSA0SDUuNUMzLjI5MSA0IDEuNSA1Ljc5MSAxLjUgOEMxLjUgMTAuMjA5IDMuMjkxIDEyIDUuNSAxMkgxMC41QzEyLjcwOSAxMiAxNC41IDEwLjIwOSAxNC41IDhaTTE2IDhDMTYgMTEuMDM4IDEzLjUzOCAxMy41IDEwLjUgMTMuNUg1LjVDMi40NjIgMTMuNSAwIDExLjAzOCAwIDhDMCA0Ljk2MiAyLjQ2MiAyLjUgNS41IDIuNUgxMC41QzEzLjUzOCAyLjUgMTYgNC45NjIgMTYgOFoiLz48cGF0aCBkPSJNNS41IDUuMjVDNy4wMTkgNS4yNSA4LjI1IDYuNDgxIDguMjUgOEM4LjI1IDkuNTE5IDcuMDE5IDEwLjc1IDUuNSAxMC43NUMzLjk4MSAxMC43NSAyLjc1IDkuNTE5IDIuNzUgOEMyLjc1IDYuNDgxIDMuOTgxIDUuMjUgNS41IDUuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSBooleanIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSBoolean';
}

export default RefIcon;
