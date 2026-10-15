// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusInformationSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0ZM6.5 6.75V8.25H7.25V12.5H8.75V7.5C8.75 7.086 8.414 6.75 8 6.75H6.5ZM8 3.5C7.448 3.5 7 3.948 7 4.5C7 5.052 7.448 5.5 8 5.5C8.552 5.5 9 5.052 9 4.5C9 3.948 8.552 3.5 8 3.5Z"/>
  </svg>
);

const aDSStatusInformationIconDefinition = svgToIconDefinition(
  aDSStatusInformationSvg,
  'ads-status-information'
);

/**![ADSStatusInformation](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMEMxMi40MTggMCAxNiAzLjU4MiAxNiA4QzE2IDEyLjQxOCAxMi40MTggMTYgOCAxNkMzLjU4MiAxNiAwIDEyLjQxOCAwIDhDMCAzLjU4MiAzLjU4MiAwIDggMFpNNi41IDYuNzVWOC4yNUg3LjI1VjEyLjVIOC43NVY3LjVDOC43NSA3LjA4NiA4LjQxNCA2Ljc1IDggNi43NUg2LjVaTTggMy41QzcuNDQ4IDMuNSA3IDMuOTQ4IDcgNC41QzcgNS4wNTIgNy40NDggNS41IDggNS41QzguNTUyIDUuNSA5IDUuMDUyIDkgNC41QzkgMy45NDggOC41NTIgMy41IDggMy41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusInformationIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusInformation';
}

export default RefIcon;
