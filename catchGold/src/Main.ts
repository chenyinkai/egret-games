//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
declare function isdefwinname();
declare function listShow();
declare function getwinname();
class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView:LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private textfield:egret.TextField;

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

    private createGameScene():void {
        // var ball = new Game();
        // this.addChild(ball);
        var startScene = new BeginScene();
        this.addChild(startScene);
        startScene.addEventListener(GameEvent.GAME_RANK, this.rank, this);
        startScene.addEventListener(GameEvent.GAME_GO, this.go, this);
        startScene.addEventListener(GameEvent.GAME_HELP, this.help, this);
    }

     /* 游戏准备 */
    private startgame():void {
        //console.log("startgame");
        this.removeChildren();
        var layer = new BeginScene();
        this.addChild(layer);
        layer.addEventListener(GameEvent.GAME_RANK, this.rank, this);
        layer.addEventListener(GameEvent.GAME_GO, this.go, this);
        layer.addEventListener(GameEvent.GAME_HELP, this.help, this);
    }
    /*游戏排行榜*/ 
    private rank():void{
        this.removeChildren();
        var rankScene = new RankScene();
        this.addChild(rankScene);
        rankScene.addEventListener(GameEvent.GAME_START, this.startgame, this);
    }

    /* 游戏开始 */
    private go():void {
        this.removeChildren();
        var ball = new Game();
        this.addChild(ball);

        ball.addEventListener(GameEvent.GAME_HIT, this.gameover, this);
        //layer.addEventListener(GameEvent.GAME_START, this.startgame, this);
    }

    /*gameover */
    private gameover(){
        //this.removeChildren();
        var layer = new OverScene();
        this.addChild(layer);
        layer.addEventListener(GameEvent.GAME_CONTINUE, this.begingame, this);
        layer.addEventListener(GameEvent.GAME_BLEED, this.startgame, this);
        layer.addEventListener(GameEvent.GAME_TORANK,this.rank,this);
    }

    private begingame(){
        console.log("startgame");
        this.go();
    }
     /* help */
    private help():void {
        this.removeChildren();
        var layer = new HelpLayer();
        this.addChild(layer);
        layer.addEventListener(GameEvent.GAME_START, this.startgame, this);
    }
}


