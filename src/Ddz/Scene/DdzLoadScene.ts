class DdzLoadScene extends BaseScene {
	public constructor() {
		super();
		//this.skinName = "resource/GameSkin/Ddz/DdzLoadScene.exml";
		this.skinName = "resource/skins/login.exml";
	}
	tab_checkStack: eui.TabBar;
	viewstack: eui.ViewStack;
	btnLogin: EButton;
	input_username: eui.TextInput;
	input_pwd: eui.TextInput;
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		console.log("加载页面！");
		this.viewstack.selectedIndex = 0;
		this.tab_checkStack.dataProvider = new eui.ArrayCollection(["登录", "注册"])
		this.tab_checkStack.addEventListener(eui.ItemTapEvent.ITEM_TAP, () => {
			this.viewstack.selectedIndex = this.viewstack.selectedIndex == 1 ? 0 : 1;
			//this.addChild(new LoadView())
			console.log(this.input_username.text);
			console.log(this.input_pwd.text);
			this.login(this.input_username.text, this.input_pwd.text);
		}, this)
		this.btnLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			console.log("点击登录按钮！");
			let username = this.input_username.text;
			platform.login(username);
			
			const userInfo = platform.getUserInfo();
			console.log(userInfo);


		}, this)
		AudioMgr.GetInstance().PlayBgAudio("bg_mp3");
	}

	private register(userName:string, password:string):boolean{
		let request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		//设置为 POST 请求
		let params = "?userName="+ userName + "&password=" + password;
		request.open("http://" + Constants.HTTP_SERVER + ":" + Constants.HTTP_PORT + "/api/register" + params, egret.HttpMethod.GET);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
		request.send();
		request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
		request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
		request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
		return true;
	}

	public buildFullWebsocketUrl(rawUrl:string, sessionId:string):string{
		return "ws://" + rawUrl + "?sessionid=" + sessionId; 
	}

	private login(userName:string, password:string):boolean{
		let request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		//设置为 POST 请求
		let params = "?userName="+ userName + "&password=" + password;
		request.open("http://" + Constants.HTTP_SERVER + ":" + Constants.HTTP_PORT + "/api/login" + params, egret.HttpMethod.GET);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
		request.send();
		request.addEventListener(egret.Event.COMPLETE,this.onPostComplete,this);
		request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
		request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
		return true;
	}
	// HTTP 200
	// args:Object {sessionId: "1d9332752bc183630edbeca01a4a2f43dfdc985eddafd50660…", url: "localhost:9688/websocket"}
	// args:Object {content: "用户名或密码不正确."}
	private onPostComplete(event: egret.Event): void {
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("post data : ", request.response);
		let evtRes: EventRes = EventRes.decode(request.response);
		console.log("evtRes : ", evtRes);
		console.log("url: ", evtRes.getArgs()["url"]);
		console.log("sessionId: ", evtRes.getArgs()["sessionId"]);
		console.log("content: ", evtRes.getContent());
		let url = evtRes.getArgs()["url"];
		let sessionId = evtRes.getArgs()["sessionId"];
		let fullWsUrl = this.buildFullWebsocketUrl(url, sessionId);
		Network.getInstance().connect(fullWsUrl);
    }
	//Http 400, 500
    private onPostIOError(event: egret.IOErrorEvent): void {
		var request = <egret.HttpRequest>event.currentTarget;
		console.log("error response : ", request.response);
		let evtRes: EventRes = EventRes.decode(request.response);
		alert(evtRes.getContent());
		console.log("error content: ", evtRes.getContent());
    }

    private onPostProgress(event: egret.ProgressEvent): void {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }

}