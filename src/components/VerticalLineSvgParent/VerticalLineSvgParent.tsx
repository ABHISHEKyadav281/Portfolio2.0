// Example usage in a page/component

import VerticalLineSvg from "../../assets/svg/VerticalLineSvg";

const VertivalLineSvgParent=()=>{
  return (
    <aside className="w-24 flex flex-col items-center py-8">
      <VerticalLineSvg
        height={360}
        thickness={2}
        primary="#ffffff"
        secondary="rgba(255,255,255,0.35)"
        dash={true}
        showDot={true}
        speed={1} // increase to speed up, decrease (<1) to slow down
      />
    </aside>
  );
}
export default VertivalLineSvgParent;
