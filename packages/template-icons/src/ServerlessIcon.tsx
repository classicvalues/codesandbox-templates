import React from "react";
import { SVGIconProps } from "./types";
import { Shell } from "./Shell";

export const ServerlessIcon: React.FC<SVGIconProps> = ({ ...props }) => (
  <Shell {...props}>
    <path
      d="M0 23.1502H5.66394L3.90916 28.4497H0V23.1502ZM0 13.0751H9.00012L7.24551 18.3746H0V13.0751ZM0 3H12.3365L10.5815 8.29933H0V3ZM17.9186 3H32V8.29933H16.164L17.9186 3ZM14.5825 13.0751H31.9999V18.3746H12.8278L14.5825 13.0751ZM11.2463 23.1502H31.9999V28.4497H9.49172L11.2463 23.1502Z"
      fill="#F26D61"
    />
  </Shell>
);
