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
        _this.stageW = 0;
        _this.stageH = 0;
        _this.setUI();
        return _this;
    }
    OverScene.prototype.setUI = function () {
        //  获取屏幕大小
        this.stageW = Data.getStageWidth();
        this.stageH = Data.getStageHeight();
        var stageW = this.stageW;
        var stageH = this.stageH;
        //背景
        var sky = new egret.Bitmap();
        sky.texture = RES.getRes("true1_jpg");
        sky.height = stageH;
        sky.width = stageW;
        this.sky = sky;
        this.addChild(sky);
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xffffff);
        shape.graphics.drawRect(0, 0, 400, 300);
        shape.graphics.endFill();
        shape.anchorOffsetX = shape.width / 2;
        shape.x = stageW / 2;
        shape.y = stageH * 0.1;
        this.addChild(shape);
        var goldScore = egret.localStorage.getItem("goldScore");
        var shitScore = egret.localStorage.getItem("shitScore");
        var txt = new egret.TextField();
        txt.width = egret.MainContext.instance.stage.stageWidth;
        this.addChild(txt);
        txt.y = stageH * 0.13;
        txt.textAlign = egret.HorizontalAlign.CENTER;
        txt.size = 30;
        txt.textColor = 0xff0000;
        var t = parseInt(goldScore) - 2 * parseInt(shitScore);
        txt.text = "你抢到了" + goldScore + "个红包" + "\n\n" + "你被" + shitScore + "坨屎砸中了" + "\n\n" + "分数:" + t;
        //  添加返回主菜单按钮
        var againBtn = new egret.Bitmap();
        againBtn.texture = RES.getRes("back_png");
        this.addChild(againBtn);
        againBtn.anchorOffsetX = againBtn.width / 2;
        againBtn.anchorOffsetY = againBtn.height / 2;
        againBtn.x = stageW / 2;
        againBtn.y = stageH * 0.7;
        againBtn.touchEnabled = true;
        againBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.againBtnCallback, this);
        againBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.againBtnCallback, this);
        againBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.againBtnCallback, this);
        //  添加再来一次按钮
        var homeBtn = new egret.Bitmap();
        homeBtn.texture = RES.getRes("again_png");
        this.addChild(homeBtn);
        homeBtn.anchorOffsetX = homeBtn.width / 2;
        homeBtn.anchorOffsetY = homeBtn.height / 2;
        homeBtn.x = stageW / 2;
        homeBtn.y = stageH * 0.6;
        homeBtn.touchEnabled = true;
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.homeBtnCallback, this);
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.homeBtnCallback, this);
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.homeBtnCallback, this);
        //  添加排行榜按钮
        var rankBtn = new egret.Bitmap();
        rankBtn.texture = RES.getRes("rank_png");
        this.addChild(rankBtn);
        rankBtn.anchorOffsetX = rankBtn.width / 2;
        rankBtn.anchorOffsetY = rankBtn.height / 2;
        rankBtn.x = stageW / 2;
        rankBtn.y = stageH * 0.8;
        rankBtn.touchEnabled = true;
        rankBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.rankBtnCallback, this);
        rankBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.rankBtnCallback, this);
        rankBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.rankBtnCallback, this);
    };
    //  返回按钮事件
    OverScene.prototype.homeBtnCallback = function (evt) {
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
    //  再来一次按钮事件
    OverScene.prototype.againBtnCallback = function (evt) {
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
    //  排行榜按钮事件
    OverScene.prototype.rankBtnCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event = new GameEvent(GameEvent.GAME_TORANK);
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