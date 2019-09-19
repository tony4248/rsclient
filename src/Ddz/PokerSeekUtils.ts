/**
 * 出牌选择类
 * 该类负责系统自动出牌、用户点击“提示”按钮后提示选择的牌等
 */
class PokerSeekUtils {
	public constructor() {
	}

	/**
	 * TODO
	 * 从一手牌中判断有没有比指定牌大的牌
	 * 这个方法是单机游戏的核心
	 * 需要持续优化
	 * aHandPuker 一手牌
	 * b 指定的牌形
	 */
	public static seekRight(aHandPoker:Array<Poker>,pokerType:Array<Poker>):Array<Poker>{
		let myPoker:Array<Poker> = PokerUtils.sortDescPokers(aHandPoker);
		let poker:Array<Poker> = PokerUtils.sortDescPokers(pokerType);
		console.log("seekRight",myPoker,poker);
		let bType = PokerTypeUtils.getType(pokerType);
		let mask:number = 0;
		let rightPokers:Array<Poker> = null;
		if(bType.getType() === PokerTypeUtils.KingBoom) 			rightPokers =  null;
		else if(bType.getType() === PokerTypeUtils.Single) 			rightPokers =  this.seekSingle(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.Pair) 			rightPokers =  this.seekPairs(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.Three) 			rightPokers =  this.seekThree(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.ThreeSingle) 	rightPokers =  this.seekThreeSingle(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.ThreePair) 		rightPokers =  this.seekThreePair(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.Straight) 		rightPokers =  this.seekStraight(myPoker,bType.getSort(),poker.length);
		else if(bType.getType() === PokerTypeUtils.StraightPairs) 	rightPokers =  this.seekStraightPairs(myPoker,bType.getSort(),poker.length);
		else if(bType.getType() === PokerTypeUtils.Plane) 			rightPokers =  this.seekPlane(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.Plane2Single) 	rightPokers =  this.seekPlane2Single(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.Plane2Pairs) 	rightPokers =  this.seekPlane2Pairs(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.Four2Single) 	rightPokers =  this.seekFour2Single(myPoker,bType.getSort());
		else if(bType.getType() === PokerTypeUtils.Four2Pairs) 		rightPokers =  this.seekFour2Pairs(myPoker,bType.getSort());

		//TODO 当玩家没有同类型的可出的牌时，在适当的时机判断是否有炸弹、王炸可以出

		//选好可出的牌型后，从玩家的牌中按照牌形挑选牌面
		if(rightPokers != null && rightPokers.length > 0){
			return rightPokers
		}else{
			return [];
		}
		
	}

	/**
	 * 查找能压炸弹的牌形算法
	 * aHandPukerString 从大到小排列的一手牌
	 * typeSort 要压住的牌的排序值，牌越大，排序值越小
	 */
	private static seekBoom(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		for(let j = aHandPokerString.length -1 ; j >= 2 ; j--){
			if(aHandPokerString[j].getOrderValue() === aHandPokerString[j-1].getOrderValue() 
				&& aHandPokerString[j].getOrderValue() === aHandPokerString[j-2].getOrderValue()
				&& aHandPokerString[j].getOrderValue() === aHandPokerString[j-3].getOrderValue() 
				&& aHandPokerString[j].getOrderValue() > typeSort)
			return [aHandPokerString[j],aHandPokerString[j-1],aHandPokerString[j-2],aHandPokerString[j-3]];
		}
		return [];
	}

	/** 
	 * 查找能压单张牌的牌型算法：从小到大遍历自己牌的排序数组，找出比所出牌大的牌
	 * aHandPukerString 从大到小排列的一手牌
	 * typeSort 要压住的牌的排序值，牌越大，排序值越小
	 * TODO 是否拆牌
	 */
	private static seekSingle(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		//从小到大查找能压住的牌
		for(let j = aHandPokerString.length -1 ; j >= 0; j--){
			if(aHandPokerString[j].getOrderValue() > typeSort){
				return [aHandPokerString[j]];
			}
		}
		return [];
	}

