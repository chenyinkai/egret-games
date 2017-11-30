
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

		// var ball = new Game();
		// ball.timer.stop();
		// //添加文字
		// var txt = new egret.TextField();
		// txt.text = "你坚持了"+ ball.nowscore +"秒";
		// this.addChild(txt);uires_5.png

		 //  添加返回主菜单按钮
        var againBtn = new egret.Bitmap();
        againBtn.texture = RES.getRes("return_png");
        this.addChild(againBtn);
        againBtn.anchorOffsetX = againBtn.width/2;
        againBtn.anchorOffsetY = againBtn.height/2;
        againBtn.x = stageW/2;
        againBtn.y = stageH*0.72;
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

}