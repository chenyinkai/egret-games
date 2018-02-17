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
var Gold = (function (_super) {
    __extends(Gold, _super);
    function Gold() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Gold.prototype.init = function () {
        var gold = new egret.Bitmap();
        gold.texture = RES.getRes("red1_png");
        this.addChild(gold);
        gold.scaleX = 0.2;
        gold.scaleY = 0.2;
        gold.y = -30;
        var speedX = Math.floor(Math.random() * 20 + 20);
        var speedY = Math.floor(Math.random() * 20 + 20);
        this._speedX = speedX;
        this._speedY = speedY;
    };
    Gold.prototype.move = function (deaths) {
        var x = this.x;
        var y = this.y;
        var w = Data.getStageWidth();
        var h = Data.getStageHeight();
        y += this._speedY;
        this.y = y;
    };
    return Gold;
}(egret.Sprite));
__reflect(Gold.prototype, "Gold");
//# sourceMappingURL=Gold.js.map