	/**
	 * 查找能压对子的牌形算法：从小到大遍历自己的牌，找出比所出的牌大的牌
	 * aHandPukerString 一手牌
	 * typeSort 要压住的牌的排序值
	 */
	private static seekPairs(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		//从小到大查找能压住的牌
		for(let j = aHandPokerString.length -1 ; j >= 1 ; j--){
			if(aHandPokerString[j].getOrderValue() === aHandPokerString[j-1].getOrderValue() 
				&& aHandPokerString[j].getOrderValue() > typeSort)
			return [aHandPokerString[j],aHandPokerString[j-1]];
		}
		return [];
	}
	/**
	 * 查找能压三张的牌形算法：从小到大遍历自己的牌，找出比所出的牌大的牌
	 * aHandPukerString 一手牌
	 * typeSort 要压住的牌的排序值
	 */
	private static seekThree(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		for(let j = aHandPokerString.length -1 ; j >= 2 ; j--){
			if(aHandPokerString[j].getOrderValue() === aHandPokerString[j-1].getOrderValue() 
				&& aHandPokerString[j].getOrderValue() === aHandPokerString[j-2].getOrderValue() 
				&& aHandPokerString[j].getOrderValue() > typeSort)
			return [aHandPokerString[j],aHandPokerString[j-1],aHandPokerString[j-2]];
		}
		return [];
	}
	/**
	 * 查找能压三带一的牌形算法：从小到大遍历自己的牌，找出比所出的牌大的牌
	 * aHandPukerString 一手牌
	 * typeSort 要压住的牌的排序值
	 */
	private static seekThreeSingle(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		let index = 0;
		let result:Array<Poker> = new Array<Poker>();
		for(let j = aHandPokerString.length -1 ; j >= 2 ; j--){
			if(aHandPokerString[j].getOrderValue() === aHandPokerString[j-1].getOrderValue() 
				&& aHandPokerString[j].getOrderValue() === aHandPokerString[j-2].getOrderValue() 
				&& aHandPokerString[j].getOrderValue() > typeSort){
				index = j;
				result.push(aHandPokerString[j],aHandPokerString[j-1],aHandPokerString[j-2]);
				break;
			}
		}
		if(index === 0){
			return [];
		}else if(index === aHandPokerString.length -1){
			result.push(aHandPokerString[index-3]);
		}else{
			result.push(aHandPokerString[aHandPokerString.length -1]);
		}
		return result;
	}
	/**
	 * 查找能压三带一对的牌形算法：从小到大遍历自己的牌，找出比所出的牌大的牌
	 * aHandPukerString 一手牌
	 * typeSort 要压住的牌的排序值
	 */
	private static seekThreePair(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		let index = 0;
		let result:Array<Poker> = new Array<Poker>();
		//找三张
		for(let j = aHandPokerString.length -1 ; j >= 2 ; j--){
			if(aHandPokerString[j].getOrderValue() === aHandPokerString[j-1].getOrderValue() 
				&& aHandPokerString[j].getOrderValue() === aHandPokerString[j-2].getOrderValue() 
				&& aHandPokerString[j].getOrderValue() > typeSort){
				index = j;
				result.push(aHandPokerString[j],aHandPokerString[j-1],aHandPokerString[j-2]);
				break;
			}
		}
		//找到三张了，找对子
		if(index != 0){
			let index1 = 0;
			for(let j = aHandPokerString.length -1 ; j >= 2 ; j--){
				if(aHandPokerString[j].getOrderValue() === aHandPokerString[j-1].getOrderValue()){
					if(j == index || j == index -1  || j == index -2)
					continue;
					index1 = j;
					result.push(aHandPokerString[j],aHandPokerString[j-1]);
					break;
				}
			}
		
		}
		if(result != null && result.length === 5){
			return result;
		}else{
			return [];
		}
	}
	/**
	 * 查找能压顺子的牌形算法：从小到大遍历自己的牌，找出比所出的牌大的牌
	 * aHandPukerString 一手牌
	 * typeSort 要压住的牌的排序值
	 * length 要压住的顺子的长度
	 */
	private static seekStraight(aHandPokerString:Array<Poker>,typeSort:number,length:number):Array<Poker>{
		//天顺，无解
		if(typeSort == PokerUtils.AValue){
			return [];
		}
		let index = 0;
		let result:Array<Poker> = new Array<Poker>();
		let count = 0;
		let puker:Poker = null;
		/*
		1.从小到大遍历手中的牌（大循环）
		2.如果当前的牌比要压的牌的最小的那张大，且不大于A(小王、大王和2不能组成顺子)，则将当前牌保存，并判断下一张牌是否比当前牌大（小循环）
		3.当下一张牌与当前牌相等，则继续比较下一张
		4.当下一张牌比当前牌大1（连续），则将下一张牌保存，当保存的牌数量等于要压的牌数量时，表示找到了要出的牌，返回保存的牌
		5.当下一张牌比当前牌大的超过1（不连续），则清空保存的牌，退出小循环，继续大循坏
		*/
		for(let j = aHandPokerString.length - 1 ; j >= 0 ;j --){
			if(aHandPokerString[j].getOrderValue() > typeSort - length + 1){
				puker = aHandPokerString[j];
				result.push(aHandPokerString[j]);
				for(let k = j - 1 ; k >= 0 ; k--){
					let indexK = aHandPokerString[k].getOrderValue();
					let indexPoker = puker.getOrderValue();
					//如果当前的牌比A大，返回空(小王、大王和2不能组成顺子)
					if(indexK > PokerUtils.AValue){
						return [];
					}
					//如果剩余的牌还没有要压的牌多，直接返回空
					if( j < length){
						return [];
					}
					
					if(indexK == indexPoker){
						continue;
					}
					if(indexK -1 == indexPoker){
						puker = aHandPokerString[k];
						result.push(aHandPokerString[k]);
						console.log("seekStraight",result);
						if(result.length == length){
							return result;
						}
					}
					if(indexK -1 > indexPoker){
						result = new Array<Poker>();
						break;
					}

				}
				result = new Array<Poker>();
			}
		}
		//找不着，返回空
		return [];
	}
	/**
	 * TODO
	 * 查找能压连对的牌形算法
	 * 1.先取出所有比要压的牌中最小的对子
	 * 2.取出连续对子
	 * 3.判断连续对子长度是否大于length
	 * 4.判断连续对子排序值是否小于typeSort
	 * aHandPukerString 一手牌
	 * typeSort 要压住的牌的排序值
	 * length 要压住的顺子的长度
	 */
	private static seekStraightPairs(aHandPokerString:Array<Poker>,typeSort:number,length:number):Array<Poker>{
		let seek :Array<Poker> = new Array<Poker>();
		let result:Array<Poker> = new Array<Poker>();
		for(let i = 0 ; i < aHandPokerString.length - 1 ; i ++){
			if(aHandPokerString[i].getOrderValue() === aHandPokerString[i+1].getOrderValue() 
				&& aHandPokerString[i].getOrderValue() > typeSort - length /2){
				seek.push(aHandPokerString[i],aHandPokerString[i+1]);
				i ++;
			}
		}
		console.log("seekStraightPairs",seek);
		// for(let i =  ; i < seek.length ; i +=2){

		// }
		return [];
	}
	private static seekPlane(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		return [];
	}
	private static seekPlane2Single(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		return [];
	}
	private static seekPlane2Pairs(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		return [];
	}
	private static seekFour2Single(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		return [];
	}

