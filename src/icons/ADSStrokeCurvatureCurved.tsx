// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeCurvatureCurvedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSStrokeCurvatureCurved](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjEwMyAzLjVDMTAuNjYzIDMuNSA5LjQyNiA0LjUyNCA5LjE1NiA1LjkzOUw4LjMxNyAxMC4zNDJDNy45MTMgMTIuNDY0IDYuMDU3IDE0IDMuODk3IDE0SDFWMTIuNUgzLjg5N0M1LjMzNyAxMi41IDYuNTc0IDExLjQ3NiA2Ljg0NCAxMC4wNjFMNy42ODMgNS42NThDOC4wODcgMy41MzYgOS45NDMgMiAxMi4xMDMgMkgxNVYzLjVIMTIuMTAzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeCurvatureCurvedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeCurvatureCurved';
}

export default RefIcon;
