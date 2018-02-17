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
var RankScene = (function (_super) {
    __extends(RankScene, _super);
    function RankScene() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    RankScene.prototype.init = function () {
        //  获取屏幕大小
        var stageW = GameData.getStageWidth();
        var stageH = GameData.getStageHeight();
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xe63872);
        shape.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
        shape.graphics.endFill();
        this.addChild(shape);
        //背景
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("bg_png");
        this.addChild(bg);
        bg.height = stageH;
        var title = new egret.TextField();
        title.width = egret.MainContext.instance.stage.stageWidth;
        this.addChild(title);
        title.y = 50;
        title.textAlign = egret.HorizontalAlign.CENTER;
        title.size = 50;
        title.textColor = 0x00ff00;
        title.text = "排行榜(前十)";
        var txt = new egret.TextField();
        txt.width = egret.MainContext.instance.stage.stageWidth;
        this.addChild(txt);
        txt.x = 100;
        txt.y = 120;
        txt.textAlign = egret.HorizontalAlign.LEFT;
        txt.size = 30;
        txt.textColor = 0x00ff00;
        this.txt = txt;
        //  添加返回主菜单按钮
        var homeBtn = new egret.Bitmap();
        homeBtn.texture = RES.getRes("back_png");
        this.addChild(homeBtn);
        homeBtn.anchorOffsetX = homeBtn.width / 2;
        homeBtn.anchorOffsetY = homeBtn.height / 2;
        homeBtn.x = stageW / 2;
        homeBtn.y = stageH * 0.76;
        homeBtn.touchEnabled = true;
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.homeBtnCallback, this);
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.homeBtnCallback, this);
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.homeBtnCallback, this);
        if (window.name) {
            var user = getwinname();
            var url = "your url";
            var loader = new egret.URLLoader();
            loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
            loader.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
            var request = new egret.URLRequest(url);
            request.method = egret.URLRequestMethod.GET;
            loader.load(request);
        }
    };
    RankScene.prototype.onGetComplete = function (event) {
        console.log(111);
        var loader = event.target;
        var data = loader.data;
        var js = eval("(" + data.toString() + ")");
        console.log(js.data);
        if (js.data.length === 0) {
            this.txt.text = "还没有排行，快来参与吧";
        }
        else {
            for (var i = 0; i < js.data.length; i++) {
                if (js.data.length < 10) {
                    var rank_num = new egret.TextField();
                    this.addChild(rank_num);
                    rank_num.x = 100;
                    rank_num.y = 140 + 60 * i;
                    rank_num.size = 30;
                    rank_num.textColor = 0xffffff;
                    rank_num.text = "" + (i + 1);
                    var user_name = new egret.TextField();
                    this.addChild(user_name);
                    user_name.width = 300;
                    user_name.height = 30;
                    user_name.textAlign = egret.HorizontalAlign.CENTER;
                    user_name.x = 150;
                    user_name.y = 140 + 60 * i;
                    user_name.size = 24;
                    user_name.textColor = 0xffffff;
                    user_name.text = js.data[i].name;
                    var tscore = new egret.TextField();
                    this.addChild(tscore);
                    tscore.x = 500;
                    tscore.y = 140 + 60 * i;
                    tscore.size = 30;
                    tscore.textColor = 0xffffff;
                    tscore.text = js.data[i].tscore;
                }
                else {
                }
            }
        }
    };
    // 返回按钮回调
    RankScene.prototype.homeBtnCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event = new GameEvent(GameEvent.GAME_START);
            this.dispatchEvent(event);
        }
        else if (evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    };
    return RankScene;
}(egret.Sprite));
__reflect(RankScene.prototype, "RankScene");
//# sourceMappingURL=RankScene.js.map