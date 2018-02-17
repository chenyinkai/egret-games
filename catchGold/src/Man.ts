class Man extends egret.Sprite{
	public constructor() {
		super();
		this.init();
	}
	private man:egret.Bitmap;
	private init(){
		var scrW = Data.getStageWidth();
		var scrH = Data.getStageHeight();
		var man = new egret.Bitmap();
		man.texture = RES.getRes("lanzi_png");
		this.addChild(man);
		this.anchorOffsetX = this.width / 2;
		this.anchorOffsetY = this.height / 2;
		man.x = 0;
		man.y = 0;
		man.touchEnabled = true;
		this.man = man;
		man.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this);
		man.addEventListener(egret.TouchEvent.TOUCH_END,this.mouseUp,this);
		man.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this);
	}
	private mouseDown(evt:egret.TouchEvent){
		var p:egret.Point = new egret.Point(evt.stageX,evt.stageY);
		this.x = p.x;
	}
	public mouseMove(evt:egret.TouchEvent){
		var scrW = Data.getStageWidth();
		var scrH = Data.getStageHeight();
		
		var p:egret.Point = new egret.Point(evt.stageX,evt.stageY);
		this.x = p.x;
	}
	private mouseUp(evt:egret.TouchEvent){
		//this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseMove,this);
		//this.myBall.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.mouseUp,this);
	}
}