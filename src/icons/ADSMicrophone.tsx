// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMicrophoneSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSMicrophone](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMS41QzcuMTcyIDEuNSA2LjUgMi4xNzIgNi41IDNWN0M2LjUgNy44MjggNy4xNzIgOC41IDggOC41QzguODI4IDguNSA5LjUgNy44MjggOS41IDdWM0M5LjUgMi4xNzIgOC44MjggMS41IDggMS41Wk01IDNDNSAxLjM0MyA2LjM0MyAwIDggMEM5LjY1NyAwIDExIDEuMzQzIDExIDNWN0MxMSA4LjY1NyA5LjY1NyAxMCA4IDEwQzYuMzQzIDEwIDUgOC42NTcgNSA3VjNaTTMuNSA3QzMuNSA5LjQ4NSA1LjUxNSAxMS41IDggMTEuNUMxMC40ODUgMTEuNSAxMi41IDkuNDg1IDEyLjUgN0gxNEMxNCAxMC4wNiAxMS43MSAxMi41ODUgOC43NSAxMi45NTRWMTQuNUgxMlYxNkg0VjE0LjVINy4yNVYxMi45NTRDNC4yOSAxMi41ODUgMiAxMC4wNiAyIDdIMy41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMicrophoneIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMicrophone';
}

export default RefIcon;
