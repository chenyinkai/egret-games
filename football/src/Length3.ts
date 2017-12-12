class Length3 extends egret.Sprite{
	public constructor() {
		super();
		this.init();
	}

	private  targets1:Array<any>;
	private mans:Array<any>;
	private init(){
		this.targets1 = [95,190+86,280+190];
		this.mans = [];

		for(var i = 0; i < this.targets1.length; i++){
			var man = new Man();
			this.addChild(man);
			this.mans.push(man);
		}

		for(var j = 0; j < this.mans.length; j++){
			this.mans[j].y = 1000;
			this.mans[j].x = this.targets1[j];
		}
	}
}