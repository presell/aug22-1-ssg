// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScansvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScansvgIcon(props: ScansvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2 9V6.5C2 4.01 4.01 2 6.5 2H9m6 0h2.5C19.99 2 22 4.01 22 6.5V9m0 7v1.5c0 2.49-2.01 4.5-4.5 4.5H16m-7 0H6.5C4.01 22 2 19.99 2 17.5V15m15-5.5v5c0 2-1 3-3 3h-4c-2 0-3-1-3-3v-5c0-2 1-3 3-3h4c2 0 3 1 3 3zm2 2.5H5"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
      ></path>
    </svg>
  );
}

export default ScansvgIcon;
/* prettier-ignore-end */
