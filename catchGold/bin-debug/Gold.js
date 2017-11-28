var Gold = (function (_super) {
    __extends(Gold, _super);
    function Gold() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=Gold,p=c.prototype;
    p.init = function () {
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
    p.move = function (deaths) {
        var x = this.x;
        var y = this.y;
        var w = Data.getStageWidth();
        var h = Data.getStageHeight();
        y += this._speedY;
        this.y = y;
    };
    return Gold;
}(egret.Sprite));
egret.registerClass(Gold,'Gold');
