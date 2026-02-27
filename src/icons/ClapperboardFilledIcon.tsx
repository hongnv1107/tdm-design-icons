// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const clapperboardFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.75 4.125C18.8203 4.125 18.8906 4.125 18.9609 4.125L14.4609 8.625H11.2266L15.7266 4.125H18.75ZM21 8.625H16.8516L20.5078 4.96875C20.8359 5.36719 21 5.83594 21 6.375V8.625ZM13.3359 4.125L8.83594 8.625H5.60156L10.1016 4.125H13.3359ZM5.25 4.125H7.71094L3.21094 8.625H3V6.375C3.02344 5.74219 3.24609 5.21484 3.66797 4.79297C4.08984 4.37109 4.61719 4.14844 5.25 4.125ZM21 9.75V17.625C20.9766 18.2578 20.7539 18.7852 20.332 19.207C19.9102 19.6289 19.3828 19.8516 18.75 19.875H5.25C4.61719 19.8516 4.08984 19.6289 3.66797 19.207C3.24609 18.7852 3.02344 18.2578 3 17.625V9.75H21Z"/>
  </svg>
);

const clapperboardFilledIconDefinition = svgToIconDefinition(
  clapperboardFilledSvg,
  'clapperboard-filled'
);

/**![ClapperboardFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTguNzUgNC4xMjVDMTguODIwMyA0LjEyNSAxOC44OTA2IDQuMTI1IDE4Ljk2MDkgNC4xMjVMMTQuNDYwOSA4LjYyNUgxMS4yMjY2TDE1LjcyNjYgNC4xMjVIMTguNzVaTTIxIDguNjI1SDE2Ljg1MTZMMjAuNTA3OCA0Ljk2ODc1QzIwLjgzNTkgNS4zNjcxOSAyMSA1LjgzNTk0IDIxIDYuMzc1VjguNjI1Wk0xMy4zMzU5IDQuMTI1TDguODM1OTQgOC42MjVINS42MDE1NkwxMC4xMDE2IDQuMTI1SDEzLjMzNTlaTTUuMjUgNC4xMjVINy43MTA5NEwzLjIxMDk0IDguNjI1SDNWNi4zNzVDMy4wMjM0NCA1Ljc0MjE5IDMuMjQ2MDkgNS4yMTQ4NCAzLjY2Nzk3IDQuNzkyOTdDNC4wODk4NCA0LjM3MTA5IDQuNjE3MTkgNC4xNDg0NCA1LjI1IDQuMTI1Wk0yMSA5Ljc1VjE3LjYyNUMyMC45NzY2IDE4LjI1NzggMjAuNzUzOSAxOC43ODUyIDIwLjMzMiAxOS4yMDdDMTkuOTEwMiAxOS42Mjg5IDE5LjM4MjggMTkuODUxNiAxOC43NSAxOS44NzVINS4yNUM0LjYxNzE5IDE5Ljg1MTYgNC4wODk4NCAxOS42Mjg5IDMuNjY3OTcgMTkuMjA3QzMuMjQ2MDkgMTguNzg1MiAzLjAyMzQ0IDE4LjI1NzggMyAxNy42MjVWOS43NUgyMVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={clapperboardFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ClapperboardFilledIcon';
}

export default RefIcon;
