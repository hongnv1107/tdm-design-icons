// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextSpellcheckSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.67 0.494C4.777 0.198 5.059 0 5.375 0H6.125C6.441 0 6.723 0.198 6.83 0.494L10.455 10.494C10.485 10.576 10.5 10.663 10.5 10.75V11H9.06L9.045 11.006L9.043 11H9V10.882L7.955 8H3.545L2.5 10.882V11H2.457L2.455 11.006L2.44 11H1V10.75C1 10.663 1.015 10.576 1.045 10.494L4.67 0.494ZM4.088 6.5H7.412L5.75 1.916L4.088 6.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.928 9.265L15.072 10.235L10.405 15.735C10.263 15.903 10.054 16 9.833 16C9.613 16 9.404 15.903 9.261 15.735L6.928 12.985L8.072 12.015L9.833 14.091L13.928 9.265Z"/>
  </svg>
);

const aDSTextSpellcheckIconDefinition = svgToIconDefinition(
  aDSTextSpellcheckSvg,
  'ads-text-spellcheck'
);

/**![ADSTextSpellcheck](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC42NyAwLjQ5NEM0Ljc3NyAwLjE5OCA1LjA1OSAwIDUuMzc1IDBINi4xMjVDNi40NDEgMCA2LjcyMyAwLjE5OCA2LjgzIDAuNDk0TDEwLjQ1NSAxMC40OTRDMTAuNDg1IDEwLjU3NiAxMC41IDEwLjY2MyAxMC41IDEwLjc1VjExSDkuMDZMOS4wNDUgMTEuMDA2TDkuMDQzIDExSDlWMTAuODgyTDcuOTU1IDhIMy41NDVMMi41IDEwLjg4MlYxMUgyLjQ1N0wyLjQ1NSAxMS4wMDZMMi40NCAxMUgxVjEwLjc1QzEgMTAuNjYzIDEuMDE1IDEwLjU3NiAxLjA0NSAxMC40OTRMNC42NyAwLjQ5NFpNNC4wODggNi41SDcuNDEyTDUuNzUgMS45MTZMNC4wODggNi41WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuOTI4IDkuMjY1TDE1LjA3MiAxMC4yMzVMMTAuNDA1IDE1LjczNUMxMC4yNjMgMTUuOTAzIDEwLjA1NCAxNiA5LjgzMyAxNkM5LjYxMyAxNiA5LjQwNCAxNS45MDMgOS4yNjEgMTUuNzM1TDYuOTI4IDEyLjk4NUw4LjA3MiAxMi4wMTVMOS44MzMgMTQuMDkxTDEzLjkyOCA5LjI2NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextSpellcheckIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextSpellcheck';
}

export default RefIcon;
