var Data = (function () {
    function Data() {
    }
    var d = __define,c=Data,p=c.prototype;
    Data.getStageWidth = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    Data.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    return Data;
}());
egret.registerClass(Data,'Data');
//# sourceMappingURL=Data.js.map