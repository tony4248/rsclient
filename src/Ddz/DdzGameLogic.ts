/**
 * 核心处理逻辑
 */
class DdzGameLogic{
    //单例变量
    public static ddzLogic: DdzGameLogic
    public static getInstance(): DdzGameLogic {
        if (this.ddzLogic == null) {
            this.ddzLogic = new DdzGameLogic();
        }
        return this.ddzLogic;
    }

    //取得命令
    public getCommand(args:any):string{
        return args["cmd"];
    }
    
    //处理命令
    public processCmd(args:any):FuncResult{
        let funcRes = null;
        let formattedCont = "";
        let command = this.getCommand(args);
        switch (command) {
        case DdzCommandType.DEAL_POKERS_RES:
            console.log("服务器发牌.");
            funcRes = this.dealPokerRes(args);
            break;
        case DdzCommandType.CALL_LANDLORD_RES:
            console.log("服务器通知叫地主.");
            funcRes = this.callLandlordRes(args);
            break;
        case DdzCommandType.HAS_LANDLORD_RES:
            console.log("服务器通知地主产生.");
            funcRes = this.hasLandlordRes(args);
            break;
        case DdzCommandType.NO_LANDLORD_RES:
            console.log("服务器通知无地主.");
            funcRes = this.noLandlordRes(args);
            break;
        case DdzCommandType.ADD_SCORE_RES:
            console.log("服务器通知加分.");
            funcRes = this.addScoreRes(args);
            break;
        case DdzCommandType.BOTTOM_SCORE_RES:
            console.log("服务器通知最终的底分.");
            funcRes = this.bottomScoreRes(args);
            break;
        case DdzCommandType.PLAY_POKERS_RES:
            console.log("服务器通知出牌.");
            funcRes = this.playPokersRes(args);
            break;
        case DdzCommandType.SUB_GAME_END_RES:
            console.log("服务器通知本局结束.");
            funcRes = this.subGameEndRes(args);
            break;
        case DdzCommandType.PLAY_GAME_AGAIN_RES:
            console.log("服务器通知再来一局.");
            funcRes = this.playGameAgainRes(args);
            break;
        case DdzCommandType.GAME_END_RES:
            console.log("服务通知本房间游戏结束.");
            funcRes = this.gameEndRes(args);
            break;
        default:
            formattedCont = `命令:${command}不存在.`;
            funcRes = new FuncResult(false, formattedCont);
            break;
        }
        return funcRes;
    }

    /**
     * 处理服务器的出牌命令
     */
    public dealPokerRes(args:any):FuncResult{
        let funcRes = null;
        let pokers:Array<Poker> = new Array<Poker>();
        /* 转成plain object */
        //{"cmd":"Deal.Pokers.Res","pokers":[28,46,36,45,38,31,16,8,25,6,48,41,13,10,30,39,53]}}
        let dealPokersRes:DealPokersRes = args;
        pokers = PokerUtils.parsePokersFromPokerIds(dealPokersRes.pokers);
        //降序排列
        pokers = PokerUtils.sortDescPokers(pokers);
        //生成PokerSprite,用于显示
        pokers.forEach(e => {
            let pokerSprite = new PokerSprite(e, Constants.POKER_XL_W, true);
            DdzExtraAttribute.get().pokerSpritesInHands.push(pokerSprite);
        });
        //生成发牌的容器
        DdzTableScene.getInstance().generatePokerSpriteInDeck();
        //启动发牌计数器
        DdzTableScene.getInstance().dealPokersRes();
        //返回
        return funcRes;
    }

