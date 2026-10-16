// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSGenerativeIndicatorSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSGenerativeIndicator](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOC4xMTcgMS4wMDlDOC4zODQgMS4wNTEgOC42MTEgMS4yMzQgOC43MDUgMS40OTNMMTAuMjU1IDUuNzQ0TDE0LjUwNyA3LjI5NUMxNC44MDMgNy40MDMgMTUgNy42ODQgMTUgNy45OTlWOC4wMDFDMTUgOC4zMTYgMTQuODAzIDguNTk3IDE0LjUwNyA4LjcwNUwxMC4yNTUgMTAuMjU1TDguNzA1IDE0LjUwN0M4LjU5NyAxNC44MDMgOC4zMTYgMTUgOC4wMDEgMTVINy45OTlDNy42ODQgMTUgNy40MDMgMTQuODAzIDcuMjk1IDE0LjUwN0w1Ljc0NCAxMC4yNTVMMS40OTMgOC43MDVDMS4xOTcgOC41OTcgMSA4LjMxNiAxIDguMDAxVjcuOTk5QzEgNy42ODQgMS4xOTcgNy40MDMgMS40OTMgNy4yOTVMNS43NDQgNS43NDRMNy4yOTUgMS40OTNMNy4zNDMgMS4zODdDNy40NzMgMS4xNTEgNy43MjMgMSA3Ljk5OSAxSDguMDAxTDguMTE3IDEuMDA5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSGenerativeIndicatorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSGenerativeIndicator';
}

export default RefIcon;
