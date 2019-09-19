/**
  * 定时器统一管理
  * by fany
  * (c) copyright false,0,0,2014 - 2035
  * All Rights Reserved. 
  * 定时器统一管理
  */
module TimerManage {
    export var _timer: egret.Timer;
    export var secondHash: Array<any>;//专门处理1秒的
    export var notSecondHash: Array<any>;//专门处理非1秒的
    export var timerHash: Array<any>;//保存非1秒的计时器
		
    export function init() {
        this.secondHash = [];
        this.notSecondHash = [];
        this.timerHash = [];
    }

    export function timerHandle(evt: egret.TimerEvent): void {
        for(var tt in this.secondHash) {
            var obj = this.secondHash[tt];
            if(obj.isStop == false) {
                this.objTickHandle(obj);
            }
        }
    }
    /**
     * 计时器执行
   */		
    export function objTickHandle(item): void {
        if(item.onTimer != null) {
            var onTimer: Function = item.onTimer;
            onTimer();
        }
        if(item.repeatCount >= 0) {//是否有次数限制
            item.repeatCount--;
        }
        if(item.repeatCount == 0) {//
            if(item.onComplete != null) {
                var onComplete: Function = item.onComplete;
                onComplete();
            }
            this.secondHash[item.key]=null;
            delete this.secondHash[item.key];
        }
    }
		
    /**
     * 只执行1000毫秒的计时器
     * @param object 类
     * @param delay 间隔毫秒
     * @param onTimer 计时器执行函数
     * @param onComplete 计时器完成函数
     * @param repeatCount 计时器执行次数， 默认值的  0  代表不限次数
     * @param flag 标识，只用于一个类中要建立两个计器时。
     * 
     */
    export function addTimer(object,delay: number,onTimer: Function,onComplete: Function = null,repeatCount: number = 0,flag: string = ""): void {
        if(repeatCount == 0) {
            repeatCount = -1;
        }
        if(delay == 1000) {
            var className: string = egret.getQualifiedClassName(object);
            var key: string = className + flag;
            var item = { key: key,object: object,isStop: false,onTimer: onTimer,onComplete: onComplete,repeatCount: repeatCount,flag: flag };
            secondHash[key] = item;
            if(this._timer == null) {
                this.secondHash = [];
                this.notSecondHash = [];
                this.timerHash = [];
                this._timer = new egret.Timer(1000);
                this._timer.addEventListener(egret.TimerEvent.TIMER,timerHandle);
                this._timer.start();
            }
        } else {
            this.addDifferentTimer(object,delay,onTimer,onComplete,repeatCount,flag);
        }
    }
		
    /**
     * 执行 非 1000毫秒的计时器
     * @param object 类
     * @param onTimer 计时器执行函数
     * @param onComplete 计时器完成函数
     * @param repeatCount 计时器执行次数， 默认值的  -1  代表不限次数
     * @param flag 标识，只用于一个类中要建立两个计器时。
     * 
     */
    export function addDifferentTimer(object,delay: number,onTimer: Function,onComplete: Function = null,repeatCount: number = -1,flag: string = ""): void {
        var sameDelay: boolean = false;
        /*先检查是否已经建立了这样的计时器*/
        for(var tt in this.notSecondHash) {
            var obj = this.notSecondHash[tt];
            if(obj.delay == delay) {
                sameDelay = true;
                break;
            }
        }
        /*如果没有，则建立*/
        if(!sameDelay) {
            var timer: egret.Timer = new egret.Timer(delay);
            timer.addEventListener(egret.TimerEvent.TIMER,this.notSecondTimer,this);
            timer.start();
            TimerManage.timerHash[delay]=timer;
        }
        var className: string = egret.getQualifiedClassName(object);
        var key: string = className + flag;
        var item = { key: key,delay: delay,isStop: false,object: object,onTimer: onTimer,onComplete: onComplete,repeatCount: repeatCount,flag: flag };
        this.notSecondHash[key]=item;
    }

    export function notSecondTimer(event: egret.TimerEvent): void {
        var timer: egret.Timer = <egret.Timer>event.currentTarget;
        var delay: Number = timer.delay;
        for (var tt in this.notSecondHash){
            var obj = this.notSecondHash[tt];
            if(obj.delay == delay && obj.isStop == false) {//如果计时器是停止状态，则不执行
                this.notSecondTickHandle(obj);
            }
        }
    }
		
    /**
     * 计时器执行
   */		
    export function notSecondTickHandle(item): void {
        var onTimer: Function = item.onTimer;
        if(onTimer != null) {
            onTimer();
        }
        if(item.repeatCount >= 0) {//是否有次数限制
            item.repeatCount--;
        }
        if(item.repeatCount == 0) {//
            if(item.onComplete != null) {
                var onComplete: Function = item.onComplete;
                onComplete();
            }
            this.notSecondTimerComplete(item);
        }
    }

    export function notSecondTimerComplete(item): void {
        if(item == null) {
            return;
        }
        this.notSecondHash[item.key]=null;
        delete this.notSecondHash[item.key];
        for(var tt in this.notSecondHash) {
            var obj = this.notSecondHash[tt];
            if(obj.delay == item.delay) {
                return;
            }
        }
        var timer: egret.Timer = this.timerHash[item.delay];
        if(timer) {
            timer.removeEventListener(egret.TimerEvent.TIMER,notSecondTimer,this);
            timerHash[item.delay];
            delete timerHash[item.delay];
        }
    }
    /**
     * 删除要执行的对象 
     * @param object 
     * @param flag
     
     */		
    export function removeTimer(object,flag: string = ""): void {
        var className: string = egret.getQualifiedClassName(object);
        var key: string = className + flag;
        this.notSecondTimerComplete(this.notSecondHash[key]);
        this.secondHash[key]=null;
        this.notSecondHash[key] = null;
        delete this.secondHash[key];
        delete this.notSecondHash[key];
    }
    /**
     * 停止计时器
     * @param object
     * @param flag
     
     */		
    export function stopTimer(object,flag: string = ""): void {
        var className: string = egret.getQualifiedClassName(object);
        var key: string = className + flag;
        var item = this.secondHash[key];
        if(item == null) {
            item = this.notSecondHash[key];
        }
        if(item) {
            item.isStop = true;
        }
    }
    /**
     * 启动计时器
     * @param object
     * @param flag
     
     */		
    export function startTimer(object,flag: string = ""): void {
        var className: String = egret.getQualifiedClassName(object);
        var key: string = className + flag;
        var item = this.secondHash[key];
        if(item == null) {
            item = this.notSecondHash[key];
        }
        if(item) {
            item.isStop = false;
        }
    }
}


