import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BulletController')
export class BulletController extends Component {
    isDead: boolean = false;

    start() {

    }

    update(deltaTime: number) {
        if (this.isDead) return;
        const { x, y } = this.node.getPosition();
        const moveY = y + 500 * deltaTime;
        this.node.setPosition(x, moveY);

        //清除超出屏幕的子弹
        if (moveY > 800) {
            this.node.destroy();
        }
    }

    //子弹销毁
    die() {
        if (this.isDead) return;
        this.isDead = true;

        setTimeout(() => {
            this.node.destroy();
        }, 10)
    }
}

