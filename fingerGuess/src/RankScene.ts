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
        var stageW = GameData.getStageWidth();
        var stageH = GameData.getStageHeight();

		var shape = new egret.Shape();
		shape.graphics.beginFill(0xe63872);
		shape.graphics.drawRect(0,0,GameData.getStageWidth(),GameData.getStageHeight());
		shape.graphics.endFill();
		this.addChild(shape);
		//背景
		var bg = new egret.Bitmap();
		bg.texture = RES.getRes("bg_png");
		this.addChild(bg);
		bg.height = stageH;

        var title = new egret.TextField();
        title.width = egret.MainContext.instance.stage.stageWidth;
		this.addChild(title);
		title.y = 50;
        title.textAlign = egret.HorizontalAlign.CENTER;
		//title.inputType = egret.TextFieldInputType.TEXT;
		title.size = 50;
		title.textColor = 0x00ff00;
        title.text = "排行榜(前十)";

        var txt = new egret.TextField();
        txt.width = egret.MainContext.instance.stage.stageWidth;
		this.addChild(txt);
		txt.x = 100;
		txt.y = 120;
        txt.textAlign = egret.HorizontalAlign.LEFT;
		txt.size = 30;
		txt.textColor = 0x00ff00;
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

        if(window.name){
            var user = getwinname();
            var url:string = "your url";
            var loader:egret.URLLoader = new egret.URLLoader();

            loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
            loader.addEventListener(egret.Event.COMPLETE,this.onGetComplete,this);

            var request:egret.URLRequest = new egret.URLRequest(url);
            request.method = egret.URLRequestMethod.GET;
            loader.load(request);
        }
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
			for(var i = 0; i < js.data.length; i++){
                if(js.data.length < 10){
                    var rank_num = new egret.TextField();
                    this.addChild(rank_num);
                    rank_num.x = 100;
                    rank_num.y = 140 + 60*i;
                    rank_num.size = 30;
                    rank_num.textColor = 0xffffff;
                    rank_num.text = "" + (i+1);

                    var user_name = new egret.TextField();
                    this.addChild(user_name);
                    user_name.width = 300;
                    user_name.height = 30;
                    user_name.textAlign = egret.HorizontalAlign.CENTER;
                    user_name.x = 150;
                    user_name.y = 140 + 60*i;
                    user_name.size = 24;
                    user_name.textColor = 0xffffff;
                    user_name.text = js.data[i].name;

                    var tscore = new egret.TextField();
                    this.addChild(tscore);
                    tscore.x = 500;
                    tscore.y = 140 + 60*i;
                    tscore.size = 30;
                    tscore.textColor = 0xffffff;
                    tscore.text = js.data[i].tscore;
                }else{

                }
				
			}
            // for(var i = 0; i < 10; i++){
            //     if(js.data[i].name == null){
            //         this.txt.text += js.data[i].ranking + "、   玩家 :  " + "无名大侠" + "       分数 :    " + js.data[i].tscore + "\n";
            //     }else{
            //         this.txt.text += js.data[i].ranking + "、   玩家 :  " + js.data[i].name + "      分数 :    " + js.data[i].tscore + "\n";
            //     }
            // }
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
