var EnemyBall = (function (_super) {
    __extends(EnemyBall, _super);
    function EnemyBall() {
        _super.call(this);
        this._cont = 60;
        this.status = 0;
        this.init();
    }
    var d = __define,c=EnemyBall,p=c.prototype;
    p.init = function () {
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
    p.move = function (deaths) {
        if (this.status == 0) {
            var x = this.x;
            var y = this.y;
            var w = Data.getStageWidth();
            var h = Data.getStageHeight();
            x += this._speedX;
            y += this._speedY;
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
    p.drawInit = function () {
        //console.log("ndnbovnwbdbnownnnnnnnnnnnbowoo");
    };
    return EnemyBall;
}(egret.Sprite));
egret.registerClass(EnemyBall,'EnemyBall');
//# sourceMappingURL=EnemyBall.js.map