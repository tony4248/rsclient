
class DdzCardsHelper {
	public constructor() {
	}

	/**
	 * 单个
	 * @param  {Array<number>} cards 牌
	 * @returns boolean
	 */
	public static IsSingle(cards: Array<number>): boolean {

		if (cards.length == 1)
			return true;
		else
			return false;
	}
	/**
	 * 是否是对子
	 */
	public static IsDouble(cards: Array<number>): boolean {
		if (cards.length == 2) {
			if (cards[0] == cards[1])
				return true;
		}
		return false;
	}

	/**
	 * 是否是顺子
	 */
	public static IsStraight(cards: Array<number>): boolean {
		if (cards.length < 5 || cards.length > 12)
			return false;
		for (let i = 0; i < cards.length - 1; i++) {
			let w = cards[i];
			if (cards[i + 1] - w != 1)
				return false;
			//不能超过A  
			if (w > 12 || cards[i + 1] > 12)
				return false;
		}

		return true;
	}


	/// <summary>  
	/// 是否是双顺子  
	/// </summary>  
	/// <param name="cards"></param>  
	/// <returns></returns>  
	public static IsDoubleStraight(cards: Array<number>): boolean {
		if (cards.length < 6 || cards.length % 2 != 0)
			return false;

		for (let i = 0; i < cards.length; i += 2) {
			if (cards[i + 1] != cards[i])
				return false;

			if (i < cards.length - 2) {
				if (cards[i + 2] - cards[i] != 1)
					return false;

				//不能超过A  
				if (cards[i] > 12 || cards[i + 2] > 12)
					return false;
			}
		}

		return true;
	}

	/// <summary>  
	/// 三不带  
	/// </summary>  
	/// <param name="cards"></param>  
	/// <returns></returns>  
	public static IsOnlyThree(cards: Array<number>): boolean {
		if (cards.length % 3 != 0)
			return false;
		if (cards[0] != cards[1])
			return false;
		if (cards[1] != cards[2])
			return false;
		if (cards[0] != cards[2])
			return false;

		return true;
	}

	/// <summary>  
	/// 三带一  
	/// </summary>  
	/// <param name="cards"></param>  
	/// <returns></returns>  
	public static IsThreeAndOne(cards: Array<number>): boolean {
		if (cards.length != 4)
			return false;

		if (cards[0] == cards[1] &&
			cards[1] == cards[2])
			return true;
		else if (cards[1] == cards[2] &&
			cards[2] == cards[3])
			return true;
		return false;
	}


	/// <summary>  
	/// 三代二  
	/// </summary>  
	/// <param name="cards"></param>  
	/// <returns></returns>  
	public static IsThreeAndTwo(cards: Array<number>): boolean {
		if (cards.length != 5)
			return false;

		if (cards[0] == cards[1] &&
			cards[1] == cards[2]) {
			if (cards[3] == cards[4])
				return true;
		}

		else if (cards[2] == cards[3] &&
			cards[3] == cards[4]) {
			if (cards[0] == cards[1])
				return true;
		}

		return false;
	}

	/// <summary>  
	/// 炸弹  
	/// </summary>  
	/// <param name="cards"></param>  
	/// <returns></returns>  
	public static IsBoom(cards: Array<number>): boolean {
		if (cards.length != 4)
			return false;

		if (cards[0] != cards[1])
			return false;
		if (cards[1] != cards[2])
			return false;
		if (cards[2] != cards[3])
			return false;

		return true;
	}

	/// <summary>  
	/// 王炸  
	/// </summary>  
	/// <param name="cards"></param>  
	/// <returns></returns>  
	public static IsJokerBoom(cards: Array<number>): boolean {
		if (cards.length != 2)
			return false;
		if (cards[0] == 53) {
			if (cards[1] == 54)
				return true;
			return false;
		}
		else if (cards[0] == 54) {
			if (cards[1] == 53)
				return true;
			return false;
		}

		return false;
	}


	/**
	 * 飞机不带
	 */
	public static IsTripleStraight(cards: Array<number>): boolean {
		if (cards.length < 6 || cards.length % 3 != 0)
			return false;

		for (let i = 0; i < cards.length; i += 3) {
			if (cards[i + 1] != cards[i])
				return false;
			if (cards[i + 2] != cards[i])
				return false;
			if (cards[i + 1] != cards[i + 2])
				return false;

			if (i < cards.length - 3) {
				if (cards[i + 3] - cards[i] != 1)
					return false;

				//不能超过A  
				if (cards[i] > 12 || cards[i + 3] > 12)
					return false;
			}
		}

		return true;
	}

