
class PlayerDataModule{

	public Init() {
		NetMgr.GetInstance().addEventListener("SyncPlayerInfo", this.CBSyncPlayerInfo, this);
	 }
    
	public CBSyncPlayerInfo( event: NetEvent ) {

        //let pb_playerinfo: PB.MsgPlayerInfo = event.msg.rprotobuf(PB.MsgPlayerInfo);


		console.log("SyncPlayerInfo");
        //console.log(pb_playerinfo);


        /// 请求创建房间
        //let pb_cpr = PB.MsgCreatePrivateRoom.create();
        //pb_cpr.roomType = "RM_DDZ";
        //NetMgr.GetInstance().SendPB( "CPRM", PB.MsgCreatePrivateRoom, pb_cpr );
        
	}

    

    


    public static GetInstance(): PlayerDataModule {
        if (this.__self == null) {
            this.__self = new PlayerDataModule();
        }
        return this.__self;
    }

	private constructor() {

     }
    private static  __self: PlayerDataModule;
}


