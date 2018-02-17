class Man extends egret.Sprite{
	public constructor() {
		super();
		this.init();
	}

	private man:egret.Bitmap;
	private init(){
		var man = new egret.Bitmap();
		man.texture = RES.getRes("ghostplayer-sheet0_png");
		this.addChild(man);
		this.anchorOffsetY = this.height / 2;
		man.x = 0;
		man.y = 0;
		this.man = man;
	}
}