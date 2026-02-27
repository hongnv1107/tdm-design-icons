// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronUpDoubleFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.707 18.707a1 1 0 00.068-1.338l-.068-.076-5-5a1 1 0 00-1.414 0l-5 5a1 1 0 101.414 1.414L12 14.414l4.293 4.293.076.069a1 1 0 001.338-.069zm0-7a1 1 0 00.068-1.338l-.068-.076-5-5a1 1 0 00-1.414 0l-5 5a1 1 0 101.414 1.414L12 7.414l4.293 4.293.076.068a1 1 0 001.338-.068z"/>
  </svg>
);

const chevronUpDoubleFilledIconDefinition = svgToIconDefinition(
  chevronUpDoubleFilledSvg,
  'chevron-up-double-filled'
);

/**![ChevronUpDoubleFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjcwNyAxOC43MDdhMSAxIDAgMDAuMDY4LTEuMzM4bC0uMDY4LS4wNzYtNS01YTEgMSAwIDAwLTEuNDE0IDBsLTUgNWExIDEgMCAxMDEuNDE0IDEuNDE0TDEyIDE0LjQxNGw0LjI5MyA0LjI5My4wNzYuMDY5YTEgMSAwIDAwMS4zMzgtLjA2OXptMC03YTEgMSAwIDAwLjA2OC0xLjMzOGwtLjA2OC0uMDc2LTUtNWExIDEgMCAwMC0xLjQxNCAwbC01IDVhMSAxIDAgMTAxLjQxNCAxLjQxNEwxMiA3LjQxNGw0LjI5MyA0LjI5My4wNzYuMDY4YTEgMSAwIDAwMS4zMzgtLjA2OHoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronUpDoubleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronUpDoubleFilledIcon';
}

export default RefIcon;
