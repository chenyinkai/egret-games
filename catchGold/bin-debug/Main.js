var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    // private createGameScene():void {
    //     var game = new Game();
    //     this.addChild(game);
    //     game.addEventListener(GameEvent.GAME_HIT,this.over,this);
    // }
    // private over(){
    //     console.log("弹出overScene界面");
    // }
    p.createGameScene = function () {
        // var ball = new Game();
        // this.addChild(ball);
        var startScene = new BeginScene();
        this.addChild(startScene);
        startScene.addEventListener(GameEvent.GAME_RANK, this.rank, this);
        startScene.addEventListener(GameEvent.GAME_GO, this.go, this);
        startScene.addEventListener(GameEvent.GAME_HELP, this.help, this);
    };
    /* 游戏准备 */
    p.startgame = function () {
        //console.log("startgame");
        this.removeChildren();
        var layer = new BeginScene();
        this.addChild(layer);
        layer.addEventListener(GameEvent.GAME_RANK, this.rank, this);
        layer.addEventListener(GameEvent.GAME_GO, this.go, this);
        layer.addEventListener(GameEvent.GAME_HELP, this.help, this);
    };
    /*游戏排行榜*/
    p.rank = function () {
        this.removeChildren();
        var rankScene = new RankScene();
        this.addChild(rankScene);
        rankScene.addEventListener(GameEvent.GAME_START, this.startgame, this);
    };
    /* 游戏开始 */
    p.go = function () {
        this.removeChildren();
        var ball = new Game();
        this.addChild(ball);
        ball.addEventListener(GameEvent.GAME_HIT, this.gameover, this);
        //layer.addEventListener(GameEvent.GAME_START, this.startgame, this);
    };
    /*gameover */
    p.gameover = function () {
        //this.removeChildren();
        var layer = new OverScene();
        this.addChild(layer);
        layer.addEventListener(GameEvent.GAME_CONTINUE, this.begingame, this);
        layer.addEventListener(GameEvent.GAME_BLEED, this.startgame, this);
        layer.addEventListener(GameEvent.GAME_TORANK, this.rank, this);
    };
    p.begingame = function () {
        console.log("startgame");
        this.go();
    };
    /* help */
    p.help = function () {
        this.removeChildren();
        var layer = new HelpLayer();
        this.addChild(layer);
        layer.addEventListener(GameEvent.GAME_START, this.startgame, this);
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
