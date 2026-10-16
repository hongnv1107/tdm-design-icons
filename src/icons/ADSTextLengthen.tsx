// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextLengthenSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5L1 2.5L1 1L15 1V2.5ZM15 6.667L1 6.667L1 5.167L15 5.167V6.667ZM15 10.833L1 10.833L1 9.333L15 9.333L15 10.833ZM8 15L1 15L1 13.5L8 13.5V15Z"/>
  </svg>
);

const aDSTextLengthenIconDefinition = svgToIconDefinition(
  aDSTextLengthenSvg,
  'ads-text-lengthen'
);

/**![ADSTextLengthen](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMi41TDEgMi41TDEgMUwxNSAxVjIuNVpNMTUgNi42NjdMMSA2LjY2N0wxIDUuMTY3TDE1IDUuMTY3VjYuNjY3Wk0xNSAxMC44MzNMMSAxMC44MzNMMSA5LjMzM0wxNSA5LjMzM0wxNSAxMC44MzNaTTggMTVMMSAxNUwxIDEzLjVMOCAxMy41VjE1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextLengthenIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextLengthen';
}

export default RefIcon;
