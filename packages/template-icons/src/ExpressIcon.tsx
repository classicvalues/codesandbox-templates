import React from "react";
import { SVGIconProps } from "./types";
import { Shell } from "./Shell";

export const ExpressIcon: React.FC<SVGIconProps> = ({ ...props }) => (
  <Shell {...props}>
    <path
      d="M28 32H4C1.7909 32 0 30.2091 0 28V4C0 1.7909 1.7909 0 4 0H28C30.2091 0 32 1.7909 32 4V28C32 30.2091 30.2091 32 28 32Z"
      fill="#FEFEFE"
    />
    <path
      d="M19 4H17V3H19V4ZM30 10H28V11H30V10ZM14 1H12V2H14V1ZM27 21V23H26V24H24V25H27V24H28V21H27ZM25 2H24V3H25V2ZM11 11H10V12H11V11ZM9 3H8V4H9V3ZM15 14H13V16H15V14ZM27 13V14H28V15H29V13H27ZM25 11H24V12H25V11ZM15 22V23H16V24H17V22H15ZM27 18H26V19H27V18ZM18 18H17V19H18V18ZM16 29H15V30H16V29ZM10 28H9V29H10V28ZM11 18H10V19H11V18ZM8 19H7V20H8V19ZM7 26H6V27H7V26ZM3 26H2V27H3V26ZM3 19H1V20H3V19ZM14 26H12V27H14V26ZM10 22H9V24H10V22ZM5 22H4V24H5V22ZM27 28V29H26V30H28V28H27ZM11 6H10V8H11V6ZM20 26H19V28H20V26ZM2 9H1V11H2V9ZM5 7H4V9H5V7ZM17 10V12H18V11H19V10H17ZM3 3V5H4V4H5V3H3ZM23 6H21V8H23V6ZM26 5V7H27V8H28V7H29V5H26Z"
      fill="#F9F9F9"
    />
    <path
      d="M3.16919 17.8718V14.9783H6.78198V14.809H3.16919V12.1693H7.01041V12H3V18.041H7.0443V17.8717H3.16919V17.8718ZM10.3016 13.6922L8.80404 15.6635L7.34033 13.6922H7.12044L8.70264 15.7904L6.96816 18.041H7.17114L8.80404 15.9173L10.4454 18.041H10.6569L8.91398 15.7904L10.5046 13.6922H10.3016V13.6922ZM11.1646 19.5302V16.8227H11.1815C11.2831 17.2176 11.4833 17.5348 11.7823 17.7746C12.0812 18.0143 12.462 18.1341 12.9246 18.1341C13.2235 18.1341 13.4886 18.0735 13.7198 17.9522C13.9511 17.831 14.1442 17.666 14.2993 17.4573C14.4544 17.2486 14.5729 17.006 14.6547 16.7296C14.7365 16.4532 14.7773 16.1627 14.7773 15.8582C14.7773 15.531 14.735 15.2293 14.6504 14.9529C14.5657 14.6765 14.4432 14.4368 14.2823 14.2337C14.1216 14.0306 13.927 13.8726 13.6985 13.7599C13.4701 13.6471 13.2121 13.5906 12.9244 13.5906C12.7044 13.5906 12.4999 13.623 12.311 13.6879C12.122 13.7528 11.9542 13.8444 11.8076 13.9629C11.661 14.0814 11.534 14.221 11.4269 14.3817C11.3197 14.5425 11.238 14.7187 11.1815 14.9105H11.1646V13.6921H10.9954V19.5301H11.1646V19.5302ZM12.9246 17.9734C12.3944 17.9734 11.9685 17.7915 11.647 17.4277C11.3255 17.0639 11.1646 16.5407 11.1646 15.8583C11.1646 15.5762 11.2041 15.3083 11.2831 15.0545C11.3622 14.8008 11.4764 14.5779 11.6258 14.3861C11.7753 14.1943 11.9601 14.042 12.1799 13.9292C12.3999 13.8165 12.6481 13.76 12.9246 13.76C13.2066 13.76 13.4533 13.8164 13.6648 13.9292C13.8764 14.042 14.0512 14.1957 14.1895 14.3904C14.3276 14.585 14.432 14.8078 14.5025 15.0588C14.573 15.3098 14.6083 15.5763 14.6083 15.8584C14.6083 16.1122 14.5758 16.3646 14.511 16.6156C14.4461 16.8666 14.346 17.0923 14.2106 17.2925C14.0753 17.4928 13.9018 17.6563 13.6904 17.7832C13.4786 17.9099 13.2235 17.9734 12.9246 17.9734ZM15.7081 18.041V15.5789C15.7081 15.342 15.7419 15.1107 15.8096 14.8851C15.8773 14.6594 15.9816 14.4606 16.1227 14.2886C16.2636 14.1167 16.4428 13.9812 16.6599 13.8826C16.8771 13.7839 17.1352 13.7429 17.4342 13.7599V13.5906C17.1746 13.5851 16.9476 13.6132 16.7531 13.6752C16.5584 13.7373 16.3907 13.8219 16.2496 13.929C16.1086 14.0362 15.9958 14.1617 15.9112 14.3055C15.8265 14.4494 15.7646 14.6031 15.725 14.7667H15.7081V13.6922H15.5389V18.041H15.7081V18.041ZM17.6456 15.9005H21.2838C21.2951 15.6016 21.2654 15.3138 21.195 15.0375C21.1244 14.7611 21.0116 14.5158 20.8565 14.3014C20.7015 14.0871 20.5012 13.915 20.2558 13.7853C20.0105 13.6555 19.7186 13.5906 19.3801 13.5906C19.1375 13.5906 18.9007 13.6414 18.6694 13.7429C18.4382 13.8445 18.235 13.9925 18.0601 14.1872C17.8853 14.3818 17.7443 14.6201 17.6372 14.9022C17.53 15.1842 17.4763 15.5056 17.4763 15.8667C17.4763 16.1881 17.513 16.4884 17.5864 16.7677C17.6596 17.0469 17.7725 17.2894 17.9247 17.4954C18.0771 17.7012 18.273 17.8606 18.5127 17.9735C18.7525 18.0862 19.0415 18.1399 19.38 18.1342C19.8763 18.1342 20.2937 17.9947 20.6322 17.7155C20.9706 17.4362 21.1708 17.0428 21.2329 16.5351H21.0636C20.9903 17.0146 20.8028 17.3742 20.501 17.6139C20.1992 17.8536 19.8199 17.9735 19.363 17.9735C19.0528 17.9735 18.7904 17.9198 18.5761 17.8127C18.3618 17.7055 18.187 17.5589 18.0516 17.3727C17.9162 17.1865 17.8161 16.968 17.7512 16.717C17.6865 16.466 17.6513 16.1938 17.6456 15.9005ZM21.1145 15.7313H17.6456C17.6625 15.4267 17.7189 15.1531 17.8148 14.9106C17.9107 14.6681 18.0362 14.4607 18.1913 14.2887C18.3464 14.1168 18.527 13.9855 18.7329 13.8953C18.9387 13.805 19.1602 13.7599 19.397 13.7599C19.679 13.7599 19.9272 13.8121 20.1415 13.9164C20.3558 14.0208 20.535 14.1631 20.6788 14.3437C20.8227 14.5241 20.9313 14.7343 21.0046 14.974C21.0779 15.2137 21.1145 15.4662 21.1145 15.7313ZM24.795 14.9782H24.9642C24.9642 14.493 24.8232 14.1406 24.5412 13.9206C24.2592 13.7006 23.8756 13.5906 23.3905 13.5906C23.1198 13.5906 22.8913 13.6244 22.7051 13.6922C22.5189 13.7599 22.3668 13.8473 22.2483 13.9546C22.1298 14.0617 22.0452 14.1802 21.9944 14.3098C21.9436 14.4395 21.9183 14.5636 21.9183 14.6821C21.9183 14.919 21.9606 15.1079 22.0452 15.249C22.1298 15.39 22.2624 15.5 22.4428 15.5789C22.5669 15.6353 22.7079 15.6861 22.8659 15.7313C23.0238 15.7764 23.2071 15.8243 23.4158 15.8751C23.6019 15.9202 23.7852 15.9654 23.9658 16.0105C24.1463 16.0556 24.3056 16.1163 24.4439 16.1924C24.582 16.2685 24.6949 16.3659 24.7822 16.4843C24.8697 16.6027 24.9134 16.7578 24.9134 16.9497C24.9134 17.1358 24.8696 17.2937 24.7822 17.4234C24.6949 17.5531 24.5834 17.6589 24.448 17.7407C24.3126 17.8225 24.1618 17.8818 23.9954 17.9184C23.8291 17.9551 23.6668 17.9734 23.5089 17.9734C22.9956 17.9734 22.6021 17.8592 22.3286 17.6307C22.055 17.4022 21.9183 17.0427 21.9183 16.552H21.749C21.749 17.0991 21.8971 17.4996 22.1932 17.7534C22.4893 18.0072 22.9279 18.1341 23.5089 18.1341C23.6951 18.1341 23.8825 18.113 24.0715 18.0707C24.2604 18.0285 24.4297 17.9593 24.5792 17.8635C24.7286 17.7675 24.8498 17.6435 24.9429 17.4912C25.036 17.3389 25.0825 17.1528 25.0825 16.9328C25.0825 16.7241 25.0416 16.5548 24.9599 16.4251C24.8781 16.2954 24.7709 16.1882 24.6384 16.1036C24.5058 16.019 24.3563 15.9527 24.19 15.9048C24.0236 15.8569 23.8557 15.8103 23.6866 15.7653C23.4497 15.7032 23.2424 15.6497 23.0648 15.6045C22.887 15.5594 22.722 15.5058 22.5697 15.4437C22.4231 15.3817 22.3061 15.2928 22.2186 15.1772C22.1312 15.0616 22.0875 14.8966 22.0875 14.6822C22.0875 14.6427 22.0988 14.5721 22.1213 14.4706C22.1439 14.3691 22.1975 14.2662 22.2822 14.1618C22.3667 14.0575 22.4965 13.9644 22.6713 13.8827C22.8462 13.8009 23.0858 13.76 23.3905 13.76C23.5992 13.76 23.7896 13.7825 23.9616 13.8277C24.1335 13.8728 24.2816 13.9447 24.4058 14.0434C24.5299 14.1421 24.6258 14.2677 24.6934 14.42C24.761 14.5722 24.795 14.7582 24.795 14.9782ZM28.7123 14.9782H28.8816C28.8816 14.493 28.7406 14.1406 28.4585 13.9206C28.1765 13.7006 27.793 13.5906 27.3079 13.5906C27.0372 13.5906 26.8088 13.6244 26.6226 13.6922C26.4364 13.7599 26.2841 13.8473 26.1657 13.9546C26.0472 14.0617 25.9625 14.1802 25.9118 14.3098C25.8611 14.4395 25.8356 14.5636 25.8356 14.6821C25.8356 14.919 25.878 15.1079 25.9626 15.249C26.0472 15.39 26.1797 15.5 26.3603 15.5789C26.4843 15.6353 26.6253 15.6861 26.7832 15.7313C26.9412 15.7764 27.1245 15.8243 27.3332 15.8751C27.5194 15.9202 27.7027 15.9654 27.8831 16.0105C28.0636 16.0556 28.223 16.1163 28.3611 16.1924C28.4993 16.2685 28.6121 16.3659 28.6995 16.4843C28.7869 16.6027 28.8306 16.7578 28.8306 16.9497C28.8306 17.1358 28.7869 17.2937 28.6995 17.4234C28.612 17.5531 28.5007 17.6589 28.3653 17.7407C28.2299 17.8225 28.079 17.8818 27.9126 17.9184C27.7462 17.9551 27.584 17.9734 27.4262 17.9734C26.9129 17.9734 26.5195 17.8592 26.2459 17.6307C25.9724 17.4022 25.8355 17.0427 25.8355 16.552H25.6664C25.6664 17.0991 25.8144 17.4996 26.1107 17.7534C26.4067 18.0072 26.8453 18.1341 27.4263 18.1341C27.6124 18.1341 27.7999 18.113 27.9889 18.0707C28.1778 18.0285 28.347 17.9593 28.4965 17.8635C28.646 17.7675 28.7673 17.6435 28.8603 17.4912C28.9535 17.3388 29 17.1526 29 16.9327C29 16.724 28.9591 16.5547 28.8773 16.425C28.7955 16.2953 28.6884 16.1881 28.5559 16.1035C28.4234 16.019 28.2739 15.9527 28.1075 15.9047C27.9411 15.8568 27.7732 15.8102 27.604 15.7651C27.3671 15.7031 27.1598 15.6495 26.9821 15.6043C26.8045 15.5592 26.6395 15.5056 26.4872 15.4435C26.3406 15.3815 26.2235 15.2926 26.136 15.177C26.0486 15.0614 26.0049 14.8964 26.0049 14.682C26.0049 14.6425 26.0162 14.572 26.0388 14.4705C26.0613 14.3689 26.1149 14.266 26.1995 14.1616C26.2841 14.0573 26.4138 13.9642 26.5887 13.8825C26.7635 13.8007 27.0033 13.7598 27.3079 13.7598C27.5166 13.7598 27.707 13.7823 27.8789 13.8275C28.051 13.8726 28.199 13.9445 28.3232 14.0432C28.4473 14.1419 28.5431 14.2675 28.6108 14.4198C28.6785 14.572 28.7123 14.7582 28.7123 14.9782Z"
      fill="#212221"
    />
  </Shell>
);
