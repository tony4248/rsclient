class CreateRoomScene extends BaseScene {
	public constructor() {
		super();
		this.skinName = "resource/GameSkin/Ddz/CreateRoom.exml";
	}

	ebtn_enter: EButton;
	group_ishow: eui.Group;
	img_dialog: eui.Image;
	ebtn_group_number: EButton;
	lb1: eui.Label;
	lb2: eui.Label;
	lb3: eui.Label;
	lb4: eui.Label;
	lb0: eui.Label;
	ebtn_create: EButton;
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}



	numberlist: string = "-----";
	numberIndex: number = 0;
	protected childrenCreated(): void {
		super.childrenCreated();
		this.ebtn_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
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
					this.numberlist = "-----";
				}
				else {
					if (this.numberIndex <= 4) {
						this.UpdateNumberList(this.numberIndex, button.name)
						this.numberIndex += 1;
					}

				}
				// console.log("-----------|" + this.numberlist);

				this.UpdateNumber();
				if (this.numberIndex == 5) {
					console.log("开始查找房间")

				}
			}, this)


		}

		this.ebtn_create.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createRoom, this)
	}

	public UpdateNumber(): void {
		this.lb0.text = this.numberlist[0];
		this.lb1.text = this.numberlist[1];
		this.lb2.text = this.numberlist[2];
		this.lb3.text = this.numberlist[3];
		this.lb4.text = this.numberlist[4];

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

	public createRoom(): void {
		console.log("创建房间");

		// let pb_cpr = PB.MsgCreatePrivateRoom.create();
		// pb_cpr.roomType = "RM_DDZ";
		// NetMgr.GetInstance().SendPB("CPRM", PB.MsgCreatePrivateRoom, pb_cpr);
		NetMgr.GetInstance().addEventListener("DDZ_GI", () => {

		}, this)


	}



}