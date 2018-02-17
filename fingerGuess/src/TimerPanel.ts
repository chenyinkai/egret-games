class TimerPanel extends egret.Sprite{
	public constructor() {
		super();
		this.draw();
		this.createTimer();
	}

	private txt:egret.TextField;
	private draw(){
		this.txt = new egret.TextField();
		this.txt.width = egret.MainContext.instance.stage.stageWidth;
		this.txt.size = 40;
		this.txt.y = 110;
		this.txt.x = 250;
		this.txt.textColor = 0xff0000;
		this.txt.text = "45'00''";
		this.addChild(this.txt);
	}

	private _timer:egret.Timer;
	private _num = 45;
	private createTimer(){
		var key:string ="canquan_time";
		var value:string = ""+45;
		egret.localStorage.setItem(key,value);

		this._timer = new egret.Timer(1000,this._num);
		this._timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
		this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerCom,this);
	}

	private _timers = 45;
	private onTimer(){
		this._timers -=1;
		this.txt.text = this._timers + "'00''";

		var key:string ="canquan_time";
		var value:string = ""+this._timers;
		egret.localStorage.setItem(key,value);
	}

	private onTimerCom(){
		this.txt.text = "00'00''";
		//结束
		var event:GameEvent = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
	}
	public start(){
		this.txt.text = "45'00''";
		this._timers = 45;
		this._timer.reset();
		this._timer.start();
	}
}