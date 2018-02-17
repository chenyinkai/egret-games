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
var Man = (function (_super) {
    __extends(Man, _super);
    function Man() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Man.prototype.init = function () {
        var scrW = Data.getStageWidth();
        var scrH = Data.getStageHeight();
        var man = new egret.Bitmap();
        man.texture = RES.getRes("lanzi_png");
        this.addChild(man);
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        man.x = 0;
        man.y = 0;
        man.touchEnabled = true;
        this.man = man;
        man.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        man.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        man.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    Man.prototype.mouseDown = function (evt) {
        var p = new egret.Point(evt.stageX, evt.stageY);
        this.x = p.x;
    };
    Man.prototype.mouseMove = function (evt) {
        var scrW = Data.getStageWidth();
        var scrH = Data.getStageHeight();
        var p = new egret.Point(evt.stageX, evt.stageY);
        this.x = p.x;
    };
    Man.prototype.mouseUp = function (evt) {
        //this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this);
        //this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseUp,this);
    };
    return Man;
}(egret.Sprite));
__reflect(Man.prototype, "Man");
//# sourceMappingURL=Man.js.map