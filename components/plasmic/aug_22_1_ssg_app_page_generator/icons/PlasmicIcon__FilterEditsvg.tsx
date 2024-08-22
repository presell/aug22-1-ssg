// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilterEditsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilterEditsvgIcon(props: FilterEditsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26 6H4v3.17l7.41 7.42.59.58V26h4v-2h2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2v-8l-7.41-7.41A2 2 0 012 9.17V6a2 2 0 012-2h22z"
        }
      ></path>

      <path
        d={
          "M29.71 11.29l-3-3a1 1 0 00-1.42 0L16 17.59V22h4.41l9.3-9.29a1 1 0 000-1.42zM19.59 20H18v-1.59l5-5L24.59 15zM26 13.59L24.41 12 26 10.41 27.59 12z"
        }
      ></path>

      <path d={"M0 0h32v32H0z"} fill={"none"}></path>
    </svg>
  );
}

export default FilterEditsvgIcon;
/* prettier-ignore-end */
