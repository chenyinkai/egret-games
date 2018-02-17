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
var BeginScene = (function (_super) {
    __extends(BeginScene, _super);
    function BeginScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    BeginScene.prototype.init = function () {
        var screenW = Data.getStageWidth();
        var screenH = Data.getStageHeight();
        //背景
        var sky = new egret.Bitmap();
        sky.texture = RES.getRes("3_jpg");
        sky.scaleY = 2.25;
        sky.scaleX = 2.25;
        sky.x = -1050;
        this.sky = sky;
        this.addChild(sky);
        var rank = new egret.Bitmap();
        rank.texture = RES.getRes("paihang_png");
        this.addChild(rank);
        rank.anchorOffsetX = rank.width / 2;
        rank.anchorOffsetY = rank.height / 2;
        rank.x = screenW - 50;
        rank.y = screenH * 0.1;
        rank.touchEnabled = true;
        rank.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.rankCallback, this);
        rank.addEventListener(egret.TouchEvent.TOUCH_END, this.rankCallback, this);
        rank.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.rankCallback, this);
        this.rank = rank;
        // 标题
        var title = new egret.Bitmap();
        title.texture = RES.getRes("title2_png");
        this.addChild(title);
        title.anchorOffsetX = title.width / 2;
        title.anchorOffsetY = title.height / 2;
        title.x = 320;
        title.y = 250;
        this.title = title;
        // 开始按钮
        var startBtn = new egret.Bitmap();
        startBtn.texture = RES.getRes("start1_png");
        this.addChild(startBtn);
        startBtn.anchorOffsetX = startBtn.width / 2;
        startBtn.anchorOffsetY = startBtn.height / 2;
        startBtn.x = screenW / 2;
        startBtn.y = screenH * 0.66;
        startBtn.touchEnabled = true;
        startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startBtnCallback, this);
        startBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.startBtnCallback, this);
        startBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.startBtnCallback, this);
        this.startBtn = startBtn;
        // 帮助按钮
        var helpBtn = new egret.Bitmap();
        helpBtn.texture = RES.getRes("help1_png");
        this.addChild(helpBtn);
        helpBtn.anchorOffsetX = helpBtn.width / 2;
        helpBtn.anchorOffsetY = helpBtn.height / 2;
        helpBtn.x = screenW / 2;
        helpBtn.y = screenH * 0.76;
        helpBtn.touchEnabled = true;
        helpBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.helpBtnCallback, this);
        helpBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.helpBtnCallback, this);
        helpBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.helpBtnCallback, this);
        this.helpBtn = helpBtn;
    };
    //  排行按钮回调
    BeginScene.prototype.rankCallback = function (evt) {
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
    //  开始按钮回调
    BeginScene.prototype.startBtnCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            //console.log("touch begin");
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
            ////  播放按钮声音
            //this.btnClickSound.play();
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            //console.log("touch ended");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            //  开始游戏
            // 次数判断
            var event = new GameEvent(GameEvent.GAME_GO);
            this.dispatchEvent(event);
        }
        else if (evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            //console.log("touch cancel");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    };
    //  help按钮回调
    BeginScene.prototype.helpBtnCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            this.touchEnabled = false;
            this.startBtn.touchEnabled = false;
            this.helpBtn.touchEnabled = false;
            //  help
            var event = new GameEvent(GameEvent.GAME_HELP);
            this.dispatchEvent(event);
        }
        else if (evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            //console.log("touch cancel");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    };
    return BeginScene;
}(egret.Sprite));
__reflect(BeginScene.prototype, "BeginScene");
//# sourceMappingURL=BeginScene.js.map