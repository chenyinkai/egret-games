declare function isdefwinname();
declare function listShow();
declare function getwinname();
class RankScene extends egret.Sprite {
   
    public constructor(){
        super();
        this.init();
    }
    
    private txt:egret.TextField;
    private init(){
        //  获取屏幕大小
        var stageW = Data.getStageWidth();
        var stageH = Data.getStageHeight();

		//背景
		var sky = new egret.Bitmap();
		sky.texture = RES.getRes("true_jpg");
		sky.height = stageH;
		sky.width = stageW;
		this.addChild(sky);

        var shape:egret.Shape = new egret.Shape();
		shape.graphics.beginFill(0xffffff);
		shape.graphics.drawRect( 0, 0, stageW, 800);
		shape.graphics.endFill();
		shape.anchorOffsetX = shape.width / 2;
		//shape.anchorOffsetY = shape.height / 2;
		shape.x = stageW / 2;
		shape.y = 0;
		this.addChild( shape );

        var title = new egret.TextField();
        title.width = egret.MainContext.instance.stage.stageWidth;
		this.addChild(title);
		title.y = 50;
        title.textAlign = egret.HorizontalAlign.CENTER;
		//title.inputType = egret.TextFieldInputType.TEXT;
		title.size = 50;
		title.textColor = 0xff0000;
        title.text = "排行榜(前十)";

        var txt = new egret.TextField();
        txt.width = egret.MainContext.instance.stage.stageWidth;
		this.addChild(txt);
		txt.y = 120;
        txt.textAlign = egret.HorizontalAlign.LEFT;
		//txt.inputType = egret.TextFieldInputType.TEXT;
		txt.size = 30;
		txt.textColor = 0xff0000;
        //txt.text = "您还没有成绩，赶快参加吧。";
        this.txt = txt;

         //  添加返回主菜单按钮
        var homeBtn = new egret.Bitmap();
        homeBtn.texture = RES.getRes("back_png");
        this.addChild(homeBtn);
        homeBtn.anchorOffsetX = homeBtn.width/2;
        homeBtn.anchorOffsetY = homeBtn.height/2;
        homeBtn.x = stageW/2;
        homeBtn.y = stageH * 0.76;
        homeBtn.touchEnabled = true;
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.homeBtnCallback, this);
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.homeBtnCallback, this);
        homeBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.homeBtnCallback, this);

        var user = getwinname();
        var url:string = "http://xxx/user/ranking.html?gid=" + user.gid;
        var loader:egret.URLLoader = new egret.URLLoader();

        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);

        var request:egret.URLRequest = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.GET;
        loader.load(request);
    }

    private onGetComplete(event:egret.Event):void{
        console.log(111);
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;

        var js = eval("("+data.toString()+")");
        console.log(js.data);
        if(js.data.length === 0){
            this.txt.text = "还没有排行，快来参与吧";
        }else{
            for(var i = 0; i < 10; i++){
                if(js.data[i].name == null){
                    this.txt.text += js.data[i].ranking + "、  玩家 :  " + "无名侠" + "       分数 :    " + js.data[i].tscore + "\n";
                }else{
                    this.txt.text += js.data[i].ranking + "、  玩家 :  " + js.data[i].name + "      分数 :    " + js.data[i].tscore + "\n";
                }
            }
        }
    }

    

    //  home按钮回调
    private homeBtnCallback(evt:egret.TouchEvent):void {
        // console.log("home按钮回调");

        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
            // console.log("touch begin");
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            // console.log("touch ended");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
      
            var event:GameEvent = new GameEvent(GameEvent.GAME_START);
            this.dispatchEvent(event);

        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
            // console.log("touch cancel");
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }

    }
}
