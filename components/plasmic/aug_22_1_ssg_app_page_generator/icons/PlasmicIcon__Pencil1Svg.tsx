// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Pencil1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Pencil1SvgIcon(props: Pencil1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 8 8"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M6 0L5 1l2 2 1-1zM4 2L0 6v2h2l4-4z"}></path>
    </svg>
  );
}

export default Pencil1SvgIcon;
/* prettier-ignore-end */
