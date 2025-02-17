import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
const IconHome = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={40}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M22.362 17.907a1.143 1.143 0 0 0-.364.836v6.542c0 .946.768 1.714 1.714 1.714h12.572c.947 0 1.714-.768 1.714-1.714v-6.542c0-.317-.132-.62-.364-.836l-7.264-6.77a.571.571 0 0 0-.744 0l-7.264 6.77Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);

export default IconHome;
