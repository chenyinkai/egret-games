var GameEvent = (function (_super) {
    __extends(GameEvent, _super);
    function GameEvent() {
        _super.apply(this, arguments);
    }
    var d = __define,c=GameEvent,p=c.prototype;
    GameEvent.GAME_OVER = "game_over_event";
    GameEvent.GAME_HIT = "game_hit_event";
    GameEvent.GAME_START = "game_start_event";
    GameEvent.GAME_GO = "game_go_event";
    GameEvent.GAME_CONTINUE = "game_continue_event";
    GameEvent.GAME_BLEED = "game_bleed_event";
    GameEvent.GAME_HELP = "game_help_event";
    GameEvent.GAME_HINT = "game_hint_event";
    return GameEvent;
}(egret.Event));
egret.registerClass(GameEvent,'GameEvent');
//# sourceMappingURL=GameEvent.js.map