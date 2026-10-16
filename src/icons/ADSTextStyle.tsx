// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextStyleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.799 0.484C6.909 0.193 7.188 0 7.5 0H8.518C8.83 0 9.109 0.193 9.219 0.485L12.952 10.36C12.984 10.445 13 10.534 13 10.625V11H11.5V10.762L10.456 8H5.549L4.5 10.763V11H3V10.625C3 10.534 3.017 10.444 3.049 10.359L6.799 0.484ZM6.119 6.5H9.889L8.008 1.524L6.119 6.5Z"/>
  </svg>
);

const aDSTextStyleIconDefinition = svgToIconDefinition(
  aDSTextStyleSvg,
  'ads-text-style'
);

/**![ADSTextStyle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi43OTkgMC40ODRDNi45MDkgMC4xOTMgNy4xODggMCA3LjUgMEg4LjUxOEM4LjgzIDAgOS4xMDkgMC4xOTMgOS4yMTkgMC40ODVMMTIuOTUyIDEwLjM2QzEyLjk4NCAxMC40NDUgMTMgMTAuNTM0IDEzIDEwLjYyNVYxMUgxMS41VjEwLjc2MkwxMC40NTYgOEg1LjU0OUw0LjUgMTAuNzYzVjExSDNWMTAuNjI1QzMgMTAuNTM0IDMuMDE3IDEwLjQ0NCAzLjA0OSAxMC4zNTlMNi43OTkgMC40ODRaTTYuMTE5IDYuNUg5Ljg4OUw4LjAwOCAxLjUyNEw2LjExOSA2LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextStyleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextStyle';
}

export default RefIcon;
