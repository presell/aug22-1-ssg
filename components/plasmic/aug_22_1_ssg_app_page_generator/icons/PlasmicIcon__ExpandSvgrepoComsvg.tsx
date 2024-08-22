// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExpandSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExpandSvgrepoComsvgIcon(props: ExpandSvgrepoComsvgIconProps) {
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
          "M4.75 9.233a.75.75 0 001.5 0h-1.5zM6.25 5.5a.75.75 0 00-1.5 0h1.5zm-.75-.75a.75.75 0 000 1.5v-1.5zm3.733 1.5a.75.75 0 000-1.5v1.5zM6.03 4.97a.75.75 0 00-1.06 1.06l1.06-1.06zm3.94 6.06a.75.75 0 101.06-1.06l-1.06 1.06zm5.797 7.72a.75.75 0 000 1.5v-1.5zm3.733 1.5a.75.75 0 000-1.5v1.5zm-.75-.75a.75.75 0 001.5 0h-1.5zm1.5-3.733a.75.75 0 00-1.5 0h1.5zm-1.28 4.263a.75.75 0 101.06-1.06l-1.06 1.06zm-3.94-6.06a.75.75 0 10-1.06 1.06l1.06-1.06zm-8.78 1.797a.75.75 0 00-1.5 0h1.5zM4.75 19.5a.75.75 0 001.5 0h-1.5zm.75-.75a.75.75 0 000 1.5v-1.5zm3.733 1.5a.75.75 0 000-1.5v1.5zM4.97 18.97a.75.75 0 101.06 1.06l-1.06-1.06zm6.06-3.94a.75.75 0 10-1.06-1.06l1.06 1.06zm4.737-10.28a.75.75 0 000 1.5v-1.5zm3.733 1.5a.75.75 0 000-1.5v1.5zm.75-.75a.75.75 0 00-1.5 0h1.5zm-1.5 3.733a.75.75 0 001.5 0h-1.5zm1.28-3.203a.75.75 0 00-1.06-1.06l1.06 1.06zm-6.06 3.94a.75.75 0 101.06 1.06l-1.06-1.06zm-7.72-.737V5.5h-1.5v3.733h1.5zM5.5 6.25h3.733v-1.5H5.5v1.5zm-.53-.22l5 5 1.06-1.06-5-5-1.06 1.06zm10.797 14.22H19.5v-1.5h-3.733v1.5zm4.483-.75v-3.733h-1.5V19.5h1.5zm-.22-.53l-5-5-1.06 1.06 5 5 1.06-1.06zM4.75 15.767V19.5h1.5v-3.733h-1.5zm.75 4.483h3.733v-1.5H5.5v1.5zm.53-.22l5-5-1.06-1.06-5 5 1.06 1.06zm9.737-13.78H19.5v-1.5h-3.733v1.5zm2.983-.75v3.733h1.5V5.5h-1.5zm.22-.53l-5 5 1.06 1.06 5-5-1.06-1.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ExpandSvgrepoComsvgIcon;
/* prettier-ignore-end */
