class DdzScene extends BaseScene {

	cards: Array<PokerScene> = [];
	fapaiTimer: egret.Timer;
	public constructor() {
		super();
		this.skinName = "resource/GameSkin/Ddz/GameScene.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE, () => {
			console.log(this.chupai_Area.name)
			this.fapaiTimer = new egret.Timer(200, 17)
			this.fapaiTimer.addEventListener(egret.TimerEvent.TIMER, this.fapai, this);
			this.fapaiTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.fapaiover, this);

			//添加牌到发牌的容器中
			let tag = 0;
			for (var i = 0; i < 17; i++) {
				tag += 40;
				//let card: PDKCard = new PDKCard();
				let card = new PokerScene(Suit.SPADES, 13);
				card.x = tag;
				this.cards.push(card);
			}
			//let poker = new PokerScene(Suits.SPADES, 13);
			//this.chupai_Area.addChild(poker);
			this.ready.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				console.log("点击准备按钮");
				this.ready.visible = false;
				this.invite.visible = false;
				this.fapaiTimer.start();
				let demo = new TestDemo();
				demo.Data = "数据内容";
				NetMgr.GetInstance().Emit<TestDemo>("user", "Register", demo);

			}, this)

			this.invite.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				let dialog = new Dialog();
				//dialog.Show(this);
			}, this)


		}, this)
		
	}
	chupai_Area: eui.Group;
	ready: eui.Image;
	invite: eui.Image;
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
	}
	/**
	 * 当前发牌的第几张
	 */
	index: number = 0;
	fapai() {

		this.chupai_Area.addChild(this.cards[this.index])
		this.index += 1;
		// let data = new Protocol<string>();

		// data.cmd = "wocao ";
		// data.data = "123";

		// NetMgr.GetInstance().SendData(data)
	}

	fapaiover() {
		console.log("发牌完成")

	}



}