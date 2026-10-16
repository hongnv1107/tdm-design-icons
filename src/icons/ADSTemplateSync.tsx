// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTemplateSyncSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 3C13.5 2.724 13.276 2.5 13 2.5H3C2.724 2.5 2.5 2.724 2.5 3V4.5H13.5V3ZM2.5 13C2.5 13.276 2.724 13.5 3 13.5H5V6H2.5V13ZM15 8H13.5V6H6.5V13.5H8V15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V8Z"/><path d="M11.776 9.168C12.071 8.928 12.506 8.945 12.78 9.22L15.53 11.97L14.47 13.03L13 11.561V16H11.5V11.561L10.03 13.03L8.97 11.97L11.72 9.22L11.776 9.168Z"/>
  </svg>
);

const aDSTemplateSyncIconDefinition = svgToIconDefinition(
  aDSTemplateSyncSvg,
  'ads-template-sync'
);

/**![ADSTemplateSync](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy41IDNDMTMuNSAyLjcyNCAxMy4yNzYgMi41IDEzIDIuNUgzQzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWNC41SDEzLjVWM1pNMi41IDEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVINVY2SDIuNVYxM1pNMTUgOEgxMy41VjZINi41VjEzLjVIOFYxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWM0MxIDEuODk1IDEuODk1IDEgMyAxSDEzQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWOFoiLz48cGF0aCBkPSJNMTEuNzc2IDkuMTY4QzEyLjA3MSA4LjkyOCAxMi41MDYgOC45NDUgMTIuNzggOS4yMkwxNS41MyAxMS45N0wxNC40NyAxMy4wM0wxMyAxMS41NjFWMTZIMTEuNVYxMS41NjFMMTAuMDMgMTMuMDNMOC45NyAxMS45N0wxMS43MiA5LjIyTDExLjc3NiA5LjE2OFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTemplateSyncIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTemplateSync';
}

export default RefIcon;
