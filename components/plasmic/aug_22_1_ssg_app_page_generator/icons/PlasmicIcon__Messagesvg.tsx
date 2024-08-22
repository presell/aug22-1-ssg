// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MessagesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MessagesvgIcon(props: MessagesvgIconProps) {
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

      <g
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      >
        <path
          d={
            "M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4z"
          }
          strokeMiterlimit={"10"}
          strokeWidth={"1.5"}
        ></path>

        <path
          d={"M15.996 11h.01m-4.011 0h.01m-4.01 0h.008"}
          strokeWidth={"2"}
        ></path>
      </g>
    </svg>
  );
}

export default MessagesvgIcon;
/* prettier-ignore-end */
