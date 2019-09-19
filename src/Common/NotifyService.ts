class NotifyService extends egret.DisplayObject {
	static notify: NotifyService;
	public constructor() {
		super();
	}

	public static GetInstance(): NotifyService {
		if (this.notify == null) {
			this.notify = new NotifyService();
		}
		return this.notify;
	}
	/**
	 * 发送通知
	 */
	public Notify(type: string, data: any) {
		let notify = new NotifyEvent(type);
		notify.data = data
		this.dispatchEvent(notify)

	}
}