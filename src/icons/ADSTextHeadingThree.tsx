// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextHeadingThreeSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 8.5H14.625C15.384 8.5 16 9.116 16 9.875V14.625C16 15.384 15.384 16 14.625 16H11.5V14.5H14.5V13H11.5V11.5H14.5V10H11.5V8.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6.25V1H1V13H2.5V7.75H8V13H9.5V1H8V6.25H2.5Z"/>
  </svg>
);

const aDSTextHeadingThreeIconDefinition = svgToIconDefinition(
  aDSTextHeadingThreeSvg,
  'ads-text-heading-three'
);

/**![ADSTextHeadingThree](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjUgOC41SDE0LjYyNUMxNS4zODQgOC41IDE2IDkuMTE2IDE2IDkuODc1VjE0LjYyNUMxNiAxNS4zODQgMTUuMzg0IDE2IDE0LjYyNSAxNkgxMS41VjE0LjVIMTQuNVYxM0gxMS41VjExLjVIMTQuNVYxMEgxMS41VjguNVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuNSA2LjI1VjFIMVYxM0gyLjVWNy43NUg4VjEzSDkuNVYxSDhWNi4yNUgyLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextHeadingThreeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextHeadingThree';
}

export default RefIcon;
