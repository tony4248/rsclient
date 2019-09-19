class TsUtils {
	public static counter = 1; //请求开始的编号从1开始,因为服务端返回默认的是编号是0
	public constructor() {
	}
	/**
	 * 删除数组中的某个元素
	 */
	public static Remove<T>(arr: Array<T>, t: T): Array<T> {
		let index = -1;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == t) index = i;

		}
		arr.splice(index, 1)

		return arr;
	}

	public static UUID():number{
		return TsUtils.counter++;
	}

	//**********************************************************************
	// function waitfor - Wait until a condition is met
	//        
	// Needed parameters:
	//    testFunc: function that returns a value
	//    expectedValue: the value of the test function we are waiting for
	//    msec: delay between the calls to test
	//    callback: function to execute when the condition is met
	// Parameters for debugging:
	//    count: used to count the loops
	//    source: a string to specify an ID, a message, etc
	//**********************************************************************
	public static waitfor(testFunc:any, expectedValue:any, interval:number, start:number, timeout:number, succCallback:any, errCallBack:any) {
		let current = new Date().getMilliseconds();
		// Check if condition met. If not, re-check later (msec).
		while (testFunc() !== expectedValue) {
			//console.log("testFunc:" + testFunc());
			//if timeout, quit
			if(current - start >= timeout) 
			{ 
				errCallBack();
				return;
			}
			setTimeout(function() {
				TsUtils.waitfor(testFunc, expectedValue, interval, start, timeout, succCallback, errCallBack);
			}, interval);
			return;
		}
		// Condition finally met. callback() can be executed.
		//console.log(testFunc() + ', expected: ' + expectedValue);
		succCallback();
	}
}