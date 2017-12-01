var TimerPanel = (function (_super) {
    __extends(TimerPanel, _super);
    function TimerPanel() {
        _super.call(this);
        this._num = 30;
        this._timers = 30;
        this.draw();
        this.createTimer();
    }
    var d = __define,c=TimerPanel,p=c.prototype;
    p.draw = function () {
        this.txt = new egret.TextField();
        this.txt.width = egret.MainContext.instance.stage.stageWidth;
        this.txt.y = 60;
        this.txt.size = 80;
        this.txt.textColor = 0x0000ff;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.txt.text = "10'00''";
        this.addChild(this.txt);
    };
    p.createTimer = function () {
        this._timer = new egret.Timer(1000, this._num);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerCom, this);
    };
    p.onTimer = function () {
        this._timers -= 1;
        this.txt.text = this._timers + "'00''";
    };
    p.onTimerCom = function () {
        this.txt.text = "00'00''";
        //结束
        var event = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    };
    p.start = function () {
        this.txt.text = "30'00''";
        this._timers = 30;
        this._timer.reset();
        this._timer.start();
    };
    p.stop = function () {
        this._timer.stop();
    };
    return TimerPanel;
}(egret.Sprite));
egret.registerClass(TimerPanel,'TimerPanel');
//# sourceMappingURL=TimerPanel.js.map