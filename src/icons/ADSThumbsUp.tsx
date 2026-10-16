// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSThumbsUpSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.708 2.594C8.463 2.385 8.087 2.458 7.939 2.743L5.5 7.433V13.5H11.872C12.364 13.5 12.799 13.18 12.945 12.711L14.273 8.46C14.5 7.736 13.959 7 13.2 7H9.75C9.336 7 9 6.664 9 6.25V3.075C9 2.929 8.936 2.79 8.825 2.695L8.708 2.594ZM4 13.5V8H2C1.724 8 1.5 8.224 1.5 8.5V13C1.5 13.276 1.724 13.5 2 13.5H4ZM4.295 6.5L6.608 2.051C7.202 0.908 8.706 0.617 9.684 1.455L9.802 1.556C10.245 1.936 10.5 2.491 10.5 3.075V5.5H13.2C14.971 5.5 16.233 7.218 15.705 8.908L14.377 13.158C14.035 14.254 13.02 15 11.872 15H2C0.895 15 0 14.105 0 13V8.5C0 7.395 0.895 6.5 2 6.5H4.295Z"/>
  </svg>
);

const aDSThumbsUpIconDefinition = svgToIconDefinition(
  aDSThumbsUpSvg,
  'ads-thumbs-up'
);

/**![ADSThumbsUp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNzA4IDIuNTk0QzguNDYzIDIuMzg1IDguMDg3IDIuNDU4IDcuOTM5IDIuNzQzTDUuNSA3LjQzM1YxMy41SDExLjg3MkMxMi4zNjQgMTMuNSAxMi43OTkgMTMuMTggMTIuOTQ1IDEyLjcxMUwxNC4yNzMgOC40NkMxNC41IDcuNzM2IDEzLjk1OSA3IDEzLjIgN0g5Ljc1QzkuMzM2IDcgOSA2LjY2NCA5IDYuMjVWMy4wNzVDOSAyLjkyOSA4LjkzNiAyLjc5IDguODI1IDIuNjk1TDguNzA4IDIuNTk0Wk00IDEzLjVWOEgyQzEuNzI0IDggMS41IDguMjI0IDEuNSA4LjVWMTNDMS41IDEzLjI3NiAxLjcyNCAxMy41IDIgMTMuNUg0Wk00LjI5NSA2LjVMNi42MDggMi4wNTFDNy4yMDIgMC45MDggOC43MDYgMC42MTcgOS42ODQgMS40NTVMOS44MDIgMS41NTZDMTAuMjQ1IDEuOTM2IDEwLjUgMi40OTEgMTAuNSAzLjA3NVY1LjVIMTMuMkMxNC45NzEgNS41IDE2LjIzMyA3LjIxOCAxNS43MDUgOC45MDhMMTQuMzc3IDEzLjE1OEMxNC4wMzUgMTQuMjU0IDEzLjAyIDE1IDExLjg3MiAxNUgyQzAuODk1IDE1IDAgMTQuMTA1IDAgMTNWOC41QzAgNy4zOTUgMC44OTUgNi41IDIgNi41SDQuMjk1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSThumbsUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSThumbsUp';
}

export default RefIcon;
