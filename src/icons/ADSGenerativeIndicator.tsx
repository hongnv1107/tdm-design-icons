// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSGenerativeIndicatorSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.117 1.009C8.384 1.051 8.611 1.234 8.705 1.493L10.255 5.744L14.507 7.295C14.803 7.403 15 7.684 15 7.999V8.001C15 8.316 14.803 8.597 14.507 8.705L10.255 10.255L8.705 14.507C8.597 14.803 8.316 15 8.001 15H7.999C7.684 15 7.403 14.803 7.295 14.507L5.744 10.255L1.493 8.705C1.197 8.597 1 8.316 1 8.001V7.999C1 7.684 1.197 7.403 1.493 7.295L5.744 5.744L7.295 1.493L7.343 1.387C7.473 1.151 7.723 1 7.999 1H8.001L8.117 1.009Z"/>
  </svg>
);

const aDSGenerativeIndicatorIconDefinition = svgToIconDefinition(
  aDSGenerativeIndicatorSvg,
  'ads-generative-indicator'
);

/**![ADSGenerativeIndicator](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik04LjExNyAxLjAwOUM4LjM4NCAxLjA1MSA4LjYxMSAxLjIzNCA4LjcwNSAxLjQ5M0wxMC4yNTUgNS43NDRMMTQuNTA3IDcuMjk1QzE0LjgwMyA3LjQwMyAxNSA3LjY4NCAxNSA3Ljk5OVY4LjAwMUMxNSA4LjMxNiAxNC44MDMgOC41OTcgMTQuNTA3IDguNzA1TDEwLjI1NSAxMC4yNTVMOC43MDUgMTQuNTA3QzguNTk3IDE0LjgwMyA4LjMxNiAxNSA4LjAwMSAxNUg3Ljk5OUM3LjY4NCAxNSA3LjQwMyAxNC44MDMgNy4yOTUgMTQuNTA3TDUuNzQ0IDEwLjI1NUwxLjQ5MyA4LjcwNUMxLjE5NyA4LjU5NyAxIDguMzE2IDEgOC4wMDFWNy45OTlDMSA3LjY4NCAxLjE5NyA3LjQwMyAxLjQ5MyA3LjI5NUw1Ljc0NCA1Ljc0NEw3LjI5NSAxLjQ5M0w3LjM0MyAxLjM4N0M3LjQ3MyAxLjE1MSA3LjcyMyAxIDcuOTk5IDFIOC4wMDFMOC4xMTcgMS4wMDlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSGenerativeIndicatorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSGenerativeIndicator';
}

export default RefIcon;
