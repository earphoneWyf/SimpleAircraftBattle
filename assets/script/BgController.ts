import { _decorator, Collider2D, Component, Contact2DType, Node, PhysicsSystem2D } from 'cc';
import { EnemyController } from './EnemyController';
import { BulletController } from './BulletController';
import { GameController, GameState } from './GameController';
const { ccclass, property } = _decorator;

@ccclass('BgController')
export class BgController extends Component {
    @property({ type: GameController })
    public gameCtrl: GameController | null = null;

    start() {
        PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    update(deltaTime: number) {
        for (let item of this.node.children) {
            const { x, y } = item.getPosition();

            const moveY = y - 100 * deltaTime;
            console.log('moveY:', moveY)

            item.setPosition(x, moveY);


            //超出屏幕，回到顶部
            if (moveY < -870) {
                item.setPosition(x, moveY + 852 * 2)
            }
        }
    }

    //两个碰撞体开始接触被调用1次
    onBeginContact(self: Collider2D, other: Collider2D) {

        //当tag等于1/0的时候，说明是子弹和敌机相撞，销毁对应的对象
        if (other.tag === 1 && self.tag === 0) {
            other.getComponent(EnemyController).die();
            self.getComponent(BulletController).die();
        } else if (other.tag === 0 && self.tag === 1) {
            other.getComponent(BulletController).die();
            self.getComponent(EnemyController).die();
        }

        //飞机撞到其他飞机
        if (other.tag === 1 && self.tag === 2) {
            if (this.gameCtrl) {
                this.gameCtrl.setCurState(GameState.GS_OVER);
            }

        } else if (other.tag === 2 && self.tag === 1) {
            if (this.gameCtrl) {
                this.gameCtrl.setCurState(GameState.GS_OVER);
            }
        }
    }
}

