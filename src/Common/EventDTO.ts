class RoomCreateReq
{
    public type:String;
    public tier:String;
}

class RoomCreateRes
{
    public room:Room;
    public user:User;
}


class RoomJoinReq
{
    public id:String;
}

class RoomJoinRes
{
    public room:Room;
    public users:Array<User>;
}

class RoomJoinOthersRes
{
    public user:User;
}

class RoomLeaveReq
{
    public id:String;
    public content:String;
}


class RoomLeaveRes
{
    public userId:String;
    public roomId:String;
    public content:String;
}

class RoomCloseReq
{
    public id:String;
}
