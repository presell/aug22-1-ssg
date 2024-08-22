// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CamerasvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CamerasvgIcon(props: CamerasvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h16v16H0z"} fill={"none"}></path>

      <path
        d={
          "M6 8.5c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zM15 3h-3.5c-.25-1-.5-2-1.5-2H6C5 1 4.75 2 4.5 3H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-7 9.5a4 4 0 110-8 4 4 0 010 8z"
        }
      ></path>
    </svg>
  );
}

export default CamerasvgIcon;
/* prettier-ignore-end */
