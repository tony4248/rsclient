/**
 * 场景管理器
 */
class SceneMgr {
	public constructor() {
	}
	/**
	 * 场景集合
	 */
	private static sceneList: Array<IScene> = new Array<IScene>();
	/**
	 * 添加场景
	 */
	public static AddScene(iscene: IScene) {
		if (iscene == null || this.sceneList.concat(iscene)) return;
		this.sceneList.push(iscene)
	}
}