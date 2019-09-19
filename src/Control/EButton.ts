class EButton extends eui.Button implements eui.UIComponent {
	isClicked:boolean; //防止双击
	call: Function; //回调函数
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, () => {
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => {
				if(this.isClicked){ return; }
				this.scaleX = 0.9
				this.scaleY = 0.9
				this.isClicked = true;
			}, this)
			this.addEventListener(egret.TouchEvent.TOUCH_END, () => {
				this.isClicked = false;
				this.scaleX = 1.0
				this.scaleY = 1.0
				if (this.call != null) {
					this.call();
				}
			}, this)
			this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, () => {
				this.isClicked = false;
				this.scaleX = 1.0
				this.scaleY = 1.0
			}, this)
			this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, () => {
				this.isClicked = false;
				this.scaleX = 1.0
				this.scaleY = 1.0
			}, this)
		}, this)
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public addCall(call: Function) {
		this.call = call;
	}

}