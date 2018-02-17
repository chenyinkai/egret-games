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
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    StartScene.prototype.init = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xe63872);
        shape.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
        shape.graphics.endFill();
        this.addChild(shape);
        var logo = new egret.Bitmap();
        logo.texture = RES.getRes("logo_png");
        this.addChild(logo);
        logo.x = 20;
        logo.y = 100;
        var start_btn = new egret.Bitmap();
        start_btn.texture = RES.getRes("btn_start_png");
        this.addChild(start_btn);
        this.start_btn = start_btn;
        start_btn.anchorOffsetX = start_btn.width / 2;
        start_btn.anchorOffsetY = start_btn.height / 2;
        start_btn.touchEnabled = true;
        start_btn.x = GameData.getStageWidth() / 2;
        start_btn.y = 800;
        start_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.start_btnCallback, this);
        start_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.start_btnCallback, this);
        start_btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.start_btnCallback, this);
        var rank_btn = new egret.Bitmap();
        rank_btn.texture = RES.getRes("rank_png");
        this.addChild(rank_btn);
        rank_btn.anchorOffsetX = rank_btn.width / 2;
        rank_btn.anchorOffsetY = rank_btn.height / 2;
        rank_btn.x = 550;
        rank_btn.y = 60;
        rank_btn.touchEnabled = true;
        rank_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.rank_btnCallback, this);
        rank_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.rank_btnCallback, this);
        rank_btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.rank_btnCallback, this);
    };
    StartScene.prototype.start_btnCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event = new GameEvent(GameEvent.GAME_GO);
            this.dispatchEvent(event);
        }
        else if (evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    };
    StartScene.prototype.rank_btnCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event = new GameEvent(GameEvent.GAME_BLEED);
            this.dispatchEvent(event);
        }
        else if (evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    };
    return StartScene;
}(egret.Sprite));
__reflect(StartScene.prototype, "StartScene");
//# sourceMappingURL=StartScene.js.map