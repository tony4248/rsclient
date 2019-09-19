class EToast extends eui.Component implements eui.UIComponent {
	public constructor(seconds:number) {
		super();
		this.skinName = "resource/game_skins/Control/EToast.exml";
		this.delayInSecons = seconds;
	}
	public delayInSecons:number;
	public lbMsg: eui.Label;
	public timer: egret.Timer;
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this.timer = new egret.Timer(this.delayInSecons * 1000, 2)
		this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.over, this)
		this.timer.start();
	}

	public setColor(color: number) {
		this.lbMsg.textColor = color;
	}

	public show(txt: string) {
		if (txt == undefined) return;
		this.lbMsg.text = txt;
		//加入大场景中
        SceneManager.getInstance().pushScene(this)
	}

	over() {
		SceneManager.getInstance().popScene(this);
	}

}