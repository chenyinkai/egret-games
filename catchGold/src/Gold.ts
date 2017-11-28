class Gold extends egret.Sprite{
	public constructor() {
		super();
		this.init();
	}
	private gold:egret.Bitmap;
	private _speedX:number;
    private _speedY:number
	private init(){
		var gold = new egret.Bitmap();
		gold.texture = RES.getRes("red1_png");
		this.addChild(gold);
		gold.scaleX = 0.2;
		gold.scaleY = 0.2;
		gold.y = -30;


		var speedX = Math.floor(Math.random()*20 + 20);
        var speedY = Math.floor(Math.random()*20 + 20);
        this._speedX = speedX;
        this._speedY = speedY;
	}

	public move(deaths:Array<any>) {
		var x = this.x;
		var y = this.y;
		var w = Data.getStageWidth();
		var h = Data.getStageHeight();
		y += this._speedY;
		this.y = y;
	} 
}