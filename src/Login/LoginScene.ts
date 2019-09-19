class LoginScene extends BaseScene {
	public static loginScene:LoginScene;
	//当前用户
	private user:User;
	private userName:string;
	private passwd:string;
	private constructor() {
		super();
		this.skinName = "resource/game_skins/Login/Login.exml";
		this.tipsScene = TipsScene.getInstance();
	}
	
	input_username: eui.TextInput;
	input_pwd: eui.TextInput;
	agreePolicy:eui.CheckBox;
	btnLogin: EButton;
	btnRegister: EButton;
	btnWeixinLogin: EButton;
	btnQQLogIn: EButton;
	tipsScene:TipsScene;

 	//单例
    public static getInstance(): LoginScene {
        if (this.loginScene == null) {
            this.loginScene = new LoginScene();

        }
        return this.loginScene;
    }

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		//登录
		this.btnLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			console.log("点击登录按钮！");
			//登录
			this.login(this.input_username.text, this.input_pwd.text);		
		}, this)
		//注册
		this.btnRegister.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			console.log("点击注册按钮！");
			//登录
			this.register(this.input_username.text, this.input_pwd.text);		
		}, this)

		//AudioMgr.GetInstance().PlayBgAudio("bg_mp3");
	}


	public buildFullWebsocketUrl(rawUrl:string, sessionId:string):string{
		return "ws://" + rawUrl + "?sessionid=" + sessionId; 
	}

	public validateFields(userName:string, password:string):boolean{
		if (userName == "" || userName.length > 20 || userName.length < 2) {
			this.tipsScene.show("请输入有效的用户名!", false, null , this, true);
            return false;
        }
		if (password == "" || password.length > 20 || password.length < 2) {
			this.tipsScene.show("请输入有效的密码!", false, null , this, true);
            return false;
        }
		if(!this.agreePolicy.selected){
			this.tipsScene.show("请检查用户协议!", false, null , this, true);
            return false;
        }
		return true;
	}

	public login(userName:string, password:string){
		//校验字段
		//if(!this.validateFields(userName, password)){return;}
		//更新变量
		this.userName = userName;
		this.passwd = password;
		//构建请求
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
		//显示loading按钮
		//SceneManager.getInstance().pushScene(LoadingScene.getInstance());
		return true;
	}

	public register(userName:string, password:string):boolean{
		//校验字段
		if(!this.validateFields(userName, password)){return;}
		//更新变量
		this.userName = userName;
		this.passwd = password;
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
		//显示loading按钮
		SceneManager.getInstance().pushScene(LoadingScene.getInstance());
		return true;
	}

	// HTTP 200
	// args:Object {sessionId: "1d9332752bc183630edbeca01a4a2f43dfdc985eddafd50660…", url: "localhost:9688/websocket"}
	// args:Object {content: "用户名或密码不正确."}
	public onPostComplete(event: egret.Event): void {
		//SceneManager.getInstance().popScene(LoadingScene.getInstance());
        var request = <egret.HttpRequest>event.currentTarget;
		let evtRes: EventRes = EventRes.decode(request.response);
		let url:string = evtRes.getArgs()["url"];
		let sessionId:string = evtRes.getArgs()["sessionId"];
		//更新当前用户的变量
		this.user = evtRes.getArgs()["user"];
		this.user.sessionId = sessionId;
		//增加监听函数
		Network.getInstance().setConnectHandler(this.OnSocketConnected, this);
		Network.getInstance().setCloseHandler(this.OnSocketClosed, this);
		//构建websocket的连接url,并连接
		let fullWsUrl = this.buildFullWebsocketUrl(url, sessionId);
		console.log("fullWsUrl:" + fullWsUrl);
		Network.getInstance().connect(fullWsUrl);

    }
	//连接成功后的回调函数
	public OnSocketConnected():void{
		if(null != this.user){UserService.getInstance().setUser(this.user)}
		//进入下一个场景
		//let hallScene = HallScene.getInstance();
		//SceneManager.getInstance().popLastScene();
		//SceneManager.getInstance().pushScene(hallScene);
	}

	//连接成功后的回调函数
	public OnSocketClosed():void{
		 console.log("Socket closed.");
	}

	//Http 400, 500
    public onPostIOError(event: egret.IOErrorEvent): void {
		SceneManager.getInstance().popScene(LoadingScene.getInstance());
		var request = <egret.HttpRequest>event.currentTarget;
		let evtRes: EventRes = EventRes.decode(request.response);
		TipsScene.getInstance().show(evtRes.getContent(), false, null , this, true);
    }

    public onPostProgress(event: egret.ProgressEvent): void {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }

}