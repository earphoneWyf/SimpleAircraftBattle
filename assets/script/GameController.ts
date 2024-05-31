import { _decorator, Component, instantiate, Node } from 'cc';
const { ccclass, property } = _decorator;

//游戏状态
export enum GameState {
    GS_START,
    GS_PAUSE,
    GS_PLAYING,
    GS_OVER
}

@ccclass('GameController')
export class GameController extends Component {

    @property({ type: Node })
    gameStart: Node | null = null;

    @property({ type: Node })
    gamePause: Node | null = null;

    @property({ type: Node })
    gameOver: Node | null = null;

    @property({ type: Node })
    gameArea: Node | null = null;

    start() {
        this.setCurState(GameState.GS_START);
        console.log('gameArea:', this.gameArea)
    }

    update(deltaTime: number) {

    }

    //开始
    onStartButtonClicked() {
        this.setCurState(GameState.GS_PLAYING);
    }

    //重新游戏
    onRestartButtonClicked() {
        this.setCurState(GameState.GS_START);
    }

    //继续游戏
    onContinueButtonClicked() {
        this.setCurState(GameState.GS_PLAYING);
    }

    //暂停游戏
    onPauseButtonClicked() {
        this.setCurState(GameState.GS_PAUSE);
    }

    //控制当前游戏状态
    setCurState(value: GameState) {
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
        }, 100)

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
    }

    //重置
    reset() {
        const hero = this.gameArea.getChildByName('hero');
        hero.setPosition(-5, -316);

        const enemy = this.gameArea.getChildByName('enemy');
        enemy.removeAllChildren();
    }
}

