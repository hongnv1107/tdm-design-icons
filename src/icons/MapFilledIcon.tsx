// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mapFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 18.9856L9 17.2377V5.00265L15 6.75051V18.9856ZM16 18.9538V6.65517L19.9688 5.06621C20.2396 4.96028 20.4688 4.98146 20.6562 5.12977C20.8646 5.27807 20.9792 5.48993 21 5.76535V16.4114C20.9792 16.7292 20.8229 16.9623 20.5312 17.1106L16 18.9538ZM3.46875 6.87763L8 5.03443V17.333L4.03125 18.9538C3.76042 19.0385 3.53125 19.0067 3.34375 18.8584C3.13542 18.7101 3.02083 18.4983 3 18.2229V7.57677C3.02083 7.25898 3.17708 7.02593 3.46875 6.87763Z"/>
  </svg>
);

const mapFilledIconDefinition = svgToIconDefinition(
  mapFilledSvg,
  'map-filled'
);

/**![MapFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTUgMTguOTg1Nkw5IDE3LjIzNzdWNS4wMDI2NUwxNSA2Ljc1MDUxVjE4Ljk4NTZaTTE2IDE4Ljk1MzhWNi42NTUxN0wxOS45Njg4IDUuMDY2MjFDMjAuMjM5NiA0Ljk2MDI4IDIwLjQ2ODggNC45ODE0NiAyMC42NTYyIDUuMTI5NzdDMjAuODY0NiA1LjI3ODA3IDIwLjk3OTIgNS40ODk5MyAyMSA1Ljc2NTM1VjE2LjQxMTRDMjAuOTc5MiAxNi43MjkyIDIwLjgyMjkgMTYuOTYyMyAyMC41MzEyIDE3LjExMDZMMTYgMTguOTUzOFpNMy40Njg3NSA2Ljg3NzYzTDggNS4wMzQ0M1YxNy4zMzNMNC4wMzEyNSAxOC45NTM4QzMuNzYwNDIgMTkuMDM4NSAzLjUzMTI1IDE5LjAwNjcgMy4zNDM3NSAxOC44NTg0QzMuMTM1NDIgMTguNzEwMSAzLjAyMDgzIDE4LjQ5ODMgMyAxOC4yMjI5VjcuNTc2NzdDMy4wMjA4MyA3LjI1ODk4IDMuMTc3MDggNy4wMjU5MyAzLjQ2ODc1IDYuODc3NjNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mapFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MapFilledIcon';
}

export default RefIcon;
