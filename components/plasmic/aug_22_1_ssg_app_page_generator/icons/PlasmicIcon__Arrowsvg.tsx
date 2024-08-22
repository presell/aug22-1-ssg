// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowsvgIcon(props: ArrowsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 156 204"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M106.25 1.766l47.992 47.992a6.009 6.009 0 011.301 6.538 6.011 6.011 0 01-3.247 3.247 6 6 0 01-6.538-1.3L108 20.484V102A102.116 102.116 0 016 204a6 6 0 110-12 90.103 90.103 0 0090-90V20.485L58.242 58.242a6 6 0 01-8.484-8.484L97.75 1.766c.284-.285.597-.541.932-.764l.06-.036c.31-.201.637-.374.978-.515l.075-.027a5.937 5.937 0 011.043-.31l.058-.008a5.811 5.811 0 012.208 0c.02.003.039.005.058.009.357.07.706.174 1.044.31.024.009.049.016.074.026.341.141.669.314.978.515.019.013.04.023.06.036.335.223.648.479.932.764z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowsvgIcon;
/* prettier-ignore-end */
