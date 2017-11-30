var MyBall = (function (_super) {
    __extends(MyBall, _super);
    function MyBall() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=MyBall,p=c.prototype;
    p.init = function () {
        var myBall = new egret.Bitmap();
        myBall.texture = RES.getRes("earth_png");
        this.addChild(myBall);
        myBall.x = 0;
        myBall.y = 0;
        // myBall.width = 100;
        // myBall.height = 100;
        myBall.scaleX = 0.5;
        myBall.scaleY = 0.5;
        //myBall.anchorOffsetX = myBall.width / 2;
        //myBall.anchorOffsetY = myBall.height / 2;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        myBall.touchEnabled = true;
        this.myBall = myBall;
        myBall.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        myBall.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        myBall.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    p.mouseDown = function (evt) {
        var p = new egret.Point(evt.stageX, evt.stageY);
        this.x = p.x;
        this.y = p.y;
    };
    p.mouseMove = function (evt) {
        var scrW = Data.getStageWidth();
        var scrH = Data.getStageHeight();
        var p = new egret.Point(evt.stageX, evt.stageY);
        this.x = p.x;
        this.y = p.y;
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
    p.mouseUp = function (evt) {
        //this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this);
        //this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseUp,this);
    };
    return MyBall;
}(egret.Sprite));
egret.registerClass(MyBall,'MyBall');
//# sourceMappingURL=MyBall.js.map