import React from "react";
import { SVGIconProps } from "./types";
import { Shell } from "./Shell";
import { useUniqueId } from "./useUniqueId";

export const HTML5Icon: React.FC<SVGIconProps> = ({ ...props }) => {
  const id = useUniqueId();

  return (
    <Shell {...props}>
      <g clipPath={`url(#HTML5_Clip0_${id})`}>
        <path
          d="M30.216 0L27.6454 28.7967L16.0907 32L4.56783 28.8012L2 0H30.216Z"
          fill="#E44D26"
        />
        <path
          d="M16.108 29.5515L25.4447 26.963L27.6415 2.35497H16.108V29.5515Z"
          fill="#F16529"
        />
        <path
          d="M11.1109 9.4197H16.108V5.88731H7.25053L7.33509 6.83499L8.20327 16.5692H16.108V13.0369H11.4338L11.1109 9.4197Z"
          fill="#EBEBEB"
        />
        <path
          d="M11.907 18.3354H8.36111L8.856 23.8818L16.0917 25.8904L16.108 25.8859V22.2108L16.0925 22.2149L12.1585 21.1527L11.907 18.3354Z"
          fill="#EBEBEB"
        />
        <path
          d="M16.0958 16.5692H20.4455L20.0354 21.1504L16.0958 22.2138V25.8887L23.3373 23.8817L23.3904 23.285L24.2205 13.9855L24.3067 13.0369H16.0958V16.5692Z"
          fill="white"
        />
        <path
          d="M16.0958 9.41105V9.41969H24.6281L24.6989 8.62572L24.8599 6.83499L24.9444 5.88731H16.0958V9.41105Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id={`HTML5_Clip0_${id}`}>
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </Shell>
  );
};
