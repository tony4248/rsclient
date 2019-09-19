class ETimer extends eui.Component implements eui.UIComponent {
	public constructor(num: number) {
		super();
		this.num = num;
		this.skinName = "resource/game_skins/Control/ETimer.exml";
		this.anchorOffsetX = this.width * .5;
        this.anchorOffsetY = this.height * .5;
	}
	lbTime: eui.Label;
	/**
	 * 倒计时总数
	 */
	num: number;
	timer: egret.Timer = new egret.Timer(1000);
	call: Function;
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	public addCall(call: Function) {
		this.call = call;
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.anchorOffsetX = 0;
		this.anchorOffsetY = 0;
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
		this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComplete, this);
		this.timeStart(this.num)
	}

	public timeStart(num: number) {
		this.num = num;
		this.timer.stop();
		this.timer.repeatCount = num;
		this.timer.start();


	}
	tween: egret.Tween;
	public timerFunc() {
		this.num -= 1;
		this.lbTime.text = this.num.toString();

		if (this.num <= 5) {
			this.tween = egret.Tween.get(this, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 500).wait(200)
		}
		if (this.num <= 0) {
			egret.Tween.pauseTweens(this)
		}

	}
	public timerComplete() {
		//Timer倒计时完成，发送事件
		if (this.call != null) {
			this.call();
		}
	}

}