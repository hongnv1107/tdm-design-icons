// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCollapseVerticalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 7.25L16 7.25V8.75H0L0 7.25ZM7.47 9.97C7.61 9.829 7.801 9.75 8 9.75C8.199 9.75 8.39 9.829 8.53 9.97L11.78 13.22L10.72 14.28L8.75 12.311V16H7.25L7.25 12.311L5.28 14.28L4.22 13.22L7.47 9.97ZM5.28 1.72L7.25 3.689L7.25 0L8.75 0V3.689L10.72 1.72L11.78 2.78L8.53 6.03C8.237 6.323 7.763 6.323 7.47 6.03L4.22 2.78L5.28 1.72Z"/>
  </svg>
);

const aDSCollapseVerticalIconDefinition = svgToIconDefinition(
  aDSCollapseVerticalSvg,
  'ads-collapse-vertical'
);

/**![ADSCollapseVertical](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0wIDcuMjVMMTYgNy4yNVY4Ljc1SDBMMCA3LjI1Wk03LjQ3IDkuOTdDNy42MSA5LjgyOSA3LjgwMSA5Ljc1IDggOS43NUM4LjE5OSA5Ljc1IDguMzkgOS44MjkgOC41MyA5Ljk3TDExLjc4IDEzLjIyTDEwLjcyIDE0LjI4TDguNzUgMTIuMzExVjE2SDcuMjVMNy4yNSAxMi4zMTFMNS4yOCAxNC4yOEw0LjIyIDEzLjIyTDcuNDcgOS45N1pNNS4yOCAxLjcyTDcuMjUgMy42ODlMNy4yNSAwTDguNzUgMFYzLjY4OUwxMC43MiAxLjcyTDExLjc4IDIuNzhMOC41MyA2LjAzQzguMjM3IDYuMzIzIDcuNzYzIDYuMzIzIDcuNDcgNi4wM0w0LjIyIDIuNzhMNS4yOCAxLjcyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCollapseVerticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCollapseVertical';
}

export default RefIcon;
