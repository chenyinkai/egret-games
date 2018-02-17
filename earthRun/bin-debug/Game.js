var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.j = 0;
        _this.score = 0;
        _this.init();
        return _this;
    }
    Game.prototype.init = function () {
        var scrW = Data.getStageWidth();
        var scrH = Data.getStageHeight();
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("star_jpg");
        this.addChild(bg);
        bg.width = scrW;
        bg.height = scrH;
        var myBall = new MyBall();
        this.addChild(myBall);
        this.myBall = myBall;
        myBall.x = myBall.width / 2;
        myBall.y = myBall.height / 2;
        this.foes = [];
        this.balls = [];
        this.timer = new egret.Timer(1000 / 30, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerfunc, this);
        this.timer.start();
        this.deaths = [];
    };
    Game.prototype.timerfunc = function () {
        this.j += 1;
        if (this.j % 30 === 0) {
            this.score++;
        }
        if (this.j % 60 === 0) {
            var foe = new EnemyBall();
            if (Math.random() >= 0 && Math.random() < 0.25) {
                foe.y = Math.floor(Math.random() * Data.getStageHeight());
                foe.x = -20;
            }
            else if (Math.random() >= 0.25 && Math.random() < 0.5) {
                foe.y = Math.floor(Math.random() * Data.getStageHeight());
                foe.x = Data.getStageWidth() + 20;
            }
            else if (Math.random() >= 0.5 && Math.random() < 0.75) {
                foe.x = Math.floor(Math.random() * Data.getStageWidth());
                foe.y = -20;
            }
            else {
                foe.x = Math.floor(Math.random() * Data.getStageWidth());
                foe.y = Data.getStageHeight() + 20;
            }
            this.foes.push(foe);
            this.addChild(foe);
            this.balls.push(foe);
        }
        var distance = 0;
        var distance2 = 0;
        for (var j = 0; j < this.balls.length; j++) {
            distance = Math.floor(Math.sqrt((this.balls[j].x - this.myBall.x) * (this.balls[j].x - this.myBall.x) + (this.balls[j].y - this.myBall.y) * (this.balls[j].y - this.myBall.y)));
            distance2 = 80;
            if (distance < distance2) {
                this.drawInit();
            }
        }
        for (var i = 0; i < this.foes.length; i++) {
            this.foes[i].move(this.deaths);
        }
    };
    Game.prototype.drawInit = function () {
        var nowscore = 0;
        var scrW = Data.getStageWidth();
        var scrH = Data.getStageHeight();
        nowscore = this.score;
        this.nowscore = nowscore;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xffffff);
        shape.graphics.drawRect(0, 0, 400, 400);
        shape.graphics.endFill();
        shape.anchorOffsetX = shape.width / 2;
        shape.x = scrW / 2;
        shape.y = scrH * 0.1;
        this.addChild(shape);
        var txt = new egret.TextField();
        this.addChild(txt);
        txt.x = 150;
        txt.y = scrH * 0.13;
        txt.size = 50;
        txt.textColor = 0xff0000;
        console.log(this.score);
        if (this.nowscore > 0 && this.nowscore <= 5) {
            txt.text = "  你坚持了" + this.nowscore + "秒" + "\n" + "\n" + "    获得称号" + "\n" + "\n" + '   "重度脑瘫"';
        }
        else if (this.nowscore > 5 && this.nowscore <= 10) {
            txt.text = "  你坚持了" + this.nowscore + "秒" + "\n" + "\n" + "    获得称号" + "\n" + "\n" + '   "不堪一击"';
        }
        else if (this.nowscore > 10 && this.nowscore <= 15) {
            txt.text = "  你坚持了" + this.nowscore + "秒" + "\n" + "\n" + "    获得称号" + "\n" + "\n" + '   "勉勉强强"';
        }
        else if (this.nowscore > 15 && this.nowscore <= 20) {
            txt.text = "  你坚持了" + this.nowscore + "秒" + "\n" + "\n" + "    获得称号" + "\n" + "\n" + '   "炉火纯青"';
        }
        else if (this.nowscore > 20 && this.nowscore <= 25) {
            txt.text = "  你坚持了" + this.nowscore + "秒" + "\n" + "\n" + "    获得称号" + "\n" + "\n" + '   "傲世群众"';
        }
        else if (this.nowscore > 25 && this.nowscore <= 30) {
            txt.text = "  你坚持了" + this.nowscore + "秒" + "\n" + "\n" + "    获得称号" + "\n" + "\n" + '   "大神在此"';
        }
        else if (this.nowscore > 30 && this.nowscore <= 35) {
            txt.text = "  你坚持了" + this.nowscore + "秒" + "\n" + "\n" + "    获得称号" + "\n" + "\n" + '   "超越了神"';
        }
        else if (this.nowscore > 35 && this.nowscore <= 40) {
            txt.text = "  你坚持了" + this.nowscore + "秒" + "\n" + "\n" + "    获得称号" + "\n" + "\n" + '   "前无古人"';
        }
        else if (this.nowscore > 40) {
            txt.text = "  你坚持了" + this.nowscore + "秒" + "\n" + "\n" + "    获得称号" + "\n" + "\n" + '"地球的守护者"';
        }
        this.removeChild(this.myBall);
        this.timer.stop();
        var event = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    };
    return Game;
}(egret.Sprite));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map