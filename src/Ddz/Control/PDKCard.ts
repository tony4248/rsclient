class PDKCard extends eui.Component implements eui.UIComponent {
	/**
	 * 当前牌的牌型
	 */
	Value: string;
	public constructor() {
		super();
		this.skinName = "resource/GameSkin/Ddz/Control/ECard.exml";
		this.addEventListener(egret.Event.ADDED_TO_STAGE, () => {
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, (a) => {
				this.cardSelect = !this.cardSelect;
				if (this.cardSelect) {
					this.card_shade.visible = true;
					this.y -= 15;
				} else {
					this.card_shade.visible = false;
					this.y += 15;
				}


			}, this)

		}, this)

	}
	card_texture: eui.Image;
	/**
	 * 选中的状态需要显示的暗色图片
	 */
	card_shade: eui.Image;

	/**
	 * 是否选中
	 */
	cardSelect: boolean = false;
	public SetValue(str: string) {
		this.Value = str;
	}

	public GetValue(): string {
		return this.Value;
	}

	public SetSource(str: string) {
		if (this.card_texture == null) return;
		this.card_texture.source = str;
	}



	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

}