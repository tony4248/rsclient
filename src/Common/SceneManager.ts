class SceneManager {
	public static manager: SceneManager;
	private main: egret.DisplayObjectContainer;
	private scenes: egret.DisplayObjectContainer[];

	public constructor() {
		this.main = Main.getInstance();
		this.scenes = [];
	}

	public static getInstance(): SceneManager {
		if (this.manager == null) {
			this.manager = new SceneManager();
		}
		return this.manager;
	}

	/**
	 * 加入场景
	 */
	public pushScene(scene: egret.DisplayObjectContainer):void {
		this.main.addChild(scene)
		this.scenes.push(scene);
	}

	/**
	 * 弹出一个场景,带参数
	 */
	public popScene(scene:any):void{
		this.main.removeChild(scene);
		for (let i = this.scenes.length - 1; i >= 0; --i) {
			let existingScene = this.scenes[i];
			if(existingScene == scene)
			{
				this.scenes.splice(i, 1);
			}
		}
	}
	/**
	 * 弹出一个场景
	 */
	public popLastScene():void {
		if (this.scenes != null) {
			var len = this.scenes.length;
			if (len > 0) {
				var scene = this.scenes[len - 1];
				if (scene.parent == this.main) {
					this.main.removeChild(scene)
					this.scenes.pop();
				}
			}
		}
	}
}