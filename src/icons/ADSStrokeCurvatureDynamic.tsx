// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeCurvatureDynamicSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5C8.974 3.5 8.75 3.724 8.75 4V12C8.75 13.105 7.855 14 6.75 14H1V12.5H6.75C7.026 12.5 7.25 12.276 7.25 12V4C7.25 2.895 8.145 2 9.25 2H15V3.5H9.25Z"/>
  </svg>
);

const aDSStrokeCurvatureDynamicIconDefinition = svgToIconDefinition(
  aDSStrokeCurvatureDynamicSvg,
  'ads-stroke-curvature-dynamic'
);

/**![ADSStrokeCurvatureDynamic](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS4yNSAzLjVDOC45NzQgMy41IDguNzUgMy43MjQgOC43NSA0VjEyQzguNzUgMTMuMTA1IDcuODU1IDE0IDYuNzUgMTRIMVYxMi41SDYuNzVDNy4wMjYgMTIuNSA3LjI1IDEyLjI3NiA3LjI1IDEyVjRDNy4yNSAyLjg5NSA4LjE0NSAyIDkuMjUgMkgxNVYzLjVIOS4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeCurvatureDynamicIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeCurvatureDynamic';
}

export default RefIcon;
