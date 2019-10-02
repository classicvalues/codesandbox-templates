import React from "react";
import { SVGIconProps } from "./types";
import { Shell } from "./Shell";

export const PrismaIcon: React.FC<SVGIconProps> = ({ ...props }) => (
  <Shell {...props}>
    <path
      d="M28 32H4C1.7909 32 0 30.2091 0 28V4C0 1.7909 1.7909 0 4 0H28C30.2091 0 32 1.7909 32 4V28C32 30.2091 30.2091 32 28 32Z"
      fill="#08334A"
    />
    <path
      d="M25.8063 22.2846L17.5528 4.7571C17.3439 4.3177 16.9108 4.0281 16.4249 4.003C15.9378 3.9704 15.4731 4.2113 15.219 4.6281L6.2672 19.127C5.9893 19.574 5.9951 20.1414 6.2822 20.5825L10.6588 27.3601C10.9989 27.8827 11.6421 28.1192 12.2397 27.9415L24.9406 24.1847C25.3276 24.0715 25.6464 23.7962 25.8148 23.4299C25.9809 23.0654 25.978 22.6462 25.807 22.284L25.8063 22.2846ZM23.9585 23.0363L13.181 26.2233C12.8522 26.3211 12.5366 26.0361 12.6051 25.7044L16.4556 7.2673C16.5276 6.9223 17.0039 6.8677 17.1545 7.1869L24.2825 22.3237C24.3463 22.4602 24.3471 22.6178 24.2846 22.7549C24.2221 22.892 24.1034 22.9949 23.9585 23.0363Z"
      fill="white"
    />
  </Shell>
);
