// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDataFunctionSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 1V2.5H4.574L9.768 7.457C9.916 7.599 10 7.795 10 8C10 8.205 9.916 8.401 9.768 8.543L4.574 13.5H13V15H3.75C3.336 15 3 14.664 3 14.25V13.25C3 13.045 3.084 12.849 3.232 12.707L8.163 8L3.232 3.293C3.084 3.151 3 2.955 3 2.75V1.75C3 1.336 3.336 1 3.75 1H13Z"/>
  </svg>
);

const aDSDataFunctionIconDefinition = svgToIconDefinition(
  aDSDataFunctionSvg,
  'ads-data-function'
);

/**![ADSDataFunction](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMyAxVjIuNUg0LjU3NEw5Ljc2OCA3LjQ1N0M5LjkxNiA3LjU5OSAxMCA3Ljc5NSAxMCA4QzEwIDguMjA1IDkuOTE2IDguNDAxIDkuNzY4IDguNTQzTDQuNTc0IDEzLjVIMTNWMTVIMy43NUMzLjMzNiAxNSAzIDE0LjY2NCAzIDE0LjI1VjEzLjI1QzMgMTMuMDQ1IDMuMDg0IDEyLjg0OSAzLjIzMiAxMi43MDdMOC4xNjMgOEwzLjIzMiAzLjI5M0MzLjA4NCAzLjE1MSAzIDIuOTU1IDMgMi43NVYxLjc1QzMgMS4zMzYgMy4zMzYgMSAzLjc1IDFIMTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDataFunctionIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDataFunction';
}

export default RefIcon;
