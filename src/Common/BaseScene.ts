class BaseScene extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, () => {
			this.width = this.stage.stageWidth;
			this.height = this.stage.stageHeight;
			this.horizontalCenter = 0;
			this.verticalCenter = 0;
		}, this)
	}

	public dispose(): void {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }
}