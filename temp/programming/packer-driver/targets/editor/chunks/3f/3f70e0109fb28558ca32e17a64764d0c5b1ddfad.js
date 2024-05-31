System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GameState, GameController;

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
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1abd3445DJIVpJTjViqE+pC", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node']);

      ({
        ccclass,
        property
      } = _decorator); //游戏状态

      _export("GameState", GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["GS_START"] = 0] = "GS_START";
        GameState[GameState["GS_PAUSE"] = 1] = "GS_PAUSE";
        GameState[GameState["GS_PLAYING"] = 2] = "GS_PLAYING";
        GameState[GameState["GS_OVER"] = 3] = "GS_OVER";
        return GameState;
      }({}));

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameStart", _descriptor, this);

          _initializerDefineProperty(this, "gamePause", _descriptor2, this);

          _initializerDefineProperty(this, "gameOver", _descriptor3, this);

          _initializerDefineProperty(this, "gameArea", _descriptor4, this);
        }

        start() {
          this.setCurState(GameState.GS_START);
          console.log('gameArea:', this.gameArea);
        }

        update(deltaTime) {} //开始


        onStartButtonClicked() {
          this.setCurState(GameState.GS_PLAYING);
        } //重新游戏


        onRestartButtonClicked() {
          this.setCurState(GameState.GS_START);
        } //继续游戏


        onContinueButtonClicked() {
          this.setCurState(GameState.GS_PLAYING);
        } //暂停游戏


        onPauseButtonClicked() {
          this.setCurState(GameState.GS_PAUSE);
        } //控制当前游戏状态


        setCurState(value) {
          switch (value) {
            case GameState.GS_START:
              this.init();
              break;

            case GameState.GS_PLAYING:
              this.playing();
              break;

            case GameState.GS_PAUSE:
              this.pause();
              break;

            case GameState.GS_OVER:
              this.over();
              break;
          }
        }

        init() {
          if (this.gameArea) {
            this.gameArea.active = false;
          }

          if (this.gameStart) {
            this.gameStart.active = true;
          }

          if (this.gamePause) {
            this.gamePause.active = false;
          }

          if (this.gameOver) {
            this.gameOver.active = false;
          }

          this.reset();
        }

        pause() {
          if (this.gameArea) {
            this.gameArea.active = false;
          }

          if (this.gameStart) {
            this.gameStart.active = false;
          }

          if (this.gamePause) {
            this.gamePause.active = true;
          }

          if (this.gameOver) {
            this.gameOver.active = false;
          }
        }

        over() {
          setTimeout(() => {
            if (this.gameArea) {
              this.gameArea.active = false;
              this.reset();
            }
          }, 100);

          if (this.gameStart) {
            this.gameStart.active = false;
          }

          if (this.gamePause) {
            this.gamePause.active = false;
          }

          if (this.gameOver) {
            this.gameOver.active = true;
          }
        }

        playing() {
          if (this.gameArea) {
            this.gameArea.active = true;
          }

          if (this.gameArea) {
            this.gameArea.active = true;
          }

          if (this.gameStart) {
            this.gameStart.active = false;
          }

          if (this.gamePause) {
            this.gamePause.active = false;
          }

          if (this.gameOver) {
            this.gameOver.active = false;
          }
        } //重置


        reset() {
          const hero = this.gameArea.getChildByName('hero');
          hero.setPosition(-5, -316);
          const enemy = this.gameArea.getChildByName('enemy');
          enemy.removeAllChildren();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameStart", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gamePause", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameOver", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameArea", [_dec5], {
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
//# sourceMappingURL=3f70e0109fb28558ca32e17a64764d0c5b1ddfad.js.map