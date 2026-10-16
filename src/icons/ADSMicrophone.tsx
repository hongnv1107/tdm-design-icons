// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMicrophoneSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C7.172 1.5 6.5 2.172 6.5 3V7C6.5 7.828 7.172 8.5 8 8.5C8.828 8.5 9.5 7.828 9.5 7V3C9.5 2.172 8.828 1.5 8 1.5ZM5 3C5 1.343 6.343 0 8 0C9.657 0 11 1.343 11 3V7C11 8.657 9.657 10 8 10C6.343 10 5 8.657 5 7V3ZM3.5 7C3.5 9.485 5.515 11.5 8 11.5C10.485 11.5 12.5 9.485 12.5 7H14C14 10.06 11.71 12.585 8.75 12.954V14.5H12V16H4V14.5H7.25V12.954C4.29 12.585 2 10.06 2 7H3.5Z"/>
  </svg>
);

const aDSMicrophoneIconDefinition = svgToIconDefinition(
  aDSMicrophoneSvg,
  'ads-microphone'
);

/**![ADSMicrophone](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxLjVDNy4xNzIgMS41IDYuNSAyLjE3MiA2LjUgM1Y3QzYuNSA3LjgyOCA3LjE3MiA4LjUgOCA4LjVDOC44MjggOC41IDkuNSA3LjgyOCA5LjUgN1YzQzkuNSAyLjE3MiA4LjgyOCAxLjUgOCAxLjVaTTUgM0M1IDEuMzQzIDYuMzQzIDAgOCAwQzkuNjU3IDAgMTEgMS4zNDMgMTEgM1Y3QzExIDguNjU3IDkuNjU3IDEwIDggMTBDNi4zNDMgMTAgNSA4LjY1NyA1IDdWM1pNMy41IDdDMy41IDkuNDg1IDUuNTE1IDExLjUgOCAxMS41QzEwLjQ4NSAxMS41IDEyLjUgOS40ODUgMTIuNSA3SDE0QzE0IDEwLjA2IDExLjcxIDEyLjU4NSA4Ljc1IDEyLjk1NFYxNC41SDEyVjE2SDRWMTQuNUg3LjI1VjEyLjk1NEM0LjI5IDEyLjU4NSAyIDEwLjA2IDIgN0gzLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMicrophoneIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMicrophone';
}

export default RefIcon;
