//发送给服务端的请求
class EventReq{
    //请求Id
    public id:number; 
    //请求的类型
    public type:number;
    //请求的参数
    public args:any;

    //构造函数
    constructor(type:number, args:any) {
        this.id = TsUtils.UUID();
        this.type = type;
        this.args = args;
    }

    public getId():number{
        return this.id;
    }

    public static encode(evtReq:EventReq):string
    {
        return JSON.stringify(evtReq);
    }
}