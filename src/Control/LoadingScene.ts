class LoadingScene extends BaseScene {
	public static loadingScene: LoadingScene
	public constructor() {
		super();
		this.skinName = "resource/game_skins/control/Loading.exml";
	}
	public static getInstance(): LoadingScene {
		if (this.loadingScene == null) {
			this.loadingScene = new LoadingScene();
		}
		return this.loadingScene;
    }

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	img_load: eui.Image;

	protected childrenCreated(): void {
		super.childrenCreated();
		let tween = egret.Tween.get(this.img_load, { loop: true });
		tween.to(
			{ rotation: 360 }, 2000
		)
	}

}