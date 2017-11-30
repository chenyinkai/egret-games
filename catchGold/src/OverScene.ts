declare function isdefwinname();
declare function listShow();
declare function getwinname();
class OverScene extends egret.Sprite{
    private sky:egret.Bitmap;
	private txt:egret.TextField;
    private stageW:number = 0;
    private stageH:number = 0;

    public constructor() {
        super();
        this.setUI();
    }

    private setUI() {
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

        var shape:egret.Shape = new egret.Shape();
		shape.graphics.beginFill(0xffffff);
		shape.graphics.drawRect( 0, 0, 400, 300 );
		shape.graphics.endFill();
		shape.anchorOffsetX = shape.width / 2;
		//shape.anchorOffsetY = shape.height / 2;
		shape.x = stageW / 2;
		shape.y = stageH * 0.1;
		this.addChild( shape );

        var goldScore:string = egret.localStorage.getItem("goldScore");
        var shitScore:string = egret.localStorage.getItem("shitScore");
        var txt = new egret.TextField();
        txt.width = egret.MainContext.instance.stage.stageWidth;
		this.addChild(txt);
		txt.y = stageH * 0.13;
        txt.textAlign = egret.HorizontalAlign.CENTER;
		//txt.inputType = egret.TextFieldInputType.TEXT;
		txt.size = 30;
		txt.textColor = 0xff0000;
        var t = parseInt(goldScore) - 2*parseInt(shitScore);
        txt.text = "你抢到了" + goldScore + "个红包" + "\n\n" + "你被" + shitScore + "坨屎砸中了" + "\n\n" + "分数:" + t;

        var winname = getwinname();
        console.log(winname);
        var params = "gid=" + winname.gid  + "&uid=" + winname.uid + "&score=" + t;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        request.open("http://xxx/user/score.html", egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(params);
        request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
        request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);

		 //  添加返回主菜单按钮
        var againBtn = new egret.Bitmap();
        againBtn.texture = RES.getRes("back_png");
        this.addChild(againBtn);
        againBtn.anchorOffsetX = againBtn.width/2;
        againBtn.anchorOffsetY = againBtn.height/2;
        againBtn.x = stageW/2;
        againBtn.y = stageH*0.7;
        againBtn.touchEnabled = true;
        againBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.againBtnCallback, this);
        againBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.againBtnCallback, this);
        againBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.againBtnCallback, this);

        //  添加再来一次按钮
        var homeBtn = new egret.Bitmap();
        homeBtn.texture = RES.getRes("again_png");
        this.addChild(homeBtn);
        homeBtn.anchorOffsetX = homeBtn.width/2;
        homeBtn.anchorOffsetY = homeBtn.height/2;
        homeBtn.x = stageW/2;
        homeBtn.y = stageH*0.6;
        homeBtn.touchEnabled = true;
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.homeBtnCallback, this);
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.homeBtnCallback, this);
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.homeBtnCallback, this);

        //  添加排行榜按钮
        var rankBtn = new egret.Bitmap();
        rankBtn.texture = RES.getRes("rank_png");
        this.addChild(rankBtn);
        rankBtn.anchorOffsetX = rankBtn.width/2;
        rankBtn.anchorOffsetY = rankBtn.height/2;
        rankBtn.x = stageW/2;
        rankBtn.y = stageH*0.8;
        rankBtn.touchEnabled = true;
        rankBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.rankBtnCallback, this);
        rankBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.rankBtnCallback, this);
        rankBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.rankBtnCallback, this);

    }

    //  home按钮回调
    private homeBtnCallback(evt:egret.TouchEvent):void {
        // console.log("home按钮回调");

        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
            // console.log("touch begin");
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            // console.log("touch ended");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
      
            var event:GameEvent = new GameEvent(GameEvent.GAME_CONTINUE);
            this.dispatchEvent(event);

        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
            // console.log("touch cancel");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }

    }

	//  home按钮回调
    private againBtnCallback(evt:egret.TouchEvent):void {
        // console.log("home按钮回调");

        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
            // console.log("touch begin");
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            // console.log("touch ended");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
      
            var event:GameEvent = new GameEvent(GameEvent.GAME_BLEED);
            this.dispatchEvent(event);

        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
            // console.log("touch cancel");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }

    }

    //  排行榜按钮回调
    private rankBtnCallback(evt:egret.TouchEvent):void {
        // console.log("home按钮回调");

        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
            // console.log("touch begin");
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            // console.log("touch ended");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
      
            var event:GameEvent = new GameEvent(GameEvent.GAME_TORANK);
            this.dispatchEvent(event);

        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
            // console.log("touch cancel");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }

    }


    private onPostComplete(event:egret.Event):void {
        var request = <egret.HttpRequest>event.currentTarget;
        // console.log("post data : ",request.response);

        // var userinfo = JSON.parse(request.response);
        // var maxScoreLabel = GameData.score;
        // if ( userinfo.status == 1 ) {
        //     maxScoreLabel = userinfo.data.tscore;
        // }
        // // console.log("post data tscore : ", userinfo.data.tscore);
        // GameData.userinfo.maxScore = maxScoreLabel;

        // var rankLabel = "--";
        // if ( userinfo.status == 1 ) {
        //     rankLabel = userinfo.data.ranking;
        // }
        // // console.log("post data ranking : ", userinfo.data.ranking);
        // GameData.userinfo.ranking = rankLabel;

        // this.maxScoreLabel.text = maxScoreLabel + "";
        // // this.maxScoreLabel.x = this.scoreBg.x + this.scoreBg.width/5;
        // this.rankLabel.text = rankLabel + "";
        // // this.rankLabel.x = this.scoreBg.x + this.scoreBg.width/5;

    }
    private onPostIOError(event:egret.IOErrorEvent):void {
        console.log("FailedLayer post error : " + event);
    }
    private onPostProgress(event:egret.ProgressEvent):void {
        // console.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    }

}