	/**
	 * 飞机带单
	 */
	public static isPlaneWithSingle(cards: Array<number>): boolean {
		if (!this.HaveFour(cards)) {
			let tempThreeList = new Array<number>();
			for (let i = 0; i < cards.length; i++) {
				let tempInt = 0;
				for (let j = 0; j < cards.length; j++) {

					if (cards[i] == cards[j]) {
						tempInt++;
					}

				}
				if (tempInt == 3) {
					tempThreeList.push(cards[i]);
				}
			}
			if (tempThreeList.length % 3 != cards.length % 4) {

				return false;
			}
			else {
				if (this.IsTripleStraight(tempThreeList)) {
					return true;
				}
				else {

					return false;
				}
			}
		}

		return false;
	}

	/**
	 * 飞机带双
	 */
	public static isPlaneWithTwin(cards: Array<number>): boolean {
		if (!this.HaveFour(cards)) {
			let tempThreeList = new Array<number>();
			let tempTwoList = new Array<number>();
			for (let i = 0; i < cards.length; i++) {
				let tempInt = 0;
				for (let j = 0; j < cards.length; j++) {

					if (cards[i] == cards[j]) {
						tempInt++;
					}

				}
				if (tempInt == 3) {
					tempThreeList.push(cards[i]);
				}
				else if (tempInt == 2) {
					tempTwoList.push(cards[i]);
				}

			}
			if (tempThreeList.length % 3 != cards.length % 5 && tempTwoList.length % 2 != cards.length % 5) {

				return false;
			}
			else {
				if (this.IsTripleStraight(tempThreeList)) {
					if (this.IsAllDouble(tempTwoList)) {
						return true;
					}
					else {
						return false;
					}
				}
				else {

					return false;
				}
			}
		}
		return false;
	}

	/**
	 * 判断是否是四带二
	 **/
	public static isSiDaiEr(cards: Array<number>): boolean {
		let flag = false;
		if (cards != null && cards.length == 6) {
			for (let i = 0; i < 3; i++) {
				let grade1 = cards[i];
				let grade2 = cards[i + 1];
				let grade3 = cards[i + 2];
				let grade4 = cards[i + 3];
				if (grade2 == grade1 && grade3 == grade1 && grade4 == grade1) {
					flag = true;
				}
			}
		}
		return flag;
	}

	/**
	 * 判断牌里面全是对子
	 */
	public static IsAllDouble(cards: Array<number>): boolean {
		for (let i = 0; i < cards.length % 2; i += 2) {
			if (cards[i] != cards[i + 1]) {
				return false;
			}
		}
		return true;
	}

	/**
	 * 判断牌里面是否是拥有4张牌
	 */
	public static HaveFour(cards: Array<number>): boolean {

		for (let i = 0; i < cards.length; i++) {
			let tempInt = 0;
			for (let j = 0; j < cards.length; j++) {

				if (cards[i] == cards[j]) {
					tempInt++;
				}
			}
			if (tempInt == 4) {
				return true;
			}
		}
		return false;
	}

