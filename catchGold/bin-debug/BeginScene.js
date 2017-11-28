var BeginScene = (function (_super) {
    __extends(BeginScene, _super);
    function BeginScene() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=BeginScene,p=c.prototype;
    p.init = function () {
        var screenW = Data.getStageWidth();
        var screenH = Data.getStageHeight();
        //背景
        var sky = new egret.Bitmap();
        sky.texture = RES.getRes("true_jpg");
        sky.height = screenH;
        sky.width = screenW;
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
        // 开始按钮
        var startBtn = new egret.Bitmap();
        startBtn.texture = RES.getRes("start_png");
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
        helpBtn.texture = RES.getRes("help_png");
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
    p.rankCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            //console.log("touch begin");
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }
        else if (evt.type == egret.TouchEvent.TOUCH_END) {
            //console.log("touch ended");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            //  开始游戏
            // 次数判断
            var event = new GameEvent(GameEvent.GAME_RANK);
            this.dispatchEvent(event);
        }
        else if (evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            //console.log("touch cancel");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    };
    //  开始按钮回调
    p.startBtnCallback = function (evt) {
        if (evt.type == egret.TouchEvent.TOUCH_BEGIN) {
            //console.log("touch begin");
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
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
    p.helpBtnCallback = function (evt) {
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
egret.registerClass(BeginScene,'BeginScene');
