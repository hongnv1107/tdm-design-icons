// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const houseFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.1225 10.0769L13.8735 0.778929C12.8404 -0.259644 11.1596 -0.259643 10.1265 0.778931L0.877468 10.0769C0.384901 10.5721 0.108398 11.2421 0.108398 11.9405V21.3574C0.108398 22.8169 1.29152 24 2.75098 24H5.78994C7.2494 24 8.43252 22.8169 8.43252 21.3574V15.8835C8.43252 14.4241 9.61564 13.2409 11.0751 13.2409H12.9249C14.3844 13.2409 15.5675 14.4241 15.5675 15.8835V21.3574C15.5675 22.8169 16.7506 24 18.2101 24H21.249C22.7085 24 23.8916 22.8169 23.8916 21.3574V11.9405C23.8916 11.2421 23.6151 10.5721 23.1225 10.0769Z"/>
  </svg>
);

const houseFilledIconDefinition = svgToIconDefinition(
  houseFilledSvg,
  'house-filled'
);

/**![HouseFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjMuMTIyNSAxMC4wNzY5TDEzLjg3MzUgMC43Nzg5MjlDMTIuODQwNCAtMC4yNTk2NDQgMTEuMTU5NiAtMC4yNTk2NDMgMTAuMTI2NSAwLjc3ODkzMUwwLjg3NzQ2OCAxMC4wNzY5QzAuMzg0OTAxIDEwLjU3MjEgMC4xMDgzOTggMTEuMjQyMSAwLjEwODM5OCAxMS45NDA1VjIxLjM1NzRDMC4xMDgzOTggMjIuODE2OSAxLjI5MTUyIDI0IDIuNzUwOTggMjRINS43ODk5NEM3LjI0OTQgMjQgOC40MzI1MiAyMi44MTY5IDguNDMyNTIgMjEuMzU3NFYxNS44ODM1QzguNDMyNTIgMTQuNDI0MSA5LjYxNTY0IDEzLjI0MDkgMTEuMDc1MSAxMy4yNDA5SDEyLjkyNDlDMTQuMzg0NCAxMy4yNDA5IDE1LjU2NzUgMTQuNDI0MSAxNS41Njc1IDE1Ljg4MzVWMjEuMzU3NEMxNS41Njc1IDIyLjgxNjkgMTYuNzUwNiAyNCAxOC4yMTAxIDI0SDIxLjI0OUMyMi43MDg1IDI0IDIzLjg5MTYgMjIuODE2OSAyMy44OTE2IDIxLjM1NzRWMTEuOTQwNUMyMy44OTE2IDExLjI0MjEgMjMuNjE1MSAxMC41NzIxIDIzLjEyMjUgMTAuMDc2OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={houseFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HouseFilled';
}

export default RefIcon;