	/**
	 * 判断是否符合出牌规则
	 */
	public static PopEnable(cards: Array<number>): boolean {
		let type: DDZ_POKER_TYPE = DDZ_POKER_TYPE.DDZ_PASS;
		let isRule = false;
		switch (cards.length) {
			case 1:
				isRule = true;
				type = DDZ_POKER_TYPE.SINGLE;
				break;
			case 2:
				if (this.IsDouble(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.TWIN;
				}
				else if (this.IsJokerBoom(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.KING_BOMB;
				}
				break;
			case 3:
				if (this.IsOnlyThree(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.TRIPLE;
				}
				break;
			case 4:
				if (this.IsBoom(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.FOUR_BOMB;
				}
				else if (this.IsThreeAndOne(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.TRIPLE_WITH_SINGLE;
				}

				break;
			case 5:
				if (this.IsStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
				}
				else if (this.IsThreeAndTwo(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.TRIPLE_WITH_TWIN;
				}
				break;
			case 6:
				if (this.IsStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
				}
				else if (this.IsTripleStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.PLANE_PURE;
				}
				else if (this.IsDoubleStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
				}
				else if (this.isSiDaiEr(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.FOUR_WITH_SINGLE;   //四带二  
				}
				break;
			case 7:
				if (this.IsStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
				}
				break;
			case 8:
				if (this.IsStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
				}
				else if (this.IsDoubleStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
				}
				else if (this.isPlaneWithSingle(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.PLANE_WITH_SINGLE;   //飞机带单  
				}
				break;
			case 9:
				if (this.IsStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
				}
				else if (this.IsTripleStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.PLANE_PURE;
				}
				break;
			case 10:
				if (this.IsStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
				}
				else if (this.IsDoubleStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
				}
				else if (this.isPlaneWithTwin(cards))           //飞机带对  
				{
					isRule = true;
					type = DDZ_POKER_TYPE.PLANE_WITH_TWIN;
				}
				break;

			case 11:
				if (this.IsStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
				}
				break;
			case 12:
				if (this.IsStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_SINGLE;
				}
				else if (this.IsDoubleStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
				}
				else if (this.isPlaneWithSingle(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.PLANE_WITH_SINGLE;   //飞机带单  
				}
				else if (this.IsTripleStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.PLANE_PURE;
				}
				break;
			case 13:
				break;
			case 14:
				if (this.IsDoubleStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
				}
				break;
			case 15:
				if (this.IsTripleStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.PLANE_PURE;
				}
				else if (this.isPlaneWithTwin(cards))           //飞机带对  
				{
					isRule = true;
					type = DDZ_POKER_TYPE.PLANE_WITH_TWIN;
				}
				break;
			case 16:
				if (this.IsDoubleStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
				}
				else if (this.isPlaneWithSingle(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.PLANE_WITH_SINGLE;   //飞机带单  
				}
				break;
			case 17:
				break;
			case 18:
				if (this.IsDoubleStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
				}
				else if (this.IsTripleStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.PLANE_PURE;
				}
				break;
			case 19:
				break;

			case 20:
				if (this.IsDoubleStraight(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.STRAIGHT_TWIN;
				}
				else if (this.isPlaneWithSingle(cards)) {
					isRule = true;
					type = DDZ_POKER_TYPE.PLANE_WITH_SINGLE;   //飞机带单  
				}
				else if (this.isPlaneWithTwin(cards))           //飞机带对  
				{
					isRule = true;
					type = DDZ_POKER_TYPE.PLANE_WITH_TWIN;
				}
				break;
			default:
				break;
		}

		return isRule;
	}

	/**
	 * 获取牌型
	 */
	public static GetCardType(cards: Array<number>): DDZ_POKER_TYPE {

		if (this.IsSingle(cards))  //单个
			return DDZ_POKER_TYPE.SINGLE;
		if (this.IsDouble(cards))  //对子
			return DDZ_POKER_TYPE.TWIN;
		if (this.IsTripleStraight(cards))  //飞机不带
			return DDZ_POKER_TYPE.PLANE_PURE;
		if (this.isPlaneWithTwin(cards))  //飞机带2
			return DDZ_POKER_TYPE.PLANE_WITH_TWIN;
		if (this.isSiDaiEr(cards)) //四带二
			return DDZ_POKER_TYPE.FOUR_WITH_SINGLE;
		if (this.IsThreeAndOne(cards)) //三单一
			return DDZ_POKER_TYPE.TRIPLE_WITH_SINGLE;
		if (this.IsThreeAndTwo(cards))  //三带二
			return DDZ_POKER_TYPE.TRIPLE_WITH_TWIN;
		if (this.IsBoom(cards))  //炸弹
			return DDZ_POKER_TYPE.FOUR_BOMB;
		if (this.IsJokerBoom(cards))  //王炸
			return DDZ_POKER_TYPE.KING_BOMB;

		return DDZ_POKER_TYPE.DDZ_PASS;  //不符合规则


	}
}
enum DDZ_POKER_TYPE {
	/**
	 * 不符合规则
	 */
	DDZ_PASS = 0,    //
	/**
	 * 单张
	 */
	SINGLE = 1,//
	/**
	 * 对子
	 */
	TWIN = 2,
	/**
	 * 三张
	 */
	TRIPLE = 3,
	/**
	 * 三带单
	 */
	TRIPLE_WITH_SINGLE = 4,
	/**
	 * 三带对
	 */
	TRIPLE_WITH_TWIN = 5,
	/**
	 * 单顺
	 */
	STRAIGHT_SINGLE = 6,
	/**
	 * 双顺
	 */
	STRAIGHT_TWIN = 7,
	/**
	 * 飞机
	 */
	PLANE_PURE = 8,
	/**
	 * 飞机带单
	 */
	PLANE_WITH_SINGLE = 9,
	/**
	 * 飞机带双1
	 */
	PLANE_WITH_TWIN = 10,
	/**
	 * 四带单
	 */
	FOUR_WITH_SINGLE = 11,
	/**
	 * 四带对
	 */
	FOUR_WITH_TWIN = 12,
	/**
	 * 炸弹
	 */
	FOUR_BOMB = 13,
	/**
	 * 王炸
	 */
	KING_BOMB = 14,
	/**
	 * 默认没有出牌
	 */
	NONE = 15
}