    /**
     * 处理服务器的叫地主命令
     */
    public callLandlordRes(args:any):FuncResult{
        let funcRes = null;
        /* 转成plain object */
        //{"cmd":"Call.Landlord.Res","currentSeatNo":2,"lastCallLandlordScore":3,"lastCallLandlordSeatNo":-1}}
        let callLandlordRes:CallLandlordRes = args;
        console.log("callLandlordRes:" + JSON.stringify(callLandlordRes));
        //更新变量
        DdzExtraAttribute.get().currentSeatNo = callLandlordRes.currentSeatNo;
        DdzExtraAttribute.get().lastCallLandlordSeatNo = callLandlordRes.lastCallLandlordSeatNo;
        DdzExtraAttribute.get().landLordScore = callLandlordRes.lastCallLandlordScore;
        //启动抢地主流程
        DdzTableScene.getInstance().canCallLandlord(callLandlordRes.prevSeatNo, callLandlordRes.prevSeatAction);
        //返回
        return funcRes;
    }

    /**
     * 处理房间有人加入的逻辑
     */
    public roomJoinOthers(args:any):void{
        let rmJORes:RoomJoinOthersRes = args;
        if(null != rmJORes.user){
			RoomService.getInstance().getRoom().table.addUser(rmJORes.user.seatNo, rmJORes.user, false);
		}
        DdzTableScene.getInstance().roomJoinOthers(rmJORes);
    }

     /**
     * 处理人已经坐满的逻辑
     */
    public tableIsReady(args:any):void{
        DdzTableScene.getInstance().tableIsReady();
    }

    /**
     * 处理服务器的加分的命令
     */
    public addScoreRes(args:any):FuncResult{
        let funcRes = null;
        /* 转成plain object */
        //{"cmd":"Add.Score.Res","currentSeatNo":3,"lastAddScoreSeatNo":2,"lastAddScore":1}}
        let addScoreRes:AddScoreRes = args;
        //更新变量
        DdzExtraAttribute.get().currentSeatNo = addScoreRes.currentSeatNo;
        DdzExtraAttribute.get().lastAddScoreSeatNo = addScoreRes.lastAddScoreSeatNo;
        DdzExtraAttribute.get().lastAddScore = addScoreRes.lastAddScore;
        //启动加分
        DdzTableScene.getInstance().canAddScore();
        //返回
        return funcRes;
    }
    /**
     * 处理服务器的通知底分的命令
     */
    public bottomScoreRes(args:any):FuncResult{
        let funcRes = null;
        /* 转成plain object */
        //{"cmd":"Bottom.Score.Res","landLordScore":1,"lastAddScoreSeatNo":2,"lastAddScore":4}
        let bottomScoreRes:BottomScoreRes = args;
        //更新变量
        DdzExtraAttribute.get().landLordScore = bottomScoreRes.landLordScore
        DdzExtraAttribute.get().lastAddScoreSeatNo = bottomScoreRes.lastAddScoreSeatNo;
        DdzExtraAttribute.get().lastAddScore = bottomScoreRes.lastAddScore;
        //启动加分
        DdzTableScene.getInstance().bottomScoreRes();
        //返回
        return funcRes;
    }

    /**
     * 处理服务器的地主产生的命令
     */
    public hasLandlordRes(args:any):FuncResult{
        let funcRes = null;
        /* 转成plain object */
        //{"cmd":"Has.Landlord.Res","landLordSeatNo":3,"landLordScore":2,"bottomPokers":[10,12.33]}
        let hasLandlordRes:HasLandlordRes = args;
        DdzExtraAttribute.get().landLordSeatNo = hasLandlordRes.landLordSeatNo
        DdzExtraAttribute.get().landLordScore = hasLandlordRes.landLordScore
        //保存底牌
        let bottomPokers:Array<Poker> = new Array<Poker>();
        bottomPokers = PokerUtils.parsePokersFromPokerIds(hasLandlordRes.bottomPokers);
        //倒序排列
        DdzExtraAttribute.get().bottomPokers = PokerUtils.sortDescPokers(bottomPokers);
        //启动地主产生的流程
        DdzTableScene.getInstance().hasLandlordRes(hasLandlordRes.prevSeatNo, hasLandlordRes.prevSeatAction);
        //返回
        return funcRes;
    }

