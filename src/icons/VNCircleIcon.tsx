// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const vNCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_5448_5349)"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#D80027"/><path d="M12.0001 6.26124L13.2952 10.247H17.486L14.0955 12.7103L15.3906 16.6961L12.0001 14.2327L8.60963 16.6961L9.90469 12.7103L6.51423 10.247H10.705L12.0001 6.26124Z" fill="#FFDA44"/></g><defs><clipPath id="clip0_5448_5349"><rect width="24" height="24" fill="white"/></clipPath></defs>
  </svg>
);

const vNCircleIconDefinition = svgToIconDefinition(
  vNCircleSvg,
  'vncircle'
);

/**![VNCircleIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNTQ0OF81MzQ5KSI+PHBhdGggZD0iTTEyIDI0QzE4LjYyNzQgMjQgMjQgMTguNjI3NCAyNCAxMkMyNCA1LjM3MjU4IDE4LjYyNzQgMCAxMiAwQzUuMzcyNTggMCAwIDUuMzcyNTggMCAxMkMwIDE4LjYyNzQgNS4zNzI1OCAyNCAxMiAyNFoiIGZpbGw9IiNEODAwMjciLz48cGF0aCBkPSJNMTIuMDAwMSA2LjI2MTI0TDEzLjI5NTIgMTAuMjQ3SDE3LjQ4NkwxNC4wOTU1IDEyLjcxMDNMMTUuMzkwNiAxNi42OTYxTDEyLjAwMDEgMTQuMjMyN0w4LjYwOTYzIDE2LjY5NjFMOS45MDQ2OSAxMi43MTAzTDYuNTE0MjMgMTAuMjQ3SDEwLjcwNUwxMi4wMDAxIDYuMjYxMjRaIiBmaWxsPSIjRkZEQTQ0Ii8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iY2xpcDBfNTQ0OF81MzQ5Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={vNCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VNCircleIcon';
}

export default RefIcon;
