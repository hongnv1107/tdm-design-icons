// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCornerRadiusRoundedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 10.5C13.5 6.082 9.918 2.5 5.5 2.5H1V1H5.5C10.747 1 15 5.253 15 10.5V15H13.5V10.5Z"/>
  </svg>
);

const aDSCornerRadiusRoundedIconDefinition = svgToIconDefinition(
  aDSCornerRadiusRoundedSvg,
  'ads-corner-radius-rounded'
);

/**![ADSCornerRadiusRounded](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNSAxMC41QzEzLjUgNi4wODIgOS45MTggMi41IDUuNSAyLjVIMVYxSDUuNUMxMC43NDcgMSAxNSA1LjI1MyAxNSAxMC41VjE1SDEzLjVWMTAuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCornerRadiusRoundedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCornerRadiusRounded';
}

export default RefIcon;
