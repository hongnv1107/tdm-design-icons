// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHistorySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5C6.158 1.5 4.523 2.266 3.349 3.505L4.647 3.765C5.015 3.838 5.271 4.171 5.249 4.545C5.226 4.919 4.931 5.219 4.558 5.248L1.308 5.498C1.099 5.514 0.894 5.442 0.74 5.3C0.587 5.158 0.5 4.959 0.5 4.75V1.5L0.513 1.363C0.57 1.053 0.819 0.805 1.141 0.758C1.509 0.704 1.862 0.928 1.969 1.284L2.31 2.422C3.748 0.931 5.747 0 8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8H1.5ZM8.75 3.75V8.139L10.969 9.914L10.031 11.086L7.531 9.086C7.353 8.944 7.25 8.728 7.25 8.5V3.75H8.75Z"/>
  </svg>
);

const aDSHistoryIconDefinition = svgToIconDefinition(
  aDSHistorySvg,
  'ads-history'
);

/**![ADSHistory](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xLjUgOEMxLjUgMTEuNTkgNC40MSAxNC41IDggMTQuNUMxMS41OSAxNC41IDE0LjUgMTEuNTkgMTQuNSA4QzE0LjUgNC40MSAxMS41OSAxLjUgOCAxLjVDNi4xNTggMS41IDQuNTIzIDIuMjY2IDMuMzQ5IDMuNTA1TDQuNjQ3IDMuNzY1QzUuMDE1IDMuODM4IDUuMjcxIDQuMTcxIDUuMjQ5IDQuNTQ1QzUuMjI2IDQuOTE5IDQuOTMxIDUuMjE5IDQuNTU4IDUuMjQ4TDEuMzA4IDUuNDk4QzEuMDk5IDUuNTE0IDAuODk0IDUuNDQyIDAuNzQgNS4zQzAuNTg3IDUuMTU4IDAuNSA0Ljk1OSAwLjUgNC43NVYxLjVMMC41MTMgMS4zNjNDMC41NyAxLjA1MyAwLjgxOSAwLjgwNSAxLjE0MSAwLjc1OEMxLjUwOSAwLjcwNCAxLjg2MiAwLjkyOCAxLjk2OSAxLjI4NEwyLjMxIDIuNDIyQzMuNzQ4IDAuOTMxIDUuNzQ3IDAgOCAwQzEyLjQxOCAwIDE2IDMuNTgyIDE2IDhDMTYgMTIuNDE4IDEyLjQxOCAxNiA4IDE2QzMuNTgyIDE2IDAgMTIuNDE4IDAgOEgxLjVaTTguNzUgMy43NVY4LjEzOUwxMC45NjkgOS45MTRMMTAuMDMxIDExLjA4Nkw3LjUzMSA5LjA4NkM3LjM1MyA4Ljk0NCA3LjI1IDguNzI4IDcuMjUgOC41VjMuNzVIOC43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHistoryIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHistory';
}

export default RefIcon;
