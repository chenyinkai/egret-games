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
var OverScene = (function (_super) {
    __extends(OverScene, _super);
    function OverScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    OverScene.prototype.init = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xe63872);
        shape.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
        shape.graphics.endFill();
        this.addChild(shape);
        var top = new egret.Bitmap();
        top.texture = RES.getRes("5541c88bb1fd0_wx_jpg");
        this.addChild(top);
        top.scaleX = 0.5;
        top.scaleY = 0.5;
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("end1_png");
        this.addChild(bg);
        bg.x = 50;
        bg.y = 100;
        var game_score = egret.localStorage.getItem("canquan_game_score");
        var score = new egret.TextField();
        score.size = 80;
        score.text = game_score;
        score.x = 260;
        score.y = 500;
        score.textColor = 0xff0000;
        this.addChild(score);
        var replay_btn = new egret.Bitmap();
        replay_btn.texture = RES.getRes("replay_png");
        this.addChild(replay_btn);
        replay_btn.anchorOffsetX = replay_btn.width / 2;
        replay_btn.anchorOffsetY = replay_btn.height / 2;
        replay_btn.x = 150;
        replay_btn.y = 750;
        replay_btn.touchEnabled = true;
        replay_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.replay_btnCallback, this);
        replay_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.replay_btnCallback, this);
        replay_btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.replay_btnCallback, this);
        var rank_btn = new egret.Bitmap();
        rank_btn.texture = RES.getRes("rank_png");
        this.addChild(rank_btn);
        rank_btn.anchorOffsetX = rank_btn.width / 2;
        rank_btn.anchorOffsetY = rank_btn.height / 2;
        rank_btn.x = 300;
        rank_btn.y = 750;
        rank_btn.touchEnabled = true;
        rank_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.rank_btnCallback, this);
        rank_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.rank_btnCallback, this);
        rank_btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.rank_btnCallback, this);
        var home_btn = new egret.Bitmap();
        home_btn.texture = RES.getRes("home_png");
        this.addChild(home_btn);
        home_btn.anchorOffsetX = home_btn.width / 2;
        home_btn.anchorOffsetY = home_btn.height / 2;
        home_btn.x = 450;
        home_btn.y = 750;
        home_btn.touchEnabled = true;
        home_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.home_btnCallback, this);
        home_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.home_btnCallback, this);
        home_btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.home_btnCallback, this);
    };
    OverScene.prototype.replay_btnCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event = new GameEvent(GameEvent.GAME_CONTINUE);
            this.dispatchEvent(event);
        }
        else if (evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    };
    OverScene.prototype.rank_btnCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event = new GameEvent(GameEvent.GAME_RANK);
            this.dispatchEvent(event);
        }
        else if (evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    };
    OverScene.prototype.home_btnCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event = new GameEvent(GameEvent.GAME_HIT);
            this.dispatchEvent(event);
        }
        else if (evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    };
    return OverScene;
}(egret.Sprite));
__reflect(OverScene.prototype, "OverScene");
//# sourceMappingURL=OverScene.js.map