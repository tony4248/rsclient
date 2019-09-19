//服务器发送回的响应或命令
class EventRes{
    //响应的Id.和请求Id应该一致
    public id:number; 
    //服务器发送的类型
    //客户端需要有type来区分不同类型的游戏
    public type:number;
    //请求处理的返回状态
    public status:boolean;
    //请求的参数
    public args:any;

    //构造函数
    constructor(id:number, type:number, status:boolean, args:any) {
        this.id = id;
        this.type = type;
        this.status = status;
        this.args = args;
    }

    public getId():number
    {
        return this.id;
    }

    public getType():number
    {
        return this.type;
    }

    public getStatus():boolean{
        return this.status;
    }

    public getArgs():any{
        return this.args;
    }

    public getContent():string{
        return this.args["content"];
    }

    public static decode(evtRes:string):EventRes
    {
        /* 转成plain object */
        var obj:EventRes = JSON.parse(evtRes);
        /* 转成最终object */
        return new EventRes(obj.id, obj.type, obj.status, obj.args);
    }

}