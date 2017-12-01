var HelpLayer = (function (_super) {
    __extends(HelpLayer, _super);
    function HelpLayer() {
        _super.call(this);
        this.stageW = 0;
        this.stageH = 0;
        this.setUI();
    }
    var d = __define,c=HelpLayer,p=c.prototype;
    p.setUI = function () {
        //  获取屏幕大小
        this.stageW = Data.getStageWidth();
        this.stageH = Data.getStageHeight();
        var stageW = this.stageW;
        var stageH = this.stageH;
        //背景
        var sky = new egret.Bitmap();
        sky.texture = RES.getRes("true_jpg");
        sky.height = stageH;
        sky.width = stageW;
        this.sky = sky;
        this.addChild(sky);
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("rule_png");
        this.addChild(bg);
        bg.anchorOffsetX = bg.width / 2;
        bg.anchorOffsetY = 0;
        bg.x = stageW / 2;
        bg.y = 140;
        this.bg = bg;
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
    };
    //  home按钮回调
    p.homeBtnCallback = function (evt) {
        // console.log("home按钮回调");
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            // console.log("touch begin");
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            // console.log("touch ended");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event = new GameEvent(GameEvent.GAME_START);
            this.dispatchEvent(event);
        }
        else if (evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            // console.log("touch cancel");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    };
    return HelpLayer;
}(egret.Sprite));
egret.registerClass(HelpLayer,'HelpLayer');
//# sourceMappingURL=HelpLayer.js.map