/** 扑克的显示类 */
class PokerSprite extends egret.Sprite {
	//值类
	private poker: Poker;
	//是否被选中
	private selected:boolean

	//构造器
	public constructor(poker: Poker,  width:number, touchable:boolean) {
		super();
		this.poker = poker;
		this.width = width;
		this.height = width * Constants.POKER_WvsH_RATIO;
		this.selected = false;
		let imgId = this.getImageID();
		var img: egret.Bitmap = new egret.Bitmap(RES.getRes(imgId));
		img.width = this.width;
		img.height = this.height;
        this.addChild(img);
		if(touchable){
			this.touchEnabled = true;
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, (a) => {
				this.selected = !this.selected;
				if (this.selected) {
					this.y -= 15;
				} else {
					this.y += 15;
				}

			}, this)
		}

	}

	public getPoker():Poker{
		return this.poker;
	}
	
	public setSelected(selected:boolean){
		this.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP))
	}

	public getSelected(){
		return this.selected;
	}

	public getImageID():string{
		//"poker_1_png"
		let imgId = "poker_" + this.poker.getId() + "_png"
		return imgId;
	}
}	