	private static seekFour2Pairs(aHandPokerString:Array<Poker>,typeSort:number):Array<Poker>{
		return [];
	}
	/**
	 * TODO 
	 * 随机出牌
	 */
	public static randomPickOne(myPoker:Array<Poker>):Array<Poker>{

		return [myPoker[myPoker.length-1]];
	}
		/**
	 * myPuker 我的牌
	 * mySeat 我的座位号
	 * landlordSeat 地主座位号
	 * puker 玩家出的一手牌（我要压的牌）
	 * seat 出牌玩家的座位号
	 */
	public static autoPlay(myPoker:Array<Poker>,mySeat:number,landlordSeat:number,pokers:Array<Poker>,seat:number):Array<Poker>{
		console.log("轮到我出牌了，座位号：",mySeat,"上家出牌，座位号：",seat,"地主座位号：",landlordSeat);
		if(myPoker == null || myPoker.length == 0){
			console.log("没牌了");
			return [];
		}
		if(pokers == null || pokers.length == 0){
			return this.randomPickOne(myPoker);
		}
		if(mySeat === landlordSeat){//我是地主
			if(seat === mySeat){//当前一手牌是我出的
				return this.randomPickOne(myPoker);
			}else{//当前一手牌是农民出的
				return this.seekRight(myPoker,pokers);
			}
		}else{//我不是地主
			if(seat === mySeat){//当前一手牌是我出的
				return this.randomPickOne(myPoker);
			}
			if(seat != landlordSeat){//队友出的牌
				return [];
			}else{//地主出的牌
				return this.seekRight(myPoker,pokers);
			}
		}
	}
}