// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const locationArrowOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.9786 9.25165C12.748 9.29012 13.402 9.55939 13.9405 10.0595C14.4406 10.598 14.7099 11.252 14.7484 12.0214V17.5031L20.4609 3.53909L6.49688 9.25165H11.9786ZM1.82297 12.0214C0.861264 11.9444 0.265004 11.4443 0.0341941 10.5211C-0.119679 9.55939 0.24577 8.86696 1.13054 8.44381L21.4419 0.134639C22.1728 -0.134639 22.8459 0 23.4614 0.538557C24 1.15405 24.1346 1.82725 23.8654 2.55815L15.5562 22.8695C15.133 23.7542 14.4406 24.1197 13.4789 23.9658C12.5557 23.735 12.0556 23.1387 11.9786 22.177V12.0214H1.82297Z"/>
  </svg>
);

const locationArrowOutlinedIconDefinition = svgToIconDefinition(
  locationArrowOutlinedSvg,
  'location-arrow-outlined'
);

/**![LocationArrowOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEuOTc4NiA5LjI1MTY1QzEyLjc0OCA5LjI5MDEyIDEzLjQwMiA5LjU1OTM5IDEzLjk0MDUgMTAuMDU5NUMxNC40NDA2IDEwLjU5OCAxNC43MDk5IDExLjI1MiAxNC43NDg0IDEyLjAyMTRWMTcuNTAzMUwyMC40NjA5IDMuNTM5MDlMNi40OTY4OCA5LjI1MTY1SDExLjk3ODZaTTEuODIyOTcgMTIuMDIxNEMwLjg2MTI2NCAxMS45NDQ0IDAuMjY1MDA0IDExLjQ0NDMgMC4wMzQxOTQxIDEwLjUyMTFDLTAuMTE5Njc5IDkuNTU5MzkgMC4yNDU3NyA4Ljg2Njk2IDEuMTMwNTQgOC40NDM4MUwyMS40NDE5IDAuMTM0NjM5QzIyLjE3MjggLTAuMTM0NjM5IDIyLjg0NTkgMCAyMy40NjE0IDAuNTM4NTU3QzI0IDEuMTU0MDUgMjQuMTM0NiAxLjgyNzI1IDIzLjg2NTQgMi41NTgxNUwxNS41NTYyIDIyLjg2OTVDMTUuMTMzIDIzLjc1NDIgMTQuNDQwNiAyNC4xMTk3IDEzLjQ3ODkgMjMuOTY1OEMxMi41NTU3IDIzLjczNSAxMi4wNTU2IDIzLjEzODcgMTEuOTc4NiAyMi4xNzdWMTIuMDIxNEgxLjgyMjk3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={locationArrowOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LocationArrowOutlined';
}

export default RefIcon;
