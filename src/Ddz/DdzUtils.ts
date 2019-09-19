class DdzUtils {

	private dic = new Array();
	static ddz: DdzUtils;
	public static getInstance(): DdzUtils {
		if (this.ddz == null) {
			this.ddz = new DdzUtils();
		}
		return this.ddz;


	}
	public constructor() {

		//0 方块  1 梅花 2 红桃 3 黑桃 

		//     A
		this.dic[1] = ["0_0"];
		this.dic[2] = ["0_1"];
		this.dic[3] = ["0_2"];
		this.dic[4] = ["0_3"];
		//     2
		this.dic[5] = ["2_0"];
		this.dic[6] = ["2_1"];
		this.dic[7] = ["2_2"];
		this.dic[8] = ["2_3"];
		//     3
		this.dic[9] = ["3_0"];
		this.dic[10] = ["3_1"];
		this.dic[11] = ["3_2"];
		this.dic[12] = ["3_3"];
		//     4
		this.dic[13] = ["4_0"];
		this.dic[14] = ["4_1"];
		this.dic[15] = ["4_2"];
		this.dic[16] = ["4_3"];
		//     5
		this.dic[17] = ["5_0"];
		this.dic[18] = ["5_1"];
		this.dic[19] = ["5_2"];
		this.dic[20] = ["5_3"];
		//     6
		this.dic[21] = ["6_0"];
		this.dic[22] = ["6_1"];
		this.dic[23] = ["6_2"];
		this.dic[24] = ["6_3"];
		//     7
		this.dic[25] = ["7_0"];
		this.dic[26] = ["7_1"];
		this.dic[27] = ["7_2"];
		this.dic[28] = ["7_3"];
		//     8
		this.dic[29] = ["8_0"];
		this.dic[30] = ["8_1"];
		this.dic[31] = ["8_2"];
		this.dic[32] = ["8_3"];

		//     9
		this.dic[33] = ["9_0"];
		this.dic[34] = ["9_1"];
		this.dic[35] = ["9_2"];
		this.dic[36] = ["9_3"];

		//     10
		this.dic[37] = ["10_0"];
		this.dic[38] = ["10_1"];
		this.dic[39] = ["10_2"];
		this.dic[40] = ["10_3"];
		//     J
		this.dic[41] = ["11_0"];
		this.dic[42] = ["11_1"];
		this.dic[43] = ["11_2"];
		this.dic[44] = ["11_3"];
		//     Q
		this.dic[45] = ["12_0"];
		this.dic[46] = ["12_1"];
		this.dic[47] = ["12_2"];
		this.dic[48] = ["12_3"];
		//     K
		this.dic[49] = ["13_0"];
		this.dic[50] = ["13_1"];
		this.dic[51] = ["13_2"];
		this.dic[52] = ["13_3"];
		//大小王
		this.dic[53] = ["14_0"];
		this.dic[54] = ["14_1"];
	}

	public getStr(key: number): string {
		return this.dic[key];
	}

	/**
	 * 取得居中显示的x坐标的起点
	 */
	public getStartXPosOfCenterAlignment(parentW:number, objNumbs:number, pokerW:number, visibleW:number){
		let startX = Math.max(0, Math.round((parentW - objNumbs * visibleW - (pokerW - visibleW)) * 0.5));
		return startX;
	}

	/**
	 * 取得居右显示的x坐标的起点
	 */
	public getStartXPosOfRightAlignment(parentW:number, objNumbs:number, pokerW:number, visibleW:number){
		let startX = Math.max(0, Math.round((parentW - objNumbs * visibleW - (pokerW - visibleW)) - 10));
		return startX;
	}
}