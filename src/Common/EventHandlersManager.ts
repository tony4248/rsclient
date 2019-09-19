//事件处理的管理类
class EventHandlersManager{
    public static evtHandlerMgr: EventHandlersManager
    //获取单例
	public static getInstance(): EventHandlersManager {
        if (this.evtHandlerMgr == null) {
            this.evtHandlerMgr = new EventHandlersManager();
        }
        return this.evtHandlerMgr;
    }
    private constructor() {}

    //注册网络事件的监听
    public registerEventHandlers():void
	{
        Network.getInstance().bind(String(EventType.ROOM_JOIN_OTHERS), this.roomJoinOthersEventHandler, this);
        Network.getInstance().bind(String(EventType.TABLE_IS_READY), this.tableIsReadyEventHandler, this);
        Network.getInstance().bind(String(EventType.GAME_DDZ), this.ddzEventHandler, this);
        Network.getInstance().bind(String(EventType.ROOM_LEAVE_OTHERS), this.roomLeaveOthersEventHandler, this);
    }

    //处理ddz的事件
    private ddzEventHandler(args:any):void{
        console.log("ddz Event here！" + args);
        DdzGameLogic.getInstance().processCmd(args);
    }

    //处理其他用户加入房间的事件
    private roomJoinOthersEventHandler(args:any):void{
        let room = RoomService.getInstance().getRoom();
        switch (room.type) {
            case RoomType.DDZ:
                console.log("斗地主.");
                DdzGameLogic.getInstance().roomJoinOthers(args);
                break;
            default:
                console.log(`房间类型:${room.type}不存在.`);
                break;
        }
    }
     //处理座位已满的事件
    private tableIsReadyEventHandler(args:any):void{
        //table Is Ready事件可能先于Join Room Success事件收到,因此需要等待room对象的创建
        TsUtils.waitfor(
            /** test function */
            () => {return (null != RoomService.getInstance().getRoom())}, 
            true, 100, new Date().getMilliseconds(), 5 * 1000, 
             /** success call back function */
            () =>{
                this.tableIsReadyEventProc(args);
                return;
            }, 
            /** error call back function */
            null);
    }

    //处理座位已满的事件
    private tableIsReadyEventProc(args:any){
        let room = RoomService.getInstance().getRoom();
        switch (room.type) {
            case RoomType.DDZ:
                console.log("斗地主.");
                DdzGameLogic.getInstance().tableIsReady(args);
                break;
            default:
                console.log(`房间类型:${room.type}不存在.`);
                break;
        }
    }

     //处理其他用户离开房间的事件
    private roomLeaveOthersEventHandler(args:any):void{
        let room = RoomService.getInstance().getRoom();
        let roomLeaveOthersRes:RoomLeaveRes = args;
        if(room.id == roomLeaveOthersRes.roomId){
            room.table.removeUserById(roomLeaveOthersRes.userId);
        }
    }

}