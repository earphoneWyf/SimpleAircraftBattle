System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, Sprite, SpriteFrame, _dec, _class, _crd, ccclass, property, EnemyController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      resources = _cc.resources;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8331ftCo2ZNBYtpdaASUhg/", "EnemyController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyController", EnemyController = (_dec = ccclass('EnemyController'), _dec(_class = class EnemyController extends Component {
        constructor() {
          super(...arguments);
          this.isDead = false;
          this.airplaneDeadImages = [];
        }

        start() {
          this.loadImages();
        }

        update(deltaTime) {
          if (this.isDead) return;
          var {
            x,
            y
          } = this.node.getPosition();
          var moveY = y - 500 * deltaTime;
          this.node.setPosition(x, moveY);

          if (moveY < -900) {
            this.node.destroy();
          }
        } //加载图片


        loadImages() {
          resources.loadDir('airplane/enemy-death', SpriteFrame, (_err, spriteFrames) => {
            this.airplaneDeadImages = spriteFrames;
          });
        } //播放死亡动画


        playDead() {
          var _this = this;

          var _loop = function _loop(i) {
            setTimeout(() => {
              if (_this.node.getComponent) {
                _this.node.getComponent(Sprite).spriteFrame = _this.airplaneDeadImages[i];
              }
            }, i * 80);
          };

          for (var i = 0; i < this.airplaneDeadImages.length; i++) {
            _loop(i);
          }
        } //敌机销毁调用


        die() {
          if (this.isDead) return;
          this.isDead = true;
          this.playDead();
          setTimeout(() => {
            this.node.destroy();
          }, 300);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cdcbe283a31a32c4f03d62d699860f3ae2cf28dc.js.map