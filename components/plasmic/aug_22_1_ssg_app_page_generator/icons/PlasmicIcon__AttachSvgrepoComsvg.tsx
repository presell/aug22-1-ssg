// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AttachSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AttachSvgrepoComsvgIcon(props: AttachSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6 7.91V16a6 6 0 006 6v0a6 6 0 006-6V6a4 4 0 00-4-4v0a4 4 0 00-4 4v9.182a2 2 0 002 2v0a2 2 0 002-2V8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AttachSvgrepoComsvgIcon;
/* prettier-ignore-end */
