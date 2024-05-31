import { _decorator, Component, EventTouch, instantiate, Node, Prefab, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
    @property(Prefab)
    bullet: Prefab | null = null;


    start() {
        console.log('飞机大战')
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

        //不断生成子弹
        this.schedule(() => {
            const { x, y } = this.node.getPosition();
            const node = instantiate(this.bullet);
            node.setParent(this.node.parent);
            node.setPosition(x, y + 70);
        }, 0.2)
    }

    update(deltaTime: number) {
    }

    onTouchMove(event: EventTouch) {
        const { x, y } = event.getUILocation();
        this.node.setWorldPosition(v3(x, y));
    }
}

