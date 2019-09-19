class PokerUtils {
	public constructor() {
	}

	/**
	 * 牌大小,值越高越大
	 */
	public static pokerSortValues:Array<number> =  [ 
		12,12,12,12,//A
		13,13,13,13,//2
		1,1,1,1,//3
		2,2,2,2,//4
		3,3,3,3,//5
		4,4,4,4,//6
		5,5,5,5,//7
		6,6,6,6,//8
		7,7,7,7,//9
		8,8,8,8,//10
		9,9,9,9,//J
		10,10,10,10,//Q
		11,11,11,11,//K
		14,15//King
	];

	/**
	 * A的大小值
	 */
	public static AValue:number = 12;
	public static BigKingValue:number = 15;
	public static SmallKingValue:number = 14;


    /**
	 * 牌面的id
	 */
	public static pokerIds:Array<number> = [
					1,2,3,4,//A
					5,6,7,8,//2
					9,10,11,12,//3
					13,14,15,16,//4
					17,18,19,20,//5
					21,22,23,24,//6
					25,26,27,28,//7
					29,30,31,32,//8
					33,34,35,36,//9
					37,38,39,40,//10
					41,42,43,44,//J
					45,46,47,48,//Q
					49,50,51,52,//K
					53,54];//King


	/**
	 * 随机生成一副牌
	 */
	public static getRandomPokers():Array<Poker>{
		let pokers:Array<Poker> =new Array<Poker>();
		let length = this.pokerIds.length;
		let index:number;
		let newArray:Array<number> = this.pokerIds.slice();
		let pukerIndex:number;
		let array:Array<number> = [];
		for(let i = 0 ; i < this.pokerIds.length ; i ++){
			index = Math.floor(Math.random() * newArray.length);
			pukerIndex = newArray[index];
			array.push(pukerIndex);
			newArray = ArrayUtils.slice(newArray,0,index).concat(ArrayUtils.slice(newArray,index + 1,newArray.length));
			length --;
		}	
		// console.log("array ",array.length,"-------",array.toString());
		for(let j = 0 ; j < array.length ; j ++){
			let poker:Poker = new Poker(this.pokerIds[array[j] - 1],this.pokerSortValues[array[j] -1])
			pokers.push(poker);
		}
		console.log("已随机生成一副牌",pokers.toString());
		return pokers;
	}

	/**
	 * 扑克类倒序排列
	 */
	public static sortDescPokers(pokers:Array<Poker>):Array<Poker>{
		return pokers.sort(this.sortDesc);
	}

	/**
	 * 扑克显示类倒序排列
	 */
	public static sortDescPokerSprites(pokerSprites:Array<PokerSprite>):Array<PokerSprite>{
		return pokerSprites.sort(this.sortPokerSpriteDesc);
	}

    /**
     * 根据Id数列生成 Poker对象的数列
     */
    public static parsePokersFromPokerIds(pokerIdList:Array<number>):Array<Poker>{
        let pokers = new Array<Poker>();
		if( undefined == pokerIdList || 0 == pokerIdList.length){return pokers;}
        pokerIdList.forEach(e => {
            let poker =  new Poker(PokerUtils.pokerIds[e -1], PokerUtils.pokerSortValues[e -1]);
            pokers.push(poker);
        });
        return pokers;
    }

	public static parsePokersFromPokerSprites(pokerSpriteList:Array<PokerSprite>):Array<Poker>{
        let pokers = new Array<Poker>();
		if( undefined == pokerSpriteList || 0 == pokerSpriteList.length){return pokers;}
        pokerSpriteList.forEach(e => {
			let poker =  e.getPoker();
            pokers.push(poker);
        });
        return pokers;
    }

	/**
     * 根据PokerSprite对象的数列生成Id数列
     */
    public static parsePokerIdsFromPokerSprites(pokerSpriteList:Array<PokerSprite>):Array<number>{
        let pokerIds = new Array<number>();
        pokerSpriteList.forEach(e => {
			let id =  e.getPoker().getId();
            pokerIds.push(id);
        });
        return pokerIds;
    }

    /**
     * 根据Id创建Poker对象
     */
    public static createPoker(pokerId:number){
        return new Poker(PokerUtils.pokerIds[pokerId -1], PokerUtils.pokerSortValues[pokerId -1])
    }
	/**
	 * 从一个数组中移除一些元素
	 * 使用 ArrayUtils.removeElements时发现，其对对象数组无效，自己写了一个
	 */
	public static removePokerSprites(array:Array<PokerSprite>,elements:Array<PokerSprite>):Array<PokerSprite>{
		let result:Array<PokerSprite> = new Array<PokerSprite>();
		for(let i = 0 ; i < array.length ; i ++){
			let falg:boolean = false;
			for(let j = 0 ; j < elements.length ; j ++){
				if(array[i].getPoker().getId() == elements[j].getPoker().getId()){
					falg = true;
				}
			}
			if(!falg){
				result.push(array[i]);
			}
		}
		return result;
	}

	/**
	 * 从一个数组中移除一些元素
	 * 使用 ArrayUtils.removeElements时发现，其对对象数组无效，自己写了一个
	 */
	public static removePokers(array:Array<Poker>,elements:Array<Poker>):Array<Poker>{
		let result:Array<Poker> = new Array<Poker>();
		for(let i = 0 ; i < array.length ; i ++){
			let falg:boolean = false;
			for(let j = 0 ; j < elements.length ; j ++){
				if(array[i].getId() == elements[j].getId()){
					falg = true;
				}
			}
			if(!falg){
				result.push(array[i]);
			}
		}
		return result;
	}
	/**
	 * 倒序排列的排序条件
	 */
	public static sortDesc(a:Poker,b:Poker):number{
			if(a.getOrderValue() < b .getOrderValue()) return 1;
			else if(a .getOrderValue() > b.getOrderValue()) return -1;
            else return 0;    
    }

	/**
	 * 倒序排列的排序条件
	 */
	public static sortPokerSpriteDesc(a:PokerSprite,b:PokerSprite):number{
			if(a.getPoker().getOrderValue() < b .getPoker().getOrderValue()) return 1;
			else if(a.getPoker().getOrderValue() > b.getPoker().getOrderValue()) return -1;
            else return 0;    
    }

}