// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeEllipseSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.5C4.962 2.5 2.5 4.962 2.5 8C2.5 11.038 4.962 13.5 8 13.5C11.038 13.5 13.5 11.038 13.5 8C13.5 4.962 11.038 2.5 8 2.5ZM1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8Z"/>
  </svg>
);

const aDSShapeEllipseIconDefinition = svgToIconDefinition(
  aDSShapeEllipseSvg,
  'ads-shape-ellipse'
);

/**![ADSShapeEllipse](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMi41QzQuOTYyIDIuNSAyLjUgNC45NjIgMi41IDhDMi41IDExLjAzOCA0Ljk2MiAxMy41IDggMTMuNUMxMS4wMzggMTMuNSAxMy41IDExLjAzOCAxMy41IDhDMTMuNSA0Ljk2MiAxMS4wMzggMi41IDggMi41Wk0xIDhDMSA0LjEzNCA0LjEzNCAxIDggMUMxMS44NjYgMSAxNSA0LjEzNCAxNSA4QzE1IDExLjg2NiAxMS44NjYgMTUgOCAxNUM0LjEzNCAxNSAxIDExLjg2NiAxIDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeEllipseIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeEllipse';
}

export default RefIcon;
