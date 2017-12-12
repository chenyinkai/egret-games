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
var Test = (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super.call(this) || this;
        _this.flag = 0;
        _this.score = 0;
        _this.j = 0;
        _this.init();
        _this.setBall();
        return _this;
    }
    Test.prototype.init = function () {
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("background2-sheet0_png");
        this.addChild(bg);
        bg.x = -300;
        bg.y = -140;
        //分数
        this.ballScore = new egret.TextField();
        this.addChild(this.ballScore);
        this.ballScore.width = egret.MainContext.instance.stage.stageWidth;
        this.ballScore.y = 400;
        this.ballScore.size = 80;
        this.ballScore.textColor = 0xffffff;
        this.ballScore.textAlign = egret.HorizontalAlign.CENTER;
        this.ballScore.text = "0";
        var game1 = new Length3();
        this.addChild(game1);
        this.game1 = game1;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
    };
    Test.prototype.mouseDown = function () {
        if (this.flag == 0) {
            this.removeChild(this.game1);
            var game = new Length4();
            this.addChild(game);
            this.flag = 1;
            this.game = game;
        }
        else {
            this.removeChild(this.game);
            var game1 = new Length3();
            this.addChild(game1);
            this.flag = 0;
            this.game1 = game1;
        }
    };
    Test.prototype.setBall = function () {
        this.foes = [];
        this.balls = [];
        this.timer = new egret.Timer(1000 / 30, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerfunc, this);
        this.timer.start();
        this.deaths = [];
        this.ballPlace = [0 + 20, 98 + 86 + 20, 196 + 98 + 86 + 20, 284 + 86 + 196 + 20, 95 + 20, 190 + 86 + 20, 280 + 190 + 20];
    };
    Test.prototype.timerfunc = function () {
        this.j++;
        if (this.j % 20 == 0) {
            var key0 = "setHard";
            var value0 = "" + this.j;
            egret.localStorage.setItem(key0, value0);
            var t = Math.floor(Math.random() * 7);
            var ball = new Ball();
            this.addChild(ball);
            ball.x = this.ballPlace[t];
            this.foes.push(ball);
            this.balls.push(ball);
        }
        for (var i = 0; i < this.foes.length; i++) {
            this.foes[i].move(this.deaths);
        }
        if (this.flag == 1) {
            var distance = 0;
            var distance1 = 0;
            var distance2 = 0;
            var distance3 = 0;
            var distance4 = 0;
            var distance5 = 0;
            var distance6 = 0;
            var distance7 = 0;
            for (var j = 0; j < this.balls.length; j++) {
                distance = Math.floor(Math.sqrt((this.balls[j].x - 20) * (this.balls[j].x - 20) + (this.balls[j].y - 970) * (this.balls[j].y - 970)));
                distance1 = Math.floor(Math.sqrt((this.balls[j].x - 204) * (this.balls[j].x - 204) + (this.balls[j].y - 970) * (this.balls[j].y - 970)));
                distance2 = Math.floor(Math.sqrt((this.balls[j].x - 400) * (this.balls[j].x - 400) + (this.balls[j].y - 970) * (this.balls[j].y - 970)));
                distance3 = Math.floor(Math.sqrt((this.balls[j].x - 586) * (this.balls[j].x - 586) + (this.balls[j].y - 970) * (this.balls[j].y - 970)));
                distance4 = 25;
                if (distance < distance4 || distance1 < distance4 || distance2 < distance4 || distance3 < distance4) {
                    var sound = RES.getRes("koushao_mp3");
                    sound.play(1, 1);
                    this.score++;
                    this.ballScore.text = "" + this.score;
                    this.balls[j].x = 10000;
                    this.balls[j].y = -99999999999999999999999;
                    //console.log("zazhongle");
                    this.earthquake();
                    var key = "score";
                    var value = "" + this.score;
                    egret.localStorage.setItem(key, value);
                }
                if (this.balls[j].y >= 1300) {
                    this.gameOver();
                    console.log(this.balls[j].y + "游戏结束");
                    this.balls[j].y = -99999999999999999999999;
                }
            }
        }
        else {
            for (var j = 0; j < this.balls.length; j++) {
                distance5 = Math.floor(Math.sqrt((this.balls[j].x - 115) * (this.balls[j].x - 115) + (this.balls[j].y - 970) * (this.balls[j].y - 970)));
                distance6 = Math.floor(Math.sqrt((this.balls[j].x - 296) * (this.balls[j].x - 296) + (this.balls[j].y - 970) * (this.balls[j].y - 970)));
                distance7 = Math.floor(Math.sqrt((this.balls[j].x - 490) * (this.balls[j].x - 490) + (this.balls[j].y - 970) * (this.balls[j].y - 970)));
                distance4 = 25;
                if (distance5 < distance4 || distance6 < distance4 || distance7 < distance4) {
                    var sound = RES.getRes("koushao_mp3");
                    sound.play(1, 1);
                    this.score++;
                    this.ballScore.text = "" + this.score;
                    this.balls[j].x = 10000;
                    this.balls[j].y = -99999999999999999999999;
                    //console.log("zazhongle");
                    this.earthquake();
                    var key = "score";
                    var value = "" + this.score;
                    egret.localStorage.setItem(key, value);
                }
                if (this.balls[j].y >= 1300) {
                    this.gameOver();
                    console.log(this.balls[j].y + "游戏结束");
                    this.balls[j].y = -99999999999999999999999;
                }
            }
        }
    };
    Test.prototype.gameOver = function () {
        this.timer.stop();
        //console.log("游戏结束");
        var event = new GameEvent(GameEvent.GAME_HIT);
        this.dispatchEvent(event);
    };
    Test.prototype.earthquake = function () {
        //地震的效果
        egret.Tween.get(this).to({ x: 7, y: 7 }, 50).to({ x: -7, y: 7 }, 50).to({ x: 7, y: -7 }, 50).to({ x: 0, y: 0 }, 50);
    };
    return Test;
}(egret.Sprite));
__reflect(Test.prototype, "Test");
//# sourceMappingURL=Test.js.map