class PokerScene extends eui.Component implements eui.UIComponent {
	//花色
	private suits: number;
	//大小
    private value: number;
	//需要显示的扑克牌的图片
	texture: eui.Image;
	//选中的状态需要显示的暗色图片
	shade: eui.Image;

	public constructor(suits: number, value: number) {
		super();
		this.skinName = "resource/game_skins/Ddz/PokerFullSkin.exml";
		this.suits = suits;
		this.value = value;
		this.setTextture();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, () => {
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, (a) => {
				this.selected = !this.selected;
				if (this.selected) {
					this.shade.visible = true;
					this.y -= 15;
				} else {
					this.shade.visible = false;
					this.y += 15;
				}


			}, this)
			

		}, this)

		//启动poker的拖动功能,暂时不用这个功能
		// this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startMove,this);
		// this.addEventListener(egret.TouchEvent.TOUCH_END,this.stopMove,this);

	}
 
	/**
	 * 是否选中
	 */
	private selected: boolean = false;
	public setSelected(selected:boolean){
		this.selected = selected;
	}
	public getSelected(){
		return this.selected;
	}

	public setValue(value: number) {
		this.value = value;
	}

	public getValue(): number {
		return this.value;
	}


	public setTextture() {
		//"pk_sp_0_1_png"
		let imgId = "pk_sp_" + this.suits + "_" + this.value + "_png"
		this.texture.source = imgId;
	}

	public getTextture():any{
		return this.texture.source;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	//用于移动poker
	private draggedObject:egret.Bitmap;
	private offsetX:number;
	private offsetY:number;

	/**
	 * 开始移动扑克
	 * 计算手指的位置，将要移动的扑克放在最前面
	 */
	private startMove(evt:egret.TouchEvent):void{
		this.draggedObject = evt.currentTarget;
		this.offsetX = evt.stageX - this.draggedObject.x;
		this.offsetY = evt.stageY - this.draggedObject.y;
		//console.log("dd:",super.getChildIndex( this.draggedObject ));
		this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.move,this);
	}
	/**
	 * 移动扑克
	 * 跟随手指的移动移动扑克位置
	 */
	private move(evt:egret.TouchEvent):void{
		this.draggedObject.x = evt.stageX - this.offsetX;
		this.draggedObject.y = evt.stageY - this.offsetY;
	}
	/**
	 * 结束移动扑克
	 * 移除掉扑克的TOUCH_MOVE监听
	 */
	private stopMove(evt:egret.TouchEvent):void{
		//显示扑克的y坐标和扑克的名称
		//console.log("pukerClick: y:",this.draggedObject.y,this.draggedObject.name);
		this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.move,this);
	}

}	