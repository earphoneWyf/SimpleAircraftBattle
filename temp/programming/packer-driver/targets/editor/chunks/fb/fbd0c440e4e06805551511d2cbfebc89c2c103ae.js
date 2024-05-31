System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, v3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "599b5uizm5C64EgJY55/Nhy", "PlayerController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Node', 'Prefab', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerController", PlayerController = (_dec = ccclass('PlayerController'), _dec2 = property(Prefab), _dec(_class = (_class2 = class PlayerController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bullet", _descriptor, this);
        }

        start() {
          console.log('飞机大战');
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this); //不断生成子弹

          this.schedule(() => {
            const {
              x,
              y
            } = this.node.getPosition();
            const node = instantiate(this.bullet);
            node.setParent(this.node.parent);
            node.setPosition(x, y + 70);
          }, 0.2);
        }

        update(deltaTime) {}

        onTouchMove(event) {
          const {
            x,
            y
          } = event.getUILocation();
          this.node.setWorldPosition(v3(x, y));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bullet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fbd0c440e4e06805551511d2cbfebc89c2c103ae.js.map