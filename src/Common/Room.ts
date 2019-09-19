/**
 * 房间
 */
class Room{
    public id:String; //房间号
	public game:String; //游戏名称
	public name:String; //房间名称
	public tier:String; //房间级别
	public bottomScore:number; //底分
	public type:String; //房间的类型
	public status:String; //房间的状态
	public owner:String; //房间的创建者
	public capacity:number; //房间的用户的容量
	public rounds:number; //游戏的局数
    public table:Table; //桌子
     //额外的属性
    public extraAttribute:any;
}