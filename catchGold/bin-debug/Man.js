var Man = (function (_super) {
    __extends(Man, _super);
    function Man() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=Man,p=c.prototype;
    p.init = function () {
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
    p.mouseDown = function (evt) {
        var p = new egret.Point(evt.stageX, evt.stageY);
        this.x = p.x;
        //console.log(this.x);
        //this.y = p.y;
    };
    p.mouseMove = function (evt) {
        var scrW = Data.getStageWidth();
        var scrH = Data.getStageHeight();
        var p = new egret.Point(evt.stageX, evt.stageY);
        this.x = p.x;
        //this.y = p.y;
    };
    p.mouseUp = function (evt) {
        //this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this);
        //this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseUp,this);
    };
    return Man;
}(egret.Sprite));
egret.registerClass(Man,'Man');
//# sourceMappingURL=Man.js.map