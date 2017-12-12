class Ball extends egret.Sprite{
	public constructor() {
		super();
		this.init();
	}

	private gold:egret.Bitmap;
	private _speedX:number;
    private _speedY:number;
	private init(){
		var gold = new egret.Bitmap();
		gold.texture = RES.getRes("ball_png");
		this.addChild(gold);
		gold.y = -30;
		var score:string = egret.localStorage.getItem("setHard");
		var t = parseInt(score);
		if(t <= 140){
			var speedY = Math.floor(Math.random()*10+20);
		}else if(t > 140 && t <= 300){
			var speedY = Math.floor(Math.random()*10+25);
		}else if(t > 300 && t <= 400){
			var speedY = Math.floor(Math.random()*10+30);
		}else{
			var speedY = Math.floor(Math.random()*10+40);
		}
 		//速度幅度过大导致直接穿过判断条件的范围
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