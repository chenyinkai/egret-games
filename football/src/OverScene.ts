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
		sky.texture = RES.getRes("2_jpg");
		sky.height = stageH;
		sky.width = stageW;
		this.sky = sky;
		this.addChild(sky);

        var shape:egret.Shape = new egret.Shape();
		shape.graphics.beginFill(0xffffff);
		shape.graphics.drawRect( 0, 0, 400, 300 );
		shape.graphics.endFill();
		shape.anchorOffsetX = shape.width / 2;
		shape.x = stageW / 2;
		shape.y = stageH * 0.1;
		this.addChild( shape );

        var score:string = egret.localStorage.getItem("score");
        var txt = new egret.TextField();
        txt.width = egret.MainContext.instance.stage.stageWidth;
		this.addChild(txt);
		txt.y = stageH * 0.15;
        txt.textAlign = egret.HorizontalAlign.CENTER;
		txt.size = 30;
		txt.textColor = 0xff0000;
        var t = parseInt(score);
        if(t < 10){
            txt.text = "你成功拦住了" + t + "个足球" + "\n" + "\n" + "难怪中国" + "\n" + "\n" + "进不了世界杯";
        }else if(t >= 10 && t < 20){
            txt.text = "你成功拦住了" + t + "个足球" + "\n" + "\n" + "你也太逊了把";
        }else if(t >= 20 && t < 30){
            txt.text = "你成功拦住了" + t + "个足球" + "\n" + "\n" + "为进入世界杯" + "\n" + "\n" + "奉献了绵薄之力";
        }else if(t >= 30){
            txt.text = "你成功拦住了" + t + "个足球" + "\n" + "\n" + "有你" + "\n" + "\n" + "中国足球" + "\n" + "\n" + "充满了希望";
        }


		 //  添加返回主菜单按钮
        var againBtn = new egret.Bitmap();
        againBtn.texture = RES.getRes("back1_png");
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
        homeBtn.texture = RES.getRes("again1_png");
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
        rankBtn.texture = RES.getRes("rank1_png");
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
        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var key:string = "score";
			var value:string = "" + 0;
			egret.localStorage.setItem(key,value);
            var event:GameEvent = new GameEvent(GameEvent.GAME_CONTINUE);
            this.dispatchEvent(event);
        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    }

	// 再来一次按钮回调
    private againBtnCallback(evt:egret.TouchEvent):void {
        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event:GameEvent = new GameEvent(GameEvent.GAME_BLEED);
            this.dispatchEvent(event);
        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }

    }

    //  排行榜按钮回调
    private rankBtnCallback(evt:egret.TouchEvent):void {
        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event:GameEvent = new GameEvent(GameEvent.GAME_TORANK);
            this.dispatchEvent(event);
        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    }
}