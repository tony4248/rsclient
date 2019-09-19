//用户ready的请求消息
class BeReadyReq{
    public  cmd:String;
}
	
//服务发牌的消息,单播消息
class DealPokersRes
{
    public cmd:String;
    public pokers:Array<number>; //手牌,
    
}
	
//客户端收到牌后,服务器的确认
class DealPokersEndReq
{
    public cmd:String;
}
	
//服务器命令客户端叫地主的消息,广播消息
class CallLandlordRes{
    public cmd:String;
    public currentSeatNo:number; //当前的可以叫分的席位
    public lastCallLandlordScore:number; //最后的叫分
    public lastCallLandlordSeatNo:number; //最后叫分的席位
    public prevSeatNo:number; //前一个座位号
    public prevSeatAction:boolean; //前一个座位是否有操作
}
	
//用户抢地主的请求消息, 每次都会记次
//按照抢地主的方法确定地主
class CallLandlordReq{
    public cmd:String;
    public score:number; //当前用户的交分,0:不抢,3:抢地主,在前面的基础上乘2
}

//产生地主,广播消息
class HasLandlordRes{
    public cmd:String;
    public landLordSeatNo:number; //地主的席位
    public landLordScore:number; //地主的分
    public bottomPokers:Array<number>; //底牌,
    public prevSeatNo:number; //前一个座位号
    public prevSeatAction:boolean; //前一个座位是否有操作
}
	
//没有产生地主,本局荒牌,广播消息
class NoLandlordRes{
    public cmd:String;
    public prevSeatNo:number; //前一个座位号
    public prevSeatAction:boolean; //前一个座位是否有操作
}
	
//产生地主后,地主加分的命令
class AddScoreRes{
    public cmd:String;
    public currentSeatNo:number; //当前的可以扣牌的席位
    public lastAddScoreSeatNo:number;
	public lastAddScore:number;
}
	
//地主扣牌的请求
class AddScoreReq{
    public cmd:String;
    public score:number; //乘数，乘子
}

//最终的底分
class BottomScoreRes{
    public cmd:String;
    public landLordScore:number; //地主的分
    public lastAddScoreSeatNo:number;
	public lastAddScore:number;
}
	
//开始出牌命令,广播消息，，这个命令可以取消
class StartPlayingRes{
    public cmd:String;
    private currentSeatNo:number; //当前的可以出牌的席位
}
	
//用户出牌,发送给服务器
class PlayPokersReq{
    public cmd:String;
    public pokers:Array<number>; //null 表示不出牌
}
	
//服务发送出牌的命令给客户端,广播消息
class PlayPokersRes{
    public cmd:String;
    public currentSeatNo:number; //当前的可以出牌的席位
    public lastPokersPlayed:Array<number>; //上一手牌
    public lastSeatPlayed:number; //上一手牌的席位号
    public landLordScore:number; //最终的分
    public lastSeatPokersNum:number; //最后一手牌的数量
    public prevSeatNo:number; //前一个座位号
    public prevSeatAction:boolean; //前一个座位是否有操作
}
	
//服务发送子游戏结束的命令给客户端,单播播消息
class SubGameEndRes{
    public cmd:String;
    public winnerSeatNo:number; //本局赢家的席位号
    public userScores:Array<UserScore>; //用户的积分
    public someOneBankrupt:boolean
    public reachGameRounds:boolean
}

//游戏的结果,存放用户的积分
class UserScore{
	public landlord:boolean; 是否是地主
    public bankrupt:boolean; 是否破产
	public name: string; //用户名称
    public seatNo: number; //用户席位号
    public score: number; //用户的当前的积分
    public landlordScore: number; //底分
    public finalScore: number; //最终得分
}

//用户请求在来一局
class PlayGameAgainReq{
    public cmd:String;
    public playAgain:number;
}

//再来一局的命令
class PlayGameAgainRes{
    public cmd:String;
    public round:number;
}

//用户请求结束游戏
class GameEndReq{
    public cmd:String;
    public isOthersLeave:boolean;
}
	
//服务发送游戏结束的命令给客户端,单播播消息
class GameEndRes{
    public cmd:String;
    public totalScore:number; //本房间积分
}