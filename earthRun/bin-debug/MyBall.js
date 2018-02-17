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
var MyBall = (function (_super) {
    __extends(MyBall, _super);
    function MyBall() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    MyBall.prototype.init = function () {
        var myBall = new egret.Bitmap();
        myBall.texture = RES.getRes("earth_png");
        this.addChild(myBall);
        myBall.x = 0;
        myBall.y = 0;
        myBall.scaleX = 0.5;
        myBall.scaleY = 0.5;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        myBall.touchEnabled = true;
        this.myBall = myBall;
        myBall.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        myBall.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        myBall.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    MyBall.prototype.mouseDown = function (evt) {
        var p = new egret.Point(evt.stageX, evt.stageY);
        this.x = p.x;
        this.y = p.y;
    };
    MyBall.prototype.mouseMove = function (evt) {
        var scrW = Data.getStageWidth();
        var scrH = Data.getStageHeight();
        var p = new egret.Point(evt.stageX, evt.stageY);
        this.x = p.x;
        this.y = p.y;
        //不超出屏幕
        if (this.x < 50) {
            this.x = 50;
        }
        else if (this.x > scrW - 50) {
            this.x = scrW - 50;
        }
        if (this.y <= 50) {
            this.y = 50;
        }
        else if (this.y >= scrH - 50) {
            this.y = scrH - 50;
        }
    };
    MyBall.prototype.mouseUp = function (evt) {
        //this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this);
        //this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseUp,this);
    };
    return MyBall;
}(egret.Sprite));
__reflect(MyBall.prototype, "MyBall");
//# sourceMappingURL=MyBall.js.map