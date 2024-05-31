System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, v3, _dec, _class, _crd, ccclass, property, PlayerControl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "599b5uizm5C64EgJY55/Nhy", "PlayerControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerControl", PlayerControl = (_dec = ccclass('PlayerControl'), _dec(_class = class PlayerControl extends Component {
        start() {
          console.log('飞机大战');
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove);
        }

        update(deltaTime) {}

        onTouchMove(event) {
          var {
            x,
            y
          } = event.getUILocation();
          this.node.setWorldPosition(v3(x, y));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=799595cdc969e5623a73c7f2ffb6d74d2142d32a.js.map