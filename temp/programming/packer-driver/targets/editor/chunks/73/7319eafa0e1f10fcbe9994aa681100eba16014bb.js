System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, BgControl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0da5ZQqzJEba2feRMg1uG5", "BgControlle%20r", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BgControl", BgControl = (_dec = ccclass('BgControl'), _dec(_class = class BgControl extends Component {
        start() {}

        update(deltaTime) {
          for (let item of this.node.children) {
            const {
              x,
              y
            } = item.getPosition();
            const moveY = y - 100 * deltaTime;
            item.setPosition(x, moveY); //超出屏幕，回到顶部

            if (moveY < -870) {
              item.setPosition(x, moveY + 852 * 2);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7319eafa0e1f10fcbe9994aa681100eba16014bb.js.map