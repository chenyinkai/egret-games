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
var Length3 = (function (_super) {
    __extends(Length3, _super);
    function Length3() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Length3.prototype.init = function () {
        this.targets1 = [95, 190 + 86, 280 + 190];
        this.mans = [];
        for (var i = 0; i < this.targets1.length; i++) {
            var man = new Man();
            this.addChild(man);
            this.mans.push(man);
        }
        for (var j = 0; j < this.mans.length; j++) {
            this.mans[j].y = 1000;
            this.mans[j].x = this.targets1[j];
        }
    };
    return Length3;
}(egret.Sprite));
__reflect(Length3.prototype, "Length3");
//# sourceMappingURL=Length3.js.map