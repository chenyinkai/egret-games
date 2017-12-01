var Shi = (function (_super) {
    __extends(Shi, _super);
    function Shi() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=Shi,p=c.prototype;
    p.init = function () {
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
    p.move = function (deaths1) {
        var x = this.x;
        var y = this.y;
        var w = Data.getStageWidth();
        var h = Data.getStageHeight();
        y += this._speedY;
        this.y = y;
    };
    return Shi;
}(egret.Sprite));
egret.registerClass(Shi,'Shi');
//# sourceMappingURL=Shi.js.map