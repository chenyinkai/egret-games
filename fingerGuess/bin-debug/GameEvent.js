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
var GameEvent = (function (_super) {
    __extends(GameEvent, _super);
    function GameEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameEvent.GAME_OVER = "game_over_event";
    GameEvent.GAME_HIT = "game_hit_event";
    GameEvent.GAME_START = "game_start_event";
    GameEvent.GAME_GO = "game_go_event";
    GameEvent.GAME_CONTINUE = "game_continue_event";
    GameEvent.GAME_BLEED = "game_bleed_event";
    GameEvent.GAME_HELP = "game_help_event";
    GameEvent.GAME_RANK = "game_rank_event";
    GameEvent.GAME_HINT = "game_hint_event";
    GameEvent.GAME_TORANK = "game_torank_event";
    return GameEvent;
}(egret.Event));
__reflect(GameEvent.prototype, "GameEvent");
//# sourceMappingURL=GameEvent.js.map