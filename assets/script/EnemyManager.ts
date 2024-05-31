import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyManager')
export class EnemyManager extends Component {
    @property(Prefab)
    enemy: Prefab | null = null;


    start() {
        const { x, y } = this.node.getPosition();

        this.schedule(() => {
            const node = instantiate(this.enemy);
            //在水平40～440这个区间随机赋值
            node.setPosition(Math.random() * 400 + 40, y);
            this.node.addChild(node);
        }, 0.5)
    }

    update(deltaTime: number) {

    }
}

