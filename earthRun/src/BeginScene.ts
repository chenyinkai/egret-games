class BeginScene extends egret.Sprite{
	public constructor() {
		super();
		this.init();
	}

	private sky:egret.Bitmap;
	private startBtn:egret.Bitmap;
	private helpBtn:egret.Bitmap;
    private title:egret.Bitmap;
	private init(){
		var screenW = Data.getStageWidth();
		var screenH = Data.getStageHeight();

		//背景
		var sky = new egret.Bitmap();
		sky.texture = RES.getRes("star_jpg");
		sky.height = screenH;
		sky.width = screenW;
		this.sky = sky;
		this.addChild(sky);

        //背景
		var title = new egret.Bitmap();
		title.texture = RES.getRes("title_png");
		this.title = title;
        title.anchorOffsetX = title.width / 2;
        title.anchorOffsetY = title.height / 2;
        title.x = screenW / 2;
        title.y = screenH * 0.3;
		this.addChild(title);

		 // 开始按钮
        var startBtn = new egret.Bitmap();
        startBtn.texture = RES.getRes("start_png");
        this.addChild(startBtn);
        startBtn.anchorOffsetX = startBtn.width/2;
        startBtn.anchorOffsetY = startBtn.height/2;
        startBtn.x = screenW/2;
        startBtn.y = screenH*0.58;
        startBtn.touchEnabled = true;
        startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startBtnCallback, this);
        startBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.startBtnCallback, this);
        startBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.startBtnCallback, this);
        this.startBtn = startBtn;

        // 帮助按钮
        var helpBtn = new egret.Bitmap();
        helpBtn.texture = RES.getRes("help1_png");
        this.addChild(helpBtn);
        helpBtn.anchorOffsetX = helpBtn.width/2;
        helpBtn.anchorOffsetY = helpBtn.height/2;
        helpBtn.x = screenW/2;
        helpBtn.y = screenH*0.7;
        helpBtn.touchEnabled = true;
        helpBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.helpBtnCallback, this);
        helpBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.helpBtnCallback, this);
        helpBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.helpBtnCallback, this);
        this.helpBtn = helpBtn;
	}

	//  开始按钮回调
    private startBtnCallback(evt:egret.TouchEvent):void {
        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event:GameEvent = new GameEvent(GameEvent.GAME_GO);
            this.dispatchEvent(event);
        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }

    }

    //  help按钮回调
    private helpBtnCallback(evt:egret.TouchEvent):void {
        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            this.touchEnabled = false;
            this.startBtn.touchEnabled = false;
            this.helpBtn.touchEnabled = false;
            var event:GameEvent = new GameEvent(GameEvent.GAME_HELP);
            this.dispatchEvent(event);
        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    }
}