// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GraphsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GraphsvgIcon(props: GraphsvgIconProps) {
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

      <path d={"M7.03 0L4 3 3 2 0 5.03l1 1L3 4l1 1 4-4zM0 7v1h8V7z"}></path>
    </svg>
  );
}

export default GraphsvgIcon;
/* prettier-ignore-end */
