// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAttachmentSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.22 8.469L9.72 3.969L10.781 5.03L6.28 9.53C6.021 9.789 6.021 10.21 6.28 10.469C6.54 10.728 6.961 10.729 7.22 10.47L11.72 5.97C12.532 5.158 12.531 3.842 11.72 3.03C10.908 2.219 9.592 2.219 8.781 3.03L4.281 7.53C2.917 8.894 2.917 11.105 4.281 12.469C5.645 13.833 7.856 13.834 9.22 12.47L11.72 9.97L12.78 11.031L10.281 13.53C8.331 15.48 5.17 15.479 3.22 13.53C1.271 11.58 1.27 8.419 3.22 6.469L7.72 1.969C9.118 0.572 11.383 0.572 12.78 1.969C14.178 3.367 14.178 5.633 12.781 7.03L8.281 11.53C7.436 12.376 6.065 12.375 5.22 11.53C4.375 10.685 4.375 9.314 5.22 8.469Z"/>
  </svg>
);

const aDSAttachmentIconDefinition = svgToIconDefinition(
  aDSAttachmentSvg,
  'ads-attachment'
);

/**![ADSAttachment](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik01LjIyIDguNDY5TDkuNzIgMy45NjlMMTAuNzgxIDUuMDNMNi4yOCA5LjUzQzYuMDIxIDkuNzg5IDYuMDIxIDEwLjIxIDYuMjggMTAuNDY5QzYuNTQgMTAuNzI4IDYuOTYxIDEwLjcyOSA3LjIyIDEwLjQ3TDExLjcyIDUuOTdDMTIuNTMyIDUuMTU4IDEyLjUzMSAzLjg0MiAxMS43MiAzLjAzQzEwLjkwOCAyLjIxOSA5LjU5MiAyLjIxOSA4Ljc4MSAzLjAzTDQuMjgxIDcuNTNDMi45MTcgOC44OTQgMi45MTcgMTEuMTA1IDQuMjgxIDEyLjQ2OUM1LjY0NSAxMy44MzMgNy44NTYgMTMuODM0IDkuMjIgMTIuNDdMMTEuNzIgOS45N0wxMi43OCAxMS4wMzFMMTAuMjgxIDEzLjUzQzguMzMxIDE1LjQ4IDUuMTcgMTUuNDc5IDMuMjIgMTMuNTNDMS4yNzEgMTEuNTggMS4yNyA4LjQxOSAzLjIyIDYuNDY5TDcuNzIgMS45NjlDOS4xMTggMC41NzIgMTEuMzgzIDAuNTcyIDEyLjc4IDEuOTY5QzE0LjE3OCAzLjM2NyAxNC4xNzggNS42MzMgMTIuNzgxIDcuMDNMOC4yODEgMTEuNTNDNy40MzYgMTIuMzc2IDYuMDY1IDEyLjM3NSA1LjIyIDExLjUzQzQuMzc1IDEwLjY4NSA0LjM3NSA5LjMxNCA1LjIyIDguNDY5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAttachmentIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAttachment';
}

export default RefIcon;
