// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCurlyBracketsSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1L12.5 1C13.605 1 14.5 1.895 14.5 3V7.25L16 7.25V8.75L14.5 8.75V13C14.5 14.105 13.605 15 12.5 15H10V13.5H12.5C12.776 13.5 13 13.276 13 13L13 3C13 2.724 12.776 2.5 12.5 2.5L10 2.5V1ZM1.5 3C1.5 1.895 2.395 1 3.5 1H6V2.5H3.5C3.224 2.5 3 2.724 3 3V13C3 13.276 3.224 13.5 3.5 13.5H6V15H3.5C2.395 15 1.5 14.105 1.5 13V8.75H0V7.25H1.5V3Z"/>
  </svg>
);

const aDSCurlyBracketsIconDefinition = svgToIconDefinition(
  aDSCurlyBracketsSvg,
  'ads-curly-brackets'
);

/**![ADSCurlyBrackets](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAgMUwxMi41IDFDMTMuNjA1IDEgMTQuNSAxLjg5NSAxNC41IDNWNy4yNUwxNiA3LjI1VjguNzVMMTQuNSA4Ljc1VjEzQzE0LjUgMTQuMTA1IDEzLjYwNSAxNSAxMi41IDE1SDEwVjEzLjVIMTIuNUMxMi43NzYgMTMuNSAxMyAxMy4yNzYgMTMgMTNMMTMgM0MxMyAyLjcyNCAxMi43NzYgMi41IDEyLjUgMi41TDEwIDIuNVYxWk0xLjUgM0MxLjUgMS44OTUgMi4zOTUgMSAzLjUgMUg2VjIuNUgzLjVDMy4yMjQgMi41IDMgMi43MjQgMyAzVjEzQzMgMTMuMjc2IDMuMjI0IDEzLjUgMy41IDEzLjVINlYxNUgzLjVDMi4zOTUgMTUgMS41IDE0LjEwNSAxLjUgMTNWOC43NUgwVjcuMjVIMS41VjNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCurlyBracketsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCurlyBrackets';
}

export default RefIcon;
