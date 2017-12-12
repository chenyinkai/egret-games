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
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Ball.prototype.init = function () {
        var gold = new egret.Bitmap();
        gold.texture = RES.getRes("ball_png");
        this.addChild(gold);
        gold.y = -30;
        var score = egret.localStorage.getItem("setHard");
        var t = parseInt(score);
        if (t <= 140) {
            var speedY = Math.floor(Math.random() * 10 + 20);
        }
        else if (t > 140 && t <= 300) {
            var speedY = Math.floor(Math.random() * 10 + 25);
        }
        else if (t > 300 && t <= 400) {
            var speedY = Math.floor(Math.random() * 10 + 30);
        }
        else {
            var speedY = Math.floor(Math.random() * 10 + 40);
        }
        //速度幅度过大导致直接穿过判断条件的范围
        this._speedY = speedY;
    };
    Ball.prototype.move = function (deaths) {
        var x = this.x;
        var y = this.y;
        var w = Data.getStageWidth();
        var h = Data.getStageHeight();
        y += this._speedY;
        this.y = y;
    };
    return Ball;
}(egret.Sprite));
__reflect(Ball.prototype, "Ball");
//# sourceMappingURL=Ball.js.map