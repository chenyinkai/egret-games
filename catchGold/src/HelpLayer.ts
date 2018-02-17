
class HelpLayer extends egret.Sprite{
    private bg:egret.Bitmap;
	private sky:egret.Bitmap;
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
		bg.x = stageW/2;
        bg.y = 140;
        this.bg = bg;

        //  添加返回主菜单按钮
        var homeBtn = new egret.Bitmap();
        homeBtn.texture = RES.getRes("back_png");
        this.addChild(homeBtn);
        homeBtn.anchorOffsetX = homeBtn.width/2;
        homeBtn.anchorOffsetY = homeBtn.height/2;
        homeBtn.x = stageW/2;
        homeBtn.y = stageH * 0.76;
        homeBtn.touchEnabled = true;
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.homeBtnCallback, this);
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.homeBtnCallback, this);
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.homeBtnCallback, this);

    }

    //  home按钮回调
    private homeBtnCallback(evt:egret.TouchEvent):void {
        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            var event:GameEvent = new GameEvent(GameEvent.GAME_START);
            this.dispatchEvent(event);
        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }

    }

}