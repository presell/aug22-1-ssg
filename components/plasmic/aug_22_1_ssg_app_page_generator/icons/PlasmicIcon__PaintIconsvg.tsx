// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaintIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PaintIconsvgIcon(props: PaintIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 128 128"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#RtLIihmW050Za)"}>
        <path
          d={
            "M111.028 18.19c6.62 6.07 9.98 12.9 9.97 20.31-.01 7.78-3.79 13.86-5.52 15.43-2.56 2.34-5.09 3.85-7.55 5.31l-.002.001c-4.589 2.74-8.928 5.33-10.618 12.049-1.04 4.14.14 11.45 7.68 14.63m6.04-67.73C104.958 12.63 91.118 7 76.408 7c-12.58 0-25.73 3.31-37.02 9.33-12.95 6.9-22.58 16.95-27.86 29.07m99.5-27.21l-.676.737s0 0 0 0m.676-.737l-.676.737M11.528 45.4c-7.16 16.44-5.69 34.38 4.04 49.24m-4.04-49.24l.917.4m-.917-.4l.917.4s0 0 0 0m3.123 48.84C26.218 110.9 45.018 121 64.618 121c18.06 0 37.31-11.33 44.8-21.82m-93.85-4.54l.836-.548m-.836.548l.836-.548s0 0 0 0m93.014 5.088c.323-.465.661-.895.989-1.313l.201-.257m-1.19 1.57l-.814-.581a.018.018 0 01-.004.005m.818.576l-.821-.572.003-.004m2.008-.994c.085-.11.17-.218.255-.325.085-.108.17-.215.255-.325.75-.97 1.94-2.9 1.42-4.86-.58-2.21-3.19-4.34-7.55-6.18m5.62 11.69l-.789-.615-.001.002m.79.613l-.791-.611.001-.002m-4.83-11.077l-.389.921m.389-.921l-.389.921s0 0 0 0m0 0c-2.617-1.104-4.523-2.672-5.865-4.442m5.865 4.442c2.126.898 3.776 1.846 4.948 2.804 1.178.964 1.807 1.883 2.024 2.709v.002c.189.712.079 1.46-.2 2.187-.279.725-.703 1.364-1.044 1.805h0c-.081.105-.163.209-.249.317h0c-.084.107-.172.217-.26.332M98.734 82.399a12.27 12.27 0 011.129 2.394v.002c1.093 3.178.821 6.693-.737 9.875v.001c-1.95 3.962-5.671 7.1-10.207 8.636h0a18.974 18.974 0 01-6.091 1.023c-6.5 0-12.04-3.444-13.945-8.964v-.001c-1.093-3.178-.822-6.693.737-9.875v-.001c1.95-3.962 5.67-7.1 10.207-8.636h0a18.965 18.965 0 016.09-1.023c5.014 0 9.455 2.054 12.1 5.521m.717 1.048c-.26-.342-.499-.692-.718-1.048m.718 1.048a12.378 12.378 0 00-.718-1.048m11.802 15.646l-.193.246c-.327.418-.684.873-1.025 1.36m0 0c-3.628 5.08-10.17 10.44-18.078 14.533C82.62 117.226 73.45 120 64.618 120c-19.266 0-37.75-9.933-48.213-25.908m0 0C6.86 79.518 5.417 61.934 12.444 45.8m0 0c5.18-11.89 14.64-21.78 27.413-28.587h0C51.006 11.268 63.995 8 76.408 8c14.515 0 28.096 5.57 33.944 10.927m0 0c6.462 5.925 9.655 12.502 9.646 19.572-.005 3.73-.914 7.06-2.033 9.648-1.13 2.614-2.437 4.387-3.159 5.043l-.003.002c-2.476 2.263-4.924 3.727-7.386 5.188l-.002.001-.063.038c-4.568 2.727-9.223 5.506-11.014 12.627h0c-.692 2.755-.478 6.801 1.678 10.305m14.646 20.149h0c-4.258 5.977-11.561 11.84-20.108 16.208C84 122.079 74.107 125 64.618 125 23.682 125-9.912 84.59 7.86 43.8l104.801 57.7zm0 0c.322-.452.649-.868.991-1.304.2-.256.406-.518.619-.798 1.067-1.387 2.778-4.172 2.297-7.46-.494-3.372-3.215-6.835-10.043-9.71-5.342-2.252-5.996-7.417-5.349-9.962l.001-.002m11.484 29.236l-11.484-29.236m0 0c1.005-3.997 3.188-6.04 6.168-7.98a78.675 78.675 0 012.549-1.564c2.51-1.498 5.403-3.225 8.267-5.842h.001l-16.985 15.386zM81.43 81.597h.001a13.885 13.885 0 014.477-.757c4.403 0 8.042 2.19 9.225 5.597 1.556 4.505-1.68 10.056-7.825 12.146-1.51.505-3.031.747-4.48.747-4.404 0-8.042-2.19-9.225-5.587-1.557-4.506 1.681-10.056 7.827-12.146zM76.408 3C51.754 3 20.174 15.523 7.86 43.8l105.177-27.83.676-.736s0 0 0 0C107.21 9.256 92.705 3 76.408 3z"
          }
          fill={"#fff"}
          stroke={"#fff"}
          strokeWidth={"2"}
        ></path>

        <path
          d={
            "M65.597 33.597c6.759-2.11 10.867-8.213 9.176-13.633-1.692-5.42-8.542-8.103-15.3-5.994-6.76 2.11-10.867 8.213-9.176 13.632 1.691 5.42 8.541 8.104 15.3 5.995z"
          }
          fill={"#C62828"}
        ></path>

        <path
          d={
            "M72.86 18.74c1.61 5.27-2.47 11.21-9.13 13.26-6.66 2.05-13.37-.56-14.98-5.83-1.61-5.27 2.47-11.21 9.13-13.26 6.66-2.05 13.36.56 14.98 5.83z"
          }
          fill={"url(#RtLIihmW050Zb)"}
        ></path>

        <path
          d={
            "M46.745 41.665c1.59 5.094-2.28 11.02-8.943 13.1-6.664 2.08-13.217-.595-14.807-5.688-1.59-5.093 2.28-11.02 8.944-13.1 6.664-2.079 13.217.595 14.806 5.688zm-7.081 29.804c1.644 5.269-2.337 11.383-9.19 13.521-6.851 2.139-13.604-.626-15.248-5.895-1.644-5.269 2.338-11.383 9.19-13.521 6.851-2.138 13.604.626 15.248 5.895zm20.251 28.02c1.594 5.101-2.174 10.989-8.69 13.026-6.517 2.036-12.968-.659-14.562-5.759-1.594-5.101 2.174-10.99 8.69-13.026 6.517-2.037 12.968.658 14.562 5.759z"
          }
          stroke={"#fff"}
        ></path>
      </g>

      <defs>
        <radialGradient
          id={"RtLIihmW050Zb"}
          cx={"0"}
          cy={"0"}
          r={"1"}
          gradientUnits={"userSpaceOnUse"}
          gradientTransform={"matrix(0 17.099 -13.3338 0 59.166 13.834)"}
        >
          <stop stopColor={"#EF5350"}></stop>

          <stop offset={".346"} stopColor={"#E94B49"}></stop>

          <stop offset={".887"} stopColor={"#D73534"}></stop>

          <stop offset={"1"} stopColor={"#D32F2F"}></stop>
        </radialGradient>

        <clipPath id={"RtLIihmW050Za"}>
          <path fill={"#fff"} d={"M0 0h128v128H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default PaintIconsvgIcon;
/* prettier-ignore-end */
