// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const locationArrowUpOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.0001 3.58929L4.66078 20.7857L11.1965 15.6964C11.7322 15.3393 12.2679 15.3393 12.8036 15.6964L19.3394 20.7857L12.0001 3.58929ZM10.2322 1.17857C10.5894 0.428571 11.1786 0.0357143 12.0001 0C12.8215 0.0357143 13.4108 0.428571 13.7679 1.17857L22.1251 20.7321C22.2322 21.0179 22.2858 21.3214 22.2858 21.6429V21.75C22.2858 22.3929 22.0715 22.9286 21.6429 23.3571C21.2144 23.7857 20.6786 24 20.0358 24C19.5358 24 19.0715 23.8393 18.6429 23.5179L12.0001 18.3214L5.35721 23.5179C4.92864 23.8393 4.46436 24 3.96436 24C3.3215 24 2.78578 23.7857 2.35721 23.3571C1.92864 22.9286 1.71436 22.3929 1.71436 21.75V21.6429C1.71436 21.3214 1.78578 21.0179 1.92864 20.7321L10.2322 1.17857Z"/>
  </svg>
);

const locationArrowUpOutlinedIconDefinition = svgToIconDefinition(
  locationArrowUpOutlinedSvg,
  'location-arrow-up-outlined'
);

/**![LocationArrowUpOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIuMDAwMSAzLjU4OTI5TDQuNjYwNzggMjAuNzg1N0wxMS4xOTY1IDE1LjY5NjRDMTEuNzMyMiAxNS4zMzkzIDEyLjI2NzkgMTUuMzM5MyAxMi44MDM2IDE1LjY5NjRMMTkuMzM5NCAyMC43ODU3TDEyLjAwMDEgMy41ODkyOVpNMTAuMjMyMiAxLjE3ODU3QzEwLjU4OTQgMC40Mjg1NzEgMTEuMTc4NiAwLjAzNTcxNDMgMTIuMDAwMSAwQzEyLjgyMTUgMC4wMzU3MTQzIDEzLjQxMDggMC40Mjg1NzEgMTMuNzY3OSAxLjE3ODU3TDIyLjEyNTEgMjAuNzMyMUMyMi4yMzIyIDIxLjAxNzkgMjIuMjg1OCAyMS4zMjE0IDIyLjI4NTggMjEuNjQyOVYyMS43NUMyMi4yODU4IDIyLjM5MjkgMjIuMDcxNSAyMi45Mjg2IDIxLjY0MjkgMjMuMzU3MUMyMS4yMTQ0IDIzLjc4NTcgMjAuNjc4NiAyNCAyMC4wMzU4IDI0QzE5LjUzNTggMjQgMTkuMDcxNSAyMy44MzkzIDE4LjY0MjkgMjMuNTE3OUwxMi4wMDAxIDE4LjMyMTRMNS4zNTcyMSAyMy41MTc5QzQuOTI4NjQgMjMuODM5MyA0LjQ2NDM2IDI0IDMuOTY0MzYgMjRDMy4zMjE1IDI0IDIuNzg1NzggMjMuNzg1NyAyLjM1NzIxIDIzLjM1NzFDMS45Mjg2NCAyMi45Mjg2IDEuNzE0MzYgMjIuMzkyOSAxLjcxNDM2IDIxLjc1VjIxLjY0MjlDMS43MTQzNiAyMS4zMjE0IDEuNzg1NzggMjEuMDE3OSAxLjkyODY0IDIwLjczMjFMMTAuMjMyMiAxLjE3ODU3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={locationArrowUpOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LocationArrowUpOutlined';
}

export default RefIcon;
