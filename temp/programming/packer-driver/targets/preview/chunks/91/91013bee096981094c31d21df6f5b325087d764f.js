System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Contact2DType, PhysicsSystem2D, EnemyController, BulletController, GameController, GameState, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BgController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEnemyController(extras) {
    _reporterNs.report("EnemyController", "./EnemyController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletController(extras) {
    _reporterNs.report("BulletController", "./BulletController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./GameController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
    }, function (_unresolved_2) {
      EnemyController = _unresolved_2.EnemyController;
    }, function (_unresolved_3) {
      BulletController = _unresolved_3.BulletController;
    }, function (_unresolved_4) {
      GameController = _unresolved_4.GameController;
      GameState = _unresolved_4.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0da5ZQqzJEba2feRMg1uG5", "BgController", undefined);

      __checkObsolete__(['_decorator', 'Collider2D', 'Component', 'Contact2DType', 'Node', 'PhysicsSystem2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BgController", BgController = (_dec = ccclass('BgController'), _dec2 = property({
        type: _crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
          error: Error()
        }), GameController) : GameController
      }), _dec(_class = (_class2 = class BgController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "gameCtrl", _descriptor, this);
        }

        start() {
          PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        update(deltaTime) {
          for (var item of this.node.children) {
            var {
              x,
              y
            } = item.getPosition();
            var moveY = y - 100 * deltaTime;
            console.log('moveY:', moveY);
            item.setPosition(x, moveY); //超出屏幕，回到顶部

            if (moveY < -870) {
              item.setPosition(x, moveY + 852 * 2);
            }
          }
        } //两个碰撞体开始接触被调用1次


        onBeginContact(self, other) {
          //当tag等于1/0的时候，说明是子弹和敌机相撞，销毁对应的对象
          if (other.tag === 1 && self.tag === 0) {
            other.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
              error: Error()
            }), EnemyController) : EnemyController).die();
            self.getComponent(_crd && BulletController === void 0 ? (_reportPossibleCrUseOfBulletController({
              error: Error()
            }), BulletController) : BulletController).die();
          } else if (other.tag === 0 && self.tag === 1) {
            other.getComponent(_crd && BulletController === void 0 ? (_reportPossibleCrUseOfBulletController({
              error: Error()
            }), BulletController) : BulletController).die();
            self.getComponent(_crd && EnemyController === void 0 ? (_reportPossibleCrUseOfEnemyController({
              error: Error()
            }), EnemyController) : EnemyController).die();
          } //飞机撞到其他飞机


          if (other.tag === 1 && self.tag === 2) {
            if (this.gameCtrl) {
              this.gameCtrl.setCurState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).GS_OVER);
            }
          } else if (other.tag === 2 && self.tag === 1) {
            if (this.gameCtrl) {
              this.gameCtrl.setCurState((_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).GS_OVER);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameCtrl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91013bee096981094c31d21df6f5b325087d764f.js.map