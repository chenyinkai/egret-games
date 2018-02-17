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
var EnemyBall = (function (_super) {
    __extends(EnemyBall, _super);
    function EnemyBall() {
        var _this = _super.call(this) || this;
        _this._cont = 60;
        _this.status = 0;
        _this.init();
        return _this;
    }
    EnemyBall.prototype.init = function () {
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        var _circle = new egret.Bitmap();
        _circle.texture = RES.getRes("fire_png");
        this.addChild(_circle);
        _circle.scaleX = 0.15;
        _circle.scaleY = 0.15;
        _circle.anchorOffsetX = _circle.width / 2;
        _circle.anchorOffsetY = _circle.height / 2;
        _circle.x = 0;
        _circle.y = 0;
        var speedX = Math.floor(Math.random() * 8 + 3);
        var speedY = Math.floor(Math.random() * 8 + 3);
        if (Math.random() < 0.5) {
            speedX *= -1;
        }
        if (Math.random() < 0.5) {
            speedY *= -1;
        }
        this._speedX = speedX;
        this._speedY = speedY;
    };
    EnemyBall.prototype.move = function (deaths) {
        if (this.status == 0) {
            var x = this.x;
            var y = this.y;
            var w = Data.getStageWidth();
            var h = Data.getStageHeight();
            x += this._speedX;
            y += this._speedY;
            //到边缘处转向
            if (x <= 0) {
                this.x = 0;
                this._speedX *= -1;
            }
            else if (x >= w) {
                this.x = w;
                this._speedX *= -1;
            }
            else {
                this.x = x;
            }
            if (y <= 0) {
                this.y = 0;
                this._speedY *= -1;
            }
            else if (y >= h) {
                this.y = h;
                this._speedY *= -1;
            }
            else {
                this.y = y;
            }
        }
    };
    return EnemyBall;
}(egret.Sprite));
__reflect(EnemyBall.prototype, "EnemyBall");
//# sourceMappingURL=EnemyBall.js.map