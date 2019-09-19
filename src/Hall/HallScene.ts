class HallScene extends BaseScene {
	public static hallScene:HallScene;
	private constructor() {
		super();
		this.skinName = "resource/game_skins/Hall/Hall.exml";
		this.tipsScene = TipsScene.getInstance();
	}

	btnCreateRoom: EButton;
	btnJoinRoom: EButton;
	tipsScene:TipsScene;

	group_ishow: eui.Group;
	img_dialog: eui.Rect;
	ebtn_group_number: EButton;
	lb1: eui.Label;
	lb2: eui.Label;
	lb3: eui.Label;
	lb4: eui.Label;
	lb5: eui.Label;
	lb0: eui.Label;

	numberlist: string = "------";
	numberIndex: number = 0;

 	//单例
    public static getInstance(): HallScene {
        if (this.hallScene == null) {
            this.hallScene = new HallScene();

        }
        return this.hallScene;
    }
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.btnJoinRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.group_ishow.visible = true;
		}, this);
		this.img_dialog.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.group_ishow.visible = false;
		}, this)
		var childnumber = this.ebtn_group_number.numChildren;

		for (var i = 0; i < childnumber; i++) {
			var ebtn = <EButton>this.ebtn_group_number.getChildAt(i);
			ebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
				let button = <EButton>e.currentTarget;
				var name = button.name;
				if (name == "del1") {
					this.numberIndex == 0 ? 0 : (this.numberIndex -= 1);
					this.UpdateNumberList(this.numberIndex, "-");

				} else if (name == "del2") {
					this.numberIndex = 0;
					this.numberlist = "------";
				}
				else {
					if (this.numberIndex <= 5) {
						this.UpdateNumberList(this.numberIndex, button.name)
						this.numberIndex += 1;
					}

				}
				// console.log("-----------|" + this.numberlist);

				this.UpdateNumber();
				if (this.numberIndex == 6) {
					console.log("开始查找房间")
					this.joinRoom(this.numberlist);

				}
			}, this)


		}

		//创建房间
		this.btnCreateRoom.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			console.log("点击创建房间按钮！");
			this.createRoom();
			//登录
			//this.login(this.input_username.text, this.input_pwd.text);		
		}, this)
	}

	public UpdateNumber(): void {
		this.lb0.text = this.numberlist[0];
		this.lb1.text = this.numberlist[1];
		this.lb2.text = this.numberlist[2];
		this.lb3.text = this.numberlist[3];
		this.lb4.text = this.numberlist[4];
		this.lb5.text = this.numberlist[5];

	}

	public UpdateNumberList(index: number, str: string) {
		let numlist = "";
		for (var i = 0; i < this.numberlist.length; i++) {
			if (index == i) {
				numlist += str;
			} else {
				numlist += this.numberlist[i];
			}
		}
		this.numberlist = numlist;

	}

	/**
	 * 创建房间请求
	 */
	public createRoom(): void {
		console.log("创建房间");
		let type = EventType.ROOM_CREATE;
		let roomCreateReq = new RoomCreateReq();
		roomCreateReq.type = RoomType.DDZ;
		roomCreateReq.tier = RoomTier.STD;
		let createRoomReq = new EventReq(type, roomCreateReq);
		Network.getInstance().request(createRoomReq, this.onCreateRoomSuccess.bind(this), this.onCreateRoomError.bind(this));
	}

	/**
	 * 创建房间成功后的回调
	 */
	public onCreateRoomSuccess(evtRes:EventRes){
		console.log("onCreateRoomSuccess:" + evtRes.getContent());
		let rmCreateRes:RoomCreateRes = evtRes.getArgs();
		//初始化房间信息
		if(null != rmCreateRes.room){
			let room:Room = rmCreateRes.room;
			room.table = new Table(room.capacity);
			RoomService.getInstance().setRoom(room);
		}
		//初始化座位信息
		if(null != rmCreateRes.user){
			RoomService.getInstance().getRoom().table.addUser(rmCreateRes.user.seatNo,  UserService.getInstance().getUser(), true);
		}
	}

	/**
	 * 创建房间失败后的回调
	 */
	public onCreateRoomError(evtRes:EventRes){
		console.log("onCreateRoomError:" + evtRes.getContent());
		this.tipsScene.show(evtRes.getContent(), false, null , this, true);
	}

	/**
	 * 加入房间请求
	 */
	public joinRoom(roomNum:string): void {
		console.log("加入房间：" + roomNum);
		let type = EventType.ROOM_JOIN;
		let roomJoinReq = new RoomJoinReq();
		roomJoinReq.id = roomNum;
		let joinRoomReq = new EventReq(type, roomJoinReq);
		Network.getInstance().request(joinRoomReq, this.onJoinRoomSuccess.bind(this), this.onJoinRoomError.bind(this));
	}

	/**
	 * 加入房间成功后的回调
	 */
	public onJoinRoomSuccess(evtRes:EventRes){
		console.log("onJoinRoomSuccess:" + evtRes.getArgs());
		let rmJoinRes:RoomJoinRes = evtRes.getArgs();
		//初始化房间信息
		if(null != rmJoinRes.room){
			let room:Room = rmJoinRes.room;
			room.table = new Table(room.capacity);
			//测试代码...要删掉
			let ddzExtraAttr = new DdzExtraAttribute();
			room.table.setExtraAttribute(ddzExtraAttr);
			//测试代码...要删掉
			RoomService.getInstance().setRoom(room);
		}
		//初始化座位信息
		if(null != rmJoinRes.users){
			rmJoinRes.users.forEach(e => {
				let user:User = e;
				//如果当前用户
				if(e.id == UserService.getInstance().getUser().id){
					RoomService.getInstance().getRoom().table.addUser(e.seatNo, UserService.getInstance().getUser(), true);
				}else{
					RoomService.getInstance().getRoom().table.addUser(e.seatNo, e, false);
				}
			});
		}
	}

	/**
	 * 加入房间失败后的回调
	 */
	public onJoinRoomError(evtRes:EventRes){
		console.log("onJoinRoomError:" + evtRes.getContent());
		this.tipsScene.show(evtRes.getContent(), false, null , this, true);
	}
}