//需要附加到桌面的额外属性
class DdzExtraAttribute{
    //所在游戏的局数,从1开始
    public subGameIndex:number = 0;
     //地主的席位号
    public landLordSeatNo:number = -1;
    //地主的叫分
    public landLordScore:number = 0;
    //最后抢地主的席位号
    public lastCallLandlordSeatNo:number = -1;
    //最后抢地主的叫分
    public lastCallLandlordScore:number = 0;
    //最后加分的席位号
    public lastAddScoreSeatNo:number = -1;
    //最后的加分
    public lastAddScore:number = 0;
    //本局赢家的座位号
	public winnerSeatNo:number = -1;
    //用户的积分
    public userScores:Array<UserScore>;
    //是否有人破产
    public someOneBankrupt:boolean
    //是否达到局数的要求
    public reachGameRounds:boolean;
    //最后一手牌
    public LastPokersPlayed:Array<PokerSprite> =  new Array<PokerSprite>();
    //存放本用户拟出的手牌,如果出牌合法, 后续会在当前用户的手牌中减去这些牌，
    //并更新最后一手牌和最后一手牌的坐席,如果出牌不合法,则不会进行操作。
    public pokersToBeVerified:Array<PokerSprite> =  new Array<PokerSprite>();
    //最后一手牌的席位
    public lastSeatPlayed:number = -1;
    //上一手牌所在席位的剩余牌数
    public lastSeatPokersNum = -1;
    //现在该谁操作了
    public currentSeatNo:number = -1;
    //手里的牌角色
    public pokerSpritesInHands:Array<PokerSprite> = new Array<PokerSprite>();
    //底牌
    public bottomPokers:Array<Poker> = new Array<Poker>();
    //获取当前桌面的实例
    public static get():DdzExtraAttribute{
        return RoomService.getInstance().getRoom().table.getExtraAttribute();
    }
}