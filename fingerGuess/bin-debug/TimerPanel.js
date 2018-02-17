var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TimerPanel = (function (_super) {
    __extends(TimerPanel, _super);
    function TimerPanel() {
        var _this = _super.call(this) || this;
        _this._num = 45;
        _this._timers = 45;
        _this.draw();
        _this.createTimer();
        return _this;
    }
    TimerPanel.prototype.draw = function () {
        this.txt = new egret.TextField();
        this.txt.width = egret.MainContext.instance.stage.stageWidth;
        this.txt.size = 40;
        this.txt.y = 110;
        this.txt.x = 250;
        this.txt.textColor = 0xff0000;
        this.txt.text = "45'00''";
        this.addChild(this.txt);
    };
    TimerPanel.prototype.createTimer = function () {
        var key = "canquan_time";
        var value = "" + 45;
        egret.localStorage.setItem(key, value);
        this._timer = new egret.Timer(1000, this._num);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerCom, this);
    };
    TimerPanel.prototype.onTimer = function () {
        this._timers -= 1;
        this.txt.text = this._timers + "'00''";
        var key = "canquan_time";
        var value = "" + this._timers;
        egret.localStorage.setItem(key, value);
    };
    TimerPanel.prototype.onTimerCom = function () {
        this.txt.text = "00'00''";
        //结束
        var event = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
    };
    TimerPanel.prototype.start = function () {
        this.txt.text = "45'00''";
        this._timers = 45;
        this._timer.reset();
        this._timer.start();
    };
    return TimerPanel;
}(egret.Sprite));
__reflect(TimerPanel.prototype, "TimerPanel");
//# sourceMappingURL=TimerPanel.js.map