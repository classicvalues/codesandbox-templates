import React from "react";
import { SVGIconProps } from "./types";
import { Shell } from "./Shell";
import { useUniqueId } from "./useUniqueId";

export const StorybookIcon: React.FC<SVGIconProps> = ({ ...props }) => {
  const id = useUniqueId();

  return (
    <Shell {...props}>
      <mask
        id={`Storybook_Mask0_${id}`}
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="3"
        y="0"
        width="26"
        height="32"
      >
        <path
          d="M3.99245 29.4869L3.00115 3.07343C2.96841 2.20109 3.63729 1.4618 4.50854 1.40735L26.9751 0.00318776C27.8619 -0.0522389 28.6258 0.621744 28.6812 1.50857C28.6833 1.54198 28.6843 1.57545 28.6843 1.60893V30.3911C28.6843 31.2797 27.964 32 27.0754 32C27.0514 32 27.0273 31.9995 27.0033 31.9984L5.528 31.0339C4.69163 30.9963 4.02385 30.3236 3.99245 29.4869Z"
          fill="white"
        />
      </mask>
      <g mask={`url(#Storybook_Mask0_${id})`}>
        <path
          d="M3.99245 29.4869L3.00115 3.07343C2.96841 2.20109 3.63729 1.4618 4.50854 1.40735L26.9751 0.00318776C27.8619 -0.0522389 28.6258 0.621744 28.6812 1.50857C28.6833 1.54198 28.6843 1.57545 28.6843 1.60893V30.3911C28.6843 31.2797 27.964 32 27.0754 32C27.0514 32 27.0273 31.9995 27.0033 31.9984L5.528 31.0339C4.69163 30.9963 4.02385 30.3236 3.99245 29.4869Z"
          fill="#FF4785"
        />
        <path
          d="M21.9659 3.93331L22.1194 0.242419L25.2047 0L25.3376 3.80629C25.3422 3.93876 25.2386 4.04989 25.1061 4.05452C25.0494 4.0565 24.9938 4.03831 24.9493 4.00319L23.7594 3.06591L22.3508 4.13449C22.2451 4.2146 22.0946 4.19393 22.0145 4.08833C21.9808 4.04387 21.9636 3.98906 21.9659 3.93331ZM18.0201 12.0612C18.0201 12.6872 22.2364 12.3872 22.8024 11.9475C22.8024 7.68495 20.5152 5.44505 16.327 5.44505C12.1387 5.44505 9.79215 7.7198 9.79215 11.1319C9.79215 17.0747 17.8121 17.1885 17.8121 20.43C17.8121 21.3399 17.3666 21.8801 16.3864 21.8801C15.1091 21.8801 14.6041 21.2278 14.6636 19.01C14.6636 18.5288 9.79215 18.3788 9.64363 19.01C9.26544 24.3847 12.614 25.935 16.4458 25.935C20.1587 25.935 23.0697 23.9559 23.0697 20.3731C23.0697 14.0038 14.9309 14.1744 14.9309 11.0182C14.9309 9.73864 15.8814 9.56804 16.4458 9.56804C17.0398 9.56804 18.1092 9.67275 18.0201 12.0612Z"
          fill="white"
        />
      </g>
    </Shell>
  );
};
