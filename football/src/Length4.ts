class Length4 extends egret.Sprite{
	public constructor() {
		super();
		this.init();
	}

	private  targets:Array<any>;
	private mans:Array<any>;
	private init(){
		this.targets = [0,98+86,196+98+86,284+86+196];
		this.mans = [];

		for(var i = 0; i < this.targets.length; i++){
			var man = new Man();
			this.addChild(man);
			this.mans.push(man);
		}

		for(var j = 0; j < this.mans.length; j++){
			this.mans[j].y = 1000;
			this.mans[j].x = this.targets[j];
		}
	}
}