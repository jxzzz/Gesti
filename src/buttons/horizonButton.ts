import ViewObject from "../abstract/view-object";
import Painter from "../painter";
import Widgets from "../widgets";
import DragButton from "./dragbutton";

class HorizonButton extends DragButton {
  constructor(master: ViewObject) {
    super(master);
  }
  draw(paint: Painter): void {
    this.setAxis("horizontal");
    this.init({ percentage: [0.55, 0] });
    //按钮渲染样式
    this.draw = function (paint) {
      const { x, y } = this.relativeRect.position;
      Widgets.drawChangeSizeAlone(paint, {
        offsetx: x,
        offsety: y,
      });
    };
  }
}

export default HorizonButton;
