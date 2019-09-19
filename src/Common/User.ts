class User{
    public id:string = "";
    public name:string = "";
    public nickName:string = "";
    public password:string = ""; //自己的密码用于自动登录
    public sex:string = "";
    public avatar:string = "";
    public level:number = 0; //用户级别
    public cardNum:number = 0; //房卡数量
    public score:number = 0; //积分
    public room:String = ""; //所在房间号
    public seatNo:number = -1; //所在的座位号
    //session
    public sessionId:string = "";
    //额外的属性
    public extraAttribute:any;


}