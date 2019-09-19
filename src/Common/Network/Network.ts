class Network {
    private socket:egret.WebSocket;
    public static net: Network
    private static resMap:Dictionary<any>;
    private serverUrl:string;
    private timeoutInSec:number;
    private handler:Object = {};
    private cbConnect:Array<any> = [] ;
    private cbClose:Array<any> = [];
    private cbError:Array<any> = [];
    
	public constructor() {
        //创建 WebSocket 对象
        this.socket = new egret.WebSocket();
        //设置放置response的map
        Network.resMap = new Dictionary<any>();
        //请求的超时时间
        this.timeoutInSec = 10;
        //设置数据格式为字符串，默认为字符串
        this.socket.type = egret.WebSocket.TYPE_STRING;
        //添加收到数据侦听，收到数据会调用此方法
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onSocketData,this);
        //添加链接打开侦听，连接成功会调用此方法
        this.socket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.socket.addEventListener(egret.Event.CLOSE,this.onSocketClose,this);
        //添加异常侦听，出现异常会调用此方法
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onSocketError,this);
	}

    public static getInstance(): Network {
        if (this.net == null) {
            this.net = new Network();
        }
        return this.net;
    }

	public setConnectHandler(_func:Function, _obj:Object){
	    this.cbConnect = [_obj, _func];
	}
	
	public setCloseHandler(_func:Function, _obj:Object){
	    this.cbClose = [_obj, _func];
	}
	
    public setErrorHandler(_func: Function,_obj: Object) {
        this.cbError = [_obj,_func];
    }

	public connect(serverUrl: string): void {
        if (this.socket.connected) return;
        this.socket.connectByUrl(serverUrl);
        this.serverUrl = serverUrl;
    }
	
	public reconnect(){
        this.connect(this.serverUrl);
	}
	
	public bind(name:string, func:Function, obj:Object){
	    this.handler[name] = [obj, func];
	}
	
    /**
     * 发送请求不等的结果
     */
    public send(evtReq:EventReq)
	{
        console.log("send -->", EventReq.encode(evtReq))
        this.socket.writeUTF(EventReq.encode(evtReq));
	}
    /**
     * 检查是否收到具有某一请求ID的结果
     */
    private isResReceived(evtId:number):boolean{
        let isReceived = (Network.resMap.ContainsKey(String(evtId)));
        return isReceived;
    }

    /**
     *  发送请求,然后开始等待,在结果Map中按照请求的ID查找结果,如果结果为成功则调用成功的函数,
     *  如果失败在调用失败的函数。
    */
    public request(evtReq:EventReq, onRespSuccess:any, onRespError:any):void
	{
        console.log("send -->", EventReq.encode(evtReq))
        this.socket.writeUTF(EventReq.encode(evtReq));
		// Check if condition met. If not, re-check later (msec).
        TsUtils.waitfor(
            /** test function */
            () => {return this.isResReceived(evtReq.getId())}, 
            true, 100, new Date().getMilliseconds(), this.timeoutInSec * 1000, 
             /** success call back function */
            () =>{
                let evtRes:EventRes = Network.resMap.Item(String(evtReq.getId()));
                if(evtRes.getStatus()){ onRespSuccess(evtRes); }
                else{ onRespError(evtRes); }
                //delete the key
                Network.resMap.Remove(String(evtReq.getId()));
                return;
            }, 
            /** error call back function */
            () =>{
                let errorContent = "请求：" + evtReq.getId() + "超时.";
                let args = {"content": errorContent};
                let evtRes:EventRes = new EventRes(evtReq.getId(), null, false, args);
                onRespError(evtRes);
        });
        return;
	}
	
	public isConnected(){
	    return this.socket.connected;
	}
	
    private onSocketOpen(): void {
        console.log("websocket connected");
        if(this.cbConnect.length > 0){
            var obj: Object = this.cbConnect[0];
            var func: Function = this.cbConnect[1];
            func.call(obj);
        }
    }

    private onSocketClose(): void {
        console.log("websocket closed");
        if(this.cbClose.length > 0) {
            var obj: Object = this.cbClose[0];
            var func: Function = this.cbClose[1];
            func.call(obj);
        }
    }

    private onSocketError(): void {
        console.log("websocket error");
        if(this.cbError.length > 0) {
            var obj: Object = this.cbError[0];
            var func: Function = this.cbError[1];
            func.call(obj);
        }
    }

    private onSocketData(e: egret.ProgressEvent): void {
        var bytes: string = this.socket.readUTF();
        console.log("recv -->", bytes);
        let evtRes: EventRes = EventRes.decode(bytes);
        //如果是请求的返回,则填充结果的缓存
        //{"id":1,"type":null,"status":true,"args":{"content":"申请成功/失败"}}
        if(0 != evtRes.getId()){
            Network.resMap.Add(String(evtRes.getId()), evtRes);
            return;
        }
        //服务器发送的命令,触发事件处理函数
        this.dispatch(evtRes);
    }

    private dispatch(evt: EventRes) {
        //data handler
        //{"id":0,"type":1080,"status":null,"args":{"cmd":"Game.Start.Req","id":"291608"}}
        var name:string = String(evt.getType());
        var cb:Array<any> = this.handler[name];
        if(cb){
            var obj:Object = cb[0];
            var func:Function = cb[1];
            func.call(obj, evt.getArgs());
        }else{
            console.log("not found handler --> " + name)
        }
    }
}
