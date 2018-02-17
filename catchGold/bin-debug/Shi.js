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
var Shi = (function (_super) {
    __extends(Shi, _super);
    function Shi() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Shi.prototype.init = function () {
        var gold = new egret.Bitmap();
        gold.texture = RES.getRes("dabian_png");
        this.addChild(gold);
        gold.scaleX = 0.6;
        gold.scaleY = 0.6;
        gold.y = -30;
        var speedX = Math.floor(Math.random() * 20 + 20);
        var speedY = Math.floor(Math.random() * 20 + 20);
        this._speedX = speedX;
        this._speedY = speedY;
    };
    Shi.prototype.move = function (deaths1) {
        var x = this.x;
        var y = this.y;
        var w = Data.getStageWidth();
        var h = Data.getStageHeight();
        y += this._speedY;
        this.y = y;
    };
    return Shi;
}(egret.Sprite));
__reflect(Shi.prototype, "Shi");
//# sourceMappingURL=Shi.js.map