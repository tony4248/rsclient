/**
 * 席位的UI显示类
 */
class SeatUI{
    seqNo:number; //seatUI自身的编号
    name: eui.Label; //用户名称
    avatar: eui.Image; //头像显示
    role: eui.Image; //角色显示
    score:eui.Label; //积分
    pokerNum: eui.Label; //剩余牌数显示
    timer: eui.Group; //计时器显示
    lastAction: eui.Group; //最后操作,最后一手牌,牌型显示

    /**
     * 初始化
     */
    public init(){
        this.name.text = "";
        this.role.visible = false;
        this.score.text = "";
        //this.pokerNum.text = "";
        this.timer.removeChildren();
        this.lastAction.removeChildren();
    }
}