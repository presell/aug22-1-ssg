// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Search1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Search1SvgIcon(props: Search1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h20v20H0z"} fill={"none"}></path>

      <path
        d={
          "M12.14 4.18a5.504 5.504 0 01.72 6.89c.12.1.22.21.36.31.2.16.47.36.81.59.34.24.56.39.66.47.42.31.73.57.94.78.32.32.6.65.84 1 .25.35.44.69.59 1.04.14.35.21.68.18 1-.02.32-.14.59-.36.81s-.49.34-.81.36c-.31.02-.65-.04-.99-.19-.35-.14-.7-.34-1.04-.59-.35-.24-.68-.52-1-.84-.21-.21-.47-.52-.77-.93-.1-.13-.25-.35-.47-.66-.22-.32-.4-.57-.56-.78-.16-.2-.29-.35-.44-.5a5.503 5.503 0 01-6.44-.98c-2.14-2.15-2.14-5.64 0-7.78a5.498 5.498 0 017.78 0zm-1.41 6.36a3.513 3.513 0 000-4.95 3.495 3.495 0 00-4.95 0 3.495 3.495 0 000 4.95 3.495 3.495 0 004.95 0z"
        }
      ></path>
    </svg>
  );
}

export default Search1SvgIcon;
/* prettier-ignore-end */
