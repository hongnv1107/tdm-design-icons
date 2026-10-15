// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPhoneSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1.75C1 1.336 1.336 1 1.75 1H5.25C5.585 1 5.879 1.222 5.971 1.544L6.792 4.418C6.983 5.084 6.762 5.8 6.23 6.243L4.29 7.86C5.265 9.411 6.589 10.735 8.14 11.71L9.757 9.77C10.2 9.238 10.916 9.017 11.582 9.208L14.456 10.029C14.778 10.121 15 10.415 15 10.75V14.25C15 14.664 14.664 15 14.25 15C11.984 15 9.828 14.391 7.941 13.336C5.738 12.104 3.896 10.262 2.664 8.059C1.609 6.172 1 4.016 1 1.75ZM9.484 12.44C10.734 13.018 12.09 13.379 13.5 13.475V11.316L11.17 10.65C11.075 10.623 10.973 10.654 10.909 10.73L9.484 12.44ZM3.56 6.516L5.27 5.091C5.346 5.027 5.377 4.925 5.35 4.83L4.684 2.5H2.525C2.621 3.91 2.982 5.266 3.56 6.516Z"/>
  </svg>
);

const aDSPhoneIconDefinition = svgToIconDefinition(
  aDSPhoneSvg,
  'ads-phone'
);

/**![ADSPhone](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgMS43NUMxIDEuMzM2IDEuMzM2IDEgMS43NSAxSDUuMjVDNS41ODUgMSA1Ljg3OSAxLjIyMiA1Ljk3MSAxLjU0NEw2Ljc5MiA0LjQxOEM2Ljk4MyA1LjA4NCA2Ljc2MiA1LjggNi4yMyA2LjI0M0w0LjI5IDcuODZDNS4yNjUgOS40MTEgNi41ODkgMTAuNzM1IDguMTQgMTEuNzFMOS43NTcgOS43N0MxMC4yIDkuMjM4IDEwLjkxNiA5LjAxNyAxMS41ODIgOS4yMDhMMTQuNDU2IDEwLjAyOUMxNC43NzggMTAuMTIxIDE1IDEwLjQxNSAxNSAxMC43NVYxNC4yNUMxNSAxNC42NjQgMTQuNjY0IDE1IDE0LjI1IDE1QzExLjk4NCAxNSA5LjgyOCAxNC4zOTEgNy45NDEgMTMuMzM2QzUuNzM4IDEyLjEwNCAzLjg5NiAxMC4yNjIgMi42NjQgOC4wNTlDMS42MDkgNi4xNzIgMSA0LjAxNiAxIDEuNzVaTTkuNDg0IDEyLjQ0QzEwLjczNCAxMy4wMTggMTIuMDkgMTMuMzc5IDEzLjUgMTMuNDc1VjExLjMxNkwxMS4xNyAxMC42NUMxMS4wNzUgMTAuNjIzIDEwLjk3MyAxMC42NTQgMTAuOTA5IDEwLjczTDkuNDg0IDEyLjQ0Wk0zLjU2IDYuNTE2TDUuMjcgNS4wOTFDNS4zNDYgNS4wMjcgNS4zNzcgNC45MjUgNS4zNSA0LjgzTDQuNjg0IDIuNUgyLjUyNUMyLjYyMSAzLjkxIDIuOTgyIDUuMjY2IDMuNTYgNi41MTZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPhoneIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPhone';
}

export default RefIcon;
