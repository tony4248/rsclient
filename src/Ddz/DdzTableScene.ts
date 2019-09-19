class DdzTableScene extends eui.Component implements eui.UIComponent {
	public static ddzTableScene: DdzTableScene
	private seatMap:Dictionary<any>;
	dealPokersTimer: egret.Timer; //发牌动画定时器
	//发牌效果的容器
	grpDeck: eui.Group; //一副牌的容器,用于显示发牌效果
	//显示区域
	grpBottomPokers: eui.Group; //显示底牌的区域
	labBottomScore: eui.Label; //底分
	labLandlordScore: eui.Label; //最终倍数

	//seat1相关的变量
	grpPokersInHand_Seat1: eui.Group; //当前手牌区
	grpPokerControls_Seat1: eui.Group; //出牌控制区
	grpCallLandlord_Seat1: eui.Group; //抢地主区域
	grpReadyAndInvite_Seat1: eui.Group;
	grpAddScore_Seat1: eui.Group; //加分区域
	grpLastAction_Seat1: eui.Group; //当前用户最后一手的手牌区
	labName_Seat1: eui.Label; //用户名
	imgAvatar_Seat1: eui.Image; //头像
	imgRole_Seat1: eui.Image; //角色是否是地主
	labScore_Seat1: eui.Label; //积分
	labPokersNum_Seat1: eui.Label; //剩余牌数
	grpTimer_Seat1: eui.Group; //计时器
	//seat2相关的变量
	grpLastAction_Seat2: eui.Group; //用户操作，最后一手牌，牌型
	labName_Seat2: eui.Label; //用户名
	imgAvatar_Seat2: eui.Image; //头像
	imgRole_Seat2: eui.Image; //角色是否是地主
	labScore_Seat2: eui.Label; //积分
	labPokersNum_Seat2: eui.Label; //剩余牌数
	grpTimer_Seat2: eui.Group; //计时器
	//seat3相关的变量
	grpLastAction_Seat3: eui.Group; //用户操作，最后一手牌，牌型
	labName_Seat3: eui.Label; //用户名
	imgAvatar_Seat3: eui.Image; //头像
	imgRole_Seat3: eui.Image; //角色是否是地主
	labScore_Seat3: eui.Label; //积分
	labPokersNum_Seat3: eui.Label; //剩余牌数
	grpTimer_Seat3: eui.Group; //计时器

	//功能按钮
	btnReady: EButton; //准备
	btnInvite: EButton; //邀请其他人
	btnPass: EButton; //过牌，不出
	btnPrompt: EButton; //提示
	btnGo: EButton; //出牌
	btnCallScore0: EButton;
	btnCallScore3: EButton;
	btnAddScoreX2: EButton;
	btnAddScoreX4: EButton;
	btnAddScoreNo: EButton;
	//弹出消息
	tipsScene:TipsScene;

	//获取单例
	public static getInstance(): DdzTableScene {
        if (this.ddzTableScene == null) {
            this.ddzTableScene = new DdzTableScene();
        }
        return this.ddzTableScene;
    }

	//构造函数
	private constructor() {
		super();
		this.skinName = "resource/game_skins/Ddz/DdzTable.exml";
		//初始化座位号
		this.initSeatMap();
		//将游戏的附加属性加入桌面
		this.addExtraAttributeToTable();
		//增加对象在舞台出现后的事件监听函数
		this.addEventListener(egret.Event.ADDED_TO_STAGE, () => {
			//监听准备按钮
			this.btnReady.addCall( (e: egret.TouchEvent) => { this.beReady(e);});
			//this.btnReady.addEventListener(egret.TouchEvent.TOUCH_TAP, this.beReady, this);
			//监听邀请按钮
			this.btnInvite.addCall( (e: egret.TouchEvent) => { this.inviteOthers(e);});
			//this.btnInvite.addEventListener(egret.TouchEvent.TOUCH_TAP, this.inviteOthers, this);

			// this.btnPrompt.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			// 	let dialog = new Dialog();
			// 	dialog.Show(this);
			// }, this)
			//监听不抢地主按钮
			this.btnCallScore0.addCall( () => { this.callLandlordReq(1);});
			//this.btnCallScore0.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.callLandlordReq(1);}, this);
			//监听抢地主按钮
			this.btnCallScore3.addCall( () => { this.callLandlordReq(3);});			
			//this.btnCallScore3.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.callLandlordReq(3);}, this);
			
			//监听提示按钮
			this.btnPrompt.addCall( () => { this.playPokersPrompt();});	
			//监听出牌按钮
			this.btnGo.addCall( () => { this.playPokersGo();});				
			//this.btnGo.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.playPokersGo();}, this);
			//监听过牌按钮
			this.btnPass.addCall( () => { this.playPokersPass();});				
			//this.btnPass.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.playPokersPass();}, this);

			//监听加分X2按钮
			this.btnAddScoreX2.addCall( () => { this.addScoreReq(2);});
			//this.btnAddScoreX2.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.addScoreReq(2);}, this);
			//监听加分X4按钮
			this.btnAddScoreX4.addCall( () => { this.addScoreReq(4);});
			//this.btnAddScoreX5.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.addScoreReq(5);}, this);
			//监听不加分按钮
			this.btnAddScoreNo.addCall( () => { this.addScoreReq(1);});
			//this.btnAddScoreNo.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { this.addScoreReq(1);}, this);
			//启动后,更新当前用户自己的SeatUI
			//this.setMySeatUI();
			//当用户首次启动后,更新已有用户的SeatUI
			//this.initOthersSeatUI();

		}, this)
		this.tipsScene = TipsScene.getInstance();
	}


	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
	}

	/** 
	* 将相关的附加属性加入table
	*/
	private addExtraAttributeToTable(): void{
		// if(null == RoomService.getInstance().getRoom().table.getExtraAttribute()){
		// 	let ddzExtraAttr = new DdzExtraAttribute();
		// 	RoomService.getInstance().getRoom().table.setExtraAttribute(ddzExtraAttr);
		// }
	}

	/**
	* UI的座位编号，MySeat是1号,其他的按照逆时针的方向顺延,
	*/
	private initSeatMap(){
		this.seatMap = new Dictionary<any>();
		for(var i = 1; i <= DdzConstants.USER_NUM_PER_TABLE; ++i){
			let seatUI:SeatUI = new SeatUI();
			seatUI.seqNo = i;
			seatUI.name = this["labName_Seat" + i];
			seatUI.avatar = this["imgAvatar_Seat" + i];
			seatUI.score = this["labScore_Seat" + i];
			seatUI.role = this["imgRole_Seat" + i];
			seatUI.pokerNum = this["labPokersNum_Seat" + i];
			seatUI.timer = this["grpTimer_Seat" + i];
			seatUI.lastAction = this["grpLastAction_Seat" + i];
			//初始化座位号
			seatUI.init();
			this.seatMap.Add("Seat" + i, seatUI);
        }
	}

	/**
	 * 根据用户的座位号取得该座位对于的UI对象
	 */
	private getSeatUI(seatNo:number):SeatUI{
		let mySeatNo = this.getMySeatNo();
		//当前用户
		if(seatNo == mySeatNo){return this.seatMap.Item("Seat1");}
		//当前用户 + 1
		if(seatNo == RoomService.getInstance().getRoom().table.peekSeatNoRecursively(mySeatNo, 1)){
			return this.seatMap.Item("Seat2");
		}
		//当前用户 + 2
		if(seatNo == RoomService.getInstance().getRoom().table.peekSeatNoRecursively(mySeatNo, 2)){
			return this.seatMap.Item("Seat3");
		}
   }

	/**
	* 有其他用户加入房间
	*/
	public roomJoinOthers(rmJORes:RoomJoinOthersRes):void{
		this.setOthersSeatUI(rmJORes.user);
		console.log("其他用户加入:" + rmJORes);
	}

	/**
	 * 更新其他用户的SeatUI信息
	 */
	public setOthersSeatUI(user:User):void{
		let seatUI = this.getSeatUI(user.seatNo);
		seatUI.name.text = user.name;
		seatUI.avatar.source =  user.avatar ? Utils.imageProxyUrl(user.avatar) : "userimg_default_png";
		seatUI.score.text =  String(user.score);
	}

	//更新用户的积分情况和UI
	private updateUserScoreAndUI(userScores:Array<UserScore>):void{
		userScores.forEach(uScore => {
			let user = RoomService.getInstance().getRoom().table.getUserBySeatNo(uScore.seatNo);
			user.score = uScore.score;
			if(this.getMySeatNo() !=  uScore.seatNo){ 
				let seatUI = this.getSeatUI(uScore.seatNo);
				seatUI.score.text = String(uScore.score);
			}
		});
		
	}

	/**
	 * 更新当前用户的UI数据
	 */
	private setMySeatUI():void{
		let seatNo = this.getMySeatNo();
		let seatUI = this.getSeatUI(seatNo);
		let user = RoomService.getInstance().getRoom().table.getMe();
		seatUI.name.text = user.name;
		seatUI.avatar.source =  user.avatar ? Utils.imageProxyUrl(user.avatar) : "userimg_default_png";
	}

	/**
	 * 当用户首次启动后，将已经加入房间的用户的SeatUI进行更新
	 */
	private initOthersSeatUI():void{
		let users = RoomService.getInstance().getRoom().table.getAllUsers();
		let me = RoomService.getInstance().getRoom().table.getMe();
		users.forEach(user => {
			if(me.id != user.id){
				this.setOthersSeatUI(user);
			}
		});
	}

	/**
	 * 更新最后一手牌
	 */
	private updateLastActionOfOthersSeatUI(prevSeatNo:number, prevSeatAction:boolean):void{
		/**只更新其他人的 */
		if(prevSeatNo == this.getMySeatNo()){return;}
		if(prevSeatNo == 0){return;}
		let seatUI = this.getSeatUI(prevSeatNo);
		let alignment = 0;//显示对齐
		if(seatUI.seqNo == 2){alignment = 1;}
		else if(seatUI.seqNo == 3){alignment = -1;}
		//清除lastAction内的内容
		seatUI.lastAction.removeChildren();
		//如果上一手牌是有效的出牌
		if(prevSeatNo != 0 &&  prevSeatAction == true){
			let pokers = DdzExtraAttribute.get().LastPokersPlayed;
			//更新seat的剩余的牌数
			seatUI.pokerNum.text = String( DdzExtraAttribute.get().lastSeatPokersNum);
			//倒序排列
			pokers = PokerUtils.sortDescPokerSprites(pokers);
			seatUI.lastAction.removeChildren();
			//更新剩余牌的坐标
			this.resizePokerSprites(seatUI.lastAction, pokers, pokers.length, 
										Constants.POKER_M_W, Constants.POKER_M_VISIBLEW, alignment);
			//显示
			for (var i = 0; i < pokers.length; i++) {
				seatUI.lastAction.addChild(pokers[i]);
			}
			//显示动画
			this.showPokerTypeAnimation(seatUI.lastAction, pokers, 0.5, alignment);
		//上一手没出
		} else {
			this.wordsAnimation(seatUI.lastAction, "txt_no_go_png", alignment)
		}
	}


	

	/**
	 * 桌面座位已经坐满
	 */
	public tableIsReady():void{
		this.btnInvite.visible = false;
	}
	/**
	 * 取得当前用户的座位号
	 */
	public getMySeatNo():number{
		return RoomService.getInstance().getRoom().table.getMySeatNo();
	}

	/**
	 * 发送已经准备好的请求
	 */
	private beReady(e:egret.Event):void{
		console.log("点击准备按钮");
		//启动后,更新当前用户自己的SeatUI
		this.setMySeatUI();
		//当用户首次启动后,更新已有用户的SeatUI
		this.initOthersSeatUI();
		//let dialog = new Dialog();
		//dialog.show("今天是个好日子");
		//this.boomAnimation(this.grpLastAction_Seat2);
		//this.planeAnimation(this.grpLastAction_Seat3);
		//let etoast:EToast = new EToast(1);
		//etoast.show("牌型不合法");
		//构建已准备好的请求
		this.btnReady.visible = false;
		let type = EventType.GAME_DDZ;
		let args = new BeReadyReq();
		args.cmd = DdzCommandType.BE_READY_REQ;
		let beReadyEvt = new EventReq(type, args);
		Network.getInstance().send(beReadyEvt);
		//显示发牌区域
		this.grpPokersInHand_Seat1.visible = true;
	}

	/**
	 * 邀请其他朋友加入
	 */
	private inviteOthers(e:egret.Event):void{
		console.log("点击邀请按钮");
		this.btnInvite.visible = false;
		// let seatUI:SeatUI = this.seatMap.Item("Seat3");
		// let json = '{\"id\":0,\"type\":2000,\"status\":true,\"args\":{\"cmd\":\"Sub.Game.End.Res\",\"winnerSeatNo\":3,\"userScores\":[{\"name\":\"tom1001\",\"seatNo\":1,\"score\":0,\"landlordScore\":12,\"finalScore\":0,\"landlord\":false,\"bankrupt\":true},{\"name\":\"wesley\",\"seatNo\":2,\"score\":0,\"landlordScore\":12,\"finalScore\":0,\"landlord\":false,\"bankrupt\":true},{\"name\":\"me\",\"seatNo\":3,\"score\":900,\"landlordScore\":12,\"finalScore\":24,\"landlord\":true,\"bankrupt\":false}],\"reachGameRounds\":true,\"someOneBankrupt\":true}}';
		//  /* 转成plain object */
        // var obj:EventRes = JSON.parse(json);
		// let subGameEndRes:SubGameEndRes = obj.args;
		// let userScores = subGameEndRes.userScores;
		// let subGameOver = new SubGameOver();
		// //检查是否是自己赢
		// if(1 == subGameEndRes.winnerSeatNo){
		// 	subGameOver.setLose(false);
		// //如果不是自己赢	
		// } else {
		// 	subGameOver.setLose(true);
		// }
		// //设置数据
		// subGameOver.setData(userScores);
		// //显示窗口
		// subGameOver.show();
		// seatUI.timer.visible = true;
		// let timer = new ETimer(20);
		// timer.x=0
		// timer.y=0;
		// var vsbg = new egret.Bitmap(RES.getRes("timer_png"));
		// seatUI.timer.addChild(timer);
		//seatUI.timer.removeChildren();
		//seatUI.timer.addChild(vsbg);
		// let dialog = new Dialog();
		// dialog.Show(this);
		let roomId:string = "103296";
		HallScene.getInstance().joinRoom(roomId);
	}

	

	/**
	 * 移动动画
	 */
	private moveTo():void{
		 var point =  this.grpPokersInHand_Seat1.globalToLocal(236,276);
		 console.log(point);
		 egret.Tween.get(this.btnInvite).to({ x: point.x, y: point.y }, 2000, egret.Ease.backInOut);
	}

	/**
	 * 当前发牌的第几张
	 */
	private index: number = 0;
	/**
	 * 处理发牌请求
	 */
	private dealPokers():void{
		//显示发牌动画
		this.dealPokerInOneRoundAnimation();
		let pokerSprites:Array<PokerSprite> = DdzExtraAttribute.get().pokerSpritesInHands;
		this.resizePokerSprites(this.grpPokersInHand_Seat1, pokerSprites, this.index + 1, 
									Constants.POKER_XL_W, Constants.POKER_XL_VISIBLEW, 0);
		//添加牌到发牌的容器中
		let pokerSprite:PokerSprite = DdzExtraAttribute.get().pokerSpritesInHands[this.index];
		this.grpPokersInHand_Seat1.addChild(pokerSprite);
		this.index += 1;
	}

	/**
	 * 处理发牌请求
	 */
	public dealPokersRes():void{
		//重置,为重新发牌最准备
		this.index = 0;
		//注册发牌定时器
		this.dealPokersTimer = new egret.Timer(100, DdzConstants.TOTAL_POKERS_PER_PLAYER)
		this.dealPokersTimer.addEventListener(egret.TimerEvent.TIMER, this.dealPokers, this);
		this.dealPokersTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.dealPokersEndReq, this);
		this.dealPokersTimer.start();
	}

	/**
	 * 在发牌容器中产生一幅牌
	 */
	public generatePokerSpriteInDeck(){
		this.grpDeck.visible = true;
		for (var i = 0; i < 8; i++) {
			let pokerSprite =  new PokerSprite(new Poker(0,0), Constants.POKER_M_W, false);
			pokerSprite.x = i;
			pokerSprite.y = i
			this.grpDeck.addChild(pokerSprite);
	    }
	}

	/**
	 * 一轮发牌的动画效果
	 */
	public dealPokerInOneRoundAnimation(){
		//向席位1发牌
		this.dealPokerToSeatAnimation(500,400);
		//向席位2发牌
		this.dealPokerToSeatAnimation(850,100);
		//向席位3发牌,
		this.dealPokerToSeatAnimation(50,100);
	}

	/**
	 * 向某个席位发牌的效果
	 */
	public dealPokerToSeatAnimation(x:number, y:number){
		let pokerSprite =  new PokerSprite(new Poker(0,0), Constants.POKER_M_W, false);
		this.grpDeck.addChild(pokerSprite);
		//坐席1的绝对坐标
		var point =  this.grpDeck.globalToLocal(x,y);
		egret.Tween.get(pokerSprite).to({ x: point.x, y: point.y },150).call(function (){
			this.grpDeck.removeChild(pokerSprite);
		},this)
	}

	/**
	 * 更加容器大小和牌的数重新计算sprite的坐标和宽、高度
	 */
	private resizePokerSprites(container:egret.DisplayObjectContainer, pokerSprites:Array<PokerSprite>, 
									pokerNum:number, pokerW:number, pokerVW:number, alignment:number){
		let startXPos = 0;
		if(alignment == -1){startXPos = 10;}
		else if(alignment == 1 ){startXPos = DdzUtils.getInstance().getStartXPosOfRightAlignment(container.width, pokerSprites.length, pokerW, pokerVW);}
		else{startXPos = DdzUtils.getInstance().getStartXPosOfCenterAlignment(container.width, pokerSprites.length, pokerW, pokerVW);}
		//pokerNum是要重新计算的对象的数量,如果要动态显示，pokerNum的数量可以逐渐变大
		for (var i = 0; i < pokerNum; i++) {
			let xPos =  startXPos + i * pokerVW;
			console.log("resizePokerSprites x:" + xPos);
			pokerSprites[i].x = xPos;
			pokerSprites[i].width = pokerW;
			pokerSprites[i].height = pokerW * Constants.POKER_WvsH_RATIO;
	    }
	}

	/**
	 * 发牌完毕后更新牌数
	 */
	private initOthersPokersNum(){
		let seatUI2 = this.seatMap.Item("Seat2");
		seatUI2.pokerNum.text = DdzConstants.TOTAL_POKERS_PER_PLAYER;
		let seatUI3 = this.seatMap.Item("Seat3");
		seatUI3.pokerNum.text = DdzConstants.TOTAL_POKERS_PER_PLAYER;
	}
	/**
	 * 发牌结束
	 */
	private dealPokersEndReq():void {
		console.log("发牌完成")
		//显示底牌区域
		this.grpBottomPokers.visible = true;
		//更新牌的数量
		this.initOthersPokersNum();
		//清除发牌容器
		//this.grpDeck.removeChildren(); //删除会发生错误
		this.grpDeck.visible = false;
		//构建发牌完成的请求
		let type = EventType.GAME_DDZ;
		let args = new DealPokersEndReq();
		args.cmd = DdzCommandType.DEAL_POKERS_END_REQ;
		let dealPokerEndEvt = new EventReq(type, args);
		Network.getInstance().send(dealPokerEndEvt);
	}

	/**
	 * 判断是否是该自己操作
	 */
	private isMyTurn():boolean{
		let mySeatNo = this.getMySeatNo();
		if(-1 != mySeatNo && mySeatNo == DdzExtraAttribute.get().currentSeatNo)
		{
			return true;
		}
		return false;
	}

	/**
	 * 判断自己是否是地主
	 */
	public amILandlord(){
		let mySeatNo = this.getMySeatNo();
		if(-1 != mySeatNo && mySeatNo == DdzExtraAttribute.get().landLordSeatNo)
		{
			return true;
		}
		return false;
	}

	/**
	 * 更根据是否是自己的turn来显示相应的group
	 */
	public displayControlsGroup(group:eui.Group):void{
		if(this.isMyTurn()){group.visible = true;}
		else{group.visible = false;}
	}

	/**
	 * 循环显示计时器
	 */
	private showTimer(timer:ETimer):void{
		let currentSeatNo = DdzExtraAttribute.get().currentSeatNo;
		//在轮到的SeatUI中显示timer
		let seatUI:SeatUI = this.getSeatUI(currentSeatNo);
		seatUI.timer.visible = true;
		seatUI.timer.removeChildren();
		seatUI.lastAction.removeChildren();
		timer.addCall(()=>{seatUI.timer.removeChildren();});
		timer.x = 0;
		timer.y = 0;
		seatUI.timer.addChild(timer);
		//在其它的SeatUI中关闭timer
		this.seatMap.Values().forEach(e => {
			if(e != seatUI){
				e.timer.visible = true;
				e.timer.removeChildren();
			}
		});
	}

	/**
	 * 清除计时器
	 */
	private clearAllTimer(){
		//在其它的SeatUI中关闭timer
		this.seatMap.Values().forEach(e => {
			e.timer.removeChildren();
		});
	}

	/**
	 * 清除当前用户的计时器
	 */
	private clearTimerSeat1():void{
		//在轮到的SeatUI中显示timer
		let seatUI:SeatUI = this.seatMap.Item("Seat1");
		seatUI.timer.visible = true;
		seatUI.timer.removeChildren();
	}

	/**
	 * 可以开始叫地主了
	 */
	public canCallLandlord(prevSeatNo:number, prevSeatAction:boolean):void{
		//显示计时器
		let timer = new ETimer(20);
		this.showTimer(timer);
		//显示前一手Seat的Action
		this.showPrevSeatCallLandlAction(prevSeatNo, prevSeatAction);
		//如果是轮到当前用户操作
		if(this.isMyTurn()){
			//清除lastAction内的内容
			this.grpLastAction_Seat1.removeChildren();
			//显示抢地主的按钮
			this.grpCallLandlord_Seat1.visible = true;
			return;
		}
		//不显示抢地主的按钮
		this.grpCallLandlord_Seat1.visible = false;
		//否则是别人操作
		this.showOthersCallLandlord(prevSeatNo, prevSeatAction);
	}

	/**
	 * 显示前一手Seat的Action
	 */
	private showPrevSeatCallLandlAction(prevSeatNo:number, prevSeatAction:boolean):void{
		//如果是自己,则不显示
		if(this.getMySeatNo() == prevSeatNo){return;}
		//如果是第一次则不显示
		if(prevSeatNo ==0){return;}
		let seatUI = this.getSeatUI(prevSeatNo);
		let alignment = 0;//显示对齐
		if(seatUI.seqNo == 2){alignment = 1;}
		else if(seatUI.seqNo == 3){alignment = -1;}
		console.log("seatUI:" + seatUI.seqNo);
		//清除lastAction内的内容
		seatUI.lastAction.removeChildren();
		if(prevSeatNo !=0 && prevSeatAction == true){this.wordsAnimation(seatUI.lastAction, "txt_call_landlord_png", alignment);}
		else{this.wordsAnimation(seatUI.lastAction, "txt_no_call_png", alignment);}
	}

	/**
	 * 显示别人在抢地主
	 */
	private showOthersCallLandlord(prevSeatNo:number, prevSeatAction:boolean):void{
	}
	
	/**
	 * 发送抢地主的请求
	 */
	private callLandlordReq(callScore:number):void{
		console.log("发送抢地主请求：" + callScore);
		//隐藏相关按钮
		this.grpCallLandlord_Seat1.visible = false;
		//清除计时器
		this.clearTimerSeat1();
		//构建发牌完成的请求
		let type = EventType.GAME_DDZ;
		let args = new CallLandlordReq();
		args.cmd = DdzCommandType.CALL_LANDLORD_REQ;
		args.score = callScore;
		let callLandlordEvt = new EventReq(type, args);
		Network.getInstance().send(callLandlordEvt);

	}


	/**
	 * 服务通知地主产生
	 */
	public hasLandlordRes(prevSeatNo:number, prevSeatAction:boolean):void{
		//清除前一轮的计时器
		this.clearAllTimer();
		//显示前一手Seat的Action
		this.showPrevSeatCallLandlAction(prevSeatNo, prevSeatAction);
		//显示地主产生
		this.showLoadlandAnimation();
		//在底牌区显示底牌
		this.updateGrpBottomPokers();
		//如果是地主
		if(this.amILandlord()){
			//合并底牌,并显示
			DdzExtraAttribute.get().bottomPokers.forEach(e => {
				//生成poker
				let pokerSprite = new PokerSprite(e, Constants.POKER_XL_W, true);
				//加入手牌
				DdzExtraAttribute.get().pokerSpritesInHands.push(pokerSprite);
				//更新手牌显示
				this.updateGrpPokersInHandSeat1();
        	});
			//返回
			return;
		}
		//否则是别人操作
		this.showOthersHasLandlord();
	}

	/**
	 * 显示别人是地主
	 */
	private showOthersHasLandlord():void{
		//更新地主的牌数
		let seatUI = this.getSeatUI(DdzExtraAttribute.get().landLordSeatNo);
		seatUI.pokerNum.text = String(DdzConstants.TOTAL_POKERS_PER_PLAYER + DdzConstants.BOTTOM_POKERS_NUM);
	}

	/**
	 * 服务通知无地主
	 */
	public noLandlordRes(prevSeatNo:number, prevSeatAction:boolean):void{
		console.log("无地主,重新发牌.");
		//清除变量的值
		//清除前一轮的计时器
		this.clearAllTimer();
		//显示前一手Seat的Action
		this.showPrevSeatCallLandlAction(prevSeatNo, prevSeatAction);
		//不显示抢地主的按钮
		this.grpCallLandlord_Seat1.visible = false;
		//清除UI的对象
		this.grpPokersInHand_Seat1.removeChildren();
	}


	/**
	 * 发送抢地主的请求
	 */
	private addScoreReq(score:number):void{
		console.log("发送加分的请求" + score);
		//隐藏相关按钮
		this.grpAddScore_Seat1.visible = false;
		//清除计时器
		this.clearTimerSeat1();
		//构建加分的请求
		let type = EventType.GAME_DDZ;
		let args = new AddScoreReq();
		args.cmd = DdzCommandType.ADD_SCORE_REQ;
		args.score = score;
		let addScoreEvt = new EventReq(type, args);
		Network.getInstance().send(addScoreEvt);
	}

	/**
	 * 在底牌区显示底牌
	 */
	public updateGrpBottomPokers():void{
		this.grpBottomPokers.visible = true;
		this.grpBottomPokers.removeChildren();
		let bpSprites =  new Array<PokerSprite>();
		DdzExtraAttribute.get().bottomPokers.forEach(e => {
				//生成poker
				let pokerSprite = new PokerSprite(e, Constants.POKER_S_W, false);
				//加入底牌
				bpSprites.push(pokerSprite);
        	});
		//更新剩余牌的坐标
		this.resizePokerSprites(this.grpBottomPokers, bpSprites, bpSprites.length, 
									Constants.POKER_S_W, 54, 0);
		//显示
		for (var i = 0; i < bpSprites.length; i++) {
			this.grpBottomPokers.addChild(bpSprites[i]);
		}
	}

	/**
	 * 可以开始加分了
	 */
	public canAddScore():void{
		//显示计时器
		let timer = new ETimer(20);
		this.showTimer(timer);
		//显示前一席位的动作
		this.showPrevSeatAddScoreAction();
		//如果是轮到当前用户操作
		if(this.isMyTurn()){
			//清除lastAction内的内容
			this.grpLastAction_Seat1.removeChildren();
			//加分
			this.grpAddScore_Seat1.visible = true;
			return;
		}
		//加分
		this.grpAddScore_Seat1.visible = false;
		//否则是别人操作
		this.showOthersAddScore();
	}

	/**
	 * 显示前一席位的动作
	 */
	private showPrevSeatAddScoreAction():void{
		//如果是自己不显示
		if(this.getMySeatNo() == DdzExtraAttribute.get().lastAddScoreSeatNo){return;}
		//如果是第一次,不显示
		if(DdzExtraAttribute.get().lastAddScoreSeatNo <= 0){return;}
		let seatUI = this.getSeatUI(DdzExtraAttribute.get().lastAddScoreSeatNo);
		let alignment = 0;//显示对齐
		if(seatUI.seqNo == 2){alignment = 1;}
		else if(seatUI.seqNo == 3){alignment = -1;}
		//清除lastAction内的内容
		seatUI.lastAction.removeChildren();
		if(DdzExtraAttribute.get().lastAddScore == 2){this.wordsAnimation(seatUI.lastAction, "txt_add_score_x2_png", alignment);}
		else if(DdzExtraAttribute.get().lastAddScore == 4){this.wordsAnimation(seatUI.lastAction, "txt_add_score_x4_png", alignment);}
		else {this.wordsAnimation(seatUI.lastAction, "txt_add_score_x1_png", alignment);}
	}

	/**
	 * 显示别人在抢地主
	 */
	private showOthersAddScore():void{		
	}

	/**
	 * 显示最终的加倍情况
	 */
	public bottomScoreRes():void{
		//显示最终底分的加倍情况
		//显示前一席位的动作
		this.showPrevSeatAddScoreAction();
		//需要更新
		this.labBottomScore.text = String(DdzExtraAttribute.get().landLordScore);
		this.labLandlordScore.text = String(DdzExtraAttribute.get().landLordScore);
	}

	/**
	 * 更新当前的分
	 */
	private updateLandlordScore():void{
		this.labLandlordScore.text = String(DdzExtraAttribute.get().landLordScore);
	}

	/**
	 * 显示地主产生
	 */
	private showLoadlandAnimation(){
		let seatUI = this.getSeatUI(DdzExtraAttribute.get().landLordSeatNo);
		let landlordImg = new egret.Bitmap(RES.getRes("landlord_png"));
		landlordImg.x = this.stage.stageWidth/2 - 100;
		landlordImg.y = 165;
		landlordImg.width = 100;
		landlordImg.height = 100;
		this.addChild(landlordImg);
		let point =  seatUI.role.localToGlobal(seatUI.role.x, seatUI.role.y);
		egret.Tween.get(landlordImg).wait(1000).to({ x: point.x, y: point.y },500).call(function (){
			this.removeChild(landlordImg);
			seatUI.role.visible = true;
			egret.Tween.removeAllTweens();
		},this)
	}

	/**
	 * 可以开始出牌了
	 */
	public canPlayPokers(prevSeatNo:number, prevSeatAction:boolean):void{
		//显示底分
		this.updateLandlordScore();
		//显示计时器
		let timer = new ETimer(20);
		this.showTimer(timer);
		//显示前一席位出牌的结果
		this.showPrevSeatPlayPokersAction(prevSeatNo, prevSeatAction);
		//如果是轮到当前用户操作
		if(this.isMyTurn()){
			//清除lastAction内的内容
			this.grpLastAction_Seat1.removeChildren();
			this.grpPokerControls_Seat1.visible = true;
			//出牌
			return;
		}
		this.grpPokerControls_Seat1.visible = false;
		//否则是别人操作
		this.showOthersPlayPokers(prevSeatNo, prevSeatAction);

	}

	/**
	 * 显示前一席位出牌的结果
	 */
	private showPrevSeatPlayPokersAction(prevSeatNo:number, prevSeatAction:boolean):void{
    	this.updateLastActionOfOthersSeatUI(prevSeatNo, prevSeatAction);
	}

	/**
	 * 显示别人出牌
	 */
	private showOthersPlayPokers(prevSeatNo:number, prevSeatAction:boolean):void{
	}

	/**
	 * 显示本局游戏结束
	 */
	public subGameEndRes():void{
		let winnerSeatNo = DdzExtraAttribute.get().winnerSeatNo;
		let userScores = DdzExtraAttribute.get().userScores;
		let landlordSeatNo = DdzExtraAttribute.get().landLordSeatNo;
		//更新用户的积分数据和UI显示
		this.updateUserScoreAndUI(userScores);
		//启动弹出窗口
		let subGameOver = new SubGameOver();
		//检查是否是自己赢
		if(this.getMySeatNo() == winnerSeatNo){
			subGameOver.setLose(false);
		//如果不是自己赢	
		} else {
			//只有是农民一种可能,检查农民赢的可能
			if(winnerSeatNo != landlordSeatNo){
				subGameOver.setLose(false);
			}
			subGameOver.setLose(true);
		}
		//设置数据
		subGameOver.setData(userScores);
		//显示窗口
		subGameOver.show();
	}
	/**
	 * 再来一局的命令
	 */
	playGameAgainRes():void{
		//清空变量
		let ddzExtraAttr = new DdzExtraAttribute();
		RoomService.getInstance().getRoom().table.setExtraAttribute(ddzExtraAttr);
		Toast.launch("再来一局,请耐心等待重新开局...");
		//清理UI
	}

	/**
	 * 显示本房间的游戏结束
	 */
	public gameEndRes():void{
		
	}

	/**
	 * 重置选中的扑克
	 */
	private resetSelectedPoker():void{
		DdzExtraAttribute.get().pokerSpritesInHands.forEach(e => {
			if(e.getSelected()){e.setSelected(false);}
		});
	}

	/**
	 * 提示
	 */
	private playPokersPrompt():void{
		let lastSeatPlayed = DdzExtraAttribute.get().lastSeatPlayed;
		//当前的手里的牌
		let pokersInHand = PokerUtils.parsePokersFromPokerSprites(DdzExtraAttribute.get().pokerSpritesInHands);
		let rightPokers:Array<Poker>;
		//如果上一手牌不是自己，则提示
		if(this.getMySeatNo() != lastSeatPlayed){
			//上一手牌
			let lastPokersPlayed = PokerUtils.parsePokersFromPokerSprites(DdzExtraAttribute.get().LastPokersPlayed);
			//找到的提示的牌
			rightPokers = PokerSeekUtils.seekRight(pokersInHand, lastPokersPlayed);
		} else {
			rightPokers = PokerSeekUtils.randomPickOne(pokersInHand);
		}
		//如果有提示的牌
		if(rightPokers.length != 0){
			rightPokers.forEach(poker => {
				DdzExtraAttribute.get().pokerSpritesInHands.forEach(pokerSprite => {
					if(poker == pokerSprite.getPoker()){pokerSprite.setSelected(true);}
				});
			});
		}

	}

	/**
	 * 不要，过牌
	 */
	private playPokersPass():void{
		this.playPokersReq(new Array());
	}
	/**
	 * 出牌需要服务判断
	 */
	private playPokersGo():void{
		//现在的牌
		let pokers = DdzExtraAttribute.get().pokerSpritesInHands;
		//清空原有的变量
		DdzExtraAttribute.get().pokersToBeVerified = [];
		for (let i = pokers.length - 1; i >= 0; --i) {
			if(pokers[i].getSelected()){
				//生成较小的牌
				let sPokerSprite = new PokerSprite(pokers[i].getPoker(), Constants.POKER_M_W, false);
				//增加到零时的下一手的变量中，需要经过服务器的验证
				DdzExtraAttribute.get().pokersToBeVerified.push(sPokerSprite);
			}
		}
		//如果为空,弹出提示重新选牌
		if(0 == DdzExtraAttribute.get().pokersToBeVerified.length){
			//提示
			//返回
			return;
		}
		//验证牌型是否合法
		let pokersToBeVerified = PokerUtils.parsePokersFromPokerSprites(DdzExtraAttribute.get().pokersToBeVerified);
		//牌型不合法
		if(null == PokerTypeUtils.getType(pokersToBeVerified)){
			//提示
			//返回
			return;
		}
		//比较选择的牌和上一手牌的大小
		//如果上一手牌是自己,则不需要比较
		let LastPokersPlayed = PokerUtils.parsePokersFromPokerSprites(DdzExtraAttribute.get().LastPokersPlayed);
		if(DdzExtraAttribute.get().lastSeatPlayed != this.getMySeatNo()){
			if(!PokerCompareUtils.comparePokers(pokersToBeVerified, LastPokersPlayed)){
				//提示
				//返回
				return;
			}
		}
		//向服务器发送出牌的请求
		this.playPokersReq(DdzExtraAttribute.get().pokersToBeVerified);
		//成功后判断并显示牌型
	}

	/**
	 * 向服务器发送出牌的请求
	 */
	private playPokersReq(pokers:Array<PokerSprite>):void{
		//构建出牌的请求
		let type = EventType.GAME_DDZ;
		let args = new PlayPokersReq();
		args.cmd = DdzCommandType.PLAY_POKERS_REQ;
		//没有选中，表示不出,不需要服务验证
		if(0 ==  pokers.length){
			args.pokers = null;
			Network.getInstance().send(new EventReq(type, args));
		}else{//出牌,需要等待服务器验证
			let pokerIds = PokerUtils.parsePokerIdsFromPokerSprites(pokers)
			args.pokers = pokerIds;
			Network.getInstance().request(new EventReq(type, args), this.onPlayPokersReqSuccess.bind(this), this.onPlayPokersReqError.bind(this));
		}
		
	}

	/**
	 * 出牌请求被服务器接受,属于合法的出牌
	 */
	private onPlayPokersReqSuccess(evtRes:EventRes){
		console.log("onPlayPokersReqSuccess:" + JSON.stringify(evtRes.args));
		//隐藏相关按钮
		this.grpPokerControls_Seat1.visible = false;
		//清除计时器
		this.clearTimerSeat1();
		let pokersToBeRemoved = DdzExtraAttribute.get().pokersToBeVerified;
		//删掉原有牌中的已经出去的牌
		let pokerSpritesInHands = PokerUtils.removePokerSprites(DdzExtraAttribute.get().pokerSpritesInHands, pokersToBeRemoved);
		//更新最后手中的牌,出牌和席位
		DdzExtraAttribute.get().pokerSpritesInHands = pokerSpritesInHands;
		DdzExtraAttribute.get().LastPokersPlayed = pokersToBeRemoved;
		DdzExtraAttribute.get().lastSeatPlayed = this.getMySeatNo();
		//重新显示
		this.updateGrpPokersInHandSeat1();
		//在出牌区域显示
		this.updateGrpLastActionSeat1();
	}

	/**炸弹动画 */
	private boomAnimation(view: egret.DisplayObjectContainer, scaleNumber:number, alignment:number):void{
		let data = RES.getRes("boom_json");
		let txtr = RES.getRes("boom_png");
		let mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data,txtr);
		let mc1:egret.MovieClip = new egret.MovieClip( mcFactory.generateMovieClipData("boom"));
		if(view.visible == false){view.visible = true;}
		if(alignment == -1){mc1.x = 30;}
		else if(alignment == 1){mc1.x = view.width - mc1.width;}
		else {mc1.x = (view.width - mc1.width)/2;}
		mc1.y = (view.height-mc1.height)/2;
		mc1.scaleX = scaleNumber;
		mc1.scaleY = scaleNumber;
		view.addChild(mc1);
		mc1.gotoAndPlay("explosion",1);
		mc1.addEventListener(egret.Event.COMPLETE, (e:egret.Event)=>{
			view.removeChild(mc1);
		}, this);
	}

	/**炸弹动画 */
	private planeAnimation(view: egret.DisplayObjectContainer, scaleNumber:number, alignment:number):void{
		let data = RES.getRes("rocket_json");
		let txtr = RES.getRes("rocket_png");
		let mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data,txtr);
		let mc1:egret.MovieClip = new egret.MovieClip( mcFactory.generateMovieClipData("rocket"));
		if(alignment == -1){mc1.x = 30;}
		else if(alignment == 1){mc1.x = view.width - mc1.width;}
		else {mc1.x = (view.width - mc1.width)/2;}
		mc1.y = (view.height-mc1.height)/2;
		mc1.scaleX = scaleNumber;
		mc1.scaleY = scaleNumber;
		view.addChild(mc1);
		mc1.gotoAndPlay("launch",1);
		mc1.addEventListener(egret.Event.COMPLETE, (e:egret.Event)=>{
			view.removeChild(mc1);
		}, this);
	}

	/**
	 * 展示文字的动画
	 */
	private wordsAnimation(view: egret.DisplayObjectContainer, pngName:string, alignment:number):void{
		let png = new egret.Bitmap(RES.getRes(pngName));
		png.anchorOffsetX = png.width * .5;
        png.anchorOffsetY = png.height * .5;
        png.alpha = 0;
		if(alignment == -1){png.x = 30;}
		else if(alignment == 1){png.x = view.width - png.width/2;}
		else {png.x = (view.width - png.width/2)/2;}
		console.log("view Width:" + view.width + "; x:" +png.x);
		png.y = view.height-png.height/2 - (view.height-png.height)/2;
		if(view.visible == false){view.visible = true;}
		view.addChild(png);
        egret.Tween.get(png)
            .to( { alpha: 1 }, 500, egret.Ease.quintOut )
            .to( { scaleX: 1.2, scaleY: 1.2 }, 200, egret.Ease.quintOut )
            .to( { scaleX: 0.75, scaleY: 0.75 }, 300)
			.call( ()=>{ } );
	}

	/**
	 * 显示牌型的动画效果
	 */
	private showPokerTypeAnimation(view: egret.DisplayObjectContainer, pokerSprites:Array<PokerSprite>, scaleNumber:number, alignment:number):void{
		let pokers = PokerUtils.parsePokersFromPokerSprites(pokerSprites);
		let pType:PokerType = PokerTypeUtils.getType(pokers);
		//炸弹或王炸
		if(pType.getType() == PokerTypeUtils.Boom || pType.getType() == PokerTypeUtils.KingBoom){
			console.log("炸弹");
			this.boomAnimation(view, 1, alignment);
			return;
		}
		//顺子
		if(pType.getType() == PokerTypeUtils.Straight){
			console.log("顺子");
			this.wordsAnimation(view, "ddz_straight_png", alignment);
			return;
		}
		//连对
		if(pType.getType() == PokerTypeUtils.StraightPairs){
			console.log("连对")
			this.wordsAnimation(view, "ddz_pair_png", alignment);
			return;
		}
		//飞机
		if(pType.getType() == PokerTypeUtils.Plane || pType.getType() == PokerTypeUtils.Plane2Single
			|| pType.getType() == PokerTypeUtils.Plane2Pairs){
			console.log("飞机")
			this.planeAnimation(view, scaleNumber, alignment);
			return;
		}
	}

	/**
	 * 出牌请求被服务器拒绝,属于非法的出牌
	 */
	public onPlayPokersReqError(evtRes:EventRes){
		console.log("onPlayPokersReqError:" + JSON.stringify(evtRes.args));
		this.tipsScene.show(evtRes.getContent(), false, null , this, true);
	}

	/**
	 * 更新当前用户的可用牌区域
	 */
	private updateGrpPokersInHandSeat1():void{
		let pokers = DdzExtraAttribute.get().pokerSpritesInHands;
		//倒序排列
		pokers = PokerUtils.sortDescPokerSprites(pokers);
		this.grpPokersInHand_Seat1.removeChildren();
		//更新剩余牌的坐标
		this.resizePokerSprites(this.grpPokersInHand_Seat1, pokers, pokers.length, 
									Constants.POKER_XL_W, Constants.POKER_XL_VISIBLEW, 0);
		for (var i = 0; i < pokers.length; i++) {
			this.grpPokersInHand_Seat1.addChild(pokers[i]);
		}
	}

	/**
	 * 更新当前用户的出牌区域
	 */
	private updateGrpLastActionSeat1():void{
		this.grpLastAction_Seat1.visible = true;
		let pokers = DdzExtraAttribute.get().LastPokersPlayed;
		//倒序排列
		pokers = PokerUtils.sortDescPokerSprites(pokers);
		if(!this.grpLastAction_Seat1.visible){this.grpLastAction_Seat1.visible = true;}
		this.grpLastAction_Seat1.removeChildren();
		//更新剩余牌的坐标
		this.resizePokerSprites(this.grpLastAction_Seat1, pokers, pokers.length, 
									Constants.POKER_M_W, Constants.POKER_M_VISIBLEW, 0);
		//显示
		for (var i = 0; i < pokers.length; i++) {
			this.grpLastAction_Seat1.addChild(pokers[i]);
		}
		//显示出牌动画
		this.showPokerTypeAnimation(this.grpLastAction_Seat1, pokers, 1, 0);

	}
    
	/**
	 * 向服务器发送再来一局的请求
	 */
	public playGameAgainReq(playAagin:number):void{
		//构建出牌的请求
		let type = EventType.GAME_DDZ;
		let args = new PlayGameAgainReq();
		args.cmd = DdzCommandType.PLAY_GAME_AGAIN_REQ;
		args.playAgain = playAagin;
		Network.getInstance().send(new EventReq(type, args));
	}
	/**
	 * 离开房间的请求
	 */
	public leaveRoom():void{
		//构建离开房间的请求
		let type = EventType.ROOM_LEAVE;
		let roomLeaveReq = new RoomLeaveReq();
		roomLeaveReq.id = RoomService.getInstance().getRoom().id
		let rlEvtReq = new EventReq(type, roomLeaveReq);
		Network.getInstance().request(rlEvtReq, this.onLeaveRoomSuccess.bind(this), this.onLeaveRoomError.bind(this));
	}

	/**
	 * 离开房间成功
	 */
	private onLeaveRoomSuccess(evtRes:EventRes){
		console.log("onRoomLeaveSuccess:" + evtRes.args());
		//删除房间
		RoomService.getInstance().setRoom(null);
	}

	/**
	 * 离开房间错误
	 */
	public onLeaveRoomError(evtRes:EventRes){
		console.log("onError:" + evtRes.args());
		this.tipsScene.show(evtRes.getContent(), false, null , this, true);
	}

}