// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const closeOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.0738 0.502108C21.7432 -0.167369 22.8284 -0.167369 23.4979 0.502108C24.1674 1.17159 24.1674 2.25676 23.4979 2.92624L14.4241 12L23.4979 21.0738L23.6151 21.2043C24.1643 21.8777 24.1255 22.8703 23.4979 23.4979C22.8703 24.1255 21.8777 24.1643 21.2043 23.6151L21.0738 23.4979L12 14.4241L2.92624 23.4979C2.25676 24.1674 1.17159 24.1674 0.502108 23.4979C-0.167369 22.8284 -0.167369 21.7432 0.502108 21.0738L9.57587 12L0.502108 2.92624L0.384919 2.79566C-0.164259 2.12233 -0.125526 1.12974 0.502108 0.502108C1.12974 -0.125526 2.12233 -0.164259 2.79566 0.384919L2.92624 0.502108L12 9.57587L21.0738 0.502108Z"/>
  </svg>
);

const closeOutlinedIconDefinition = svgToIconDefinition(
  closeOutlinedSvg,
  'close-outlined'
);

/**![CloseOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjEuMDczOCAwLjUwMjEwOEMyMS43NDMyIC0wLjE2NzM2OSAyMi44Mjg0IC0wLjE2NzM2OSAyMy40OTc5IDAuNTAyMTA4QzI0LjE2NzQgMS4xNzE1OSAyNC4xNjc0IDIuMjU2NzYgMjMuNDk3OSAyLjkyNjI0TDE0LjQyNDEgMTJMMjMuNDk3OSAyMS4wNzM4TDIzLjYxNTEgMjEuMjA0M0MyNC4xNjQzIDIxLjg3NzcgMjQuMTI1NSAyMi44NzAzIDIzLjQ5NzkgMjMuNDk3OUMyMi44NzAzIDI0LjEyNTUgMjEuODc3NyAyNC4xNjQzIDIxLjIwNDMgMjMuNjE1MUwyMS4wNzM4IDIzLjQ5NzlMMTIgMTQuNDI0MUwyLjkyNjI0IDIzLjQ5NzlDMi4yNTY3NiAyNC4xNjc0IDEuMTcxNTkgMjQuMTY3NCAwLjUwMjEwOCAyMy40OTc5Qy0wLjE2NzM2OSAyMi44Mjg0IC0wLjE2NzM2OSAyMS43NDMyIDAuNTAyMTA4IDIxLjA3MzhMOS41NzU4NyAxMkwwLjUwMjEwOCAyLjkyNjI0TDAuMzg0OTE5IDIuNzk1NjZDLTAuMTY0MjU5IDIuMTIyMzMgLTAuMTI1NTI2IDEuMTI5NzQgMC41MDIxMDggMC41MDIxMDhDMS4xMjk3NCAtMC4xMjU1MjYgMi4xMjIzMyAtMC4xNjQyNTkgMi43OTU2NiAwLjM4NDkxOUwyLjkyNjI0IDAuNTAyMTA4TDEyIDkuNTc1ODdMMjEuMDczOCAwLjUwMjEwOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={closeOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CloseOutlined';
}

export default RefIcon;
