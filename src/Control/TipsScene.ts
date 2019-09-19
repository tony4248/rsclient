/**
 *
 * @author 
 *
 */
class TipsScene extends BaseScene {
    private static tipsScence: TipsScene;
    private static texts:Object = {
        "InvalidToken": "登录验证失败",
        "GoldLess":"钻石少于5个不能进入房间",
        "InRoom":"你已经有房间了，点击进入即可",
        "CreateFailed":"创建房间出现了异常",
        "InvalidRoomId":"房间不存在",
        "RoomNotFound":"房间不存在",
        "Already":"已经准备了",
        "PlayerStateError":"还有玩家没有准备",
        "PlayerLess":"一个人怎么玩?还不赶快邀请你的基友互相伤害!",
        "RaiseFailed":"跟注错误",
        "FollowFailed":"加注错误",
        "LookFailed":"看牌错误",
        "GiveupFailed":"放弃错误",
        "PkFailed":"比牌错误",
        "UserNotExists":"用户不存在"
    };
    
    public content: eui.Label;
    public btnOk: EButton;
    public btnCancel:EButton;
    public func:Function;
    public cfunc: Function;
    public obj:any;
    
    public constructor() {
        super();
        this.skinName = "resource/game_skins/control/Tips.exml";
        //增加对象在舞台出现后的事件监听函数
		this.addEventListener(egret.Event.ADDED_TO_STAGE, () => {
	        this.btnOk.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
            this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchCancel, this);
		}, this)
    }

    public static getInstance(): TipsScene {
        if (this.tipsScence == null) {
            this.tipsScence = new TipsScene();
        }
        return this.tipsScence;
    }
    
    private onTouch(ev:egret.TouchEvent){
        SceneManager.getInstance().popScene(this);
        if(this.func){
            this.func.call(this.obj);
        }
    }
    
    private onTouchCancel(ev: egret.TouchEvent) {
        SceneManager.getInstance().popScene(this);
        if(this.cfunc){
            this.cfunc.call(this.obj)
        }
    }
    
    public show(text:string, trans:boolean = true, func:Function = null, obj:any = null, cancel=false, cancelFunc:Function = null){
        if(trans){
            text = TipsScene.texts[text];
        }
        this.content.text = text;
        this.func = func;
        this.cfunc = cancelFunc;
        this.obj = obj;
        if(cancel){
            this.btnOk.x = 95;
            this.btnCancel.x = 226;
            this.btnCancel.visible = true;
        }else{
            this.btnOk.x = this.width / 2;
            this.btnCancel.visible = false;
        }
        //加入大场景中
        SceneManager.getInstance().pushScene(this)
    }
}
