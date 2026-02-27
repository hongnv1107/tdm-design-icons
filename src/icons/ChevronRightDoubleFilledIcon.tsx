// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronRightDoubleFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.293 6.293a1 1 0 011.338-.068l.076.068 5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L9.586 12 5.293 7.707l-.068-.076a1 1 0 01.068-1.338zm7 0a1 1 0 011.338-.068l.076.068 5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L16.586 12l-4.293-4.293-.068-.076a1 1 0 01.068-1.338z"/>
  </svg>
);

const chevronRightDoubleFilledIconDefinition = svgToIconDefinition(
  chevronRightDoubleFilledSvg,
  'chevron-right-double-filled'
);

/**![ChevronRightDoubleFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuMjkzIDYuMjkzYTEgMSAwIDAxMS4zMzgtLjA2OGwuMDc2LjA2OCA1IDVhMSAxIDAgMDEwIDEuNDE0bC01IDVhMSAxIDAgMTEtMS40MTQtMS40MTRMOS41ODYgMTIgNS4yOTMgNy43MDdsLS4wNjgtLjA3NmExIDEgMCAwMS4wNjgtMS4zMzh6bTcgMGExIDEgMCAwMTEuMzM4LS4wNjhsLjA3Ni4wNjggNSA1YTEgMSAwIDAxMCAxLjQxNGwtNSA1YTEgMSAwIDExLTEuNDE0LTEuNDE0TDE2LjU4NiAxMmwtNC4yOTMtNC4yOTMtLjA2OC0uMDc2YTEgMSAwIDAxLjA2OC0xLjMzOHoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronRightDoubleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronRightDoubleFilledIcon';
}

export default RefIcon;
