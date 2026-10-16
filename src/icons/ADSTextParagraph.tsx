// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextParagraphSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 2.5C4.731 2.5 3.5 3.731 3.5 5.25C3.5 6.769 4.731 8 6.25 8H8V2.5H6.25ZM9.5 2.5V15H8V9.5H6.25C3.903 9.5 2 7.597 2 5.25C2 2.903 3.903 1 6.25 1H11.75C12.164 1 12.5 1.336 12.5 1.75V15H11V2.5H9.5Z"/>
  </svg>
);

const aDSTextParagraphIconDefinition = svgToIconDefinition(
  aDSTextParagraphSvg,
  'ads-text-paragraph'
);

/**![ADSTextParagraph](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi4yNSAyLjVDNC43MzEgMi41IDMuNSAzLjczMSAzLjUgNS4yNUMzLjUgNi43NjkgNC43MzEgOCA2LjI1IDhIOFYyLjVINi4yNVpNOS41IDIuNVYxNUg4VjkuNUg2LjI1QzMuOTAzIDkuNSAyIDcuNTk3IDIgNS4yNUMyIDIuOTAzIDMuOTAzIDEgNi4yNSAxSDExLjc1QzEyLjE2NCAxIDEyLjUgMS4zMzYgMTIuNSAxLjc1VjE1SDExVjIuNUg5LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextParagraphIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextParagraph';
}

export default RefIcon;
