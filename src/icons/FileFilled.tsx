// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const fileFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0503 0C13.3741 0.000105087 13.6839 0.13125 13.9097 0.363281L21.2603 7.92285C21.478 8.14679 21.6 8.44744 21.6001 8.75977V20.6406C21.5999 21.5207 21.2598 22.3715 20.645 23.0039C20.029 23.6374 19.1863 23.9999 18.3003 24H5.69971C4.81359 23.9999 3.97101 23.6374 3.35498 23.0039C2.81695 22.4505 2.48902 21.7299 2.41553 20.9688L2.3999 20.6406V3.35938C2.40006 2.47921 2.74015 1.6285 3.35498 0.996094C3.97101 0.362582 4.81359 5.33154e-05 5.69971 0H13.0503ZM14.2495 7.55957H17.5591L14.2495 4.15527V7.55957Z"/>
  </svg>
);

const fileFilledIconDefinition = svgToIconDefinition(
  fileFilledSvg,
  'file-filled'
);

/**![FileFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjA1MDMgMEMxMy4zNzQxIDAuMDAwMTA1MDg3IDEzLjY4MzkgMC4xMzEyNSAxMy45MDk3IDAuMzYzMjgxTDIxLjI2MDMgNy45MjI4NUMyMS40NzggOC4xNDY3OSAyMS42IDguNDQ3NDQgMjEuNjAwMSA4Ljc1OTc3VjIwLjY0MDZDMjEuNTk5OSAyMS41MjA3IDIxLjI1OTggMjIuMzcxNSAyMC42NDUgMjMuMDAzOUMyMC4wMjkgMjMuNjM3NCAxOS4xODYzIDIzLjk5OTkgMTguMzAwMyAyNEg1LjY5OTcxQzQuODEzNTkgMjMuOTk5OSAzLjk3MTAxIDIzLjYzNzQgMy4zNTQ5OCAyMy4wMDM5QzIuODE2OTUgMjIuNDUwNSAyLjQ4OTAyIDIxLjcyOTkgMi40MTU1MyAyMC45Njg4TDIuMzk5OSAyMC42NDA2VjMuMzU5MzhDMi40MDAwNiAyLjQ3OTIxIDIuNzQwMTUgMS42Mjg1IDMuMzU0OTggMC45OTYwOTRDMy45NzEwMSAwLjM2MjU4MiA0LjgxMzU5IDUuMzMxNTRlLTA1IDUuNjk5NzEgMEgxMy4wNTAzWk0xNC4yNDk1IDcuNTU5NTdIMTcuNTU5MUwxNC4yNDk1IDQuMTU1MjdWNy41NTk1N1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={fileFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileFilled';
}

export default RefIcon;
