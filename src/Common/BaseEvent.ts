class BaseEvent extends egret.Event {


	public controller: string = "";

	public action:string = ""
	public data: any;
	public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
		super(type, bubbles, cancelable);
	}
}