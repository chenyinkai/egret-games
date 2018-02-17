class Game extends egret.Sprite{
	public constructor() {
		super();
		this.bg();
		this.setHand();
		this.setUI();
	}
	private alert_img:egret.Bitmap;
	private score_txt:egret.TextField;
	private timer;
	private score = 0;
	private bg(){
		var shape = new egret.Shape();
		shape.graphics.beginFill(0xe63872);
		shape.graphics.drawRect(0,0,GameData.getStageWidth(),GameData.getStageHeight());
		shape.graphics.endFill();
		this.addChild(shape);

		var stageW = GameData.getStageWidth();
		var stageH = GameData.getStageHeight();
		var bg = new egret.Bitmap();
		bg.texture = RES.getRes("bg_png");
		this.addChild(bg);
		bg.height = stageH;

		var top = new egret.Bitmap();
		top.texture = RES.getRes("top_png");
		this.addChild(top);
		top.x = 0;
		top.y = 0;

		var score_txt = new egret.TextField();
		score_txt.size = 40;
		score_txt.text = "0";
		score_txt.x = 80;
		score_txt.y = 100;
		this.addChild(score_txt);
		this.score_txt = score_txt;

		var timerPanel = new TimerPanel();
		this.addChild(timerPanel);
		timerPanel.start();
		timerPanel.addEventListener(GameEvent.GAME_OVER,this.gameOver,this);
		
	}
	//设置拳头
	private left_hand:egret.Bitmap;
	private right_hand:egret.Bitmap;
	private left_tween:egret.Tween;
	private right_tween:egret.Tween;
	private setHand(){
		var stageW = GameData.getStageWidth();
		var stageH = GameData.getStageHeight();

		var left_hand = new egret.Bitmap();
		left_hand.texture = RES.getRes("rock_png");
		this.addChild(left_hand);
		left_hand.anchorOffsetY = left_hand.height / 2;
		left_hand.x = -50;
		left_hand.y = stageH / 2 - 100;
		left_hand.scaleX = 0.6;
		left_hand.scaleY = 0.6;
		this.left_hand = left_hand;
		this.lTween();
		

		var right_hand = new egret.Bitmap();
		right_hand.texture = RES.getRes("rock_png");
		this.addChild(right_hand);
		right_hand.rotation = 180;
		right_hand.anchorOffsetX = 0;
		right_hand.anchorOffsetY = right_hand.height / 2;
		right_hand.x = stageW + 50;
		right_hand.y = stageH / 2 - 100;
		right_hand.scaleX = 0.6;
		right_hand.scaleY = 0.6;
		this.right_hand = right_hand;
		this.rTween();
	}

	private lTween(){
		var game_time = parseInt(egret.localStorage.getItem("canquan_time"));
		if(game_time >= 30){
			var time = 130;
		}else if(game_time >= 15 && game_time < 30){
			var time = 70;
		}else{
			var time = 40;
		}
		this.left_hand.texture = RES.getRes("rock_png");
		this.left_tween = egret.Tween.get(this.left_hand);
		this.left_tween
		.to({rotation:20},time)
		.to({rotation:-20},time)
		.to({rotation:20},time)
		.to({rotation:-20},time)
		.to({rotation:20},time)
		.to({rotation:-20},time)
		.to({rotation:0},time).call(this.left_change,this);
	}
	private rTween(){
		var game_time = parseInt(egret.localStorage.getItem("canquan_time"));
		if(game_time >= 30){
			var time = 130;
		}else if(game_time >= 15 && game_time < 30){
			var time = 70;
		}else{
			var time = 40;
		}
		this.right_hand.texture = RES.getRes("rock_png");
		this.right_tween = egret.Tween.get(this.right_hand);
		this.right_tween
		.to({rotation:-20+180},time)
		.to({rotation:20+180},time)
		.to({rotation:-20+180},time)
		.to({rotation:20+180},time)
		.to({rotation:-20+180},time)
		.to({rotation:20+180},time)
		.to({rotation:180},time).call(this.right_change,this);
	}
	private un_touch(){
		this.left_btn.touchEnabled = false;
		this.middle_btn.touchEnabled = false;
		this.right_btn.touchEnabled = false;
	}
	private left_type:number;
	private right_type:number;
	private left_change(){
		this.left_btn.touchEnabled = true;
		this.middle_btn.touchEnabled = true;
		this.right_btn.touchEnabled = true;
		var a = Math.random();
		if(a >= 0 && a < 0.33){
			this.left_hand.texture = RES.getRes("rock_png");
			this.left_type = 0;
		}else if(a >= 0.33 && a < 0.66){
			this.left_hand.texture = RES.getRes("paper_png");
			this.left_type = 1;
		}else{
     		this.left_hand.texture = RES.getRes("scissor_png");
			this.left_type = 2;
		}
	}
	private right_change(){
		var a = Math.random();
		if(a >= 0 && a < 0.33){
			this.right_hand.texture = RES.getRes("rock_png");
			this.right_type = 0;
		}else if(a >= 0.33 && a < 0.66){
			this.right_hand.texture = RES.getRes("paper_png");
			this.right_type = 1;
		}else{
     		this.right_hand.texture = RES.getRes("scissor_png");
			this.right_type = 2;
		}
	}
	//按钮相关
	private left_btn:egret.Bitmap;
	private middle_btn:egret.Bitmap;
	private right_btn:egret.Bitmap;
	private answer_type:boolean;
	private setUI(){
		var stageW = GameData.getStageWidth();
		var stageH = GameData.getStageHeight();

		var left_btn = new egret.Bitmap();
		left_btn.texture = RES.getRes("left_png");
		this.addChild(left_btn);
		this.left_btn = left_btn;
		left_btn.anchorOffsetX = left_btn.width / 2;
		left_btn.anchorOffsetY = left_btn.height / 2;
		left_btn.x = left_btn.width / 2;
		left_btn.y = stageH - left_btn.height / 2; 
		left_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.left_btnCallback, this);
        left_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.left_btnCallback, this);
        left_btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.left_btnCallback, this);

		var middle_btn = new egret.Bitmap();
		middle_btn.texture = RES.getRes("middle_png");
		this.addChild(middle_btn);
		this.middle_btn = middle_btn;
		middle_btn.anchorOffsetX = middle_btn.width / 2;
		middle_btn.anchorOffsetY = middle_btn.height / 2;
		middle_btn.x = middle_btn.width / 2 + left_btn.width;
		middle_btn.y = stageH - middle_btn.height / 2;
		middle_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.middle_btnCallback, this);
        middle_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.middle_btnCallback, this);
        middle_btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.middle_btnCallback, this); 

		var right_btn = new egret.Bitmap();
		right_btn.texture = RES.getRes("right_png");
		this.addChild(right_btn);
		this.right_btn = right_btn;
		right_btn.anchorOffsetX = right_btn.width / 2;
		right_btn.anchorOffsetY = right_btn.height / 2;
		right_btn.x = right_btn.width / 2 + left_btn.width + middle_btn.width;
		right_btn.y = stageH - right_btn.height / 2; 
		right_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.right_btnCallback, this);
        right_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.right_btnCallback, this);
        right_btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.right_btnCallback, this);
	}
	private left_btnCallback(evt:egret.TouchEvent):void {
        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
			evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
			this.left_btn.texture = RES.getRes("left_press_png");
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
			this.left_btn.texture = RES.getRes("left_png");

			this.un_touch();

			if(this.left_type == 0){
				if(this.right_type == 0){
					console.log("打平了");
					this.answer_type = false;
				}else if(this.right_type == 1){
					console.log("右边赢");
					this.answer_type = false;
				}else{
					console.log("左边赢");
					this.score++;
					this.answer_type = true;
				}
			}else if(this.left_type == 1){
				if(this.right_type == 0){
					console.log("左边赢");
					this.score++;
					this.answer_type = true;
				}else if(this.right_type == 1){
					console.log("打平了");
					this.answer_type = false;
				}else{
					console.log("右边赢");
					this.answer_type = false;
				}
			}else{
				if(this.right_type == 0){
					console.log("右边赢");
					this.answer_type = false;
				}else if(this.right_type == 1){
					console.log("左边赢");
					this.score++;
					this.answer_type = true;
				}else{
					console.log("打平了");
					this.answer_type = false;
				}
			}
			this.score_txt.text = ""+this.score;
			
			this.alert();
			var that = this;
			setTimeout(function(){
				if(that.alert_img.parent){
					that.alert_img.parent.removeChild(that.alert_img);
				}
				that.lTween();
				that.rTween();
			},300);
			

        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
			evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
			this.left_btn.texture = RES.getRes("left_png");
        }
    }

	private middle_btnCallback(evt:egret.TouchEvent):void {
        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
			evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
			this.middle_btn.texture = RES.getRes("middle_press_png");
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
			this.middle_btn.texture = RES.getRes("middle_png");

			this.un_touch();

			if(this.left_type == 0){
				if(this.right_type == 0){
					console.log("打平了");
					this.score++;
					this.answer_type = true;
				}else if(this.right_type == 1){
					console.log("右边赢");
					this.answer_type = false;
				}else{
					console.log("左边赢");
					this.answer_type = false;
				}
			}else if(this.left_type == 1){
				if(this.right_type == 0){
					console.log("左边赢");
					this.answer_type = false;
				}else if(this.right_type == 1){
					console.log("打平了");
					this.score++;
					this.answer_type = true;
				}else{
					console.log("右边赢");
					this.answer_type = false;
				}
			}else{
				if(this.right_type == 0){
					console.log("右边赢");
					this.answer_type = false;
				}else if(this.right_type == 1){
					console.log("左边赢");
					this.answer_type = false;
				}else{
					console.log("打平了");
					this.score++;
					this.answer_type = true;
				}
			}
			this.score_txt.text = ""+this.score;
			
			this.alert();
			var that = this;
			setTimeout(function(){
				if(that.alert_img.parent){
					that.alert_img.parent.removeChild(that.alert_img);
				}
				that.lTween();
				that.rTween();
			},300);
            
        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
			evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
			this.middle_btn.texture = RES.getRes("middle_png");
        }
    }

	private right_btnCallback(evt:egret.TouchEvent):void {
        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
			evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
			this.right_btn.texture = RES.getRes("right_press_png");
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
			this.right_btn.texture = RES.getRes("right_png");

			this.un_touch();

			if(this.left_type == 0){
				if(this.right_type == 0){
					console.log("打平了");
					this.answer_type = false;
				}else if(this.right_type == 1){
					console.log("右边赢");
					this.score++;
					this.answer_type = true;
				}else{
					console.log("左边赢");
					this.answer_type = false;
				}
			}else if(this.left_type == 1){
				if(this.right_type == 0){
					console.log("左边赢");
					this.answer_type = false;
				}else if(this.right_type == 1){
					console.log("打平了");
					this.answer_type = false;
				}else{
					console.log("右边赢");
					this.score++;
					this.answer_type = true;
				}
			}else{
				if(this.right_type == 0){
					console.log("右边赢");
					this.score++;
					this.answer_type = true;
				}else if(this.right_type == 1){
					console.log("左边赢");
					this.answer_type = false;
				}else{
					console.log("打平了");
					this.answer_type = false;
				}
			}
			this.score_txt.text = ""+this.score;
			
			this.alert();
			var that = this;
			setTimeout(function(){
				if(that.alert_img.parent){
					that.alert_img.parent.removeChild(that.alert_img);
				}
				that.lTween();
				that.rTween();
			},300);
            
        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
			evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
			this.right_btn.texture = RES.getRes("right_png");
        }
    }
	
	private alert(){
		var alert_img = new egret.Bitmap();
		if(this.answer_type == false){
			alert_img.texture = RES.getRes("fault_png");
		}else{
			alert_img.texture = RES.getRes("true_png");
		}
		this.addChild(alert_img);
		this.alert_img = alert_img;
		alert_img.x = 0;
		alert_img.y = GameData.getStageHeight() / 2 - alert_img.height / 2 - 80;
	}

	private gameOver(){
		var key:string ="canquan_game_score";
		var value:string ="" + this.score;
		egret.localStorage.setItem(key,value);

		var event:GameEvent = new GameEvent(GameEvent.GAME_OVER);
        this.dispatchEvent(event);
	}
}