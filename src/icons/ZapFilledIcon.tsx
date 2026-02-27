// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const zapFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.1143 3.2507C12.399 2.99849 12.809 2.92669 13.168 3.07882C13.5271 3.23109 13.7607 3.5757 13.7774 3.95578L13.7706 4.12082L13.129 9.40011H19.0001C19.3854 9.40022 19.7365 9.62162 19.9024 9.96945C20.0682 10.3172 20.0197 10.7295 19.7774 11.029L11.9991 20.6296C11.7185 20.9757 11.2424 21.0944 10.8321 20.9206C10.4216 20.7466 10.1758 20.3212 10.2296 19.8786L10.8712 14.5993H5.00006C4.61455 14.5993 4.26365 14.378 4.09772 14.03C3.93191 13.6821 3.98027 13.2699 4.22272 12.9704L12.001 3.36984L12.1143 3.2507Z"/>
  </svg>
);

const zapFilledIconDefinition = svgToIconDefinition(
  zapFilledSvg,
  'zap-filled'
);

/**![ZapFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIuMTE0MyAzLjI1MDdDMTIuMzk5IDIuOTk4NDkgMTIuODA5IDIuOTI2NjkgMTMuMTY4IDMuMDc4ODJDMTMuNTI3MSAzLjIzMTA5IDEzLjc2MDcgMy41NzU3IDEzLjc3NzQgMy45NTU3OEwxMy43NzA2IDQuMTIwODJMMTMuMTI5IDkuNDAwMTFIMTkuMDAwMUMxOS4zODU0IDkuNDAwMjIgMTkuNzM2NSA5LjYyMTYyIDE5LjkwMjQgOS45Njk0NUMyMC4wNjgyIDEwLjMxNzIgMjAuMDE5NyAxMC43Mjk1IDE5Ljc3NzQgMTEuMDI5TDExLjk5OTEgMjAuNjI5NkMxMS43MTg1IDIwLjk3NTcgMTEuMjQyNCAyMS4wOTQ0IDEwLjgzMjEgMjAuOTIwNkMxMC40MjE2IDIwLjc0NjYgMTAuMTc1OCAyMC4zMjEyIDEwLjIyOTYgMTkuODc4NkwxMC44NzEyIDE0LjU5OTNINS4wMDAwNkM0LjYxNDU1IDE0LjU5OTMgNC4yNjM2NSAxNC4zNzggNC4wOTc3MiAxNC4wM0MzLjkzMTkxIDEzLjY4MjEgMy45ODAyNyAxMy4yNjk5IDQuMjIyNzIgMTIuOTcwNEwxMi4wMDEgMy4zNjk4NEwxMi4xMTQzIDMuMjUwN1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={zapFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ZapFilledIcon';
}

export default RefIcon;
