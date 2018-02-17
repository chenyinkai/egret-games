class EnemyBall extends egret.Sprite {
    private _spriteTexture:egret.Bitmap;
    private _circle:egret.Bitmap;
    private _speedX:number;
    private _speedY:number;
    public radius:number;
    private _color:number;

    private _numlabel:egret.TextField;

    private _cont:number = 60;

    public status:number = 0;

    public constructor() {
        super();
        this.init();
    }

    private init() {
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height/2;

		var _circle = new egret.Bitmap();
		_circle.texture = RES.getRes("fire_png");
		this.addChild(_circle);
        _circle.scaleX = 0.15;
        _circle.scaleY = 0.15;
		_circle.anchorOffsetX = _circle.width / 2;
		_circle.anchorOffsetY = _circle.height / 2;
		_circle.x = 0;
		_circle.y = 0;

		var speedX = Math.floor(Math.random()*8 + 3);
        var speedY = Math.floor(Math.random()*8 + 3);
        if ( Math.random() < 0.5 ) {
            speedX *= -1;
        }
        if ( Math.random() < 0.5 ) {
            speedY *= -1;
        }
        this._speedX = speedX;
        this._speedY = speedY;
	}

	public move(deaths:Array<any>) {
        if ( this.status == 0 ) { 
            var x = this.x;
            var y = this.y;
            var w = Data.getStageWidth();
            var h = Data.getStageHeight();
            x += this._speedX;
            y += this._speedY;
            //到边缘处转向
            if ( x <= 0 ) {
                this.x = 0;
                this._speedX *= -1;
            } else if ( x >= w ) {
                this.x = w;
                this._speedX *= -1;
            } else {
                this.x = x;
            }

            if ( y <= 0 ) {
                this.y = 0;
                this._speedY *= -1;
            } else if ( y >= h ) {
                this.y = h;
                this._speedY *= -1;
            } else {
                this.y = y;
            }
        }
    }
}