import { _decorator, Component, Node, resources, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyController')
export class EnemyController extends Component {
    isDead: boolean = false;
    airplaneDeadImages = [];

    start() {
        this.loadImages();
    }

    update(deltaTime: number) {
        if (this.isDead) return;
        const { x, y } = this.node.getPosition();
        const moveY = y - 500 * deltaTime;
        this.node.setPosition(x, moveY);

        if (moveY < -900) {
            this.node.destroy();
        }
    }


    //加载图片
    loadImages() {
        resources.loadDir('airplane/enemy-death', SpriteFrame, (_err, spriteFrames) => {
            this.airplaneDeadImages = spriteFrames;
        })
    }

    //播放死亡动画
    playDead() {
        for (let i = 0; i < this.airplaneDeadImages.length; i++) {
            setTimeout(() => {
                if (this.node.getComponent) {
                    this.node.getComponent(Sprite).spriteFrame = this.airplaneDeadImages[i];
                }
            }, i * 80)
        }
    }

    //敌机销毁调用
    die() {
        if (this.isDead) return;
        this.isDead = true;
        this.playDead();

        setTimeout(() => {
            this.node.destroy();
        }, 300)
    }
}

