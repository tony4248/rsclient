class EventType{
    public static ANY:number = 1000; 
    public static CONNECT:number = 1010; //连接
	public static CONNECT_FAILED:number = 1011; //连接失败
	public static CONNECT_SUCCESS:number = 1012; //连接成功
	public static DISCONNECT:number = 1013;
	public static RECONNECT:number = 1014; //重连
	public static RECONNEC_FAILEDT:number = 1015; //重连失败
	public static RECONNECT_SUCCESS:number = 1016; //重连成功
	public static LOG_IN:number = 1020; //登录
	public static LOG_IN_SUCCESS:number = 1021; //登录成功
	public static LOG_IN_FAILURE:number = 1022; //登录失败
	public static LOG_OUT:number = 1023; //登出
	public static LOG_OUT_SUCCESS:number = 1024; //登出成功
	public static SESSION_IDLE:number = 1025; //session idle 事件
	public static SESSION_TIMEOUT:number = 1026; //session timeout 事件
	
	public static GAME_LIST:number = 1030; //获取游戏列表
	public static ROOM_LIST:number = 1040; //获取房间列表
	public static ROOM_CREATE:number = 1050; //创建房间
	public static ROOM_CREATE_SUCCESS:number = 1051; //创建房间成功
	public static ROOM_CREATE_FAILED:number = 1052; //创建房间失败
	public static ROOM_JOIN:number = 1060; //加入房间
	public static ROOM_JOIN_OTHERS:number = 1061; //加入房间
	public static ROOM_JOIN_SUCCESS:number = 1062; //加入房间成功
	public static ROOM_JOIN_FAILED:number = 1063; //加入房间失败
	public static TABLE_IS_READY:number = 1065; //桌子已经准备好了,人数够了,可以提示用户准备了
	public static ROOM_LEAVE:number = 1070; //退出房间
	public static ROOM_LEAVE_OTHERS:number = 1071; //有人退出房间,用于通知同房间内的其他客户端
	public static ROOM_CLOSE:number = 1080; //关闭房间
	
	public static GAME_DDZ:number = 2000; //斗地主相关消息
	public static GAME_DDZ_TIMED_TASK:number = 2010; //斗地主相关消息
		
	public static USER_MESSAGE:number = 9970; //用户信息
	public static ROOM_MESSAGE:number = 9980; //房间消息
	public static SYSTEM_MESSAGE:number = 9990; //系统消息
	public static EXCEPTION:number = 9999; //异常

}