// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BarGraphGreensvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BarGraphGreensvgIcon(props: BarGraphGreensvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#tMc3dGAozebta)"}>
        <path d={"M0 15h15v1H0v-1z"} fill={"url(#tMc3dGAozebtb)"}></path>

        <path d={"M0 11h3v3H0v-3z"} fill={"url(#tMc3dGAozebtc)"}></path>

        <path d={"M4 9h3v5H4V9z"} fill={"url(#tMc3dGAozebtd)"}></path>

        <path d={"M8 5h3v9H8V5z"} fill={"url(#tMc3dGAozebte)"}></path>

        <path d={"M12 0h3v14h-3V0z"} fill={"url(#tMc3dGAozebtf)"}></path>
      </g>

      <defs>
        <linearGradient
          id={"tMc3dGAozebtb"}
          x1={"7.5"}
          y1={"15"}
          x2={"7.5"}
          y2={"16"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#00E224"}></stop>

          <stop offset={"1"} stopColor={"#007D14"}></stop>
        </linearGradient>

        <linearGradient
          id={"tMc3dGAozebtc"}
          x1={"1.5"}
          y1={"11"}
          x2={"1.5"}
          y2={"14"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#00E224"}></stop>

          <stop offset={"1"} stopColor={"#007D14"}></stop>
        </linearGradient>

        <linearGradient
          id={"tMc3dGAozebtd"}
          x1={"5.5"}
          y1={"9"}
          x2={"5.5"}
          y2={"14"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#00E224"}></stop>

          <stop offset={"1"} stopColor={"#007D14"}></stop>
        </linearGradient>

        <linearGradient
          id={"tMc3dGAozebte"}
          x1={"9.5"}
          y1={"5"}
          x2={"9.5"}
          y2={"14"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#00E224"}></stop>

          <stop offset={"1"} stopColor={"#007D14"}></stop>
        </linearGradient>

        <linearGradient
          id={"tMc3dGAozebtf"}
          x1={"13.5"}
          y1={"0"}
          x2={"13.5"}
          y2={"14"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#00E224"}></stop>

          <stop offset={"1"} stopColor={"#007D14"}></stop>
        </linearGradient>

        <clipPath id={"tMc3dGAozebta"}>
          <path fill={"#fff"} d={"M0 0h15v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default BarGraphGreensvgIcon;
/* prettier-ignore-end */
