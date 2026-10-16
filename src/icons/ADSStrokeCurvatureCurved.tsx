// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeCurvatureCurvedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.103 3.5C10.663 3.5 9.426 4.524 9.156 5.939L8.317 10.342C7.913 12.464 6.057 14 3.897 14H1V12.5H3.897C5.337 12.5 6.574 11.476 6.844 10.061L7.683 5.658C8.087 3.536 9.943 2 12.103 2H15V3.5H12.103Z"/>
  </svg>
);

const aDSStrokeCurvatureCurvedIconDefinition = svgToIconDefinition(
  aDSStrokeCurvatureCurvedSvg,
  'ads-stroke-curvature-curved'
);

/**![ADSStrokeCurvatureCurved](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMTAzIDMuNUMxMC42NjMgMy41IDkuNDI2IDQuNTI0IDkuMTU2IDUuOTM5TDguMzE3IDEwLjM0MkM3LjkxMyAxMi40NjQgNi4wNTcgMTQgMy44OTcgMTRIMVYxMi41SDMuODk3QzUuMzM3IDEyLjUgNi41NzQgMTEuNDc2IDYuODQ0IDEwLjA2MUw3LjY4MyA1LjY1OEM4LjA4NyAzLjUzNiA5Ljk0MyAyIDEyLjEwMyAySDE1VjMuNUgxMi4xMDNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeCurvatureCurvedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeCurvatureCurved';
}

export default RefIcon;