    /**
     * 处理服务器的无地主命令
     */
    public noLandlordRes(args:any):FuncResult{
        let funcRes = null;
        /* 转成plain object */
        //{"cmd":"No.Landlord.Res"}
        let noLandlordRes:NoLandlordRes = args;
        //清空手牌
        DdzExtraAttribute.get().pokerSpritesInHands.splice(0, DdzExtraAttribute.get().pokerSpritesInHands.length);
        //启动无地主的流程
        DdzTableScene.getInstance().noLandlordRes(noLandlordRes.prevSeatNo, noLandlordRes.prevSeatAction);
        //返回
        return funcRes;
    }

    /**
     * 处理服务器出牌的命令
     */
    public playPokersRes(args:any):FuncResult{
        let funcRes = null;
        /* 转成plain object */
        //{"cmd":"Play.Pokers.Res","currentSeatNo":1,"lastSeatPlayed":3,"lastSeatPokersNum":17,"lastPokersPlayed":[16,14]}
        let PlayPokersRes:PlayPokersRes = args;        
        //更新变量
        DdzExtraAttribute.get().currentSeatNo = PlayPokersRes.currentSeatNo;
        DdzExtraAttribute.get().lastSeatPlayed = PlayPokersRes.lastSeatPlayed;
        DdzExtraAttribute.get().landLordScore = PlayPokersRes.landLordScore;
        DdzExtraAttribute.get().lastSeatPokersNum = PlayPokersRes.lastSeatPokersNum;
        //如果上一手牌是有效的出牌,更新用户的牌数
        if(PlayPokersRes.prevSeatNo != 0 &&  PlayPokersRes.prevSeatAction == true){
            let user = RoomService.getInstance().getRoom().table.getUserBySeatNo(PlayPokersRes.lastSeatPlayed);
            user.cardNum = PlayPokersRes.lastSeatPokersNum;
        }
        //最后一手牌
        let pokers = PokerUtils.parsePokersFromPokerIds(PlayPokersRes.lastPokersPlayed);
        pokers.forEach(e => {
            let pokerSprite = new PokerSprite(e, Constants.POKER_S_W, false);
            DdzExtraAttribute.get().LastPokersPlayed.push(pokerSprite);
        });
        //启动可出牌流程
        DdzTableScene.getInstance().canPlayPokers(PlayPokersRes.prevSeatNo, PlayPokersRes.prevSeatAction);
        //返回
        return funcRes;
    }

     /**
     * 处理服务器的本局结束的命令
     */
    public subGameEndRes(args:any):FuncResult{
        let funcRes = null;
        /* 转成plain object */
        //{"cmd":"Sub.Game.End.Res","winnerSeatNo":1,"subScore":0,"totalScore":5}
        let subGameEndRes:SubGameEndRes = args;
        //更新变量
        DdzExtraAttribute.get().winnerSeatNo = subGameEndRes.winnerSeatNo;
        DdzExtraAttribute.get().userScores = subGameEndRes.userScores
        DdzExtraAttribute.get().someOneBankrupt = subGameEndRes.someOneBankrupt
        DdzExtraAttribute.get().reachGameRounds = subGameEndRes.reachGameRounds
        //启动本局结束流程
        DdzTableScene.getInstance().subGameEndRes();
        //返回
        return funcRes;
    }

    /**
     * 处理再来一局的命令
     */
    public playGameAgainRes(args:any):FuncResult{
        let funcRes = null;
        /* 转成plain object */
        //{"cmd":"Sub.Game.End.Res","winnerSeatNo":1,"subScore":0,"totalScore":5}
        let gameEndRes:GameEndRes = args;
        //启动本房间游戏结束流程
        DdzTableScene.getInstance().playGameAgainRes();
        //返回
        return funcRes;
    }

    /**
     * 处理游戏结束的命令
     */
    public gameEndRes(args:any):FuncResult{
        let funcRes = null;
        /* 转成plain object */
        //{"cmd":"Sub.Game.End.Res","winnerSeatNo":1,"subScore":0,"totalScore":5}
        let gameEndRes:GameEndRes = args;
        //启动本房间游戏结束流程
        DdzTableScene.getInstance().gameEndRes();
        //返回
        return funcRes;
    }
    
}