class Dialog extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "resource/game_skins/Control/Dialog.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE, () => {
			this.width = this.stage.stageWidth;
			this.height = this.stage.stageHeight;
		}, this)
	}
	lbMsg: eui.Label;
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	img_dialog_outer: eui.Image;
	btn_yes: eui.Button;
	btn_cancel: eui.Button;

	protected childrenCreated(): void {
		super.childrenCreated();
		this.img_dialog_outer.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.close();
		}, this)

		this.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.close();
		}, this)

		this.btn_yes.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.close();
		}, this)

	}
	public show(txt: string) {
		if (txt == undefined) return;
		this.lbMsg.text = txt;
		//加入大场景中
        SceneManager.getInstance().pushScene(this)
	}

	private close() {
		SceneManager.getInstance().popScene(this);
	}
}