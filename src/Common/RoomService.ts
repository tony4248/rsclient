//存放和管理当前的房间
class RoomService{
    static roomSvc: RoomService;
    private room: Room;
    //单例
    public static getInstance(): RoomService {
        if (this.roomSvc == null) {
            this.roomSvc = new RoomService();

        }
        return this.roomSvc;
    }

    //设置房间
    public setRoom(room: Room):void{
        this.room = room;
    }

    //取得房间
    public getRoom():Room{
        return this.room;
    }

    //取得房间的额外属性
    public getRoomExtraAttribute():any{
        return this.room.extraAttribute;
    }

    //设置用户的额外属性
    public setUserExtraAttribute(obj:any){
        this.room.extraAttribute = obj
    }
}