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
		this.txt.y = 60;
		this.txt.size = 80;
		this.txt.textColor = 0x0000ff;
		this.txt.textAlign = egret.HorizontalAlign.CENTER;
		this.txt.text = "10'00''";
		this.addChild(this.txt);
	}

	private _timer:egret.Timer;
	private _num = 30;
	private createTimer(){
		this._timer = new egret.Timer(1000,this._num);
		this._timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
		this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerCom,this);
	}

	private _timers = 30;
	private onTimer(){
		this._timers -=1;
		this.txt.text = this._timers + "'00''";
	}

	private onTimerCom(){
		this.txt.text = "00'00''";
		//结束
		var event:GameEvent = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
	}
	public start(){
		this.txt.text = "30'00''";
		this._timers = 30;
		this._timer.reset();
		this._timer.start();
	}

	public stop(){
		this._timer.stop(); 
	}
}