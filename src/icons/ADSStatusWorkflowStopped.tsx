// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusWorkflowStoppedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.25 5C10.664 5 11 5.336 11 5.75V10.25C11 10.664 10.664 11 10.25 11H5.75C5.336 11 5 10.664 5 10.25V5.75C5 5.336 5.336 5 5.75 5H10.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0ZM8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5Z"/>
  </svg>
);

const aDSStatusWorkflowStoppedIconDefinition = svgToIconDefinition(
  aDSStatusWorkflowStoppedSvg,
  'ads-status-workflow-stopped'
);

/**![ADSStatusWorkflowStopped](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTAuMjUgNUMxMC42NjQgNSAxMSA1LjMzNiAxMSA1Ljc1VjEwLjI1QzExIDEwLjY2NCAxMC42NjQgMTEgMTAuMjUgMTFINS43NUM1LjMzNiAxMSA1IDEwLjY2NCA1IDEwLjI1VjUuNzVDNSA1LjMzNiA1LjMzNiA1IDUuNzUgNUgxMC4yNVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMEMxMi40MTggMCAxNiAzLjU4MiAxNiA4QzE2IDEyLjQxOCAxMi40MTggMTYgOCAxNkMzLjU4MiAxNiAwIDEyLjQxOCAwIDhDMCAzLjU4MiAzLjU4MiAwIDggMFpNOCAxLjVDNC40MSAxLjUgMS41IDQuNDEgMS41IDhDMS41IDExLjU5IDQuNDEgMTQuNSA4IDE0LjVDMTEuNTkgMTQuNSAxNC41IDExLjU5IDE0LjUgOEMxNC41IDQuNDEgMTEuNTkgMS41IDggMS41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusWorkflowStoppedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusWorkflowStopped';
}

export default RefIcon;
