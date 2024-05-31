System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, BulletController;

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

      _cclegacy._RF.push({}, "fffe39LCwxEBa5oZ9wX8wef", "BulletController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletController", BulletController = (_dec = ccclass('BulletController'), _dec(_class = class BulletController extends Component {
        constructor() {
          super(...arguments);
          this.isDead = false;
        }

        start() {}

        update(deltaTime) {
          if (this.isDead) return;
          var {
            x,
            y
          } = this.node.getPosition();
          var moveY = y + 500 * deltaTime;
          this.node.setPosition(x, moveY); //清除超出屏幕的子弹

          if (moveY > 800) {
            this.node.destroy();
          }
        } //子弹销毁


        die() {
          if (this.isDead) return;
          this.isDead = true;
          setTimeout(() => {
            this.node.destroy();
          }, 10);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5bcbafd60626b1d189abaaf2b17ea26fc973449a.js.map