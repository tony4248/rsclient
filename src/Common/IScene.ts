interface IScene {
	/**
	 * 加载场景的时候
	 */
	OnCreate();
	/**
	 * 注销场景
	 */
	OnDestory();
	/**
	 * 场景暂停
	 */
	OnPause();
	/**
	 * 场景恢复
	 */
	OnResume();
}