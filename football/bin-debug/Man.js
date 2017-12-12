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
        var man = new egret.Bitmap();
        man.texture = RES.getRes("ghostplayer-sheet0_png");
        this.addChild(man);
        this.anchorOffsetY = this.height / 2;
        man.x = 0;
        man.y = 0;
        //man.touchEnabled = true;
        this.man = man;
    };
    return Man;
}(egret.Sprite));
__reflect(Man.prototype, "Man");
//# sourceMappingURL=Man.js.map