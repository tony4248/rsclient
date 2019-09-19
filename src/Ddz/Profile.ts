/**
 * 席位的UI显示类
 */
class Profile extends eui.Component implements eui.UIComponent {
    
    public constructor(skinName: string) {
		super();
		this.skinName = "resource/game_skins/Control/" + skinName;
	}
    protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
	}
    labName: eui.Label; //用户名称
    avatar: eui.Image; //头像显示
    imgRole: eui.Image; //角色显示
    labScore:eui.Label; //积分
    labPokersNum: eui.Label; //剩余牌数显示
    timer: eui.Group; //计时器显示
    lastAction: eui.Group; //最后操作,最后一手牌,牌型显示
}