class SubGameOver extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "resource/game_skins/Ddz/SubGameOver.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE, () => {
			this.width = this.stage.stageWidth;
			this.height = this.stage.stageHeight;
		}, this)
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	imgWinbg: eui.Image; //背景图片

	imglandlord_0: eui.Image; //地主图片
	lbName_0: eui.Label; //用户名
	lbLandlordScore_0: eui.Label; //分数
	lbFinalScore_0: eui.Label; //最终分数

	imglandlord_1: eui.Image; //地主图片
	lbName_1: eui.Label; //用户名
	lbLandlordScore_1: eui.Label; //分数
	lbFinalScore_1: eui.Label; //最终分数

	imglandlord_2: eui.Image; //地主图片
	lbName_2: eui.Label; //用户名
	lbLandlordScore_2: eui.Label; //分数
	lbFinalScore_2: eui.Label; //最终分数

	btn_play_again: eui.Button;
	btn_end_game: eui.Button;

	protected childrenCreated(): void {
		super.childrenCreated();
		this.btn_play_again.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.playGameAgain(1);
		}, this)

		this.btn_end_game.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.playGameAgain(0);
		}, this)

	}

	/**
	 * 设置背景窗口,默认是胜利的窗口
	 */
	public setLose(lose:boolean){
		if (lose = true){
			this.imgWinbg.source = "win_m_lose_ddz_png";
		}
	}

	/**
	 * 显示场景
	 */
    public show() {
		//this.checkCanPlayAgain()
		//加入大场景中
        SceneManager.getInstance().pushScene(this)
	}

	/**
	 * 如果有人出现破产情况，则必须结束游戏了
	 */
	public checkCanPlayAgain(){
		let isSomeOneBankrupt = DdzExtraAttribute.get().someOneBankrupt;
		let reachGameRounds = DdzExtraAttribute.get().reachGameRounds;
		if (isSomeOneBankrupt || reachGameRounds){ 
			this.removeChild(this.btn_play_again);
			this.btn_end_game.horizontalCenter = 0;
		}
	}
	/**
	 * 设置数据
	 */
	public setData(gameRes:Array<UserScore>) {
		for(var i = 0; i < gameRes.length; ++i){
			if(gameRes[i].landlord == true){
				this["imglandlord_" + i].visible = true;
			}
			let bankruptTmp:string = "";
			if(gameRes[i].bankrupt){
				bankruptTmp = "(破产)"; 
			}
			this["lbName_" + i].text = gameRes[i].name;
			this["lbLandlordScore_" + i].text = String(gameRes[i].landlordScore);
			this["lbFinalScore_" + i].text = String(gameRes[i].finalScore) + bankruptTmp;
		}
	}

	/**关闭窗口 */
	private close() {
		SceneManager.getInstance().popScene(this);
	}
	/**再来一局 */
	private playGameAgain(playAgain:number){
		this.close();
		DdzTableScene.getInstance().playGameAgainReq(playAgain);
	}
}

